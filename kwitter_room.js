//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
  apiKey: "AIzaSyAlndnjz_3ZehrQ5TW1BwFfpVl20Yus98Q",
  authDomain: "javatter-2408b.firebaseapp.com",
  databaseURL: "https://javatter-2408b-default-rtdb.firebaseio.com",
  projectId: "javatter-2408b",
  storageBucket: "javatter-2408b.appspot.com",
  messagingSenderId: "272219081647",
  appId: "1:272219081647:web:779cb84ffd7e37b03c3d5a",
  measurementId: "G-E12HT3MP7V"
};
  
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome to Javatter " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "kwitter.html";
}
