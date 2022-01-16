const initialState = {
    openSignIn: false,
    user: {
        // id: 1,
        // name: 'tinh to',
        // avatar: 'https://bulma.io/images/placeholders/1280x960.png'
    }
}

const userReducer = (state = initialState, actions) => {
    switch(actions.type){
        case 'SIGN_IN':
            console.log(actions)
            return {
                ...state,
                user: {
                    email: actions.email,
                    password: actions.password,
                    avatar: 'https://bulma.io/images/placeholders/1280x960.png'
                }
            }
        case 'OPEN_SIGN_IN':
            return {
                ...state,
                openSignIn: actions.status
            }
        default:
            return state;
    }
}

export default userReducer;