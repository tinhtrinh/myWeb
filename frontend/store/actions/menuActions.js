export const setProfileMenuRef = ({ ref }) => ({
    type: 'SET_PROFILE_MENU_REF',
    ref
})

export const setMobileMenuRef = ({ ref }) => ({
    type: 'SET_MOBILE_MENU_REF',
    ref
})

export const setOpenSignIn = ({status}) => ({
    type: 'OPEN_SIGN_IN',
    status
})

export const setOpenSideMenu = ({status}) => ({
    type: 'OPEN_SIDE_MENU',
    status
})