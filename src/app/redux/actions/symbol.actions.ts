import { Action } from '@ngrx/store';
import { Symbols } from '../models/symols.model';

export const UPDATE_SYMBOLS = 'UPDATE_SYMBOLS';
export const RM_SYMBOLS = 'RM_SYMBOLS';

export class RemoveSymbol implements Action {
    readonly type = RM_SYMBOLS;
    constructor(public payload: string) {}
}
export class UpdateSymbols implements Action {
    readonly type = UPDATE_SYMBOLS;
    constructor(public payload: Symbols) {}
}

export type symbolActions = UpdateSymbols | RemoveSymbol;
