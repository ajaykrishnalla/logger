import { SET_LOADING, LOGS_ERROR, GET_LOGS, ADD_LOG, DELETE_LOG, SET_CURRENT, CLEAR_CURRENT, UPDATE_LOG, SEARCH_LOGS } from "../actions/types";

const initalState = {
    logs: null,
    current: null,
    loading: false,
    error: null
};

export default (state=initalState,action) => {
    switch (action.type) {  
        case ADD_LOG: 
            return {
                ...state,
                logs:[...state.logs,action.payload],
                loading: false
            }
        case UPDATE_LOG:
            return {
                ...state,
                logs: state.logs.map(log => log.id === action.payload.id ? action.payload : log)
            }
        case DELETE_LOG:
            return {
                ...state,
                logs: state.logs.filter(log => log.id !== action.payload),
                loading: false
            }
        case SEARCH_LOGS: 
            return {
                ...state,
                logs:action.payload
            }
        case SET_CURRENT:
            return {
                ...state,
                current: action.payload
            }
        case CLEAR_CURRENT:
            return {
                ...state,
                current:null
            }
        case GET_LOGS: 
            return {
                ...state,
                loading: false,
                logs: action.payload
            }
        case SET_LOADING:
            return {
                ...state,
                loading: true
            } 
        case LOGS_ERROR:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}