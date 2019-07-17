import { GET_TECHS, SET_LOADING, ADD_TECH, TECHS_ERROR, DELETE_TECH } from "../actions/types";

const intialState = {
    techs: null,
    error: null,
    loading: false,
    current:null
}

export default (state= intialState, action) => {
    switch (action.type) {
        case GET_TECHS:
            return {
                ...state,
                techs: action.payload,
                loading: false
            }
        case ADD_TECH:
            return {
                ...state,
                techs: [...state.techs,action.payload],
                loading: false
            }
        case DELETE_TECH: 
            return {
                ...state,
                techs: state.techs.filter(tech => tech.id !== action.payload ),
                loading: false
            }
        case TECHS_ERROR:   
            return {
                ...state,
                loading: false
            }
        case SET_LOADING:
            return {
                ...state,
                loading: true
            }
        default:
            return state;
    }
}