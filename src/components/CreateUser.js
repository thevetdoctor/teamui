/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable no-useless-escape */
import React, { useState, useRef } from 'react';
import { Redirect } from 'react-router-dom';
import { useForm } from "react-hook-form";
import NavBar from './NavBar/NavBar';
import Input from '../components/widgets/Input';
import { SelectInput } from '../components/widgets/Input';
import TextSmall from '../components/widgets/Text';
import AlertCardStyle from '../components/widgets/Alert';
import { LinkButton, SubmitButton, LoaderContainer } from '../components/widgets/Buttons';
import Footer from './Footer';
import BeatLoader from "react-spinners/BeatLoader";
import { toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';

const handleToast = (msg) => toast(msg);

const CreateUser = (props) => {

    const { register, handleSubmit, errors, watch } = useForm({ validateCriteriaMode: "all" });
    const password = useRef({});
    password.current = watch("password", "");

    let { signedIn, signOut, errorMessage, onClick } = props;
    const [ loading, setLoading ] =  useState(false);
    const [ submitted, setSubmitted ] =  useState(false);

    const onSubmit = (data) => {
      console.log(data);
      setLoading(true);
      setSubmitted(true);
      const get = onClick(data);
      handleToast('sending');
      // let timer = setTimeout(() => {
      //   setLoading(false);
      // }, 1000);     
      // clearTimeout(timer);   
      setLoading(false);
    }

    if (signedIn) {
      console.log('SignIn: signedin is true');
      return <Redirect to="/" />;
      // return this.history.push('/');
    }

    return (
      <div className="">
        <NavBar home posts article gif profile signin signout signedIn={signedIn} signOut={signOut} />
        <h3>New User Account</h3>
        Please fill in user details

        <form className="form-selector" onSubmit={handleSubmit(onSubmit)}>
        <Input
            className="w-full mb-3"
            placeholder="Enter Firstname"
            type="text"
            name="firstName"
            ref={register({
              required: "firstname required",
              minLength: {
                value: 3,
              }
            })}
          />
          {errors.firstName && <p className="text-xs text-red-500 my-2">{errors.firstName.message}</p>}
        <Input
            className="w-full mb-3"
            placeholder="Enter Lastname"
            type="text"
            name="lastName"
            ref={register({
              required: "lastname required",
              minLength: {
                value: 3,
              }
            })}
          />
          {errors.lastName && <p className="text-xs text-red-500 my-2">{errors.lastName.message}</p>}
          <Input
            className="w-full mb-3"
            placeholder="Put in Email"
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
            placeholder="Enter Password"
            type="password"
            name="password"
            ref={register({
              required: "Please enter password",
              minLength: {
                value: 5,
                message: "password should be at least 8 characters"
              }
            })}
          />
          {errors.password && <p className="text-xs text-red-500 my-2">{errors.password.message}</p>}
          <Input
            className="w-full mb-3"
            placeholder="Re-enter Password"
            type="password"
            name="confirmPassword"
            ref={register({
              required: "Please re-enter password",
              minLength: {
                value: 5,
                message: "password should be at least 8 characters"
              },
              validate: (value) => value === password.current || "The passwords do not match"
            })}
          />
          {errors.confirmPassword && <p className="text-xs text-red-500 my-2">{errors.confirmPassword.message}</p>}
          <SelectInput placeholder="Select Gender"
            name="gender"
            className="mx-auto"
            options={[
              "Male",
              "Female",
            ]}
            ref={register({
              required: "Gender required",
            })}
          />
          {errors.gender && <p className="text-xs text-red-500 my-2">{errors.gender.message}</p>}
          <Input
            className="w-full mb-3"
            placeholder="What's the Job Role"
            type="text"
            name="jobRole"
            ref={register({
              required: "jobrole required",
              minLength: {
                value: 3,
              }
            })}
          />
          {errors.jobRole && <p className="text-xs text-red-500 my-2">{errors.jobRole.message}</p>}   
          <Input
            className="w-full mb-3"
            placeholder="Which department are you?"
            type="text"
            name="department"
            ref={register({
              required: "department required",
              minLength: {
                value: 3,
              }
            })}
          />
          {errors.department && <p className="text-xs text-red-500 my-2">{errors.department.message}</p>}   
          <Input
            className="w-full mb-3"
            placeholder="Enter Address"
            type="text"
            name="address"
            ref={register({
              required: "address required",
              minLength: {
                value: 3,
              }
            })}
          />
          {errors.address && <p className="text-xs text-red-500 my-2">{errors.address.message}</p>}
          
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
        {submitted && (
          <div
            className="h-screen w-screen fixed top-0 left-0 z-40 flex justify-center items-center pb-16"
            style={{ backgroundColor: "#AFDEB199" }}
          >
            <AlertCardStyle className="w-10/12 bg-white">
              <TextSmall className="text-center mb-6" style={{ color: "#43A047" }}>
               {signedIn ? <span> Registration successful, proceed?</span> : errorMessage}
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

export default CreateUser;
