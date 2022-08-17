import { faFacebook, faGithub, faGoogle, } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useSignInWithEmailAndPassword, useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import UseToken from "../../../Components/Components.Nahid/Hooks/useToken";
import Loading from "../../../Components/Components.Nahid/Loading";
import auth from "../../../firebase.init";

const SigninLeft = () => {
  const [signInWithEmailAndPassword, suser, sloading, serror] = useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);
  const [SignInWithGithub, gituser, gitloading, giterror] = useSignInWithGithub(auth);
  const [SignInWithFacebook, fuser, floading, ferror] = useSignInWithFacebook(auth);

  const { register, handleSubmit, reset, errors } = useForm();
  const navigate = useNavigate();
  const location = useLocation();

  //////////
  let someErrorMessages;
  const getFirebaseErrorMessages = (firebaseMessage)=>{
    const messages = firebaseMessage?.split("/")[1].split(")")[0]
    someErrorMessages=messages;
  }

  if (serror || gerror || giterror || ferror) {

  if(serror) getFirebaseErrorMessages(serror?.message)
  if(gerror) getFirebaseErrorMessages(gerror?.message)
  if(giterror) getFirebaseErrorMessages(giterror?.message)
  if(ferror) getFirebaseErrorMessages(ferror?.message)
  }else{
    someErrorMessages = null
  }
  ///////

  
  const from = location.state?.from?.pathname || '/';

  const [token] = UseToken(suser || guser || gituser || fuser);

  let signinError;

  if (sloading || gloading || gitloading || floading) {
      return <Loading />
  }

  // if (serror || gerror || giterror || ferror) {
  //     signinError = <p className="text-red-700">{serror?.message || gerror?.message || giterror?.message || ferror?.message}</p>
  // }

  if (token) {
      navigate(from, { replace: true });
      toast.success("Signin User Successfully")
  }

  const handleSigninform = async (data) => {
      const email = data.email;
      const password = data.password;
      await signInWithEmailAndPassword(email, password)
          .then(() => {
              reset();
          })
  }


  const handleGoogleSignin = async () => {
      await signInWithGoogle()
  }


  const handleGithubSignin = async () => {
      await SignInWithGithub()
  }


  const handleFacebookSignin = async () => {
      await SignInWithFacebook()
  }


  return (
    <div className="w-full text-center mx-auto rounded">
      <h2 className="font-bold text-2xl py-5">Sign In</h2>
      {/* start some error message  */}
      {
        someErrorMessages && 
        <div className="some-error-message p-4 m-4 w-2/3 mx-auto bg-red-100  text-red-600 border rounded-lg text-sm  flex justify-center items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {someErrorMessages}
      </div>
      }
      {/* end  */}

      <div className="py-5">
        <button onClick={handleGoogleSignin}>
          <FontAwesomeIcon
            className="mx-3 p-2 rounded-full border hover:bg-green-700 hover:text-white"
            size="1x"
            color="gray"
            icon={faGoogle}
          />
        </button>
        <button onClick={handleGithubSignin}>
          <FontAwesomeIcon
            className="mx-3 p-2 rounded-full border hover:bg-green-700 hover:text-white"
            size="1x"
            color="gray"
            icon={faGithub}
          />
        </button>
        <button onClick={handleFacebookSignin}>
          <FontAwesomeIcon
            className="mx-3 p-2 rounded-full border hover:bg-green-700 hover:text-white"
            size="1x"
            color="gray"
            icon={faFacebook}
          />
        </button>
      </div>
      <span className="text-gray-500">or use your account</span>
      <form
        onSubmit={handleSubmit(handleSigninform)}
        action=""
        className="py-3"
      >
        <input
          {...register("email", {
            required: { value: true, message: "Email is Required" },
            pattern: {
              value:
                /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
              message: "Provide a Valid Email",
            },
          })}
          required
          type="email"
          placeholder="Enter Your Email"
          className="input bg-slate-100 my-2 block mx-auto input-ghost w-full max-w-xs"
        />
        <label htmlhtmlFor="email">
          {errors?.email?.type === "required" && (
            <span className="text-red-700">{errors.email?.message}</span>
          )}
        </label>
        <label htmlhtmlFor="email">
          {errors?.email?.type === "pattern" && (
            <span className="text-red-700">{errors.email?.message}</span>
          )}
        </label>
        <input
          {...register("password")}
          type="password"
          placeholder="Enter Your Password"
          required
          className="input bg-slate-100 my-2 block mx-auto input-ghost w-full max-w-xs"
        />
        <span className="text-gray-400 hover:text-accent">
          <Link to="/forgotpassword">forgot Your Password?</Link>
        </span>
        {/* {signinError} */}
        <input
          className="btn btn-outline px-7 btn-natural my-5 block mx-auto"
          type="submit"
          value="SIGN IN"
        />
      </form>
    </div>
  );
};

export default SigninLeft;
