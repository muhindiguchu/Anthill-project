document.querySelector("form").onsubmit = function(e) {
  e.preventDefault(); // Prevent form reload

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let phone = document.getElementById("number").value.trim();
  let password = document.getElementById("password").value.trim();
  let category = document.getElementById("type").value.trim();

  if (!name || !email || !phone || !password || !category) {
    alert("Please fill in all fields.");
    return;
  }

  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((usercredential) => {
      var userid = usercredential.user.uid;
      firebase
        .firestore()
        .collection("service")
        .doc(userid)
        .set({
          useremail: email,
          name: name,
          phone: phone,
          category: category,
        })
        .then(() => {
          window.location.href = "servicedasboard.html";
        })
        .catch((error) => {
          alert("Error writing document to Firestore: " + error.message);
        });
    })
    .catch((error) => {
      alert("Error creating user: " + error.message);
    });
};