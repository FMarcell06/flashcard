import { addDoc, collection, doc, getDoc, getDocs, query, QuerySnapshot, where } from "firebase/firestore";
import { db } from "./firebaseApp";


export const addTopic = async (name) => {
    try {
        const collectionRef = collection(db,"topics")
        const q = query(collectionRef,where("name","==",name))
        const querySnapshot = await getDocs(q)
        if(!querySnapshot.empty){
            console.log("Ez a téma már létezik");
            return
        }
        await addDoc(collectionRef, {name})
    } catch (error) {
        console.log("Hiba a téma hozzáadásánál: " + error);
        
    }
}

export const addCard = async (topicId,card) => {
    try {
        const subColRef = collection(db, "topics", topicId, "cards")
        await addDoc(subColRef,{...card})
    } catch (error) {
        console.log("Kártyalétrehozási hiba: " + error);
    }
}

export const readTopicsOnce = async (setTopics) => {
    try {
        const docRef = collection(db, "topics")
        const snap = await getDocs(docRef)
        setTopics(snap.docs.map((d)=>({id: d.id, ...d.data()})))
    } catch (error) {
        console.log("Téma lekérési hiba: " + error);
        return null;
    }
}


export const readTopicById = async (id,setTopicName) => {
    console.log(id);
    
    try {
        const docRef = doc(db,"topics",id)
        const docData = await getDoc(docRef)
        setTopicName(docData.data().name)

    } catch (error) {
        console.log("Téma lekérési hiba: " + error);
        return null;
    }
}

export const readCardsOnce = async (topicId,setCards) => {
    try {
        const subColRef = collection(db, "topics",topicId,"cards")
        const snap = await getDocs(subColRef)

        setCards(snap.docs.map((d) => ({ id: d.id ,...d.data()})))
    } catch (error) {
        console.log("Egyszeri kértya lekérési hiba: ",error);
        return [];
    }
}