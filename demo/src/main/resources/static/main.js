    // Import the functions you need from the SDKs you need
    import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
    import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-analytics.js";
    import { getAuth, GoogleAuthProvider ,signInWithPopup} from "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js";

    const firebaseConfig = {
      apiKey: "AIzaSyBvtyJWPiCejQ9aOPXyWifb60EtTujnEZY",
      authDomain: "fir-start-e1999.firebaseapp.com",
      projectId: "fir-start-e1999",
      storageBucket: "fir-start-e1999.appspot.com",
      messagingSenderId: "7736374049",
      appId: "1:7736374049:web:4b1da54903ffc448b1c460",
      measurementId: "G-FM5JFGHH4X"
    };
  
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    auth.languageCode = 'en';
    const analytics = getAnalytics(app);
    const provider = new GoogleAuthProvider();

    const googleLogin = document.getElementById("g-login");
    googleLogin.addEventListener("click",function(){
        signInWithPopup(auth, provider)
  .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const user = result.user;
    console.log(user);
    window.location.href = "https://www.google.com";
    
  }).catch((error) => {
    
    const errorCode = error.code;
    const errorMessage = error.message;


  });
    })
console.log(5);

//toggle z-index
// function toggleSlide() {
//     var element = document.getElementById('myElement');
//     var currentPosition = parseInt(element.style.left) || 0;
//     if (currentPosition === 0) {
//       element.style.left = '100px';
//     } else {
//       element.style.left = '0';
//     }
//   }