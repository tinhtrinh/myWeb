import axios from "axios";

export const logIn = ({ email, password }) => {
    return (dispatch) => {
        return axios.post('http://localhost:5000/auth/login', {
            email: email,
            password: password
        })
        .then(res => {
            dispatch(setAccount(res.data))
        })
        .catch(error => console.log(error))
    }
}

export const setAccount = ({ account, error }) => ({
    type: 'SET_ACCOUNT',
    account,
    error
})