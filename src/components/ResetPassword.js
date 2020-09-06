/* eslint-disable no-console */
/* eslint-disable no-useless-escape */
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import NavBar from './NavBar/NavBar';
import Input from '../components/widgets/Input';
import TextSmall from '../components/widgets/Text';
import AlertCardStyle from '../components/widgets/Alert';
import { LinkButton, SubmitButton, LoaderContainer } from '../components/widgets/Buttons';
import Footer from './Footer';
import BeatLoader from "react-spinners/BeatLoader";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const handleToast = (msg) => toast(msg);

const ResetPassword = (props) => {
 
    let { signedIn, signOut, errorMessage, onClick } = props;
    const { register, handleSubmit, errors } = useForm({ validateCriteriaMode: "all" });
    const [ loading, setLoading ] =  useState(false);
    const [ submitted, setSubmitted ] =  useState(false);

    const onSubmit = (data) => {
      console.log(data);
      setLoading(true);
      setSubmitted(true);
      onClick(data);
      handleToast('sending');
      setTimeout(() => {
        setLoading(false);
      }, 1000);      
    }

    return (
      <div className="">
        <NavBar home posts article gif profile signout createuser signedIn={signedIn} signOut={signOut} />
        <h3>Password Reset || Recover Password</h3>

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
            type="email"
            name="email"
            ref={register({
              required: "Please provide registered email",
              pattern: {
                value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w+)+$/,
                message: "Email not valid"
              }
            })}
            placeholder="example@email.com"
          />
          {errors.email && <p className="text-xs text-red-500 my-2">{errors.email.message}</p>}

          {loading ?
          <LoaderContainer>
              <BeatLoader
                size={30}
                color="#43a047"
                loading
              />
          </LoaderContainer>
          :<SubmitButton type="submit" className="w-full mt-6">
           Recover password
          </SubmitButton>}
        </form>

        {submitted && (
          <div
            className="h-screen w-screen fixed top-0 left-0 z-40 flex justify-center items-center pb-16"
            style={{ backgroundColor: "#AFDEB199" }}
          >
            <AlertCardStyle className="w-10/12 bg-white">
              {/* <img src="/images/success.svg" alt="" className="mx-auto mb-12" /> */}
              <TextSmall className="text-center mb-6" style={{ color: "#43A047" }}>
               {signedIn ? <span> Article posted, write another article?</span> : errorMessage}
              </TextSmall>

              <LinkButton link="/feed" className="w-10/12 mx-auto">
                Back to Posts
              </LinkButton>
            </AlertCardStyle>
            </div>
        )}
        <Footer />
      </div>
    );
}

export default ResetPassword;
