import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

const Summary = props => {
    return (
        <div>
            This is Sum
            <Link to="/ingredients">
                back
            </Link>
        </div>
    );
};

Summary.propTypes = {

};

export default Summary;
