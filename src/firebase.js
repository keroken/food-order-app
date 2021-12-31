// import { initializeApp } from 'firebase/app';
// import { getDatabase } from "firebase/database";

export const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: `${process.env.REACT_APP_APP_NAME}.firebaseapp.com`,
  projectId: process.env.REACT_APP_APP_NAME,
  storageBucket: `${process.env.REACT_APP_APP_NAME}.appspot.com`,
  databaseURL: `https://${process.env.REACT_APP_APP_NAME}-default-rtdb.firebaseio.com`,
  messagingSenderId: process.env.REACT_APP_MESSAGE_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID
};
// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const database = getDatabase(app);

// export default database;