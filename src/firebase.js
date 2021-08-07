import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyDSzFtQyd69iqgjkznhB-ACMf6TzgOBwGI',
  authDomain: 'quora-gh.firebaseapp.com',
  projectId: 'quora-gh',
  storageBucket: 'quora-gh.appspot.com',
  messagingSenderId: '119163647333',
  appId: '1:119163647333:web:0a99df3c2c2592a99a1d8c',
  measurementId: 'G-6EFBG7346K',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
// 그냥 로그인

const provider = new firebase.auth.GoogleAuthProvider();
// 구글로 로그인 했을 때 바로 구글 로그인 창이 뜰 수 있게 해주는 것임

const db = firebaseApp.firestore();
// 데이터베이스

export { auth, provider };

export default db;
