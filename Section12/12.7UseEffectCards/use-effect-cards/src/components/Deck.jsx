import React, {useEffect, useState} from 'react';
import Card from './Card';
import axios from 'axios';

const API_BASE = 'https://deckofcardsapi.com/api/deck';

const Deck = () => {
    const [deck, setDeck] = useState(null);
    const [cardsDrawn, setCardsDrawn] = useState([]);
    const [isExpended, setIsExpended] = useState(false);
    const [isShuffling, setIsShuffling] = useState(false);

    useEffect(function loadDeck() {
        async function fetchDeck() {
            const new_deck = await axios.get(`${API_BASE}/new/shuffle/`);
            setDeck(new_deck.data);
        }
        fetchDeck();
        console.log('Deck fetched');
    }, []);

    async function drawCard() {
        try{
            const cardRes = await axios.get(`${API_BASE}/${deck.deck_id}/draw/`);
            console.log(cardRes);

            if(cardRes.data.remaining === 0) {
                console.log(cardsDrawn);
                setIsExpended(true);
                throw new Error('All the cards have been drawn. Time to shuffle');
            }

            const card = cardRes.data.cards[0];

            setCardsDrawn(cardsDrawn => [
                ...cardsDrawn,
                {
                    id: card.code,
                    name: card.value + " of " + card.suit,
                    image: card.image,
                },
            ]);
        } catch(err) {
            alert(err);
        }
    }

    async function shuffleDeck() {
        setIsShuffling(true);
        try {
            console.log(`Every day I'm shufflin'`);
            await axios.get(`${API_BASE}/${deck.deck_id}/shuffle/`);
            setCardsDrawn([]);
        } catch (err) {
            alert(err);
        } finally {
            setIsShuffling(false);
        }
    }

    function renderDrawBtn() {
        if(!deck) {
            console.log('Deck not rendered');
            return null;
        }

        return (
            <button
                className='Draw-Card'
                onClick={drawCard}
                disabled={isExpended&&isShuffling}>
                DRAW
            </button>
        )
    }

    function renderShuffleBtn() {
        if(!deck) return null;

        return (
            <button
                className='Shuffle-Deck'
                onClick={shuffleDeck}
                disabled={isShuffling}>
                SHUFFLE
            </button>
        )
    }
  return (
    <div className='Deck'>
        {renderDrawBtn()}
        {renderShuffleBtn()}
        
        <div className='Card-Area'>{
            cardsDrawn.map(card => (
                <Card key={card.id} name={card.name} image={card.image} />
            ))
        }
        </div>

    </div>
  )
}

export default Deck;