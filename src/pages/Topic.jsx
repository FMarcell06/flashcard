import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { readCardsOnce, readTopicById } from '../myBackend';
import { MyFlashCard } from '../components/MyFlashCard';
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";
import { AccessKeyModal } from '../components/AccessKeyModal';
import { useContext } from 'react';
import { AccessContext } from '../context/MyAccessProvider';


export const Topic = () => {
  const [topicName, setTopicName] = useState("");
  const [cards, setCards] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [open, setOpen] = React.useState(false);
  const {token} = useContext(AccessContext)

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    readTopicById(id, setTopicName);
    readCardsOnce(id, setCards);
  }, [id]);

  const handleAddCard = () => {
    if(token) navigate("/addcard/"+id)
    else setOpen(true)
  }

  const next = () => setCurrentIndex(i => (i + 1) % cards.length);
  const prev = () => setCurrentIndex(i => (i - 1 + cards.length) % cards.length);

  const currentCard = cards[currentIndex];

  return (
    <div style={{display:"flex",alignItems:"center",justifyContent:"center",height:"100vh"}}>
        <div className="topic-container fadeIn">
      <h1 className="topic-title">{topicName}</h1>

      {cards.length === 0 ? (
        <p className="empty-list">A lista üres</p>
      ) : (
        <div className="card-container fadeIn">
            {<MyFlashCard question={currentCard?.question} answer={currentCard?.answer}/>}
          <div className="card-buttons">
            <button onClick={prev}><FaArrowCircleLeft  size={35}/></button>
            <button onClick={next}><FaArrowCircleRight size={35}/></button>
          </div>
          <p className="card-index">{currentIndex + 1} / {cards.length}</p>
        </div>
      )}
        <button className="add-card-btn" onClick={handleAddCard}>Add Card</button>
        <AccessKeyModal open={open} onClose={()=>setOpen(false)} onSuccess={()=>navigate("/addcard")}/>
        </div>
    </div>
  );
};
