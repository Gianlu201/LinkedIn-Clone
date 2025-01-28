const initialState = {
    profile: {},
    experience: [],
    profiles: []
}

const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_PROFILE':
            return {
                ...state,
                profile: action.payload
            }

        case 'GET_EXPERIENCE':
            return {
                ...state,
                experience: action.payload
            }

        case 'GET_PROFILES':
            return {
                ...state,
                profiles: action.payload
            }
        default: return state
    }
}


export default mainReducer