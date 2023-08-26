import { initializeApp } from "firebase/app";


export default defineNuxtPlugin((nuxtApp) => {

  const firebaseConfig = {
    apiKey: "AIzaSyCZAETq5uDKOJucoCr8GYosqgpst7Oo0DY",

};


const app = initializeApp(firebaseConfig);

console.log(app)

});


