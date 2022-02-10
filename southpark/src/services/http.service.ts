import axios from 'axios';
import React from 'react';
import { data, episodes, IRankable, IRankResponse, parseUserRanks } from "../all_episodes";
import { characters} from "../all_characters";
import { Episode } from '../components/row';


export interface IRank {
    rank: string;
    id: string;
}

export interface IRankCollection {
    id: string;
    ranks: IRank[];
    type: string;
    user: string;
    rankedCount: string;
}

export class HttpService {
    private cachedCollections: Record<string, Record<string, IRankable[]>> = {};

    async saveTierList(type: string, changes: Record<string, IRankable[]>) {
        let data: IRank[] = [];
    
        Object.keys(changes).forEach(key => {
          data = data.concat(changes[key].map(ep => { return { rank: key, id: ep.id } }))
        })
    
        const token = localStorage.getItem('authToken') || "";
        return axios.put(`/api/ranking/${type}`, data, {headers: {'authorization': token}}).then(res => {
          console.log("saved")
        })
    }

    async loadTiers(type: string, items: IRankable[], id: string = "mine") {
        if(id in this.cachedCollections) {
            return this.cachedCollections[id];
        }

        let config = {};

        if(id === "mine") {
            const token = localStorage.getItem('authToken') || "";
            config = {headers: {'authorization': token}};
        }
    
        const res = await axios.get<IRankResponse>(`/api/ranking/${id === "mine" ? (type + "/"): ''}${id}`, config);

        const parsed = parseUserRanks(items, res.data, ['s','a','b','c','d','f']);

        this.cachedCollections[res.data.id] = parsed;

        return parsed;
      }

    async loadTiersList(orderByCount: boolean, descending: boolean, type?: string) {
        const res = await axios.get(`/api/ranking/list`, {params: {orderByCount, descending, type}});
        return res.data;
    }

    getTierList(): string[] {
        return  ['s', 'a', 'b', 'c', 'd', 'f', 'u'];
    }
} 


export const httpServiceContext = React.createContext<HttpService>(new HttpService());