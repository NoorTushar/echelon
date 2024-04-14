import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

const firebaseConfig = {
   apiKey: "AIzaSyBxbcqFJGE_OEDY6KOg1hTFMJyPnxn79cc",
   authDomain: "echelon-tushar.firebaseapp.com",
   projectId: "echelon-tushar",
   storageBucket: "echelon-tushar.appspot.com",
   messagingSenderId: "715697985105",
   appId: "1:715697985105:web:68153124e3791a0b420a70",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
