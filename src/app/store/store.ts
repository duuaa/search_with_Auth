import { ActionReducerMap } from '@ngrx/store';
import { Post ,PostReducer } from './reducers/posts.reducer';

export interface StoreInterface {
   posts: Post[]
}

 
export interface CustomAction {
    type: string,
    payload: any
}
export const reducers: ActionReducerMap<StoreInterface> = {
    posts: PostReducer
}