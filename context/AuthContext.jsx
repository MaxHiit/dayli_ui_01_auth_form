import { useState, useEffect, createContext, useContext } from 'react';
import { firebase, auth, db } from '../firebase/firebaseClient';
// import Cookies from 'js-cookie';

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
	const [user, setUser] = useState(null);

	const createUser = async (userPayload) => {
		try {
			await db
				.collection('users')
				.doc(userPayload.uid)
				.set(userPayload)
				.then(() => {
					setUser(userPayload);
					return userPayload;
				});
			console.log('Succes');
		} catch (error) {
			return console.log(error);
		}
	};

	const signUp = async ({ name, email, password }) => {
		try {
			const response = await auth.createUserWithEmailAndPassword(email, password);
			return createUser({ uid: response.user.uid, email, name });
		} catch (error) {
			return console.log(error);
		}
	};

	// useEffect(() => {
	// 	return firebase.auth().onIdTokenChanged(async (user) => {
	// 		if (!user) {
	// 			setUser(null);
	// 			Cookies.set('Mytoken', '', { path: '/' });
	// 		} else {
	// 			const token = await user.getIdToken();
	// 			setUser(user);
	// 			Cookies.set('Mytoken', token, { path: '/' });
	// 		}
	// 	});
	// }, []);

	return <AuthContext.Provider value={{ user, signUp }}>{children}</AuthContext.Provider>;
};

export { AuthContextProvider, AuthContext };

export const useAuth = () => useContext(AuthContext);
