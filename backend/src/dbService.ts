import { IRanking } from './interfaces';
import  {Datastore } from '@google-cloud/datastore';
import {Gstore} from 'gstore-node';
import Model from 'gstore-node/lib/model';

export interface IRank {
    id: string;
    rank: string;
}

export interface IRankCollection {
    user: number;
    ranks: IRank[];
}

const model = (gstore: Gstore) => {

    const { Schema } = gstore;

    const schema = new Schema<IRankCollection>({
        ranks: {type: Array },
        user: {type: String}
      });

    return gstore.model('RankCollection', schema);
} 



export class DBService {
    schema: Model<IRankCollection>;
    public static readonly datastoreKey = 'Ranking'
    datastore: Datastore;

    constructor(gstore: Gstore) { 
        this.schema = model(gstore);
    }

    async getRanking(id: number) {
        return this.schema.get(id);
        // return (await this.datastore.get(this.datastore.key([DBService.datastoreKey,id])))[0]
    }

    async getRankingByUser(userId: number) {
        const queryResult = await this.schema.findOne({'user' : userId});
        // queryResult.
        console.log(queryResult)
        return queryResult;
    }

    async createRanking(user: number, ranks: IRank[]) {
        const rank = new this.schema({
            user,
            ranks
        })
        return rank.save();
    }

    async updateRanking(id: string, ranks: IRank[]) {
        await this.schema.update(id, {ranks})
    }

    // private async writeObjectToFile(filename: string, object: any): Promise<any> {
    //     return fs.writeFile(filename, JSON.stringify(object));
    // }

    // private async readObjectFromFile<T>(filename: string): Promise<T> {
    //     return JSON.parse(await fs.readFile(filename, 'utf8')) as T;
    // }

    // async getEmptyRanking(id: string): Promise<IRanking[]> {
    //     try {
    //         return await this.readObjectFromFile<IRanking[]>(`saves/${id}.json`);
    //     } catch(e) {
    //         return [];
    //     }
    // }
}