import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaUniversity, 
  FaComments, 
  FaEdit, 
  FaTelegramPlane, 
  FaUserCircle, 
  FaArrowCircleRight, 
  FaPowerOff,
  FaUserPlus
} from 'react-icons/fa';
import '../../css/App.css';

const HomeButton = (props) => (
  <Link to={props.link} className={props.className}><FaUniversity /></Link>
);

const PostsButton = (props) => (
  <Link to={props.link} className={props.className}><FaComments /></Link>
);

const CreateUserButton = (props) => (
  <Link to={props.link} className={props.className}><FaUserPlus /></Link>
);

const CreateArticleButton = (props) => (
  <Link to={props.link} className={props.className}><FaEdit /></Link>
);

const CreateGIFButton = (props) => (
  <Link to={props.link} className={props.className}><FaTelegramPlane /></Link>
);

const ProfilePageButton = (props) => (
  <Link to={props.link} className={props.className}><FaUserCircle /></Link>
);

const SignInButton = (props) => (
  <Link to={props.link} className={props.className}><FaArrowCircleRight /></Link>
);

const SignOutButton = (props) => (
  <Link to={props.link} className={props.className} onClick={() => props.SignOut}><FaPowerOff /></Link>
);

export {
  HomeButton, 
  PostsButton,
  CreateUserButton,
  CreateArticleButton, 
  CreateGIFButton, 
  ProfilePageButton, 
  SignInButton, 
  SignOutButton
};
