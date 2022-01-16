import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';

import { Dialog, DialogTitle, DialogContent, TextField, DialogActions, Button } from '@material-ui/core';

import { setOpenSignIn } from '../../store/actions/menuActions';
import { logIn } from '../../store/actions/accountActions';

const SignIn = () => {
    const { register, handleSubmit, reset } = useForm();
    const { openSignIn } = useSelector(state => state.menu);
    const handleCloseSignIn = () => {
        reset('')
        dispatch(setOpenSignIn({status: false}))
    }

    const dispatch = useDispatch();
    const onSubmit = (data) => {
        dispatch(
            logIn({
                email: data.email,
                password: data.password
            })
        );
    }

    const { account, error } = useSelector(state => state.account)
    useEffect(() => {
        if(account._id){
            handleCloseSignIn()
        }
    }, [account])

    return (
        <form>
            <Dialog open={openSignIn} onClose={handleCloseSignIn} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Đăng Nhập</DialogTitle>
                <DialogContent>
                    <TextField 
                        margin="dense" 
                        id="email" 
                        label="Email" 
                        type="email" 
                        error={Boolean(error.email)}
                        helperText={error.email}
                        fullWidth {...register("email")} 
                    />
                    <TextField 
                        margin="dense" 
                        id="password" 
                        label="Mật khẩu" 
                        type="password" 
                        error={Boolean(error.pass)}
                        helperText={error.pass}
                        fullWidth {...register("password")}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseSignIn} color="primary">
                        Hủy bỏ
                    </Button>
                    <Button type="submit" color="primary" onClick={handleSubmit(onSubmit)}>
                        Đăng Nhập
                    </Button>
                </DialogActions>
            </Dialog>
        </form>
    )
}

export default SignIn;