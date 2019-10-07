import { Action } from '@ngrx/store';
import { symbolParams } from "./symbol";

export namespace RRG_ACTION {
  export const ADD_CHANGE = 'ADD_CHANGE';
  export const RM_CHANGE = 'RM_CHANGE';
}

export class ChangePeriod implements Action {
  readonly type = RRG_ACTION.ADD_CHANGE;
  constructor(public payload: symbolParams) { }
}

export class DeleteSymbol implements Action {
  readonly type = RRG_ACTION.RM_CHANGE;
  constructor(public payload: string) { }
}

export type SymbolReducer = ChangePeriod | DeleteSymbol;


