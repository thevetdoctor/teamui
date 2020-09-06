/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useForm } from "react-hook-form";
import NavBar from './NavBar/NavBar';
import { InputStyle } from '../components/widgets/Input';
import { SubmitButton } from '../components/widgets/Buttons';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Input = React.forwardRef((props, ref) => {
  return (
  <div>
    {props.editable
      ? (
        <InputStyle className={props.className}>
        <input
          ref={ref}
          id={props.name}
          name={props.name}
          type={props.type}
          placeholder={props.placeholder}
          required={props.required && true}
          readOnly="readonly"
        />
      </InputStyle>
      ) : (
        <InputStyle className={props.className}>
        <input
          ref={ref}
          id={props.name}
          name={props.name}
          type={props.type}
          placeholder={props.placeholder}
          required={props.required && true}
        />
      </InputStyle>
      )}
  </div>
    )
   });

const handleToast = (msg) => toast(msg);

const ProfilePage = (props) => {

  const { register, handleSubmit, errors } = useForm({ validateCriteriaMode: "all" });
  const { signedIn, signOut, user, isAdmin, onClick } = props;
  const [ editable, setEditable ] =  useState(false);
  const [ loading, setLoading ] =  useState(false);
  const [ submitted, setSubmitted ] =  useState(false);

  const onEdit = (e) => {
    e.preventDefault();
    setEditable(state => !state);
  }

  const onSubmit = (data) => {
    // e.preventDefault();
    // // console.log(this.state);
    // const inputClass = e.target.children[9].classList;
    // console.log(inputClass.toggle('inactive'));
    console.log(data);
    setLoading(true);
    setSubmitted(true);
    onClick(data);
    handleToast('sending');
    let timer = setTimeout(() => {
      setLoading(false);
    }, 1000);     
    clearTimeout(timer);
  }


    if (!signedIn) {
      console.log('signedin is true');
      return <Redirect to="/" />;
    }
    return (
      <div className="">
        <NavBar home posts article gif signin signout signedIn={signedIn} signOut={signOut} />
        <h3>
          Welcome to your page,
          {isAdmin ? 'Admin' : user.firstname}
        </h3>

        <form className="form-selector" onSubmit={handleSubmit(onSubmit)}>
        <Input
            className="w-full mb-3"
            placeholder={user.firstname}
            type="text"
            name="firstName"
            ref={register({
              // required: "firstname required",
              minLength: {
                value: 3,
              }
            })}
            editable
            value={user.firstname}
          />
          {errors.firstName && <p className="text-xs text-red-500 my-2">{errors.firstName.message}</p>}
        <Input
            className="w-full mb-3"
            placeholder={user.lastname}
            type="text"
            name="lastName"
            ref={register({
              // required: "lastname required",
              minLength: {
                value: 3,
              }
            })}
            editable
          />
          {errors.lastName && <p className="text-xs text-red-500 my-2">{errors.lastName.message}</p>}
        <Input
            className="w-full mb-3"
            placeholder={user.jobrole}
            type="text"
            name="jobrole"
            ref={register({
              // required: "jobrole required",
              minLength: {
                value: 3,
              }
            })}
            editable
          />
          {errors.jobrole && <p className="text-xs text-red-500 my-2">{errors.jobrole.message}</p>}
        <Input
            className="w-full mb-3"
            placeholder={user.department}
            type="text"
            name="department"
            ref={register({
              // required: "department required",
              minLength: {
                value: 3,
              }
            })}
            editable
          />
          {errors.department && <p className="text-xs text-red-500 my-2">{errors.department.message}</p>}
        <Input
            className="w-full mb-3"
            placeholder={user.address}
            type="text"
            name="address"
            ref={register({
              // required: "address required",
              minLength: {
                value: 3,
              }
            })}
            editable
          />
          {errors.address && <p className="text-xs text-red-500 my-2">{errors.address.message}</p>}
          <br />
          {!editable &&
          <SubmitButton type="submit" className="w-full mt-6 submit-inactive" onClick={onEdit}>
           Edit Profile
          </SubmitButton>}
          {editable &&
          <SubmitButton type="submit" className="w-full mt-6 submit-inactive" style={{ backgroundColor: 'red' }} onClick={onEdit}>
            Cancel
          </SubmitButton>}
          {editable &&
          <SubmitButton type="submit" className="w-full mt-6">
           Update
          </SubmitButton>}
        </form>
      </div>
    );
}

export default ProfilePage;
