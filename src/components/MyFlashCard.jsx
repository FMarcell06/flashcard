import React from 'react'
import ReactFlipCard from 'reactjs-flip-card';

export const MyFlashCard = ({question,answer,flipped,setFlipped}) => {
    const styles = {
        card: {background: 'blue', color: 'white', borderRadius: 20,},
    }
    
    return (
        <ReactFlipCard
            flipTrigger='disabled'
            direction='diagonal'
            flipByProp={flipped}
            onClick={()=>{setFlipped(!flipped)}}
            frontComponent={<div>{question}</div>}
            backComponent={<div>{answer}</div>}
            containerCss='flipCard'
            frontCss='cardFront'
            backCss='cardFront'
        />
    );
}   
