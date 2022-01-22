import { Gstore, instances } from 'gstore-node';

const gstore = instances.get('unique-id');
const { Schema } = gstore;

export interface IRank {
    id: string;
    rank: string;
}

export interface IRankCollection {
    user: number;
    ranks: IRank[];
}

const schema = new Schema<IRankCollection>({
    ranks: { type: Array },
    user: { type: String }
});

export default gstore.model('RankCollection', schema);
