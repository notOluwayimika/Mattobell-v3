const initialState = {
    username: "",
    isLoggedIn: false
}
const loggedReducer = (state = initialState , action) => {
    switch(action.type){
        case 'SIGN_IN':
            return Object.assign({}, state, {
                isLoggedIn : true,
                username: action.username
            })
        case "SIGN_OUT":
            return Object.assign({}, state, {
                isLoggedIn: false,
                username: ""
            })
        default :
        return state    
    }
}

export default loggedReducer ;
