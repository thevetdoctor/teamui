    let apiUrl = 'http://localhost:8000/api/v1';
    let createUserUrl = `${apiUrl}/auth/create-user`;
    let signInUrl = `${apiUrl}/auth/signin`;
    let token = `${(JSON.parse(localStorage.getItem('TeamworkDB')).tokenDetails)}`;
    
    const createNewUser = async (newUser) => {
  
     let createUserOptions = { method: 'POST', body: JSON.stringify(newUser), headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` }};
      try {
      const res = await fetch(createUserUrl, createUserOptions);
  
      const json = await res.json();
      // console.log('json response', json);
      return json;
    } catch (e) {
      console.log("error response", e);
    }
  };


const signInUser = async (registeredUser) => {
  
  let signInOptions = { method: 'POST', body: JSON.stringify(registeredUser), headers: { 'Content-Type': 'application/json' }};
  
    try {
      const res = await fetch(signInUrl, signInOptions);
  
      const json = await res.json();
      // console.log('json response', json);
      return json;
    } catch (e) {
      console.log("error response", e);
    }
  };


  export { createNewUser, signInUser };
  