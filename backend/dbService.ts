import fs from 'fs/promises';
import { IRanking } from './interfaces';
import  {Datastore } from '@google-cloud/datastore';

export class DBService {
    public static readonly datastoreKey = 'Ranking'
    datastore: Datastore;

    constructor(config: {}) {
        this.datastore = new Datastore();

    }

    async getRanking(id: number): Promise<IRanking[]> {
        return (await this.datastore.get(this.datastore.key([DBService.datastoreKey,id])))[0]
    }

    async getRankingByUser(userId: number) {
        const query =  this.datastore.createQuery(DBService.datastoreKey).filter('user', userId).limit(1);
        const result = await this.datastore.runQuery(query);
        return result[0][0];
    }

    async createRanking(id: string, ranks: IRanking[]) {
        return this.datastore.save({
            key: this.datastore.key(DBService.datastoreKey),
            data: {
                user: id,
                ranks
            }
        })
    }

    async updateRanking(id: string, ranks: IRanking[]) {
        return this.datastore.save({
            key: this.datastore.key([DBService.datastoreKey,this.datastore.int(id)]),
            data: {
                ranks
            }
        })
    }

    private async writeObjectToFile(filename: string, object: any): Promise<any> {
        return fs.writeFile(filename, JSON.stringify(object));
    }

    private async readObjectFromFile<T>(filename: string): Promise<T> {
        return JSON.parse(await fs.readFile(filename, 'utf8')) as T;
    }

    async getEmptyRanking(id: string): Promise<IRanking[]> {
        try {
            return await this.readObjectFromFile<IRanking[]>(`saves/${id}.json`);
        } catch(e) {
            return [];
        }
    }
}