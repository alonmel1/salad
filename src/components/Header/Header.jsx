import React from 'react';
import {Link, useNavigate } from "react-router-dom";
import styled from '@emotion/styled'
import PropTypes from 'prop-types';
import {IconButton} from '@mui/material'
import HomeIcon from '@mui/icons-material/Home';


const HeaderContainer = styled.div`
  display: flex;
  height: 40px;
  gap: 100px;
  border-bottom: 1px solid lightgray;
`

const Header = props => {
    const navigate = useNavigate();

    return (
        <HeaderContainer>
            <IconButton color="primary" onClick={() => navigate('/')}>
                <HomeIcon fontSize="large" />
            </IconButton>
        </HeaderContainer>
    )
};

Header.propTypes = {};

export default Header;
