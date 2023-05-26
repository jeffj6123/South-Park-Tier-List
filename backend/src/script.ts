import {  instances } from 'gstore-node';

const gstore = instances.get('unique-id');
const { Schema } = gstore;

export interface IScriptLine {
    character: string;
    line: string;
    lineNumber: number;
    episode: number;
}

const schema = new Schema<IScriptLine>({
    character: { type: String },
    line: {type: String},
    lineNumber: {type: Number},
    episode: {type: Number},
});

export default gstore.model('ScriptLine', schema);
