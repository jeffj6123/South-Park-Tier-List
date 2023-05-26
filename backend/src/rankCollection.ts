import {  instances } from 'gstore-node';

const gstore = instances.get('unique-id');
const { Schema } = gstore;

export type RankType = "characters" | "episodes";
export const RankTypeOptions: RankType[] = ["characters", "episodes"]

export const verifyRankTypeOption = (rankType: string) => {
    return RankTypeOptions.includes(rankType as RankType);
}

export interface IRank {
    id: string;
    rank: string;
}

export interface IRankCollection {
    user: number;
    ranks: IRank[];
    lastUpdated: Date;
    rankedCount: number;
    type: string;
    master?: boolean;
}

const schema = new Schema<IRankCollection>({
    ranks: { type: Array },
    user: { type: String },
    lastUpdated: {type: Date},
    rankedCount: {type: Number},
    type: {type: String},
    master: {type: Boolean }
});

export default gstore.model('RankCollection', schema);
