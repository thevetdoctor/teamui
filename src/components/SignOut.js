import React from 'react';
import '../css/App.css';


const SignOut = (props) => {

        return (
            // <input type='button' name='signout' value='Sign Out' onClick={props.onClick} />
            <span className='links' onClick={props.onClick}> Sign Out </span>
        );
}

export default SignOut;