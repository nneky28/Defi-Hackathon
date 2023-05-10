
const loggedReducer = (state = {isLogged: false}, action) => {
    switch(action.type){
        case 'SIGN_IN':
            return {isLogged: !state.isLogged}
        default: 
            return state;
    }
}

export default loggedReducer;