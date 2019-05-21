import React, { Fragment } from 'react';
import { Button } from 'react-bootstrap';

const GenerateButton = (props) => {
    return ( 
        <Fragment>
            <Button type='button' className='btn-lrg' id='gen-btn' onClick={props.onClick}>Generate</Button>
        </Fragment>
     );
}
 
export default GenerateButton;