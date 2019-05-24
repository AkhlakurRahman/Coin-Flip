import React, { Component } from 'react';
import Coin from '../Coin/Coin';
import { choice } from '../utils/helpers';

export default class Flip extends Component {
  static defaultProps = {
    coins: [
      { side: 'head', imgSrc: 'https://tinyurl.com/react-coin-heads-jpg' },
      { side: 'tail', imgSrc: 'https://tinyurl.com/react-coin-tails-jpg' }
    ]
  };
  state = {
    currentCoin: null,
    nFlips: 0,
    nHeads: 0,
    nTails: 0
  };

  flipCoins = () => {
    const newCoinFace = choice(this.props.coins);

    this.setState(prevState => {
      return {
        currentCoin: newCoinFace,
        nFlips: prevState.nFlips + 1,
        nHeads:
          newCoinFace.side === 'head' ? prevState.nHeads + 1 : prevState.nHeads,
        nTails:
          newCoinFace.side === 'tail' ? prevState.nTails + 1 : prevState.nTails
      };
    });
  };

  handleFlip = () => {
    this.flipCoins();
  };

  render() {
    return (
      <div>
        <h1>Let's Flip A Coin</h1>
        {this.state.currentCoin && (
          <Coin currentFace={this.state.currentCoin} />
        )}
        <button onClick={this.handleFlip}>Flip Coin</button>
        <p>
          Out of {this.state.nFlips} flips, there have been {this.state.nHeads}{' '}
          heads and {this.state.nTails} tails
        </p>
      </div>
    );
  }
}
