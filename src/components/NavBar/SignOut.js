import React from 'react';
import { FaPowerOff } from 'react-icons/fa';
import '../../css/App.css';

const SignOut = (props) => (
  <span className="links" onClick={props.onClick}><FaPowerOff /></span>
);

export default SignOut;
