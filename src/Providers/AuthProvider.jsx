import { createContext } from "react";
import {
   createUserWithEmailAndPassword,
   signInWithEmailAndPassword,
   updateProfile,
} from "firebase/auth";
import { auth } from "../Firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
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

   const allValues = { createUser, updateUserProfile, loginUser };

   return (
      <AuthContext.Provider value={allValues}>{children}</AuthContext.Provider>
   );
};

export default AuthProvider;
