import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {useDispatch, useSelector} from "react-redux";
import {getIngredients} from "../../reducers/ingredientsSlice";
import Table from "./components/Table/Table";
import * as style from './IngredientStyle'
import {Link} from "react-router-dom";

const Ingredients = props => {
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
                <span>
                    {`Total Price ${totalPrice.toFixed(2)}`}
                </span>
                <Link to="/summary">
                    Proceed to checkout
                </Link>
            </div>
        </style.IngredientContainer>
    );
};

Ingredients.propTypes = {

};

export default Ingredients;
