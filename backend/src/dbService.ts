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

    async listEpisodeRankings(orderByCount: boolean, descending: boolean, type?: string) {
       let queryResult = rankCollection.query();
        if(orderByCount) {
           queryResult = queryResult.order("rankedCount", {descending: descending})
        }else{
           queryResult = queryResult.order("lastUpdated", {descending: descending})
        }

        if(type) {
            queryResult = queryResult.filter("type", type);
        }

        return queryResult.run();
    }

    async getRandom() {
        let keysOnlyEntities = await rankCollection.query().select("__key__").limit(100).run();

        const onlyKeys: string[] = keysOnlyEntities['entities'].map(key => key.id);

        const key = onlyKeys[Math.floor(Math.random() * onlyKeys.length)];

        return key;
    }

}