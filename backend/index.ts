import express, { Request } from 'express';
import { env } from 'process';
import { DBService } from './dbService';
import bodyParser from 'body-parser';

const db = new DBService({});

const app = express();
const PORT = 8000 || env.port;

app.use(bodyParser.json()) // for parsing application/json

app.get('/api/ranking/:id', async (req: express.Request, res: express.Response) => {
    const { id } = req.params;

    if(!id) {
        res.sendStatus(404)
    }else{
        res.json(await db.getRanking(id))
    }
});

app.put('/api/ranking/:id', async (req: Request, res: express.Response) => {
    const { id } = req.params;

    console.log(req.body)
    await db.updateRanking(id, req.body);

    res.send(200);
});

app.listen(PORT, () => {
    console.log(`[server]: Server is running at https://localhost:${PORT}`);
});