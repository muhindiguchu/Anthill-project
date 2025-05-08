// document.getElementById("register").onclick = function() {
//     let name = document.getElementById("name").value;
//     let email = document.getElementById("email").value;
//     let phone = document.getElementById("phone").value;
//     let password = document.getElementById("password").value;   
//         firebase.auth().createUserWithEmailAndPassword(email, password).then((usercredential) =>{
//        var userid = usercredential.user.uid;
//             firebase.firestore().collection("users").doc(userid).set({
//                 useremail: email,
//         name: name,
//             phone: phone,
//             }).then(() => {
    
//                    window.location.href = "home.html";
//             }).catch((error) => {
//                 console.error("Error writing document: ", error);
//             });
// })
// }
document.getElementById("register").onclick = function () {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let password = document.getElementById("password").value.trim();

    if (!name || !email || !phone || !password) {
        console.error("All fields are required.");
        alert("Please fill in all fields.");
        return;
    }

    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((usercredential) => {
            var userid = usercredential.user.uid;
            firebase.firestore().collection("users").doc(userid).set({
                useremail: email,
                name: name,
                phone: phone,
            }).then(() => {
                window.location.href = "home.html";
            }).catch((error) => {
                console.error("Error writing document to Firestore:", error);
            });
        })
        .catch((error) => {
            console.error("Error creating user:", error);
            alert(error.message);
        });
};