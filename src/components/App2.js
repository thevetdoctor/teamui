import React from 'react';
import '../css/App.css';

function App() {

  // const data = { email: 'teamaccess@teamwork.com', password: 'teampass01' };  
  // const options = { method: 'post', body: JSON.stringify(data), headers: { 'Content-Type' : 'application/json'}};
  const options = { method: 'post', body: JSON.stringify({ title: 'my gif post', imageUrl: 'C:\\Users\\ACER\\Pictures\\teamwork\\jellyfish.jpg' }), headers: { 'Content-Type' : 'application/json', Authorization: `Bearer ${localStorage.getItem('token')}`}};
  // const options = { method: 'get', headers: { 'Content-Type' : 'application/json', Authorization: `Bearer ${localStorage.getItem('token')}` } };
  // console.log(options);

  const signIn = async() => {
            // try {
                      const token = await fetch('http://localhost:8000/api/v1/gifs', options);
                      // const token = await fetch('http://localhost:8000/api/v1/auth/signin', options);
                      // const token = await fetch('https://jsonplaceholder.typicode.com/users');
                      const res = await token.json();
                      // localStorage.setItem('token', res.data.token);
                      console.log(res, localStorage.getItem('token'));
                      return res;
            // } catch(e) {
              // console.log(e);
            // }
          }
  // const show = async() => {
    // const showdata = await signIn();
    signIn();
    // console.log(showdata);
    // return showdata;
  // };

  // show();

  return (
    <div className="App">
        <a href='/'>Back</a>
        <a href='/api/v1/docs'>Documentation</a>
    </div>
  );
}

export default App;
