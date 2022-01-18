import express, { Request } from 'express';
import { env } from 'process';
import { DBService } from './dbService';
import bodyParser from 'body-parser';
import cors from 'cors';
import { authMiddleWare } from './auth';

const db = new DBService({});

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
        const file = await db.getRanking(user.sub);
        res.json(file);
    } catch (e) {
        const file = await db.getRanking("empty");
        res.json(file);
    }
});
app.get('/api/ranking/:id', async (req: express.Request, res: express.Response) => {
    const { id } = req.params;

    if (!id) {
        res.sendStatus(404)
    } else {
        res.json(await db.getRanking(id))
    }
});

app.put('/api/ranking', authMiddleWare, async (req: Request, res: express.Response) => {
    const { id } = req.params;

    const user = res.locals['auth'];

    try {
        await db.updateRanking(user.sub,  req.body);
        res.sendStatus(200);
    } catch (e) {
            res.sendStatus(500);
        }
    });

app.listen(PORT, () => {
    console.log(`[server]: Server is running at https://localhost:${PORT}`);
});