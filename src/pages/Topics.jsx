import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { readTopicsOnce } from '../myBackend';
import { AccessKeyModal } from '../components/AccessKeyModal';
import { useContext } from 'react';
import { AccessContext } from '../context/MyAccessProvider';


export const Topics = () => {
  const [topics, setTopics] = useState([]);
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const {token} = useContext(AccessContext)
  useEffect(() => {
    readTopicsOnce(setTopics);
  }, []);

  const handleAddTopic = () => {
    if(token) navigate("/addtopic")
    else setOpen(true)
  }

  return (
    <div style={{display:"flex",alignItems:"center",justifyContent:"center",height:"100vh"}}>
    <div className="topics-container">
      <h1 className="topics-title">Topics</h1>
      <div className="topics-list">
        {topics.map(obj => (
          <button
            key={obj.id}
            className="topic-btn"
            onClick={() => navigate("/topic/" + obj.id)}
          >
            {obj.name}
          </button>
        ))}
      </div>
      <button className="add-topic-btn" onClick={handleAddTopic}>
        Add new topic
      </button>
    </div>  
          <AccessKeyModal open={open} onClose={()=>setOpen(false)} onSuccess={()=>navigate("/addtopic")}/>
        </div>

  );
};
