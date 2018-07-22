import React, { Component, Fragment, PureComponent } from 'react';

import PropTypes from 'prop-types';

import TitlrCard from './titlr-card';

class CardList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleCard: true
    };
  }

  static defaultProps = {
    cards: [
      {
        id: 0,
        animation: 'animated-card',
        title: 'Thai Mango',
        text: 'Cards for display in portfolio style material design by Google.',
        imgSrc: 'https://unsplash.it/400/300'
      },
      {
        id: 1,
        animation: 'animated-card',
        title: 'Mongolian Fish',
        text: 'Some of this cards are specially made and designed by Demola.',
        imgSrc:'https://picsum.photos/400/300?image=1059'
      },
      {
        id: 2,
        animation: 'animated-card',
        title: 'Apple Wine',
        text: 'Distributed & brewed by the best of fruits and a lil bit of lizards urine.',
        imgSrc:'https://picsum.photos/400/300?image=998'
      }
    ]
  }

  static propTypes = {
    cards: PropTypes.arrayOf(PropTypes.object)
  }

  componentDidMount() {
    try {
      console.log('the component did mount');
    } catch (e) {
      console.log(e);
    }
  }

  doToggleCard = (card) => {
    let cards = this.props.cards;
    cards[card.id].animation = 'animated jello';
    console.log(cards);

    this.setState((prevState, props) => ({
      toggleCard: !prevState.toggleCard
    }));

    console.log('the card is hovered on!!!');
  }

  render() {
    const cards = this.props.cards.map(((card, index) => (<TitlrCard 
      toggleCard={this.state.toggleCard} 
      {...card}
      parentDoToggleCard={this.doToggleCard}
      key={card.id} />)));
    return (
      <Fragment>
        <div className='container'>
          <div className='row'>
            {
              cards
            }
          </div>
        </div>
      </Fragment>
    );
  }
}

export default CardList;