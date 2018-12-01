  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCwh82TllCfD1JUO7YhzGZKT6pVH-HJzbQ",
    authDomain: "boxer-80df3.firebaseapp.com",
    databaseURL: "https://boxer-80df3.firebaseio.com",
    projectId: "boxer-80df3",
    storageBucket: "",
    messagingSenderId: "554092423820"
};
firebase.initializeApp(config);

// References database off of Firebase
var userData = firebase.database().ref('users');

// References auth off of firebase
var auth = firebase.auth();

// Start the sign in function. Start
function toggleSignIn() {
    if (firebase.auth().currentUser) {
        // [START signout]
        firebase.auth().signOut();
        // [END signout]
    } else {
        var email = document.getElementById('txtEmail').value;
        var password = document.getElementById('txtPassword').value;
        if (email.length < 4) {
            alert('Please enter an email address.');
            return;
        }
        if (password.length < 4) {
            alert('Please enter a password.');
            return;
        }
        // Sign in with email and pass.
        // [START authwithemail]
        firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            if (errorCode === 'auth/wrong-password') {
                alert('Wrong password.');
            } else {
                alert(errorMessage);
            }
            console.log(error);
        });
        // [END authwithemail]
    }
}
// Start the Sign Up function. Starts when Sign Up button is pressed
function handleSignUp() {
    var email = document.getElementById('txtEmail').value;
    var password = document.getElementById('txtPassword').value;
    if (email.length < 4) {
        alert('Please enter an email address.');
        return;
    }
    if (password.length < 4) {
        alert('Please enter a password.');
        return;
    }
    // Sign in with email and password.
    // [START createwithemail]
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode == 'auth/weak-password') {
            alert('The password is too weak.');
        } else {
            alert(errorMessage);
        }
        console.log(error);
    });
    // [END createwithemail]
}

// Log out when log out button is pressed
function signOut() {
    firebase.auth().signOut();
    document.getElementById('user_para').innerHTML = "You've been signed out. Come back soon!";
};

// Checks to see if auth state has changed and see who signed in
firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        // User is signed in.
        console.log(user);
        btnLogout.classList.remove('hide');
        // Assign currentUser to user var
        var user = firebase.auth().currentUser;
        // Show user email once logged in
        if (user != null) {
            var email_id = user.email;
            document.getElementById('user_para').innerHTML = "Welcome User: " + email_id;
        }
    } else {
        // No user is signed in.
        console.log('Not logged in.');
        btnLogout.classList.add('hide');
    }
});

// Listen for form submit
document.getElementById('aboutForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e) {
    e.preventDefault();

    var name = getInputVal('inputName');
    var password = getInputVal('txtPassword');
    var email = getInputVal('txtEmail');
    var petsName = getInputVal('inputPetname');
    var dogSize = getInputVal('inputDogsize');
    var address = [
        getInputVal('inputAddress'),
        getInputVal('inputAddress2'),
        getInputVal('inputCity'),
        getInputVal('inputState'),
        getInputVal('inputZip')
    ];
    var dogGender = getInputVal('inputGender');
    var dogBreed = getInputVal('inputBreed');


    // Save message
    saveUser(name, password, email, petsName, dogSize, address, dogGender, dogBreed);

    // Show alert
    document.querySelector('.alert').style.display = 'block';

    // Hide alert after 3 seconds
    setTimeout(function () {
        document.querySelector('.alert').style.display = 'none';
    }, 3000);

    // Clear form
    document.getElementById('aboutForm').reset();
}

// Function to get get form values
function getInputVal(id) {
    return document.getElementById(id).value;
}

// Save users input to firebase
function saveUser(name, password, email, petsName, dogSize, address, dogGender, dogBreed) {
    var newUserData = userData.push();
    newUserData.set({
        name: name,
        password: password,
        email: email,
        petsName: petsName,
        dogSize: dogSize,
        address: address,
        dogGender: dogGender,
        dogBreed: dogBreed
    });
}