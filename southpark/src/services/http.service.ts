import axios from 'axios';
import React from 'react';
import { IRankResponse, parseUserRanks } from "../all_episodes";
import { Episode } from '../components/row';


export interface IRank {
    rank: string;
    id: string;
}

export interface IRankCollection {
    id: string;
    ranks: IRank[];
}

export class HttpService {
    private cachedCollections: Record<string, Record<string, Episode[]>> = {};

    constructor() {

    }

    async saveTierList(changes: Record<string, Episode[]>) {
        let data: IRank[] = [];
    
        Object.keys(changes).forEach(key => {
          data = data.concat(changes[key].map(ep => { return { rank: key, id: ep.id } }))
        })
    
        const token = localStorage.getItem('authToken') || "";
        return axios.put(`/api/ranking`, data, {headers: {'authorization': token}}).then(res => {
          console.log("saved")
        })
    }

    async loadTiers(id: string = "mine") {
        if(id in this.cachedCollections) {
            return this.cachedCollections[id];
        }

        const token = localStorage.getItem('authToken') || "";
    
        const res = await axios.get<IRankResponse>(`/api/ranking/${id}`, {headers: {'authorization': token}});

        const parsed = parseUserRanks(res.data, ['s','a','b','c','d','f']);

        this.cachedCollections[res.data.id] = parsed;

        return parsed;
      }

    getTierList(): string[] {
        return  ['s', 'a', 'b', 'c', 'd', 'f', 'u'];
    }
} 


export const httpServiceContext = React.createContext<HttpService>(new HttpService());