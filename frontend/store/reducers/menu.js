const initialState = {
    profileMenuRef: null,
    mobileMenuRef: null,
    openSignIn: false,
    openSideMenu: false,
}

const menuReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SET_PROFILE_MENU_REF':
            state.profileMenuRef = action.ref;
            return {...state}
        case 'SET_MOBILE_MENU_REF':
            state.mobileMenuRef = action.ref;
            return {...state};
        case 'OPEN_SIGN_IN':
            return {
                ...state,
                openSignIn: action.status
            }
        case 'OPEN_SIDE_MENU':
            return {
                ...state,
                openSideMenu: action.status
            }
        default:
            return state;
    }
}

export default menuReducer;