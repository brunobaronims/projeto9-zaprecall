import { Fragment, useEffect } from "react";
import * as Styled from './index';
import Header from "../Header/Header";
import Cards from "../Cards/Cards";
import { useReducer } from "react";

const initialState = { status: 'initial', goal: '', deck: '' };
const decks = require('../../assets/decks/decks.json');

function reducer(game, action) {
  switch (action.type) {
    case 'start':
      action.payload.preventDefault();
      if (game.deck === '' || !checkInput(game.goal))
        return { ...game };
      return { ...game, status: 'active' };
    case 'keystroke':
      return { ...game, goal: action.payload };
    case 'select':
      return { ...game, deck: action.payload };
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

  return (
    <Fragment>
      <Header status={game.status} />
      <Cards decks={decks} game={game} updateGame={updateGame} />
      <Styled.Container visible={game.status === 'initial'}>
        <Styled.Form onSubmit={(e) => updateGame({ type: 'start', payload: e })}>
          <Styled.Label>
            <Styled.List
              name='decks'
              value={game.deck}
              onChange={(e) => updateGame({ type: 'select', payload: e.target.value })}>
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
              onChange={(e) => updateGame({ type: 'keystroke', payload: e.target.value })} />
          </Styled.Label>
          <Styled.Button type='submit'
            value='Iniciar Recall!'
          />
        </Styled.Form>
      </Styled.Container>
    </Fragment>
  );
}