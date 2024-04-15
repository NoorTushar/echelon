import { createContext, useEffect, useState } from "react";
import {
   GithubAuthProvider,
   GoogleAuthProvider,
   createUserWithEmailAndPassword,
   onAuthStateChanged,
   signInWithEmailAndPassword,
   signInWithPopup,
   signOut,
   updateProfile,
} from "firebase/auth";
import { auth } from "../Firebase/firebase.config";

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
   const [user, setUser] = useState(null);
   const [loading, setLoading] = useState(true);

   // create user
   const createUser = (email, password) => {
      return createUserWithEmailAndPassword(auth, email, password);
   };

   // login user
   const loginUser = (email, password) => {
      setLoading(true);
      return signInWithEmailAndPassword(auth, email, password);
   };

   // update user profile
   const updateUserProfile = (userName, userPhoto) => {
      setLoading(true);
      return updateProfile(auth.currentUser, {
         displayName: userName,
         photoURL: userPhoto,
      });
   };

   // logOut user
   const logOutUser = () => {
      return signOut(auth);
   };

   // google login
   const loginWithGoogle = () => {
      setLoading(true);
      return signInWithPopup(auth, googleProvider);
   };

   // gitHub login
   const loginWithGitHub = () => {
      setLoading(true);
      return signInWithPopup(auth, gitHubProvider);
   };

   // observe user
   useEffect(() => {
      const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
         console.log("Current value of the current user", currentUser);
         setUser(currentUser);
         setLoading(false);
      });
      return () => {
         unSubscribe();
      };
   }, []);

   const allValues = {
      user,
      loading,
      createUser,
      updateUserProfile,
      loginUser,
      logOutUser,
      loginWithGoogle,
      loginWithGitHub,
   };

   return (
      <AuthContext.Provider value={allValues}>{children}</AuthContext.Provider>
   );
};

export default AuthProvider;
