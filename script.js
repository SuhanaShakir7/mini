


  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
  import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";

  const firebaseConfig = {
    apiKey: "AIzaSyCq2iHcZNPOmZoGmc-keVchI3MmI_wfYqs",
    authDomain: "authentication-6beba.firebaseapp.com",
    projectId: "authentication-6beba",
    storageBucket: "authentication-6beba.appspot.com",
    messagingSenderId: "668623857222",
    appId: "1:668623857222:web:d6798a438d280357dfcc47"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  // SignUp Function
  window.signUp = () => {
    const email = document.getElementById("signUpEmail").value;
    const password = document.getElementById("signUpPassword").value;
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => alert(" User signed up successfully!"))
      .catch(error => alert(" Error: " + error.message));
  };

  // SignIn Function
  window.signIn = () => {
    const email = document.getElementById("signInEmail").value;
    const password = document.getElementById("signInPassword").value;
    signInWithEmailAndPassword(auth, email, password)
      .then(() => alert(" Logged in successfully!"))
      .catch(error => alert(" Error: " + error.message));
  };

  // Show SignUp Form
  window.showSignUp = () => {
    document.getElementById("signUpForm").classList.remove("d-none");
    document.getElementById("signInForm").classList.add("d-none");
  };

  // Show SignIn Form
  window.showSignIn = () => {
    document.getElementById("signInForm").classList.remove("d-none");
    document.getElementById("signUpForm").classList.add("d-none");
  };
