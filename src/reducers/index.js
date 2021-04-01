import { eplReducer } from './eplReducer';
import { laLigaReducer } from './laLigaReducer';
import { combineReducers } from 'redux';
import { serieAReducer } from './serieAReducer';

export const rootReducer = combineReducers({
    eplReducer, laLigaReducer, serieAReducer
})