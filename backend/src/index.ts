import express, { request, Request } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { authMiddleWare } from './auth';
import dotenv from "dotenv"
import { Datastore } from '@google-cloud/datastore';
import {Gstore, instances } from 'gstore-node';

if(!process.env.production) {
    dotenv.config()
}

const datastore = new Datastore();
const gstore = new Gstore();
gstore.connect(datastore);
instances.set('unique-id', gstore);

import { DBService } from './dbService';
import { verifyRankTypeOption } from './rankCollection';
import { ERROR_CODES, GstoreError } from 'gstore-node/lib/errors';
const db = new DBService(gstore);

const app = express();
const PORT = process.env.PORT || 4444;

app.use(bodyParser.json()) // for parsing application/json
app.use(cors())
// if(process.env.development) {
app.use((req,res,next) => {
    console.log(req.url)
    next();
})    
// }

// app.use(express.static('static'))

app.get('/api/ranking/list', async (req: express.Request, res: express.Response) => {
    const results = await db.listEpisodeRankings();
    res.json(results);
});

app.get('/api/ranking/:type/mine', authMiddleWare, async (req: express.Request, res: express.Response) => {
    const user = res.locals['auth'];

    const { type } = req.params;

    if(!verifyRankTypeOption(type)) {
        res.sendStatus(400);
    }

    try {
        const file = await db.getRankingByUser(user.sub, type);
        res.json(file.entityData);
    } catch (e) {
        console.log(e)
        res.json({
            ranks: [],
            user: user.sub
        });
    }
});

app.get('/api/ranking/:id', async (req: express.Request, res: express.Response) => {
    const { id } = req.params;

    if (!id) {
        res.sendStatus(404)
    } else {
        try {
            const entity = await db.getRanking(+id);
            res.json(entity.entityData)
        } catch (e) {
            if (e instanceof GstoreError) {
                if (e.code === ERROR_CODES.ERR_ENTITY_NOT_FOUND) {
                    res.sendStatus(404);
                } else {
                    res.sendStatus(500);
                }
            } else {
                res.sendStatus(500);
            }
        }
    }
});



app.put('/api/ranking/:type', authMiddleWare, async (req: Request, res: express.Response) => {
    const { type } = req.params;
    
    if(!verifyRankTypeOption(type)) {
        res.sendStatus(400);
    }
    
    const user = res.locals['auth'];

    try {
        const data = await db.updateRankingByUser(user.sub, type, req.body);
        console.log(data.id);

        res.sendStatus(200);
    } catch (e: any) {
        if(e instanceof GstoreError) {
            if(e.code === ERROR_CODES.ERR_ENTITY_NOT_FOUND) {
                const data = await db.createRanking(user.sub,  req.body, type)
                res.sendStatus(200)
            }
        }else{
            console.error(e)            
            res.sendStatus(500);
        }
    }
});

app.get('/*',(req: Request, res: express.Response) => {
    console.warn("catch all: " + req.url)

    try {
        res.sendFile('static/index.html'); 
    }catch(e) {
        res.sendStatus(404)
    }
});

app.listen(PORT, () => {
    console.log(`[server]: Server is running at https://localhost:${PORT}`);
});


