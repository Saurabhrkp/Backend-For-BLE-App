const firebase = require('firebase');

var firebaseConfig = {
  apiKey: 'AIzaSyCCJVAtw5fCG5QKQYYFFxyR0mJg_R4iAUs',
  authDomain: 'sunlit-cyclist-260912.firebaseapp.com',
  databaseURL: 'https://sunlit-cyclist-260912.firebaseio.com',
  projectId: 'sunlit-cyclist-260912',
  storageBucket: 'sunlit-cyclist-260912.appspot.com',
  messagingSenderId: '46710897482',
  appId: '1:46710897482:web:83a783049aeb3e00715fb3',
  measurementId: 'G-TTG5FT250X'
};

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
firebase.analytics();

module.exports = fire;
