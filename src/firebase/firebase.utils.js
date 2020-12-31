import firebase from 'firebase/app'
import 'firebase/firestore'

const config = {
  apiKey: "AIzaSyDAuWyLp1jWAmqni0RbNBD7BAY5ez_csBE",
  authDomain: "redux-pillows.firebaseapp.com",
  projectId: "redux-pillows",
  storageBucket: "redux-pillows.appspot.com",
  messagingSenderId: "629676824788",
  appId: "1:629676824788:web:0deb893e01597aeeaf8341",
  measurementId: "G-VCRT5GRD6B"
};

firebase.initializeApp(config);

export const createCollectionAndDocuments = async (collectionObject) => {
  const collectionsRef = firestore.collection('collections')
  const newCollectionRef = collectionsRef.doc()
  newCollectionRef.set(collectionObject)
}

export const convertCollectionsSnapshotToMap = snapshot => {
  const data = snapshot.docs.map(doc => {
    const { title, items } = doc.data()

    return {
      id: doc.id,
      routeName: encodeURI(title.toLowerCase().replaceAll(' ', '-')),
      title,
      items
    }
  });

  return data;
}

export const firestore = firebase.firestore();

export default firebase;