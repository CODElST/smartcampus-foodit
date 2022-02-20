import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { auth } from "./index";

function signInWithGoogle() {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
}

function googleSignOut() {
  signOut(auth)
    .then(() => {
      console.log("signout successful");
    })
    .catch((error) => {
      console.log(error);
    });
}

export { signInWithGoogle, googleSignOut };
