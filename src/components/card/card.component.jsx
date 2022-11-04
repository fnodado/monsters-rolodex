import { Component } from 'react';
import './card.styles.css';

class Card extends Component {
  render() {
    const { name, id } = this.props.monsters;

    return (
      <div className='card-container' key={id}>
        <img
          alt={`monster ${name}`}
          src={`https://robohash.org/${id}?set=set2`}
        />
        <h2>{name}</h2>
      </div>
    );
  }
}

export default Card;
