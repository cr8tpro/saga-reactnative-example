import { combineReducers } from 'redux'
import configureStore from './CreateStore'
import rootSaga from '../Sagas/'

export default () => {
    /* ------------- Assemble The Reducers ------------- */
    const rootReducer = combineReducers({
        cocktails: require('./CocktailsRedux').reducer
    })

    return configureStore(rootReducer, rootSaga)
}
