import { SymbolReducer , RRG_ACTION } from './symbol.action';
import { symbolParams } from './symbol';

const initialState: symbolParams[] = [];


export function symbolReducer(state: symbolParams[] = initialState, action: SymbolReducer) {
  switch (action.type) {
    case RRG_ACTION.ADD_CHANGE:
      return action.payload;
    case RRG_ACTION.RM_CHANGE:
      return state.filter(f => f.symbol !== action.payload);
    default:
      return state;
  }
}
