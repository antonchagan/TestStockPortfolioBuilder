import {
    ActionReducer,
    ActionReducerMap,
    createFeatureSelector,
    createSelector,
    MetaReducer
} from '@ngrx/store';
import {symbolReducer} from './symbol.reducer';

export interface State {
    symbol: any;
}

export const reducers: ActionReducerMap<State> = {
    symbol: symbolReducer,
};

export const metaReducers: MetaReducer<State>[] = [];
