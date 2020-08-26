/* eslint-disable no-console */
import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import {
  FaUniversity,
  FaEdit,
  FaCamera,
  FaUserCircle,
  FaTrash,
  FaPen,
  FaComment,
  FaHeart,
  FaAngry,
  FaSmile,
} from 'react-icons/fa';
// import { ToastContainer, toast } from 'react-toastify';
// import BeatLoader from 'react-spinners/BeatLoader';
// import { css } from '@emotion/core';
import Moment from 'react-moment';
import SignOut from './SignOut';
import '../css/App.css';
// import UserPage from './UserPage';

// const override = css`
//   display: block;
//   margin: 0 auto;
//   border-color: red;
// `;

// const notify = () => toast('Wow so easy !', { duration: 2 });

class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [...this.props.feed.data] };

    this.clicked = this.clicked.bind(this);
    this.onEdit = this.onEdit.bind(this);
    this.onCancel = this.onCancel.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  clicked(item) {
    console.log(`post with title of "${item.title}" has been clicked`);
  }

  onEdit(item) {
    console.log('edit status', item);
    const editState = { ...this.state };
    const editted = editState.data.map((x) => {
      x.editing = false;
      return x;
    });
    console.log('editted', editted);
    const mapped = editState.data.map((y) => {
      if (item.id === y.id) {
        y.editing = true;
        return y;
      }
      return y;
    });
    console.log('mapped', mapped);
    this.setState((prev) => ({ data: mapped }));
  }

  onCancel(item) {
    console.log('cancel edit status');
    const editState = { ...this.state };
    const mapped = editState.data.map((x) => {
      if (item.id === x.id) {
        x.editing = false;
        return x;
      }
      return x;
    });
    console.log(mapped, this.state);
    this.setState((prev) => ({ data: mapped }));
  }

  handleChange({ target }) {
    const { name } = target;
    const val = target.value;
    const keyArray = ['title', 'article'];
    if (keyArray.indexOf(name) >= 0) {
      this.setState((prev) => ({ [name]: '' }));
    }
    console.log('name =>', name, ': value =>', val);

    if (name === 'undefined' || name === undefined) {
      console.log('name is undefined', 'target =>', target.parentNode, 'val =>', val);
      return;
    }
    if (val === '' || val.trim() === '') {
      target.classList.add('empty');
      console.log(`${name} is not supplied`);
      return;
    }
    this.setState((prev) => ({ [name]: val }));
  }

  componentDidMount() {
    this.props.onLoad();
    if (this.state.data.length < 1) {
      console.info(this.state);
      this.setState({ data: [...this.props.feed.data] });
    }
  }

  // componentDidUpdate(prevProps, prevState) {
  //   if(prevState.data !== this.state.data) {
  //     console.log(prevProps, prevState);
  //     this.props.onLoad();
  //     this.setState({data: [...this.props.feed.data]});
  //   }
  // }

  render() {
    const {
      errorMessage, feed, isAdmin, signedIn, signOut, user, onUpdate, onDelete, onFlag, onLike, getUserDetails, userDetails,
    } = this.props;
    console.log(feed, userDetails);
    if (errorMessage === 'Error with credentials') {
      console.log('errorMessage:Error is credentials');
      return <Redirect to="/signin" />;
    }
    if (!signedIn) {
      console.log('Auth expired');
      return <Redirect to="/signin" />;
    }
      // notify();
    return (
      <div className="">
        <div className="nav">
          {signedIn
            ? (
              <div>
                <Link to="/" className="links"><FaUniversity /></Link>
                <Link to="/createarticle" className="links"><FaEdit /></Link>
                <Link to="/postgif" className="links"><FaCamera /></Link>
                <Link to="/profile" className="links"><FaUserCircle /></Link>
                <SignOut onClick={signOut} />
              </div>
            ) : (
              <div>
                <Link to="/signin" className="links">Sign In</Link>
              </div>
            )}
        </div>
        <div>
          {errorMessage ? (
            <span className="error">
              {(typeof errorMessage) !== 'string' ? errorMessage.message : `${errorMessage.includes('undefined') ? 'Error found' : ''}`}
              {' '}
            </span>
          ) : <span />}
        </div>
        <div className='feed-body'>
          <h3>Articles/GIF posts!</h3>
        {/* <ToastContainer /> */}
        <div className="quicklink article">
          <Link to="/createarticle" className="links">
            <FaEdit color="rgb(5, 83, 83)" size="1.7em" />
          </Link>
        </div>
        <div className="quicklink gif">
          <Link to="/postgif" className="links">
            <FaCamera color="rgb(5, 83, 83)" size="1.7em" />
          </Link>
        </div>

        <div>
          {feed.data.length
            ? (
              <div>
                {feed.data.map((item, index) => (
                  <div key={index} className="card">
                    <div className="author-tag">
                      <FaUserCircle />
                      <span onClick={() => getUserDetails(item.email)}>
                        {/* <Link to='/userpage' className='links'> */}
                        {item.author ? `@${item.author}` : '@anonymous'}
                        {/* </Link> */}
                      </span>
                    </div>

                    {item.editing
                      ? (
                        <div>
                          <span className="cancel btn" onClick={() => this.onCancel(item)}>Cancel</span>
                          <span className="delete update btn" onClick={() => onUpdate({ id: item.id, title: this.state.title, article: this.state.article })}>Update</span>
                          <br />
                          <input type="text" name="title" placeholder={item.title} onChange={this.handleChange} />
                          <br />
                          <textarea type="text" name="article" placeholder={item.articleOrUrl} onChange={this.handleChange} editable />
                        </div>
                      )
                      : (
                        <div>
                          <div>
                            {/* <UserPage userDetails={userDetails} /> */}
                          </div>
                          <div onClick={() => this.clicked(item)}>
                            <span style={{backgroundColor: 'red'}}><h4>{item.title}</h4></span>
                            <span>
                              {item.type && item.type.includes('gif')
                                ? <img src={item.articleOrUrl} alt="gif post" />
                                : (
                                  <span className="post-body">
                                    {item.articleOrUrl}
                                  </span>
                                )}
                            </span>
                            <br />
                            <br />
                            <span className="timestamp"><Moment fromNow>{item.lastUpdated}</Moment></span>
                            <br />
                          </div>
                          <div className="comment-div">
                            <span>
                              <FaComment />
                              {' '}
                              {item.comments ? item.comments : ''}
                            </span>
                            <span className="btn" onClick={() => onLike(item)}>
                              {item.liked ? <FaHeart color="red" /> : <FaHeart color="#fff" />}
                              {item.liked ? item.liked : ''}
                            </span>
                            <span className="btn" onClick={() => onFlag(item)}>
                              {item.flagged
                                ? <FaAngry color="red" /> : <FaSmile color="#fff" />}
                            </span>
                            <span>
                              {item.type && item.type.includes('gif')
                                ? <span />
                                : (
                                  <span>
                                    {(item.authorId === user.userid) && <span className="btn" onClick={() => this.onEdit(item)}><FaPen /></span>}
                                  </span>
                                )}
                            </span>
                            <span>
                              {(item.authorId === user.userid || isAdmin)
                        && (
                        <span className="btn" onClick={() => onDelete(item)}>
                          <FaTrash color="red" />
                        </span>
                        )}
                            </span>
                            <br />
                          </div>
                        </div>
                      )}
                  </div>
                ))}
              </div>
            )
            : (
              <div>
                {/* <BeatLoader
                  css={override}
                  size={30}
                /> */}
                <h3>No posts available</h3>
              </div>
            )}
        </div>
        </div>
        <div className='footer'>
              Teamwork, ... effective team communication!
          </div>
      </div>
    );
  }
}

export default Feed;
