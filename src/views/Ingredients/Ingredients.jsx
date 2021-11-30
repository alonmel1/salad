import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {useDispatch, useSelector} from "react-redux";
import {getIngredients} from "../../slices/ingredientsSlice";
import Table from "./components/Table/Table";
import * as style from './IngredientStyle'
import {Button} from "@mui/material";
import CheckoutDialog from "./components/CheckoutDialog/CheckoutDialog";

const Ingredients = props => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const dispatch = useDispatch();
    const {availableIngredients} = useSelector(state => state.ingredients);
    const {totalPrice} = useSelector(state => state.ingredients);

    useEffect(() => {
        !availableIngredients && dispatch(getIngredients())
    }, []);

    return (
        <style.IngredientContainer>
            <Table ingredients={availableIngredients} />
            <div>
                <span className="total-price">
                    {`Total Price ${totalPrice.toFixed(2)}`}
                </span>
                <Button variant="outlined" onClick={() => setIsDialogOpen(!isDialogOpen)}>
                    Checkout
                </Button>
                <CheckoutDialog
                    open={isDialogOpen}
                    handleClose={() => setIsDialogOpen(false)}
                />
            </div>
        </style.IngredientContainer>
    );
};

Ingredients.propTypes = {

};

export default Ingredients;
