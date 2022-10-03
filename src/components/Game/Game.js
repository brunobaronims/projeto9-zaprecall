import * as Styled from './index';
import Header from "../Header/Header";
import Cards from "../Cards/Cards";
import Footer from '../Footer/Footer';
import { useReducer, Fragment, useEffect } from "react";

const initialState = { status: 'initial', goal: '', deck: '' };
const decks = require('../../assets/decks/decks.json');

function answerClick(type, game, decks, payload) {
  const cardCount = decks.filter(deck => deck.name === game.deck)[0].cards.length;
  if (game.answered.length === cardCount - 1)
    return {
      ...game, activeCard: 'none', flipped: 'false',
      [type.toLowerCase()]: game[type.toLowerCase()].concat(payload),
      answered: game.answered.concat(payload),
      status: 'finished'
    };
  return {
    ...game, activeCard: 'none', flipped: 'false',
    [type.toLowerCase()]: game[type.toLowerCase()].concat(payload),
    answered: game.answered.concat(payload)
  };
}

function reducer(game, { type, payload }) {
  switch (type) {
    case 'START_GAME':
      payload.preventDefault();
      if (game.deck === '' || !checkInput(game.goal))
        return { ...game };
      return {
        ...game, status: 'active', activeCard: 'none',
        zap: [], almost: [], wrong: [], answered: []
      };
    case 'GOAL_KEYSTROKE':
      return { ...game, goal: payload };
    case 'SELECT_DECK':
      return { ...game, deck: payload };
    case 'CHOOSE_CARD':
      return { ...game, activeCard: payload, flipped: 'false' };
    case 'FLIP_CARD':
      return { ...game, flipped: 'true' };
    case 'WRONG':
      return answerClick(type, game, decks, payload);
    case 'ALMOST':
      return answerClick(type, game, decks, payload);
    case 'ZAP':
      return answerClick(type, game, decks, payload);
    default:
      throw new Error();
  }
}

function checkInput(input) {
  if (!isNaN(input) &&
    !isNaN(parseFloat(input)))
    return input <= 8 && input >= 1
}

export default function Game() {
  const [game, updateGame] = useReducer(reducer, initialState);

  useEffect(() => {
    console.log(game);
  })

  return (
    <Fragment>
      <Header status={game.status} />
      <Cards decks={decks} game={game} updateGame={updateGame} />
      <Footer game={game} decks={decks} />
      <Styled.Container visible={game.status === 'initial'}>
        <Styled.Form onSubmit={(e) => updateGame({ type: 'START_GAME', payload: e })}>
          <Styled.Label>
            <Styled.List
              name='decks'
              value={game.deck}
              onChange={(e) => updateGame({ type: 'SELECT_DECK', payload: e.target.value })}>
              <Styled.Option value='' defaultValue=''>Escolha seu deck</Styled.Option>
              {
                decks.map(deck => {
                  return (
                    <Styled.Option value={deck.name} key={deck.name}>
                      {deck.name}
                    </Styled.Option>
                  );
                })
              }
            </Styled.List>
          </Styled.Label>
          <Styled.Label>
            <Styled.Input
              placeholder='Digite sua meta de zaps...'
              type='text'
              value={game.goal}
              onChange={(e) => updateGame({ type: 'GOAL_KEYSTROKE', payload: e.target.value })} />
          </Styled.Label>
          <Styled.Button type='submit'
            value='Iniciar Recall!'
          />
        </Styled.Form>
      </Styled.Container>
    </Fragment>
  );
}