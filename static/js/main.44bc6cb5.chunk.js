(this.webpackJsonpteamui=this.webpackJsonpteamui||[]).push([[0],{19:function(e,t,n){},43:function(e,t,n){e.exports=n(55)},53:function(e,t,n){},55:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(27),o=n.n(s),c=n(4),l=n(30),i=n(22),u=n(38),d=n(40),p=n(8),m={addUser:{type:"ADD_USER"},signIn:{type:"SIGNIN_USER"},signOut:{type:"SIGN_OUT"},logUser:{type:"LOG_USER"},logError:{type:"LOG_ERROR"},postArticle:{type:"POST_ARTICLE"},postGIF:{type:"POST_GIF"},getFeed:{type:"GET_FEED"},deletePost:{type:"DELETE_POST"},editPost:{type:"EDIT_POST"},updateArticle:{type:"UPDATE_ARTICLE"},newUserSuccess:{type:"NEWUSER_SUCCESS"},newUserFailure:{type:"NEWUSER_FAILURE"},signInSuccess:{type:"SIGNIN_SUCCESS"},signInFailure:{type:"SIGNIN_FAILURE"},newArticleSuccess:{type:"NEW_ARTICLE_SUCCESS"},newArticleFailure:{type:"NEW_ARTICLE_FAILURE"},newGIFSuccess:{type:"NEW_GIF_SUCCESS"},newGIFFailure:{type:"NEW_GIF_FAILURE"},feedSuccess:{type:"FEED_SUCCESS"},feedFailure:{type:"FEED_FAILURE"},deletePostSuccess:{type:"DELETE_SUCCESS"},deletePostFailure:{type:"DELETE_FAILURE"}};function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(n,!0).forEach((function(t){Object(p.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var E={name:"Teamwork!",errorMessage:"",loading:!1,user:JSON.parse(sessionStorage.getItem("TeamworkDB"))?JSON.parse(sessionStorage.getItem("TeamworkDB")).user:"",signedIn:!!JSON.parse(sessionStorage.getItem("TeamworkDB"))&&JSON.parse(sessionStorage.getItem("TeamworkDB")).signedIn,isAdmin:!!JSON.parse(sessionStorage.getItem("TeamworkDB"))&&JSON.parse(sessionStorage.getItem("TeamworkDB")).isAdmin,articlePosted:!1,gifPosted:!1,tokenDetails:JSON.parse(sessionStorage.getItem("TeamworkDB"))?JSON.parse(sessionStorage.getItem("TeamworkDB")).tokenDetails:"",feed:{data:[]}},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m.newUserSuccess.type:console.log("Getting NEW_USER_DATA from API");var n,a=t.newUserData;return console.log(a),n="error"===a.status?Object.assign({},e,h({},e,{newUser:!1,errorMessage:a.error})):Object.assign({},e,h({},e,{newUser:!0})),localStorage.setItem("TeamworkDB",JSON.stringify(n)),n;case m.newUserFailure.type:var r=t.newUserError;console.log("Error response from API",r);var s=Object.assign({},e,{});return s;case m.signInSuccess.type:console.log("Sign In Response");var o=t.signInData,c=o.data,l=c.isAdmin,i=c.token;null===l&&(o.data.isAdmin=!1),console.log(o);var u=Object.assign({},e,h({},e,{signedIn:!0,tokenDetails:i,isAdmin:o.data.isAdmin}));return sessionStorage.setItem("TeamworkDB",JSON.stringify(u)),u;case m.signInFailure.type:console.log("Error response from API",t);var d=Object.assign({},e,h({},e,{signedIn:!1,tokenDetails:""}));return localStorage.setItem("TeamworkDB",JSON.stringify(d)),d;case m.signOut.type:console.log("User signed out",t);var p=Object.assign({},e,h({},e,{signedIn:!1,user:"",isAdmin:!1,tokenDetails:""}));return localStorage.setItem("TeamworkDB",JSON.stringify(p)),p;case m.logUser.type:var g=t.email;console.log("user email: ",g);var f=Object.assign({},e,h({},e,{user:g.slice(0,g.indexOf("@"))}));return sessionStorage.setItem("TeamworkDB",JSON.stringify(f)),f;case m.logError.type:var b=t.error;console.log("error-message: ",b);var v=Object.assign({},e,h({},e,{errorMessage:b}));return localStorage.setItem("TeamworkDB",JSON.stringify(v)),v;case m.newArticleSuccess.type:console.log("Post Article Response");var O,y=t.newArticleData;return console.log(y),O="error"===y.status?Object.assign({},e,h({},e,{articlePosted:!1,errorMessage:y.error})):Object.assign({},e,h({},e,{articlePosted:!0})),console.log("new article state",O),localStorage.setItem("TeamworkDB",JSON.stringify(O)),O;case m.newArticleFailure.type:var S=t.articleError;console.log("Error response from API",t);var j=Object.assign({},e,h({},e,{errorMessage:S}));return localStorage.setItem("TeamworkDB",JSON.stringify(j)),j;case m.newGIFSuccess.type:console.log("Post GIF Response");var C,w=t.newGIFData;return console.log(w),C="error"===w.status?Object.assign({},e,h({},e,{gifPosted:!1,errorMessage:w.error})):Object.assign({},e,h({},e,{gifPosted:!0})),console.log("new gif state",C),localStorage.setItem("TeamworkDB",JSON.stringify(C)),C;case m.newGIFFailure.type:var k=t.gifError;console.log("Error response from API",t);var N=Object.assign({},e,h({},e,{errorMessage:k}));return localStorage.setItem("TeamworkDB",JSON.stringify(N)),N;case m.feedSuccess.type:console.log("Get Feed Response");var I,R=t.feedData;return I="error"===R.status?Object.assign({},e,h({},e,{errorMessage:R.error})):Object.assign({},e,h({},e,{feed:R})),console.log("new feed state",I),localStorage.setItem("TeamworkDB",JSON.stringify(I)),I;case m.feedFailure.type:var D=t.feedError;console.log("Error response from API",t);var x=Object.assign({},e,h({},e,{errorMessage:D}));return localStorage.setItem("TeamworkDB",JSON.stringify(x)),x;case m.deletePostSuccess.type:console.log("Get DELETE POST Response");var T,A=t.deletePostData;return console.log(A),T="error"===A.status?Object.assign({},e,h({},e,{errorMessage:A.error})):Object.assign({},e,h({},e,{postDeleted:!0})),console.log("delete post state",!0),localStorage.setItem("TeamworkDB",JSON.stringify(T)),T;case m.deletePostFailure.type:var U=t.deletePostError;console.log("Error response from API",t);var _=Object.assign({},e,h({},e,{errorMessage:U}));return localStorage.setItem("TeamworkDB",JSON.stringify(_)),_;default:return localStorage.setItem("TeamworkDB",JSON.stringify(e)),e}},b=n(5),v=n.n(b),O=n(6),y=n(24),S=window.location.host.indexOf("localhost")>=0?"http://localhost:8000/api/v1":"https://obateamwork.herokuapp.com/api/v1",j="".concat(S,"/auth/create-user"),C="".concat(S,"/auth/signin"),w="".concat(S,"/articles"),k="".concat(S,"/gifs"),N="".concat(S,"/feed"),I=function(){var e=Object(y.a)(v.a.mark((function e(t){var n,a,r,s;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(JSON.parse(localStorage.getItem("TeamworkDB")).tokenDetails),a={method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(n)}},e.prev=2,e.next=5,fetch(j,a);case 5:return r=e.sent,e.next=8,r.json();case 8:return s=e.sent,e.abrupt("return",s);case 12:e.prev=12,e.t0=e.catch(2),console.log("error response",e.t0);case 15:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(t){return e.apply(this,arguments)}}(),R=function(){var e=Object(y.a)(v.a.mark((function e(t){var n,a,r;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}},e.prev=1,e.next=4,fetch(C,n);case 4:return a=e.sent,e.next=7,a.json();case 7:return r=e.sent,e.abrupt("return",r);case 11:e.prev=11,e.t0=e.catch(1),console.log("error response",e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}(),D=function(){var e=Object(y.a)(v.a.mark((function e(t){var n,a,r,s;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(JSON.parse(localStorage.getItem("TeamworkDB")).tokenDetails),a={method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(n)}},e.prev=2,e.next=5,fetch(w,a);case 5:return r=e.sent,e.next=8,r.json();case 8:return s=e.sent,console.log("json response",s),e.abrupt("return",s);case 13:e.prev=13,e.t0=e.catch(2),console.log("error response",e.t0);case 16:case"end":return e.stop()}}),e,null,[[2,13]])})));return function(t){return e.apply(this,arguments)}}(),x=function(){var e=Object(y.a)(v.a.mark((function e(t){var n,a,r,s;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(JSON.parse(localStorage.getItem("TeamworkDB")).tokenDetails),a={method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(n)}},e.prev=2,e.next=5,fetch(k,a);case 5:return r=e.sent,e.next=8,r.json();case 8:return s=e.sent,console.log("json response",s),e.abrupt("return",s);case 13:e.prev=13,e.t0=e.catch(2),console.log("error response",e.t0);case 16:case"end":return e.stop()}}),e,null,[[2,13]])})));return function(t){return e.apply(this,arguments)}}(),T=function(){var e=Object(y.a)(v.a.mark((function e(){var t,n,a,r;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(JSON.parse(localStorage.getItem("TeamworkDB")).tokenDetails),n={method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(t)}},e.prev=2,e.next=5,fetch(N,n);case 5:return a=e.sent,e.next=8,a.json();case 8:return r=e.sent,e.abrupt("return",r);case 12:e.prev=12,e.t0=e.catch(2),console.log("error response",e.t0);case 15:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(){return e.apply(this,arguments)}}(),A=function(){var e=Object(y.a)(v.a.mark((function e(t){var n,a,r,s,o;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(JSON.parse(localStorage.getItem("TeamworkDB")).tokenDetails),a={method:"DELETE",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(n)}},r=t.articleOrUrl.includes("http:")?"".concat(k):"".concat(w),console.log(r,t),e.prev=4,e.next=7,fetch("".concat(r,"/").concat(t.id),a);case 7:return s=e.sent,e.next=10,s.json();case 10:return o=e.sent,console.log("json response",o,t.title,t.id),e.abrupt("return",o);case 15:e.prev=15,e.t0=e.catch(4),console.log("error response",e.t0);case 18:case"end":return e.stop()}}),e,null,[[4,15]])})));return function(t){return e.apply(this,arguments)}}(),U=function(){var e=Object(y.a)(v.a.mark((function e(t){var n,a,r,s,o,c;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(JSON.parse(localStorage.getItem("TeamworkDB")).tokenDetails),a=t.title,r=t.article,s={method:"PATCH",body:JSON.stringify({title:a,article:r}),headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(n)}},e.prev=3,e.next=6,fetch("".concat(w,"/").concat(t.id),s);case 6:return o=e.sent,e.next=9,o.json();case 9:return c=e.sent,console.log("json response",c,t.id),e.abrupt("return",c);case 14:e.prev=14,e.t0=e.catch(3),console.log("error response",e.t0);case 17:case"end":return e.stop()}}),e,null,[[3,14]])})));return function(t){return e.apply(this,arguments)}}(),_=v.a.mark(M),P=v.a.mark(H),L=v.a.mark(z),F=v.a.mark(Y),G=v.a.mark(K),B=v.a.mark($),J=v.a.mark(q),W=v.a.mark(Q);function M(e){var t,n,a;return v.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.type,void 0===t?"ADD_USER":t,n=e.newUser,r.prev=1,r.next=4,Object(O.a)(I,n);case 4:return a=r.sent,r.next=7,Object(O.b)({type:"NEWUSER_SUCCESS",newUserData:a});case 7:r.next=13;break;case 9:return r.prev=9,r.t0=r.catch(1),r.next=13,Object(O.b)({type:"NEWUSER_FAILURE",newUserError:r.t0.message});case 13:case"end":return r.stop()}}),_,null,[[1,9]])}function H(e){var t,n,a;return v.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.type,void 0===t?"SIGNIN_USER":t,n=e.user,r.prev=1,r.next=4,Object(O.a)(R,n);case 4:return a=r.sent,r.next=7,Object(O.b)({type:"SIGNIN_SUCCESS",signInData:a});case 7:r.next=13;break;case 9:return r.prev=9,r.t0=r.catch(1),r.next=13,Object(O.b)({type:"SIGNIN_FAILURE",signInError:r.t0.message});case 13:case"end":return r.stop()}}),P,null,[[1,9]])}function z(e){var t,n,a;return v.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.type,void 0===t?"POST_ARTICLE":t,n=e.newArticle,r.prev=1,r.next=4,Object(O.a)(D,n);case 4:return a=r.sent,r.next=7,Object(O.b)({type:"NEW_ARTICLE_SUCCESS",newArticleData:a});case 7:r.next=13;break;case 9:return r.prev=9,r.t0=r.catch(1),r.next=13,Object(O.b)({type:"NEW_ARTICLE_FAILURE",articleError:r.t0.message});case 13:case"end":return r.stop()}}),L,null,[[1,9]])}function Y(e){var t,n,a;return v.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.type,void 0===t?"POST_GIF":t,n=e.gifpost,r.prev=1,r.next=4,Object(O.a)(x,n);case 4:return a=r.sent,r.next=7,Object(O.b)({type:"NEW_GIF_SUCCESS",newGIFData:a});case 7:r.next=13;break;case 9:return r.prev=9,r.t0=r.catch(1),r.next=13,Object(O.b)({type:"NEW_GIF_FAILURE",gifError:r.t0.message});case 13:case"end":return r.stop()}}),F,null,[[1,9]])}function K(e){var t,n;return v.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t=e.type,void 0===t?"GET_FEED":t,a.prev=1,a.next=4,Object(O.a)(T);case 4:return n=a.sent,a.next=7,Object(O.b)({type:"FEED_SUCCESS",feedData:n});case 7:a.next=13;break;case 9:return a.prev=9,a.t0=a.catch(1),a.next=13,Object(O.b)({type:"FEED_FAILURE",feedError:a.t0.message});case 13:case"end":return a.stop()}}),G,null,[[1,9]])}function $(e){var t,n,a;return v.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.type,void 0===t?"DELETE_POST":t,n=e.post,r.prev=1,console.log(n.id),r.next=5,Object(O.a)(A,n);case 5:if(!r.sent){r.next=12;break}return r.next=9,Object(O.a)(T);case 9:return a=r.sent,r.next=12,Object(O.b)({type:"FEED_SUCCESS",feedData:a});case 12:r.next=18;break;case 14:return r.prev=14,r.t0=r.catch(1),r.next=18,Object(O.b)({type:"DELETE_FAILURE",deletePostError:r.t0.message});case 18:case"end":return r.stop()}}),B,null,[[1,14]])}function q(e){var t,n,a;return v.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.type,void 0===t?"UPDATE_ARTICLE":t,n=e.articleToUpdate,r.prev=1,r.next=4,Object(O.a)(U,n);case 4:if(!r.sent){r.next=11;break}return r.next=8,Object(O.a)(T);case 8:return a=r.sent,r.next=11,Object(O.b)({type:"FEED_SUCCESS",feedData:a});case 11:r.next=17;break;case 13:return r.prev=13,r.t0=r.catch(1),r.next=17,Object(O.b)({type:"UPDATE_FAILURE",updatePostError:r.t0.message});case 17:case"end":return r.stop()}}),J,null,[[1,13]])}function Q(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(O.c)("ADD_USER",M);case 2:return e.next=4,Object(O.c)("SIGNIN_USER",H);case 4:return e.next=6,Object(O.c)("POST_ARTICLE",z);case 6:return e.next=8,Object(O.c)("POST_GIF",Y);case 8:return e.next=10,Object(O.c)("GET_FEED",K);case 10:return e.next=12,Object(O.c)("DELETE_POST",$);case 12:return e.next=14,Object(O.c)("UPDATE_ARTICLE",q);case 14:console.log("Redux Saga is on!");case 15:case"end":return e.stop()}}),W)}var V=Q,X=Object(d.a)(),Z=Object(i.createStore)(f,Object(u.composeWithDevTools)(Object(i.applyMiddleware)(X)));X.run(V);var ee=Z,te=(n(53),n(23)),ne=n(12),ae=n(13),re=n(15),se=n(14),oe=n(16),ce=(n(19),function(e){return r.a.createElement("span",{className:"links",onClick:e.onClick}," Sign Out ")}),le=function(e){function t(){return Object(ne.a)(this,t),Object(re.a)(this,Object(se.a)(t).apply(this,arguments))}return Object(oe.a)(t,e),Object(ae.a)(t,[{key:"render",value:function(){var e=this.props,t=e.errorMessage,n=e.signedIn,a=e.signOut,s=e.isAdmin,o=e.user;return"Error with credentials"===t?(console.log("errorMessage is credentials"),r.a.createElement(te.a,{to:"/signin"})):("teamaccess"===o&&(o="Admin"),r.a.createElement("div",{className:""},n?r.a.createElement("div",{className:"nav"},s?r.a.createElement("div",null,r.a.createElement(c.b,{to:"/createuser",className:"links"},"Create New Account")):r.a.createElement("div",null),r.a.createElement(c.b,{to:"/feed",className:"links"},"Feed"),r.a.createElement(c.b,{to:"/createarticle",className:"links"},"Create Article"),r.a.createElement(c.b,{to:"/postgif",className:"links"},"Post GIF Images"),r.a.createElement(c.b,{to:"/profile",className:"links"},"Profile"),t,r.a.createElement(ce,{onClick:a})):r.a.createElement("div",{className:"nav"},r.a.createElement(c.b,{to:"/feed",className:"links"},"Feed"),r.a.createElement(c.b,{to:"/signin",className:"links"},"Sign In")),r.a.createElement("h3",null,"Welcome to Teamwork",o?", ".concat(o):", Guest"),r.a.createElement("h5",null,"... where teams actually WORK!"),r.a.createElement("img",{src:"https://res.cloudinary.com/thevetdoctor/image/upload/v1574600900/teamwork/Penguins.jpg",alt:"Team Bond"})))}}]),t}(a.Component),ie=n(9),ue=function(e){function t(e){var n;return Object(ne.a)(this,t),(n=Object(re.a)(this,Object(se.a)(t).call(this,e))).state={firstName:"",lastName:"",email:"",password:"",gender:"",jobRole:"",department:"",address:""},n.handleChange=n.handleChange.bind(Object(ie.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(ie.a)(n)),n}return Object(oe.a)(t,e),Object(ae.a)(t,[{key:"handleSubmit",value:function(e){e.preventDefault()}},{key:"handleChange",value:function(e){var t=e.target,n=t.name,a=t.value;if(["firstName","lastName","email","password","gender","jobRole","department","address"].indexOf(n)>=0&&this.setState((function(e){return Object(p.a)({},n,"")})),"undefined"!==n&&void 0!==n){if(""===a||""===a.trim())return t.classList.add("empty"),void console.log("".concat(n," is not supplied"));"age"===n&&isNaN(a)&&(t.classList.add("empty"),console.log("".concat(n," should be a number!"))),this.setState((function(e){return Object(p.a)({},n,a)}))}else console.log("name is undefined","target =>",t.parentNode,"val =>",a)}},{key:"render",value:function(){var e=this,t=this.props,n=t.user,a=t.signedIn,s=t.signOut,o=t.onClick;return"teamaccess"===n&&(n="Admin"),a?r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"nav"},r.a.createElement(c.b,{to:"/",className:"links"},"Home"),r.a.createElement(ce,{onClick:s})),r.a.createElement("h3",null,"New User Account"),"Please fill in user details",r.a.createElement("form",{className:"form-selector",onSubmit:this.handleSubmit},r.a.createElement("input",{type:"text",name:"firstName",placeholder:"Enter Firstname",onChange:this.handleChange}),r.a.createElement("input",{type:"text",name:"lastName",placeholder:"Enter Lastname",onChange:this.handleChange}),r.a.createElement("input",{type:"text",name:"email",placeholder:"Put in Email",onChange:this.handleChange}),r.a.createElement("input",{type:"password",name:"password",placeholder:"Enter Password",onChange:this.handleChange}),r.a.createElement("input",{type:"password",name:"password1",placeholder:"Re-enter Password",onChange:this.handleChange}),r.a.createElement("input",{type:"text",name:"gender",placeholder:"Enter Gender",onChange:this.handleChange}),r.a.createElement("input",{type:"text",name:"jobRole",placeholder:"What's the Job Role",onChange:this.handleChange}),r.a.createElement("input",{type:"text",name:"department",placeholder:"Which Department",onChange:this.handleChange}),r.a.createElement("input",{type:"text",name:"address",placeholder:"Enter Address",onChange:this.handleChange}),r.a.createElement("input",{className:"submit-inactive",type:"submit",name:"create-account",value:"Create account",onClick:function(){return o(e.state)}}))):(console.log("signedin is true"),r.a.createElement(te.a,{to:"/"}))}}]),t}(a.Component),de=function(e){function t(e){var n;return Object(ne.a)(this,t),(n=Object(re.a)(this,Object(se.a)(t).call(this,e))).state={email:"",password:""},n.handleChange=n.handleChange.bind(Object(ie.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(ie.a)(n)),n}return Object(oe.a)(t,e),Object(ae.a)(t,[{key:"handleSubmit",value:function(e){e.preventDefault()}},{key:"handleChange",value:function(e){var t=e.target,n=t.name,a=t.value;["email","password"].indexOf(n)>=0&&this.setState((function(e){return Object(p.a)({},n,"")})),"undefined"!==n&&void 0!==n&&(""!==a&&""!==a.trim()?this.setState((function(e){return Object(p.a)({},n,a)})):t.classList.add("empty"))}},{key:"render",value:function(){var e=this,t=this.props,n=t.signedIn,a=t.errorMessage,s=t.onClick;return n?(console.log("SignIn: signedin is true"),r.a.createElement(te.a,{to:"/"})):r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"nav"},r.a.createElement(c.b,{to:"/",className:"links"},"Home")),r.a.createElement("h3",null,"Sign In"),r.a.createElement("div",null,a?r.a.createElement("span",{className:"error"},a," "):r.a.createElement("span",null)),r.a.createElement("form",{className:"form-selector",onSubmit:this.handleSubmit},r.a.createElement("input",{type:"text",name:"email",placeholder:"Put in Email",onChange:this.handleChange}),r.a.createElement("input",{type:"password",name:"password",placeholder:"Enter Password",onChange:this.handleChange}),r.a.createElement("input",{className:"submit-inactive",type:"submit",name:"sign-in",value:"Sign In",onClick:function(){return s(e.state)}})))}}]),t}(a.Component);var pe=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Oop! You missed your way"),r.a.createElement(c.b,{to:"/"},"Back to Teamwork"))},me=function(e){function t(e){var n;return Object(ne.a)(this,t),(n=Object(re.a)(this,Object(se.a)(t).call(this,e))).state={formInput:{firstName:"",lastName:"",email:"",password:"",gender:"",jobRole:"",department:"",address:""},editable:!1},n.handleChange=n.handleChange.bind(Object(ie.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(ie.a)(n)),n.onEdit=n.onEdit.bind(Object(ie.a)(n)),n}return Object(oe.a)(t,e),Object(ae.a)(t,[{key:"onEdit",value:function(e){var t=this;e.preventDefault(),console.log("editable",this.state.editable),this.setState((function(e){return{editable:!t.state.editable}}))}},{key:"handleSubmit",value:function(e){e.preventDefault();var t=e.target.children[9].classList;console.log(t.toggle("inactive"))}},{key:"handleChange",value:function(e){var t=e.target,n=t.name,a=t.value;if(["firstName","lastName","email","password","gender","jobRole","department","address"].indexOf(n)>=0&&this.setState((function(e){return Object(p.a)({},n,"")})),"undefined"!==n&&void 0!==n){if(""===a||""===a.trim())return t.classList.add("empty"),void console.log("".concat(n," is not supplied"));"age"===n&&isNaN(a)&&(t.classList.add("empty"),console.log("".concat(n," should be a number!"))),this.setState((function(e){return Object(p.a)({},n,a)}))}else console.log("name is undefined","target =>",t.parentNode,"val =>",a)}},{key:"render",value:function(){var e=this,t=this.props,n=t.signedIn,a=t.signOut,s=t.user,o=t.onClick;return n?r.a.createElement("div",null,r.a.createElement("div",{className:"nav"},r.a.createElement(c.b,{to:"/",className:"links"},"Home"),r.a.createElement(ce,{onClick:a})),r.a.createElement("h3",null,"Welcome to your page, ",s),this.state.editable?r.a.createElement("form",{className:"form-selector"},r.a.createElement("input",{type:"text",name:"firstName",placeholder:s,onChange:this.handleChange}),r.a.createElement("input",{type:"text",name:"lastName",placeholder:s,onChange:this.handleChange}),r.a.createElement("input",{type:"text",name:"jobRole",placeholder:"current role",onChange:this.handleChange}),r.a.createElement("input",{type:"text",name:"department",placeholder:"current department",onChange:this.handleChange}),r.a.createElement("input",{type:"text",name:"address",placeholder:"current address",onChange:this.handleChange}),r.a.createElement("br",null),r.a.createElement("input",{style:{backgroundColor:"red"},type:"submit",name:"cancel",value:"Cancel",onClick:this.onEdit}),r.a.createElement("input",{className:"submit-inactive",type:"submit",name:"update",value:"Update",onClick:function(){return o(e.state.formInput)}})):r.a.createElement("div",{className:"App"},r.a.createElement("input",{type:"text",name:"firstName",placeholder:s,onChange:this.handleChange,readOnly:!0}),r.a.createElement("input",{type:"text",name:"lastName",placeholder:s,onChange:this.handleChange,readOnly:!0}),r.a.createElement("input",{type:"text",name:"jobRole",placeholder:"current role",onChange:this.handleChange,readOnly:!0}),r.a.createElement("input",{type:"text",name:"department",placeholder:"current department",onChange:this.handleChange,readOnly:!0}),r.a.createElement("input",{type:"text",name:"address",placeholder:"current address",onChange:this.handleChange,readOnly:!0}),r.a.createElement("br",null),r.a.createElement("input",{className:"submit-inactive",type:"submit",name:"edit",value:"Edit Profile",onClick:this.onEdit}))):(console.log("signedin is true"),r.a.createElement(te.a,{to:"/"}))}}]),t}(a.Component),ge=function(e){function t(e){var n;return Object(ne.a)(this,t),(n=Object(re.a)(this,Object(se.a)(t).call(this,e))).state={title:"",article:"",loading:!1},n.handleChange=n.handleChange.bind(Object(ie.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(ie.a)(n)),n}return Object(oe.a)(t,e),Object(ae.a)(t,[{key:"handleSubmit",value:function(e){e.preventDefault(),this.setState({loading:!0})}},{key:"handleChange",value:function(e){var t=e.target,n=t.name,a=t.value;if(["title","article"].indexOf(n)>=0&&this.setState((function(e){return Object(p.a)({},n,"")})),"undefined"!==n&&void 0!==n)return""===a||""===a.trim()?(t.classList.add("empty"),void console.log("".concat(n," is not supplied"))):void this.setState((function(e){return Object(p.a)({},n,a)}));console.log("name is undefined","target =>",t.parentNode,"val =>",a)}},{key:"render",value:function(){var e=this,t=this.props,n=t.articlePosted,a=t.errorMessage,s=t.signedIn,o=t.signOut,l=t.onClick,i=this.state.loading;return s?r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"nav"},this.props.signedIn?r.a.createElement("div",null,r.a.createElement(c.b,{to:"/",className:"links"},"Home"),r.a.createElement(c.b,{to:"/feed",className:"links"},"Feed"),r.a.createElement(c.b,{to:"/profile",className:"links"},"Profile"),r.a.createElement(ce,{onClick:o})):r.a.createElement("div",null,r.a.createElement(c.b,{to:"/signin",className:"links"},"Sign In"))),r.a.createElement("div",null,a?r.a.createElement("span",{className:"error"},"string"!==typeof a?a.message:a," "):r.a.createElement("span",null)),n?r.a.createElement("div",null,r.a.createElement("h3",null,"Article posted, write another article? ")):r.a.createElement("div",null,""!==a&&i?r.a.createElement("div",null,"Loading....."):r.a.createElement("div",null,r.a.createElement("h3",null,"Write & Share"))),r.a.createElement("form",{className:"form-selector",onSubmit:this.handleSubmit},r.a.createElement("input",{type:"text",name:"title",placeholder:"Article Title",onChange:this.handleChange}),r.a.createElement("textarea",{type:"text",name:"article",placeholder:"Your Article",onChange:this.handleChange}),r.a.createElement("input",{className:"submit-inactive",type:"submit",name:"sign-in",value:"Post Article",onClick:function(){return l(e.state)}}))):(console.log("signedin is true"),r.a.createElement(te.a,{to:"/"}))}}]),t}(a.Component),he=function(e){function t(e){var n;return Object(ne.a)(this,t),(n=Object(re.a)(this,Object(se.a)(t).call(this,e))).state={title:"",imageUrl:"C://Users//ACER//Pictures//teamwork//koala.jpg"},n.handleChange=n.handleChange.bind(Object(ie.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(ie.a)(n)),n}return Object(oe.a)(t,e),Object(ae.a)(t,[{key:"handleSubmit",value:function(e){e.preventDefault()}},{key:"handleChange",value:function(e){var t=e.target,n=t.name,a=t.value;if(["email","password"].indexOf(n)>=0&&this.setState((function(e){return Object(p.a)({},n,"")})),"undefined"!==n&&void 0!==n)return""===a||""===a.trim()?(t.classList.add("empty"),void console.log("".concat(n," is not supplied"))):void this.setState((function(e){return Object(p.a)({},n,a)}));console.log("name is undefined","target =>",t.parentNode,"val =>",a)}},{key:"render",value:function(){var e=this,t=this.props,n=t.gifPosted,a=t.errorMessage,s=t.signedIn,o=t.signOut,l=t.onClick;return s?r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"nav"},s?r.a.createElement("div",null,r.a.createElement(c.b,{to:"/",className:"links"},"Home"),r.a.createElement(c.b,{to:"/profile",className:"links"},"Profile"),r.a.createElement(ce,{onClick:o})):r.a.createElement("div",null,r.a.createElement(c.b,{to:"/signin",className:"links"},"Sign In"))),r.a.createElement("div",null,a?r.a.createElement("span",{className:"error"},"string"!==typeof a?a.message:a," "):r.a.createElement("span",null)),n?r.a.createElement("div",null,r.a.createElement("h3",null,"Image uploaded, post another image? ")):r.a.createElement("div",null,r.a.createElement("h3",null,"Post GIF images to your team!")),r.a.createElement("form",{className:"form-selector",onSubmit:this.handleSubmit},r.a.createElement("input",{type:"text",name:"title",placeholder:"GIF Title",onChange:this.handleChange}),r.a.createElement("input",{type:"file",name:"imageUrl",placeholder:"Upload GIF",onChange:this.handleChange}),r.a.createElement("input",{className:"submit-inactive",type:"submit",name:"post-gif",value:"Post GIF",onClick:function(){return l(e.state)}}))):(console.log("signedin is true"),r.a.createElement(te.a,{to:"/"}))}}]),t}(a.Component),Ee=n(41),fe=n(42),be=void 0,ve=function(e){var t=e.errorMessage,n=e.feed,s=e.signedIn,o=e.signOut,l=e.onLoad,i=e.onUpdate,u=e.onDelete,d=Object(a.useState)([]),m=Object(fe.a)(d,2),g=m[0],h=m[1];console.log(g,n);var E=function(e){var t=e.target,n=t.name,a=t.value;if(["title","article"].indexOf(n)>=0&&be.setState((function(e){return Object(p.a)({},n,"")})),console.log("name =>",n,": value =>",a),"undefined"!==n&&void 0!==n)return""===a||""===a.trim()?(t.classList.add("empty"),void console.log("".concat(n," is not supplied"))):void be.setState((function(e){return Object(p.a)({},n,a)}));console.log("name is undefined","target =>",t.parentNode,"val =>",a)};return Object(a.useEffect)((function(){l(),h(n.data)}),[g]),"Error with credentials"===t?(console.log("errorMessage is credentials"),r.a.createElement(te.a,{to:"/signin"})):s?r.a.createElement("div",null,r.a.createElement("div",{className:"nav"},s?r.a.createElement("div",null,r.a.createElement(c.b,{to:"/",className:"links"},"Home"),r.a.createElement(c.b,{to:"/createarticle",className:"links"},"Create Article"),r.a.createElement(c.b,{to:"/postgif",className:"links"},"Post GIF Images"),r.a.createElement(ce,{onClick:o})):r.a.createElement("div",null,r.a.createElement(c.b,{to:"/signin",className:"links"},"Sign In"))),r.a.createElement("div",null,t?r.a.createElement("span",{className:"error"},"string"!==typeof t?t.message:t," "):r.a.createElement("span",null)),r.a.createElement("div",null,r.a.createElement("h3",null,"Posts!")),r.a.createElement("div",null,n.data.length?r.a.createElement("div",{className:"App"},n.data.map((function(e,t){return r.a.createElement("div",{key:t,className:"card"},e.editing?r.a.createElement("div",null,r.a.createElement("span",{className:"cancel btn",onClick:function(){return function(e){console.log("cancel edit status");var t=Object(Ee.a)(g).map((function(t){return e.id===t.id?(t.editing=!1,t):t}));console.log(t,g),h({data:t})}(e)}},"Cancel"),r.a.createElement("span",{className:"delete update btn",onClick:function(){return i({id:e.id,title:be.state.title,article:be.state.article})}},"Update"),r.a.createElement("br",null),r.a.createElement("input",{type:"text",name:"title",placeholder:e.title,onChange:E}),r.a.createElement("br",null),r.a.createElement("textarea",{type:"text",name:"article",placeholder:e.articleOrUrl,onChange:E})):r.a.createElement("div",null,r.a.createElement("span",null,r.a.createElement("b",null,e.title)),r.a.createElement("br",null),r.a.createElement("span",null,e.articleOrUrl.includes("http:")?r.a.createElement("img",{src:e.articleOrUrl,alt:"gif post"}):r.a.createElement("span",null,e.articleOrUrl," ")),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("span",null,e.articleOrUrl.includes("http:")?r.a.createElement("span",null):r.a.createElement("span",{className:"edit btn",onClick:function(){return function(e){console.log("edit status",e,g);var t=g,n=t.map((function(e){return e.editing=!1,e})),a=t.map((function(t){return e.id===t.id?(t.editing=!0,t):t}));console.log(a,n,g),h({data:a})}(e)}},"Edit")),r.a.createElement("span",{className:"delete btn",onClick:function(){return u(e)}},"Delete"),r.a.createElement("br",null))," ")}))):r.a.createElement("div",null,"No posts available",g))):(console.log("feed: signedin is true"),r.a.createElement(te.a,{to:"/signin"}))},Oe=function(){var e=ee.getState(),t=Object(l.b)((function(e){return e})),n=t.signedIn,a=t.user,s=t.isAdmin,o=t.errorMessage,c=t.articlePosted,i=t.gifPosted,u=t.feed;console.log(e);var d=function(e){var t=e.firstName,n=e.lastName,a=e.email,r=e.password,s=e.gender,o=e.jobRole,c=e.department,l=e.address,i="";for(var u in e)if(""===e[u])return i="".concat(u," not supplied!"),ee.dispatch({type:"LOG_ERROR",error:i}),!1;var d={firstName:t,lastName:n,email:a,password:r,gender:s,jobRole:o,department:c,address:l};i="",ee.dispatch({type:"LOG_ERROR",error:i}),ee.dispatch({type:"ADD_USER",newUser:d}),console.log("submitted","newUser =>",d)},p=function(e){var t=e.email,n=e.password,a="";for(var r in e)if(""===e[r])return console.log("item",r,e[r]?e:"not supplied"),a="".concat(r," not supplied!"),ee.dispatch({type:"LOG_ERROR",error:a}),!1;var s={email:t,password:n};a="",ee.dispatch({type:"LOG_ERROR",error:a}),ee.dispatch({type:"LOG_USER",email:t}),ee.dispatch({type:"SIGNIN_USER",user:s})},m=function(e){var t=e.title,n=e.article,a="";for(var r in e)if(""===e[r])return console.log("item",r,e[r]?e:"not supplied"),a="".concat(r," not supplied!"),ee.dispatch({type:"LOG_ERROR",error:a}),!1;var s={title:t,article:n};a="",ee.dispatch({type:"LOG_ERROR",error:a}),ee.dispatch({type:"POST_ARTICLE",newArticle:s})},g=function(e){var t=e.title,n=e.imageUrl,a="";for(var r in e)if(""===e[r])return console.log("item",r,e[r]?e:"not supplied"),a="".concat(r," not supplied!"),ee.dispatch({type:"LOG_ERROR",error:a}),!1;var s={title:t,imageUrl:n};a="",ee.dispatch({type:"LOG_ERROR",error:a}),ee.dispatch({type:"POST_GIF",gifpost:s})},h=function(){console.log("am signing out!"),ee.dispatch({type:"LOG_ERROR",error:""}),ee.dispatch({type:"SIGN_OUT"})},E=function(e){console.log("deleting post with ID ".concat(e.id,"!")),ee.dispatch({type:"LOG_ERROR",error:""}),ee.dispatch({type:"DELETE_POST",post:e})},f=function(e){console.log("editing post with ID ".concat(e,"!")),ee.dispatch({type:"LOG_ERROR",error:""}),ee.dispatch({type:"EDIT_POST",postId:e})},b=function(){console.log("Getting feed!"),ee.dispatch({type:"LOG_ERROR",error:""}),ee.dispatch({type:"GET_FEED"})},v=function(e){var t=e.id,n=e.title,a=e.article;console.log(e);var r="";for(var s in e)if(""===e[s])return console.log("item",s,e[s]?e:"not supplied"),r="".concat(s," not supplied!"),ee.dispatch({type:"LOG_ERROR",error:r}),!1;var o={id:t,title:n,article:a};r="",ee.dispatch({type:"LOG_ERROR",error:r}),ee.dispatch({type:"UPDATE_ARTICLE",articleToUpdate:o})};return r.a.createElement(te.d,null,r.a.createElement(te.b,{path:"/",render:function(e){return r.a.createElement(le,Object.assign({},e,{user:a,isAdmin:s,signedIn:n,signOut:h}))},exact:!0}),r.a.createElement(te.b,{path:"/createuser",render:function(e){return r.a.createElement(ue,Object.assign({},e,{signedIn:n,user:a,errorMessage:o,onClick:d,signOut:h}))}}),r.a.createElement(te.b,{path:"/signin",render:function(e){return r.a.createElement(de,Object.assign({},e,{signedIn:n,errorMessage:o,onClick:p}))}}),r.a.createElement(te.b,{path:"/profile",render:function(e){return r.a.createElement(me,Object.assign({},e,{signedIn:n,user:a,onClick:p,signOut:h}))}}),r.a.createElement(te.b,{path:"/createarticle",render:function(e){return r.a.createElement(ge,Object.assign({},e,{signedIn:n,errorMessage:o,articlePosted:c,onClick:m,signOut:h}))}}),r.a.createElement(te.b,{path:"/postgif",render:function(e){return r.a.createElement(he,Object.assign({},e,{signedIn:n,errorMessage:o,gifPosted:i,onClick:g,signOut:h}))}}),r.a.createElement(te.b,{path:"/feed",render:function(e){return r.a.createElement(ve,Object.assign({},e,{signedIn:n,errorMessage:o,signOut:h,onLoad:b,feed:u,onEdit:f,onUpdate:v,onDelete:E}))}}),r.a.createElement(te.b,{component:pe}))},ye=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Se(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}o.a.render(r.a.createElement(c.a,null,r.a.createElement(l.a,{store:ee},r.a.createElement(Oe,null))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/teamui",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/teamui","/service-worker.js");ye?(!function(e,t){fetch(e).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Se(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):Se(t,e)}))}}()}},[[43,1,2]]]);
//# sourceMappingURL=main.44bc6cb5.chunk.js.map