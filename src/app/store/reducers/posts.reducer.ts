
import { CustomAction } from '../store';
import { SUCCESS,FAILED } from '../actions/post.action';

export interface Post {
    userId: number,
    id: number,
    title: string,
    body:string

}

export function PostReducer(state :Post[],action :CustomAction){
    switch (action.type){
        case SUCCESS:
            return action.payload;
        case FAILED:
            console.log('error-------',action.payload);
            return state;

    }
}