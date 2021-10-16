
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.1.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBnUHtLmKDD6ZwFmwSwhDQ4UhddT5MEGL4",
    authDomain: "project-syffah.firebaseapp.com",
    projectId: "project-syffah",
    storageBucket: "project-syffah.appspot.com",
    messagingSenderId: "530865337729",
    appId: "1:530865337729:web:53d8719e9747f343fa2480",
    measurementId: "G-GT42C1LSYY"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);


//  code 
var datab  = firebase.database().ref('data');
function UserRegister(){
var email = document.getElementById('eemail').value;
var password = document.getElementById('lpassword').value;
firebase.auth().createUserWithEmailAndPassword(email,password).then(function(){
    
}).catch(function (error){
    var errorcode = error.code;
    var errormsg = error.message;
});
}
const auth = firebase.auth();
function SignIn(){
    var email = document.getElementById('eemail').value;
    var password = document.getElementById('lpassword').value;
    const promise = auth.signInWithEmailAndPassword(email,password);
    promise.catch( e => alert(e.msg));
    window.open("https://www.google.com","_self");
}
document.getElementById('form').addEventListener('submit', (e) => {
    e.preventDefault();
    var userInfo = datab.push();
    userInfo.set({
        name: getId('fname'),
        email : getId('eemail'),
        password : getId('lpassword')
    });
    alert("Successfully Signed Up");
    console.log("sent");
    document.getElementById('form').reset();
});
function  getId(id){
    return document.getElementById(id).value;
}

function signOut(){
		
    auth.signOut();
    alert("Signed Out");
    
}

/**/
import { getAuth, onAuthStateChanged } from "firebase/auth";

const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    document.getElementById("log-in-or-out") = "LOG OUT";
    // ...
  } else {
    // User is signed out
    // ...
    document.getElementById("log-in-or-out") = "LOG IN";
  }
});



//    LOG IN OR SIGN UP PAGE

function showSignIn(){
  document.getElementById("content01").style.display= "none";
  document.getElementById("content02").style.display = "block";
}
function showSignUp(){
  document.getElementById("content02").style.display= "none";
  document.getElementById("content01").style.display = "block";
}