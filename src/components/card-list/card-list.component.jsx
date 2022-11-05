import './card-list.styles.css';
import Card from '../card/card.component';

//implicit return
const CardList = ({ monsters }) => (
  // const { monsters } = props;

  <div className='card-list'>
    {monsters.map((mons) => {
      return <Card monsters={mons} />;
    })}
  </div>
);

// class CardList extends Component {
//   render() {
//     const { monsters } = this.props;

//     return (
//       <div className='card-list'>
//         {monsters.map((mons) => {
//           return <Card monsters={mons} />;
//         })}
//       </div>
//     );
//   }
// }

export default CardList;
