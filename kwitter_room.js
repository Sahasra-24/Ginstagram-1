// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyCNYHMr9GXZCE5yqlDcqwjiC56vuvkaXjU",
      authDomain: "kwitter-a381f.firebaseapp.com",
      databaseURL: "https://kwitter-a381f-default-rtdb.firebaseio.com",
      projectId: "kwitter-a381f",
      storageBucket: "kwitter-a381f.appspot.com",
      messagingSenderId: "363813664578",
      appId: "1:363813664578:web:9670b06213a79b06ba7adb"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
