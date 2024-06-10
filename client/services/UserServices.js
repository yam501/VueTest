import {$host} from "../http";

export const UserServices = {
    async getUser(){
        return new Promise(resolve => resolve($host.get('api/get')))
    },

    async changeUser(params){
        return new Promise(resolve => resolve($host.put('api/change',{params})))
    },

    async getPosition(){
        return new Promise(resolve => resolve($host.get('api/positions')))
    }
}