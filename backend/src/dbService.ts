import { IRanking } from './interfaces';
import {Gstore} from 'gstore-node';
import rankCollection, { IRank, IRankCollection, RankType } from './rankCollection';
import { Entity } from '@google-cloud/datastore';

export interface ListQueryParams { 
    orderByCount: boolean;
    descending: boolean;
    type?: string;
    cursor?: string;
}

export class DBService {
    constructor(gstore: Gstore) { 
    }

    async getRanking(id: number) {
        return rankCollection.get(id);
    }

    async getRankingByUser(userId: number, type: string) {
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

    async listEpisodeRankings(options: ListQueryParams) {
       let queryResult = rankCollection.query().limit(1);
        if(options.orderByCount) {
           queryResult = queryResult.order("rankedCount", {descending: options.descending})
        }else{
           queryResult = queryResult.order("lastUpdated", {descending: options.descending})
        }

        if(options.type) {
            queryResult = queryResult.filter("type", options.type);
        }

        if(options.cursor) {
            queryResult = queryResult.start(options.cursor) as any;
        }

        return queryResult.run();
    }

    async getRandom() {
        let keysOnlyEntities = await rankCollection.query().select(["__key__", "type"]).limit(100).run();

        const key = keysOnlyEntities['entities'][Math.floor(Math.random() * keysOnlyEntities['entities'].length)];

        return {key: key.id, type: key.type};
    }

    async getMaster(type: string) {
        return await rankCollection.findOne({master: true, type});
    }


}