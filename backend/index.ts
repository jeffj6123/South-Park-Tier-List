import express, { Request } from 'express';
import { env } from 'process';
import { DBService } from './dbService';
import bodyParser from 'body-parser';
import cors from 'cors';
import { authMiddleWare } from './auth';
import dotenv from "dotenv"

dotenv.config()
const db = new DBService({});
console.log(process.env.DATASTORE_EMULATOR_HOST)
const app = express();
const PORT = 4444 || env.port;

app.use(bodyParser.json()) // for parsing application/json
app.use(cors())

app.use((req,res,next) => {
    console.log(req.url)
    next();
})

app.get('/api/ranking/mine', authMiddleWare, async (req: express.Request, res: express.Response) => {
    const user = res.locals['auth'];
    try {
        const file = await db.getRankingByUser(user.sub);
        res.json(file);
    } catch (e) {
        const file = await db.getEmptyRanking("empty");
        res.json(file);
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

        const data = await db.updateRanking(user.sub,  req.body);
        console.log(data)
        console.log(data[0]['mutationResults'])
        res.sendStatus(200);
    } catch (e) {
        const data = await db.createRanking(user.sub,  req.body)
        console.log(data);
    }
    });

app.listen(PORT, () => {
    console.log(`[server]: Server is running at https://localhost:${PORT}`);
});


