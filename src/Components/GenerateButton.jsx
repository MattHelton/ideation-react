import React, { Fragment } from 'react';
import * as propTypes from 'prop-types';

import { Button } from 'react-bootstrap';

const GenerateButton = ({ onClick }) => (

  <Fragment>
    <Button type="button" className="btn-lrg" id="gen-btn" onClick={onClick}>Generate</Button>
  </Fragment>
);

GenerateButton.propTypes = {
  onClick: propTypes.PropTypes.func.isRequired,
};
export default GenerateButton;
