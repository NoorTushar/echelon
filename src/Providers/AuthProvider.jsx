import { createContext, useEffect, useState } from "react";
import {
   createUserWithEmailAndPassword,
   onAuthStateChanged,
   signInWithEmailAndPassword,
   signOut,
   updateProfile,
} from "firebase/auth";
import { auth } from "../Firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
   const [user, setUser] = useState(null);

   // create user
   const createUser = (email, password) => {
      return createUserWithEmailAndPassword(auth, email, password);
   };

   // login user
   const loginUser = (email, password) => {
      return signInWithEmailAndPassword(auth, email, password);
   };

   // update user profile
   const updateUserProfile = (userName, userPhoto) => {
      return updateProfile(auth.currentUser, {
         displayName: userName,
         photoURL: userPhoto,
      });
   };

   // authChange observer
   useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
         console.log(`observing the user: ${currentUser?.email}`);
         setUser(currentUser);
      });

      return () => unsubscribe();
   }, []);

   // logOut user

   const logOutUser = () => {
      return signOut(auth);
   };

   const allValues = {
      user,
      createUser,
      updateUserProfile,
      loginUser,
      logOutUser,
   };

   return (
      <AuthContext.Provider value={allValues}>{children}</AuthContext.Provider>
   );
};

export default AuthProvider;
