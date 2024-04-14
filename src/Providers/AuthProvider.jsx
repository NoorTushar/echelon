import { createContext } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
   const createUser = (email, password) => {
      return createUserWithEmailAndPassword(auth, email, password);
   };

   const allValues = { createUser };

   return (
      <AuthContext.Provider value={allValues}>{children}</AuthContext.Provider>
   );
};

export default AuthProvider;
