const initState = {
    company: null
}

const reducer = (state = initState, action) => {
    switch( action.type ){
        case 'ADDCOMPANY':
            return{
                ...state,
                company: action.payload
            }
    }
    return state
}

export default reducer