
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from '../Pages/Login/Firebase/init';

// initializeapp
initializeAuthentication();
const useFirebase = () => {
  const [user, setUser] = useState({})
  const [isLoding, setIsLoding] = useState(true);

  const auth = getAuth();

    const registerUser = (email, password) => {
      setIsLoding (true);
       createUserWithEmailAndPassword(auth, email, password)
       .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      })
      .finally(() => setIsLoding(false))
    }
    const loginUser = (email, password) => {
      setIsLoding (true);
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        })
        .finally(() => setIsLoding(false))
    }
    // observe user state
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user);
            } else {
              setUser({});
            }
            setIsLoding(false)
          });
          return () => unSubscribe;
    },[])

    const logOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          })
          .finally(() => setIsLoding(true))
    }
    return {
        user,
        isLoding,
        registerUser,
        loginUser,
        logOut
    }
};

export default useFirebase;