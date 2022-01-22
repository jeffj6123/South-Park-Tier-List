import express, { Request } from 'express';
import { DBService } from './dbService';
import bodyParser from 'body-parser';
import cors from 'cors';
import { authMiddleWare } from './auth';
import dotenv from "dotenv"
import { Datastore } from '@google-cloud/datastore';
import {Gstore} from 'gstore-node';

if(!process.env.production) {
    dotenv.config()
}

const datastore = new Datastore({
    projectId: 'my-google-project-id',
});
const gstore = new Gstore();
gstore.connect(datastore);

const db = new DBService(gstore);

const app = express();
const PORT = process.env.PORT || 4444;

app.use(bodyParser.json()) // for parsing application/json
app.use(cors())
app.use(express.static('static'))

if(process.env.development) {
    app.use((req,res,next) => {
        console.log(req.url)
        next();
    })    
}

app.get('/api/ranking/mine', authMiddleWare, async (req: express.Request, res: express.Response) => {
    const user = res.locals['auth'];
    try {
        const file = await db.getRankingByUser(user.sub);
        res.json(file.entityData);
    } catch (e) {
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
        res.json(await db.getRanking(+id))
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
        const data = await db.createRanking(user.sub,  req.body)
        console.log(data);
    }
    });

app.get('/*',(req: Request, res: express.Response) => {
    res.sendFile('static/index.html'); 
});

app.listen(PORT, () => {
    console.log(`[server]: Server is running at https://localhost:${PORT}`);
});


