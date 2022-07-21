import {
  faFacebook,
  faGithub,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
// import {
//   useAuthState,
//   useSignInWithEmailAndPassword,
//   useSignInWithFacebook,
//   useSignInWithGithub,
//   useSignInWithGoogle,
// } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
// import Loading from "../../Components/Loading";
// import UseToken from "../../Components/UseToken";
// import auth from "../../firebase.init";

const SigninLeft = () => {
  // const [user] = useAuthState(auth);
  // const [signInWithEmailAndPassword, suser, sloading, serror] =
  //   useSignInWithEmailAndPassword(auth);
  // const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);
  // const [SignInWithGithub, gituser, gitloading, giterror] =
  //   useSignInWithGithub(auth);
  // const [SignInWithFacebook, fuser, floading, ferror] =
  //   useSignInWithFacebook(auth);

  const { register, handleSubmit, reset, errors } = useForm();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  // const [token] = UseToken(user?.email);

  let signinError;

  // if (sloading || gloading || gitloading || floading) {
  //   return <Loading />;
  // }

  // if (serror || gerror || giterror || ferror) {
  //   signinError = (
  //     <p className="text-red-700">
  //       {serror?.message ||
  //         gerror?.message ||
  //         giterror?.message ||
  //         ferror?.message}
  //     </p>
  //   );
  // }

  // if (token) {
  //   navigate(from, { replace: true });
  //   toast.success("Signin User Successfully");
  // }

  const handleSigninform = async (data) => {
    const email = data.email;
    const password = data.password;
    // await signInWithEmailAndPassword(email, password).then(() => {
    //   reset();
    // });
  };

  const handleGoogleSignin = async () => {
    // await signInWithGoogle();
  };

  const handleGithubSignin = async () => {
    // await SignInWithGithub();
  };

  const handleFacebookSignin = async () => {
    // await SignInWithFacebook();
  };

  return (
    <div className="w-full text-center mx-auto rounded">
      <h2 className="font-bold text-2xl py-5">Sign In</h2>
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
        <label htmlFor="email">
          {errors?.email?.type === "required" && (
            <span className="text-red-700">{errors.email?.message}</span>
          )}
        </label>
        <label htmlFor="email">
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
        {signinError}
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
