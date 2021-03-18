import { SuccessAction, FailedAction } from '../actions/post.action';
import { LOAD } from '../actions/post.action';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';

import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class PostsEffect {
    post$ = createEffect(() => this.actions.pipe(
        ofType(LOAD),
        mergeMap(() => this.http.get<object>('https://jsonplaceholder.typicode.com/posts').pipe(
            map((data) => new SuccessAction(data)), catchError((err) => of(new FailedAction(err)))

        ))
    ))

    constructor(private http: HttpClient, private actions: Actions) {}

}