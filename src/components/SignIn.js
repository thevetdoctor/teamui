/* eslint-disable no-console */
/* eslint-disable no-useless-escape */
import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useForm } from "react-hook-form";
import NavBar from './NavBar/NavBar';
import Input from '../components/widgets/Input';
import TextSmall from '../components/widgets/Text';
import { SubmitButton, LoaderContainer } from '../components/widgets/Buttons';
import Footer from './Footer';
import BeatLoader from "react-spinners/BeatLoader";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const handleToast = (msg) => toast(msg);

const SignIn = (props) => {
 
    let { signedIn, signOut, errorMessage, onClick, user } = props;
    const { register, handleSubmit, errors } = useForm({ validateCriteriaMode: "all" });
    const [ loading, setLoading ] =  useState(false);
    // const [ submitted, setSubmitted ] =  useState(false);

    const onSubmit = (data) => {
      console.log(data);
      setLoading(true);
      // setSubmitted(true);
      onClick(data);
      handleToast('sending');
      let timer = setTimeout(() => {
        setLoading(false);
      }, 1000);     
      clearTimeout(timer); 
    }

    if (signedIn) {
      console.log('SignIn: signedin is true');
      return <Redirect to="/" />;
    }
    if (errorMessage.includes('undefined')) {
      console.log('Back to sign in');
      return <Redirect to="/signin" />;
    }
    if (errorMessage.includes('credentials')) errorMessage = 'Error found!';
    if (!signedIn && (user !== 'Guest')) user = 'Guest';

    return (
      <div className="">
        <NavBar home posts article gif profile signout createuser signedIn={signedIn} signOut={signOut} />
        <h3>Log In</h3>

        <div>
          {errorMessage ? (
            <span className="error">
              {errorMessage}
            </span>
          ) : <span />}
        </div>

        <form className="form-selector" onSubmit={handleSubmit(onSubmit)}>
          <Input
            className="w-full mb-3"
            placeholder="Email"
            type="text"
            name="email"
            ref={register({
              required: "Please provide registered email",
              pattern: {
                value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w+)+$/,
                message: "Email not valid"
              }
            })}
          />
          {errors.email && <p className="text-xs text-red-500 my-2">{errors.email.message}</p>}
          <Input
            className="w-full mb-3"
            placeholder="Password"
            type="password"
            name="password"
            ref={register({
              required: "Please enter authorized password",
              minLength: {
                value: 5,
                message: "password should be at least 8 characters"
              }
            })}
          />
          {errors.password && <p className="text-xs text-red-500 my-2">{errors.password.message}</p>}

          <Link to="/resetpassword">
              <TextSmall className="mt-4" color="#43A047">
                Forgot password?
              </TextSmall>
          </Link>

          {loading ?
          <LoaderContainer>
              <BeatLoader
                size={30}
                color="#43a047"
                loading
              />
          </LoaderContainer>
          :<SubmitButton type="submit" className="w-full mt-6">
           Sign In
          </SubmitButton>}
        </form>

        <Footer />
      </div>
    );
}

export default SignIn;
