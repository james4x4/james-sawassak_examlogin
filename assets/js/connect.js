const firebaseConfig = {
    apiKey: "AIzaSyC56ngmI6_lYWmMyGhK_0b466FEaaw_XIs",
    authDomain: "login-it-684fe.firebaseapp.com",
    projectId: "login-it-684fe",
    storageBucket: "login-it-684fe.firebasestorage.app",
    messagingSenderId: "23178775830",
    appId: "1:23178775830:web:fdd77152c2937ecec61437",
    measurementId: "G-6JZQ2FX821"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Function to handle Google login
function googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
        .then((result) => {
            result.user.getIdToken().then((idToken) => {
                const form = document.createElement('form');
                form.method = 'POST';
                form.action = '/login_it/index.php';

                const idTokenField = document.createElement('input');
                idTokenField.type = 'hidden';
                idTokenField.name = 'idTokenString';
                idTokenField.value = idToken;
                form.appendChild(idTokenField);

                document.body.appendChild(form);
                form.submit();
            });
        }).catch((error) => {
            console.error(error);
        });
}