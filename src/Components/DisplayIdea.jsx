import React, { Fragment } from 'react';
import { PropTypes } from 'prop-types';

const DisplayIdea = ({ idea }) => (
  <Fragment>
    <h1 id="idea" className="hidden">{idea}</h1>
  </Fragment>
);
DisplayIdea.propTypes = {
  idea: PropTypes.string.isRequired,
};
export default DisplayIdea;
