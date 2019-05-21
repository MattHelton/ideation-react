import React, { Fragment } from 'react';

const DisplayIdea = (props) => {
    return (  
        <Fragment>
            <h1 id='idea' className='hidden'>{props.idea}</h1>
        </Fragment>
    );
}
 
export default DisplayIdea;