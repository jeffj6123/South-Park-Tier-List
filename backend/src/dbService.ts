import { IRanking } from './interfaces';
import {Gstore} from 'gstore-node';
import rankCollection, { IRank, IRankCollection, RankType } from './rankCollection';
import { Entity } from '@google-cloud/datastore';

export class DBService {
    constructor(gstore: Gstore) { 
    }

    async getRanking(id: number) {
        return rankCollection.get(id);
    }

    async getRankingByUser(userId: number, type: string) {
        console.log(type)
        const queryResult = await rankCollection.findOne({'user' : userId, type});
        return queryResult;
    }

    async createRanking(user: number, ranks: IRank[], type: string) {
        const rank = new rankCollection({
            user,
            ranks,
            lastUpdated: new Date(),
            rankedCount: this.getRankedCount(ranks),
            type
        })
        return rank.save();
    }

    async updateRankingByUser(userId: number, type: string, ranks: IRank[]) {
        const entity = await this.getRankingByUser(userId, type);

        entity.ranks = ranks;
        entity.lastUpdated = new Date();
        entity.rankedCount = this.getRankedCount(ranks);

        return entity.save();
    }

    private getRankedCount(ranks: IRank[]) {
        return ranks.filter(rank => rank.rank !== "u").length;
    }

    async listEpisodeRankings(orderBy: "count" | "latest" = "count") {
        const queryResult = await rankCollection.query();
        return queryResult.run();
    }

}