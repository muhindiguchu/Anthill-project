document.getElementById("login").onclick = function () {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((usercredential) => {
      //    alert("User Created Successfully");

      window.location.href = "home.html";
    });
};
