import express, { Request } from 'express';
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

app.get('/api/ranking/mine', authMiddleWare, async (req: express.Request, res: express.Response) => {
    const user = res.locals['auth'];
    try {
        const file = await db.getRankingByUser(user.sub);
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
        const entity = await db.getRanking(+id);
        res.json(entity.entityData)
    }
});



app.put('/api/ranking', authMiddleWare, async (req: Request, res: express.Response) => {
    const { id } = req.params;

    const user = res.locals['auth'];

    try {
        const ranking = await db.getRankingByUser(user.sub);
        if(ranking.user.toString() !== user.sub.toString()) {
            res.sendStatus(403)
            return;
        }

        ranking.ranks = req.body
        await ranking.save();

        // const data = await db.updateRanking(user.sub,  req.body);
        res.sendStatus(200);
    } catch (e) {
        console.log(e);
        const data = await db.createRanking(user.sub,  req.body)
        res.sendStatus(e);
    }
    });

app.get('/*',(req: Request, res: express.Response) => {
    console.log(req.url)

    try {
        res.sendFile('static/index.html'); 
    }catch(e) {
        res.sendStatus(404)
    }
});

app.listen(PORT, () => {
    console.log(`[server]: Server is running at https://localhost:${PORT}`);
});


