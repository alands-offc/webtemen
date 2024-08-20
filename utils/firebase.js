import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCP4Wj1DV8mpilqbJfbwXhr1Q7Un8cxiJ0",
  authDomain: "register-app-6f36e.firebaseapp.com",
  projectId: "register-app-6f36e",
  storageBucket: "register-app-6f36e.appspot.com",
  messagingSenderId: "964037623738",
  appId: "1:964037623738:web:b967f56313606a1ccbe783",
  measurementId: "G-M957ZYLHVC"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
