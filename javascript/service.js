document.getElementById("register").onclick = function () {
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let phone = document.getElementById("number").value.trim();
  let password = document.getElementById("password").value.trim();
  let pic = document.getElementById("image").value.trim();

  if (!name || !email || !phone || !password || !pic) {
    // Check if all fields are filled
    console.error("All fields are required.");
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
        .collection("users")
        .doc(userid)
        .set({
          useremail: email,
          name: name,
          phone: phone,
          pic: pic,
        })
        .then(() => {
          window.location.href = "servicedasboard.html";
        })
        .catch((error) => {
          console.error("Error writing document to Firestore:", error);
        });
    })
    .catch((error) => {
      console.error("Error creating user:", error);
      alert(error.message);
    });
};
// Function to preview the image before uploading
function previewImage(event) {
  const img = document.getElementById("imgPreview");
  img.src = URL.createObjectURL(event.target.files[0]);
}
