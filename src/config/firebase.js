import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCyyGAAD1D55qN14zCZHsbnxiKebQGo8Y4",
  authDomain: "ai-tools-833e0.firebaseapp.com",
  projectId: "ai-tools-833e0",
  storageBucket: "ai-tools-833e0.appspot.com",
  messagingSenderId: "658028828235",
  appId: "1:658028828235:web:9d7394f3147488e5259fce"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);


// import { initializeApp } from "firebase/app";
// import { getStorage } from "firebase/storage";
// import { getFirestore } from "firebase/firestore";
// import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyAoj8YZkUCE9wZBDoEbYHGtqK7dj_4oudo",
//   authDomain: "role-based-dashboard.firebaseapp.com",
//   projectId: "role-based-dashboard",
//   storageBucket: "role-based-dashboard.appspot.com",
//   messagingSenderId: "1083774049699",
//   appId: "1:1083774049699:web:8d11c65e14201f39aa4e16",
// };

// const app = initializeApp(firebaseConfig);

// export const db = getFirestore(app);
// export const storage = getStorage(app);
// export const auth = getAuth(app);