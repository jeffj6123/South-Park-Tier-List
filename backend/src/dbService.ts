import { IRanking } from './interfaces';
import {Gstore} from 'gstore-node';
import rankCollection, { IRank } from './rankCollection';

export class DBService {
    constructor(gstore: Gstore) { 
    }

    async getRanking(id: number) {
        return rankCollection.get(id);
    }

    async getRankingByUser(userId: number) {
        const queryResult = await rankCollection.findOne({'user' : userId});
        return queryResult;
    }

    async createRanking(user: number, ranks: IRank[]) {
        const rank = new rankCollection({
            user,
            ranks,
            lastUpdated: new Date(),
            rankedCount: ranks.filter(rank => rank.rank !== "u").length,
            type: 'episodes'
        })
        return rank.save();
    }

    async updateRanking(id: string, ranks: IRank[]) {
        await rankCollection.update(id, {ranks})
    }

    async listEpisodeRankings(orderBy: "count" | "latest") {
        const queryResult = await rankCollection.query().filter();
        return queryResult;
    }

}