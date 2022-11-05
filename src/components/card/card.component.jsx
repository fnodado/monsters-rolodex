import './card.styles.css';

const Card = ({ monsters: { id, name } }) => (
  <div className='card-container' key={id}>
    <img alt={`monster ${name}`} src={`https://robohash.org/${id}?set=set2`} />
    <h2>{name}</h2>
  </div>
);

// class Card extends Component {
//   render() {
//     const { name, id } = this.props.monsters;

//     return (
//       <div className='card-container' key={id}>
//         <img
//           alt={`monster ${name}`}
//           src={`https://robohash.org/${id}?set=set2`}
//         />
//         <h2>{name}</h2>
//       </div>
//     );
//   }
// }

export default Card;
