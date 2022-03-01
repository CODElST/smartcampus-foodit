import { signInWithRedirect, GoogleAuthProvider, signOut } from "firebase/auth";
import { auth } from "./index";

function signInWithGoogle() {
  const provider = new GoogleAuthProvider();
  signInWithRedirect(auth, provider).then((result) => console.log(result));
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
