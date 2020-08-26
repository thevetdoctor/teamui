import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaUniversity, FaComments, FaEdit, FaTelegramPlane, FaUserCircle,
} from 'react-icons/fa';

const HomeButton = (props) => (
  // <Link to='/feed' className='links'><FaComments /></Link>
  <Link to={props.home} className={props.links}><FaUniversity /></Link>
);

const PostsButton = (props) => (
  <Link to={props.feed} className={props.links}><FaComments /></Link>
);

const CreateArticleButton = (props) => (
  <Link to={props.feed} className={props.links}><FaEdit /></Link>
);

const CreateGIFButton = (props) => (
  <Link to={props.feed} className={props.links}><FaTelegramPlane /></Link>
);

const ProfilePageButton = (props) => (
  <Link to={props.profile} className={props.links}><FaUserCircle /></Link>
);

export {
  HomeButton, PostsButton, CreateArticleButton, CreateGIFButton, ProfilePageButton,
};
