import { useState } from "react";
import { useNavigate, useParams } from "react-router";
import { addCard } from "../myBackend";

export const AddCard = () => {
const [newQuestion,setNewQuestion] = useState("")
const [newAnswer,setNewAnswer] = useState("")

const { id } = useParams()
console.log(id);


const handleAdd = () => {
const newCard = {question:newQuestion,answer:newAnswer}
addCard(id,newCard)
}
const navigate = useNavigate();
return (
<div style={{display:"flex",alignItems:"center",justifyContent:"center",height:"100vh"}}>
<div className="addcard">
<p>kerdes</p>
<input type="text" value={newQuestion} onChange={(e)=>setNewQuestion(e.target.value)}/>
<p>valasz</p>
<input type="text" value={newAnswer} onChange={(e)=>setNewAnswer(e.target.value)}/>

<button onClick={handleAdd}>Mentés</button>
</div>
</div>

);
};