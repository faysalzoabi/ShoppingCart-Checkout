import { PROMO_CODE } from './actions'

const initState = {
    value:''
}

const rootReducer = (state=initState, action) => {
    switch(action.type){
        case PROMO_CODE:
            return {
                ...state,
                value:action.payload
            };
        default:
            return state;
    }
}

export default rootReducer