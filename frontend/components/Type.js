import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

const Type = ({ name }) => {
    return (
        <div>
            <h1>Hi</h1>
        </div>
    );
};

Type.propTypes = {
    name: PropTypes.string,
};

const mapStateToProps = (state) => {
    return {
        name: state.name
    };
};

const mapDispatchToProps = (/* dispatch */) => {
    return {
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Type);
