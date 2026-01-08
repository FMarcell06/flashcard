import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { addCard, readCardOnce, updateCard } from "../myBackend";


export const AddCard = () => {
  const [newQuestion, setNewQuestion] = useState("");
  const [newAnswer, setNewAnswer] = useState("");
  const [card, setCard] = useState(null);

  const { id, cardId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (card) {
      setNewQuestion(card.question);
      setNewAnswer(card.answer);
    }
  }, [card]);

  useEffect(() => {
    if (id && cardId) {
      readCardOnce(id, cardId, setCard);
    }
  }, [id, cardId]);

  const handleAdd = () => {
    const newCard = {
      question: newQuestion,
      answer: newAnswer,
    };

    if (cardId) {
      updateCard(id, cardId, newCard);
    } else {
      addCard(id, newCard);
    }

    navigate("/topic/" + id);
  };

  return (
    <div className="addcard-page">
      <div className="addcard">
        <p>Kérdés</p>
        <input
          type="text"
          value={newQuestion}
          onChange={(e) => setNewQuestion(e.target.value)}
        />

        <p>Válasz</p>
        <input
          type="text"
          value={newAnswer}
          onChange={(e) => setNewAnswer(e.target.value)}
        />

        <button onClick={handleAdd}>Mentés</button>
      </div>
    </div>
  );
};
