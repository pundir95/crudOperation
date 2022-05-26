const initialState = {
    list: [],
    pending: true,
    created: false
}

export function userListReducer(state = initialState, action) {

    switch (action.type) {
        case "PENDING_LIST":
            return {
                ...state,
                pending: true
            }
        case 'GET_USER_LIST':
            return {
                ...state,
                list: action.payload,
                pending: false,
            }

        case 'CREATE_NEW_USER':
            return {
                ...state,
                list: [...state.list, action.payload],
                created: true
            }
        case 'SEARCH_DATA':
            return {
                ...state,
                list: action.payload
            }
        case 'REMOVE_DATA':
            return {
                ...state,
                created: false
            }
        default:
            return state;
    }

}
