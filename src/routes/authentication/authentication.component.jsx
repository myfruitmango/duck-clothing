// import { useEffect } from "react";
// import { getRedirectResult } from "firebase/auth";

import // auth,
// signInWithGooglePopup,
// signInWithGoogleRedirect,
// createUserDocumentFromAuth,
"../../utils/firebase/firebase.utils";

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";

const Authentication = () => {
  // useEffect(() => {
  //   const fetch = async () => {
  //     const response = await getRedirectResult(auth);
  //     if (response) {
  //       const userDocRef = await createUserDocumentFromAuth(response.user);
  //     }
  //   };
  //   fetch();
  // }, []);

  // const logGoogleRedirectUser = async () => {
  //   const { user } = await signInWithGoogleRedirect();
  //   console.log({ user });
  // };

  return (
    <div>
      <h1>Sign In Page</h1>
      <SignInForm />
      {/*
        <button onClick={logGoogleRedirectUser}>
          Sign in with Google Redirect
        </button>
      */}
      <SignUpForm />
    </div>
  );
};
export default Authentication;
