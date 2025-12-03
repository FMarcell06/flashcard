import React from 'react'
import ReactFlipCard from 'reactjs-flip-card';

export const MyFlashCard = ({question,answer}) => {
    const styles = {
        card: {background: 'blue', color: 'white', borderRadius: 20,},
    }
    
    return (
        <ReactFlipCard
            flipTrigger='onClick'
            direction='diagonal'
            frontComponent={<div>{question}</div>}
            backComponent={<div>{answer}</div>}
            containerCss='flipCard'
            frontCss='cardFront'
            backCss='cardFront'
        />
    );
}   
