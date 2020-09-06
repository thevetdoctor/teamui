/* eslint-disable no-console */
import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useForm } from "react-hook-form";
import NavBar from './NavBar/NavBar';
import Input from '../components/widgets/Input';
import TextArea from '../components/widgets/Input';
import TextSmall from '../components/widgets/Text';
import AlertCardStyle from '../components/widgets/Alert';
import { LinkButton, SubmitButton, LoaderContainer } from '../components/widgets/Buttons';
import Footer from './Footer';
import BeatLoader from "react-spinners/BeatLoader";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// const notify = () => toast('Wow so easy !');

const handleToast = (msg) => toast(msg);


const CreateArticle = (props) => {

  const { articlePosted, errorMessage, signedIn, signOut, onClick } = props;
  const { register, handleSubmit, errors } = useForm({ validateCriteriaMode: "all" });
  const [ loading, setLoading ] =  useState(false);
  const [ submitted, setSubmitted ] =  useState(false);
  // const [ error, setError ] =  useState('');
  // submitted && (document.body.style.overflow = "hidden");

  // console.log(error);

  const onSubmit = (data) => {
      console.log(data);
      setLoading(true);
      setSubmitted(true);
      onClick(data);
      handleToast('sending');
    // let timer = setTimeout(() => {
      //   setLoading(false);
      // }, 1000);     
      // clearTimeout(timer); 
      setLoading(false);
    }

    if (!signedIn) {
      console.log('signedin is false');
      return <Redirect to="/" />;
    }
   
    // useEffect(() => {
    //   setLoading(true);
    // }, [articlePosted])
    
    return (
      <div className="">
        <NavBar home posts gif profile signin signout createuser signedIn={signedIn} signOut={signOut} />
        <div><h3>Write & Share</h3></div>
        <form className="form-selector" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-div">
          <Input
            className="w-full mb-3"
            placeholder="Article Title"
            type="text"
            name="title"
            ref={register({
              required: "Title required",
              minLength: {
                value: 3,
                message: "Short title ? why not longer ?"
              }
            })}
          />
          {errors.title && <p className="text-xs text-red-500 my-2">{errors.title.message}</p>}

          <TextArea
            className="w-full mb-3"
            placeholder="Your Article"
            type="text"
            name="article"
            ref={register({
              required: "Article required",
              minLength: {
                value: 5,
                message: "Short tip ? Please, write more !"
              }
            })}
          />
          {errors.article && <p className="text-xs text-red-500 my-2">{errors.article.message}</p>}

          </div>
          <p className="text-xs mt-5 text-center w-10/12 mx-auto" style={{ color: "#43A047" }}>
            Your location is recorded as part of report data.
          </p>
          {loading ?
          <LoaderContainer>
              <BeatLoader
                size={30}
                color="#43a047"
                loading
              />
          </LoaderContainer>
          :<SubmitButton type="submit" className="w-full mt-6">
           Post Article
          </SubmitButton>}
        </form>
        {submitted && (
          <div
            // className="h-screen w-screen fixed top-0 left-0 z-40 flex justify-center items-center pb-16"
            className="h-screen w-screen fixed top-0 left-0 z-40 flex justify-center items-center pb-16"
            style={{ backgroundColor: "#AFDEB199" }}
          >
            <AlertCardStyle className="w-10/12 bg-white">
              {/* <img src="/images/success.svg" alt="" className="mx-auto mb-12" /> */}
              <TextSmall className="text-center mb-6" style={{ color: "#43A047" }}>
               {articlePosted ? <span> Article posted, write another article?</span> : errorMessage}
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

export default CreateArticle;
