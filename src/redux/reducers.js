import teamActions from './actions';


const initialState = JSON.parse(localStorage.getItem('employees')) || {
    name: 'Teamwork!',
    errorMessage: '', 
    formView: true, 
    loading: false,  
    users: [
        {firstname: 'Oba',  
        lastname: 'Ode',
        email: 'oba@teamwork.com',
        password: 'obapass',
        gender: 'M',
        jobRole: 'Director',
        department: 'admin',
        address: 'Hqtrs'
        },
           
        {firstname: 'Toke',
        lastname: 'Ode',
        email: 'oba@teamwork.com',
        password: 'oyepass',
        gender: 'F',
        jobRole: 'MD',
        department: 'admin',
        address: 'Hqtrs'        },
      ]
}; 

const teamReducer = (state = initialState, actions) => {

  switch(actions.type) {
  case teamActions.addUser.type:
      
      console.log(Object.values(actions.user));

      let newUserList = [ ...state.users ];
          newUserList.push(actions.user);

      let newState = Object.assign({}, state, {
        ...state, users: newUserList,
        });
      localStorage.setItem('employees', JSON.stringify(newState));

  return newState; 

  
  default:
    localStorage.setItem('employees', JSON.stringify(state));
 
  return state;
  }
};

export default teamReducer; 