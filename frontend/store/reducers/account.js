const initialState = {
    error: {email: '', pass: ''},
    account: {}
    //account: {name:"tinh to",email:"tinhto@gmail.com",password:"12345",age:18,avatar:"https://bulma.io/images/placeholders/1280x960.png",_id:"KnESx6LhyMVCMYHg"}
}


const accountReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SET_ACCOUNT':
            state.error = action.error;
            state.account = action.account;
            return {...state};
        default:
            return state;
    }
}

export default accountReducer;