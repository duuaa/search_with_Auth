export const SUCCESS = '[Posts] success';
export const FAILED = '[Posts]  failed';
export const LOAD = '[Posts] load';

export class LoadPostsAction {
    type: string = LOAD;

}

export class SuccessAction {
    type: string = SUCCESS;
    payload: any;

    constructor(payload: any) {
        this.payload = payload;
    }

}

export class FailedAction {
    type: string = FAILED;
    payload: any;

    constructor(payload: any) {
        this.payload = payload;
    }

}