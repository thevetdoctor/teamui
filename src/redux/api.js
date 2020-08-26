/* eslint-disable no-console */
const getUrl = () => {
  if (window.location.host.indexOf('localhost') >= 0) {
    return 'http://localhost:4000/api/v1';
  }
  return 'https://obateamwork.herokuapp.com/api/v1';
};

const apiUrl = getUrl();
console.log(apiUrl);

const createUserUrl = `${apiUrl}/auth/create-user`;
const signInUrl = `${apiUrl}/auth/signin`;
const getUserDetailsUrl = `${apiUrl}/auth/getuser`;
const articleUrl = `${apiUrl}/articles`;
const gifUrl = `${apiUrl}/gifs`;
const feedUrl = `${apiUrl}/feed`;

const token = JSON.parse(sessionStorage.getItem('TeamworkDB')) ? JSON.parse(sessionStorage.getItem('TeamworkDB')).tokenDetails : '';
const isAdmin = JSON.parse(sessionStorage.getItem('TeamworkDB')) ? JSON.parse(sessionStorage.getItem('TeamworkDB')).tokenDetails : '';

const createNewUser = async (newUser) => {
  const createUserOptions = { method: 'POST', body: JSON.stringify(newUser), headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` } };
  let res;
  try {
      res = await fetch(createUserUrl, createUserOptions);

    const json = await res.json();
    console.log('json response', json);
    return json;
  } catch (e) {
    console.log('error response', e);
  }
  return res;
};

const signInUser = async (registeredUser) => {
  const signInOptions = { method: 'POST', body: JSON.stringify(registeredUser), headers: { 'Content-Type': 'application/json' } };

  let res;
  try {
      res = await fetch(signInUrl, signInOptions);

    const json = await res.json();
    console.log('json response', json);
    return json;
  } catch (e) {
    console.log('error response', e);
  }
  return res;
};

const postArticle = async (article) => {
  const articleOptions = { method: 'POST', body: JSON.stringify(article), headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` } };

  let res;
  try {
      res = await fetch(articleUrl, articleOptions);

    const json = await res.json();
    console.log('json response', json);
    return json;
  } catch (e) {
    console.log('error response', e);
  }
  return res;
};

const postGIF = async (gifpost) => {
  const gifOptions = { method: 'POST', body: JSON.stringify(gifpost), headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` } };

  let res;
  try {
    res = await fetch(gifUrl, gifOptions);

    const json = await res.json();
    console.log('json response', json);
    return json;
  } catch (e) {
    console.log('error response', e);
  }
  return res;
};

const getAllFeed = async () => {
  const feedOptions = { method: 'GET', headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` } };

  let res;
  try {
      res = await fetch(feedUrl, feedOptions);

    const json = await res.json();
    console.log('json response', json);
    return json;
  } catch (e) {
    console.log('error response', e);
  }
  return res;
};

const getUserDetails = async (userEmail) => {
  const userDetailsOptions = { method: 'GET', headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` } };
  const detailsUrl = `${getUserDetailsUrl}?email=${userEmail}`;
  
  let res;
  try {
    res = await fetch(detailsUrl, userDetailsOptions);

    const json = await res.json();
    console.log('json response', json, detailsUrl, userDetailsOptions);
    return json;
  } catch (e) {
    console.log('error response', e);
  }
  return res;
};

const deletePost = async (post) => {
  const { id, authorId, type } = post;
  const entityId = id;

  const deleteOptions = { method: 'DELETE', headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` } };
  const deleteOptionsAdmin = { method: 'DELETE', body: JSON.stringify({ entityId, authorId, type }), headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` } };

  const postUrl = post.type.includes('article') ? `${articleUrl}` : `${gifUrl}`;
  console.log(postUrl, post);

  let res;
  try {
    if (isAdmin) {
      res = await fetch(`${postUrl}/${post.id}`, deleteOptions);
      console.log('postUrl: ', postUrl);
    } else {
      res = await fetch(feedUrl, deleteOptionsAdmin);
      console.log('feedUrl:', feedUrl);
    }
    const json = await res.json();
    console.log('json response', json, post.title, post.id);
    return json;
  } catch (e) {
    console.log('error response', e);
  }
  return res;
};

const flagPost = async (post) => {
  const { id, authorId, type } = post;
  const entityId = id;

  const flagOptions = { method: 'PATCH', body: JSON.stringify({ entityId, authorId, type }), headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` } };
  console.log(flagOptions, post);
  
  let res;
  try {
      res = await fetch(`${feedUrl}/flag`, flagOptions);

    const json = await res.json();
    console.log('json response', json, post.title, post.id);
    return json;
  } catch (e) {
    console.log('error response', e);
  }
  return res;
};

const likePost = async (post) => {
  const { id, authorId, type } = post;
  const entityId = id;

  const likeOptions = { method: 'PATCH', body: JSON.stringify({ entityId, authorId, type }), headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` } };
  console.log(likeOptions, post);
  let res;
  try {
      res = await fetch(`${feedUrl}/like`, likeOptions);

    const json = await res.json();
    console.log('json response', json, post.title, post.id);
    return json;
  } catch (e) {
    console.log('error response', e);
  }
  return res;
};

const updatePost = async (articleToUpdate) => {
  const { title, article } = articleToUpdate;

  const updateOptions = { method: 'PATCH', body: JSON.stringify({ title, article }), headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` } };
 
  let res;
  try {
    res = await fetch(`${articleUrl}/${articleToUpdate.id}`, updateOptions);

    const json = await res.json();
    console.log('json response', json, articleToUpdate.id);
    return json;
  } catch (e) {
    console.log('error response', e);
  }
  return res;
};

export {
  createNewUser,
  signInUser,
  postArticle,
  postGIF,
  getAllFeed,
  deletePost,
  flagPost,
  likePost,
  updatePost,
  getUserDetails,
};
