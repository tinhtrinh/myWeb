export const signIn = ({ email, password }) => ({
    type: 'SIGN_IN',
    email,
    password
})

export const setOpenSignIn = ({status}) => ({
    type: 'OPEN_SIGN_IN',
    status
})