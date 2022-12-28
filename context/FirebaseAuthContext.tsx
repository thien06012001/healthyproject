// FirebaseAuthContext.tsx
import * as React from "react";
import firebase from "firebase/auth";
import {auth} from '../firebase'
import nookies from 'nookies';
type User = firebase.User | null;
type ContextState = { user: User};

const FirebaseAuthContext =
  React.createContext<ContextState | undefined>(undefined);

const FirebaseAuthProvider: React.FC<React.PropsWithChildren> = ({ children })=> {
  const [user, setUser] = React.useState<User>(null);
  const value = { user };

  React.useEffect(() => {
    // const unsubscribe = auth.onAuthStateChanged(setUser);
    // return unsubscribe;

     // listen for token changes
    // call setUser and write new token as a cookie
    return auth.onIdTokenChanged(async (user : User) => {
      if (!user) {
        setUser(null);
        nookies.set(undefined, 'token', '', { path: '/' });
      } else {
        const token = await user.getIdToken();
        setUser(user);
        nookies.set(undefined, 'token', token, { path: '/' });
      }
    });
  }, []);

    React.useEffect(() => {
    const handle = setInterval(async () => {
      const user = auth.currentUser;
      if (user) await user.getIdToken(true);
    }, 10 * 60 * 1000);

    // clean up setInterval
    return () => clearInterval(handle);
  }, []);

  return (
    <FirebaseAuthContext.Provider value={value}>
      {children}
    </FirebaseAuthContext.Provider>
  );
};

function useFirebaseAuth() {
  const context = React.useContext(FirebaseAuthContext) ;
  if (context === undefined) {
    throw new Error(
      "useFirebaseAuth must be used within a FirebaseAuthProvider"
    );
  }
  return context.user;
}

export { FirebaseAuthProvider, useFirebaseAuth };