var firebaseConfig = {
      apiKey: "AIzaSyDAMpodEqmc2TI2aV8sSiCqAmvAZcm7jdY",
      authDomain: "project-93-54aec.firebaseapp.com",
      databaseURL: "https://project-93-54aec-default-rtdb.firebaseio.com",
      projectId: "project-93-54aec",
      storageBucket: "project-93-54aec.appspot.com",
      messagingSenderId: "30825652654",
      appId: "1:30825652654:web:10d7bb0f5e3ddf96a5683f",
      measurementId: "G-WFDWG8BNVR"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
     document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
//ADD YOUR FIREBASE LINKS HERE


function addRoom()
{
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"

      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
      Room_names = childKey;
     //Start code
     console.log("Room Name -" + Room_names);
     row = "<div class='room_name' id="+Room_name+" onclick='redirectToRoomName(this.id)' >#"+Room_names +"</div><hr>";
    document.getElementById("output").innerHTML +=row;
     //End code
      });});}
getData();
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}
function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
      
}