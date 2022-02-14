import axios from 'axios';
import React from 'react';
import { data, episodes, IRankable, IRankResponse, parseUserRanks } from "../all_episodes";
import { NotificationService } from './notification.service';

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

export interface ListQueryParams { 
    orderByCount: boolean;
    descending: boolean;
    type?: string;
    // cursor?: string;
}

export interface IListQueryResults {

}

export function isEqualShallowObjects(obj1: Object, obj2: Object) {
    const obj1Keys = Object.keys(obj1);
    const obj2Keys = Object.keys(obj2);
    if(obj1Keys.length !== obj2Keys.length) {
        return false;
    }else{
        return obj1Keys.every(key => obj1[key] === obj2[key])
    }
}

export class HttpService {
    constructor(private notificationService: NotificationService) {

    }
    private cachedCollections: Record<string, Record<string, IRankable[]>> = {};

    private previousPagesCache = [];
    private lastQueryParams;


    async saveTierList(type: string, changes: Record<string, IRankable[]>) {
        let data: IRank[] = [];
    
        Object.keys(changes).forEach(key => {
          data = data.concat(changes[key].map(ep => { return { rank: key, id: ep.id } }))
        })
    
        const token = localStorage.getItem('authToken') || "";
        return axios.put(`/api/ranking/${type}`, data, {headers: {'authorization': token}}).then(res => {
          console.log("saved")
        }).catch((e) => {
            this.notificationService.addNotification({data: {
                display: 'There was an error saving your tier list' 
            }})

            throw e;
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
        
        try {
            const res = await axios.get<IRankResponse>(`/api/ranking/${id === "mine" ? (type + "/"): ''}${id}`, config);
            const parsed = parseUserRanks(items, res.data, ['s','a','b','c','d','f']);

            this.cachedCollections[res.data.id] = parsed;
    
            return parsed;
        } catch(e) {
            this.notificationService.addNotification({data: {
                display: 'There was an error getting this tier list' 
            }})
            throw e;
        }

      }

    async getRandomTier() {
        try {
            throw new Error("test")
            const res = await axios.get<{key: string, type: string}>(`/api/ranking/random`);

            return res.data;
        } catch(e) {
            this.notificationService.addNotification({data: {
                display: 'There was an error getting a random tier list' 
            }})
            return Promise.reject(e);
        }
    }

    async loadTiersList(params: ListQueryParams, index: number) {
        let cursor = "";
        if(this.lastQueryParams && isEqualShallowObjects(this.lastQueryParams, params)) {
            if(index < this.previousPagesCache.length) {
                return Promise.resolve(this.previousPagesCache[index]);
            }else{
                cursor = this.previousPagesCache.at(-1).nextPageCursor;
            }
        }else{
            this.previousPagesCache = [];
        }

        this.lastQueryParams = params;

        const res = await axios.get(`/api/ranking/list`, {params: {...params, cursor}})

        this.previousPagesCache.push(res.data);

        return res.data;
    }

    getTierList(): string[] {
        return  ['s', 'a', 'b', 'c', 'd', 'f', 'u'];
    }
} 


export const httpServiceContext = React.createContext<HttpService>(new HttpService(null));