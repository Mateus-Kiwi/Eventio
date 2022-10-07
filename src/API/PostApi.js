import firebase from "firebase/compat";

export function addPost(post, postComplete){

    firebase.firestore()
    .collection('Posts')
    .add({
        text: post.text,
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
    }).then((data) => postComplete(data))
    .catch((error) => console.log(error));
}

export async function getPost(postRetrieved){

    var postList = [];

    var snapshot = await firebase.firestore()
    .collection('Posts')
    .orderBy('createdAt')
    .get()

    snapshot.forEach((doc) => {
        postList.push(doc.data());
    });

    postRetrieved(postList);

}