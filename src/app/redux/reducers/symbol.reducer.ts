import { Symbols, InitialSymbolsState } from './../models/symols.model';
// import { Action } from '@ngrx/store';
import * as symbolsActions from '../actions/symbol.actions';
import { RRG_ACTION } from '../symbol/symbol.action';

export function symbolReducer(state: Symbols[] = InitialSymbolsState, action) {
  switch (action.type) {
    case symbolsActions.UPDATE_SYMBOLS:
        return [
          ...action.payload
        ];
    case symbolsActions.RM_SYMBOLS:
      return state.filter(f => f.symbol !== action.payload);
    default:
        return state;
    }
}
