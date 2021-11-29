import React from 'react';
import {useNavigate} from "react-router-dom";
import PropTypes from 'prop-types';
import {Button, Grid} from "@mui/material";
import Lottie from 'react-lottie';
import saladAnimation from '../../lot-salas.json'



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
            <span>
                Welcome to our shop, please proceed to build your salad
            </span>
            <Button onClick={() => navigate("/ingredients")}>
                Order
            </Button>
            <Grid item xs={12}>
                <Lottie options={commonDefaults}
                        height={500}
                        width={500}
                />
            </Grid>
            <Grid item xs={6}>

            </Grid>
        </Grid>
    );
};

Home.propTypes = {};

export default Home;
