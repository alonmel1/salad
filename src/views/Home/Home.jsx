import React from 'react';
import {useNavigate} from "react-router-dom";
import PropTypes from 'prop-types';
import {Button, Grid} from "@mui/material";
import Lottie from 'react-lottie';
import saladAnimation from '../../lot-salas.json'
import * as Styled from './HomeStyle';

const Home = props => {
    let navigate = useNavigate();

    const commonDefaults = {
        loop: false,
        autoplay: true,
        animationData: saladAnimation,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };

    return (
        <Grid container alignItems="center">
            <Grid item xs="4">
                <Styled.Header>
                    Welcome to our shop, please proceed to build your salad
                </Styled.Header>
            </Grid>
            <Grid item xs="2">
                <Button
                    variant="contained"
                    onClick={() => navigate("/ingredients")}
                >
                    Order
                </Button>
            </Grid>
            <Grid item xs="12">
                <Lottie options={commonDefaults}
                        height={500}
                        width={500}
                />
            </Grid>
        </Grid>
    );
};

Home.propTypes = {};

export default Home;
