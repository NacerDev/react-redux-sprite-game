import { configureStore, combineReducers } from "redux-starter-kit";
import playerReducer from "../features/player/reducer";
import mapReducer from "../features/map/reducer";

const rootReducer = combineReducers({
    player: playerReducer,
    map: mapReducer
})


const store = configureStore({
    devTools: process.env.NODE_ENV !== 'production',
    reducer: rootReducer
})
export default store;