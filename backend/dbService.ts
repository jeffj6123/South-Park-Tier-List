import fs from 'fs/promises';
import { IRanking } from './interfaces';

export class DBService {
    constructor(config: {}) {

    }

    async getRanking(id: string): Promise<IRanking[]> {
        try {
            return await this.readObjectFromFile<IRanking[]>(`saves/${id}.json`);
        } catch(e) {
            return [];
        }
    }

    async updateRanking(id: string, ranks: IRanking[]) {
        return this.writeObjectToFile(`saves/${id}.json`, ranks);
    }

    private async writeObjectToFile(filename: string, object: any): Promise<any> {
        return fs.writeFile(filename, JSON.stringify(object));
    }

    private async readObjectFromFile<T>(filename: string): Promise<T> {
        return JSON.parse(await fs.readFile(filename, 'utf8')) as T;
    }
}