import React from 'react';
import PropTypes from 'prop-types';
import {useForm, Controller} from 'react-hook-form'
import {
    Button,
    Dialog,
    DialogTitle,
    TextField
} from "@mui/material";
import * as style from "./style";

const CheckoutDialog = ({open, handleClose}) => {
    const {handleSubmit, control} = useForm();

    const onSubmit = data => {
        console.log(data);

        handleClose()
    };

    return (
        <Dialog open={open}>
            <DialogTitle>Checkout</DialogTitle>
            <style.DialogContainer>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Controller
                        control={control}
                        name="name"
                        rules={{ required: true }}
                        render={({
                                     field: {onChange, onBlur, value, name, ref},
                                     fieldState: {invalid, isTouched, isDirty, error},
                                     formState,
                                 }) => (
                            <TextField
                                label="Name"
                                onBlur={onBlur} // notify when input is touched
                                onChange={onChange} // send value to hook form
                                checked={value}
                                inputRef={ref}
                                error={invalid}
                            />
                        )}
                    />
                    <Controller
                        control={control}
                        name="last"
                        rules={{ required: true }}
                        render={({
                                     field: {onChange, onBlur, value, name, ref},
                                     fieldState: {invalid, isTouched, isDirty, error},
                                     formState,
                                 }) => (
                            <TextField
                                label="Last Name"
                                onBlur={onBlur} // notify when input is touched
                                onChange={onChange} // send value to hook form
                                checked={value}
                                inputRef={ref}
                                error={invalid}
                            />
                        )}
                    />
                    <Controller
                        control={control}
                        name="email"
                        rules={{
                            required: true,
                            pattern: { value: /\S+@\S+\.\S+/, message: 'Email must be valid' } }}
                        render={({
                                     field: {onChange, onBlur, value, name, ref},
                                     fieldState: {invalid, isTouched, isDirty, error},
                                     formState,
                                 }) => (
                            <TextField
                                label="Email"
                                onBlur={onBlur} // notify when input is touched
                                onChange={onChange} // send value to hook form
                                checked={value}
                                inputRef={ref}
                                error={invalid}
                                helperText={error?.message}
                            />
                        )}
                    />
                    <Button type="submit">Submit</Button>
                </form>
            </style.DialogContainer>
        </Dialog>
    );
};

CheckoutDialog.propTypes = {};

export default CheckoutDialog;
