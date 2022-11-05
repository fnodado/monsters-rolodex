import { useEffect, useState } from 'react';
import SearchBox from '../search-box/search-box.component';

import CardList from '../card-list/card-list.component';
import './monster.styles.css';

const Monster = () => {
  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);
  console.log('render');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const newFilteredMonster = monsters.filter((monsters) => {
      return monsters.name.toLowerCase().includes(searchField);
    });
    setFilteredMonsters(newFilteredMonster);
  }, [monsters, searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase();

    setSearchField(searchFieldString);
  };

  return (
    <div>
      <h1 className='app-title'>Monsters Rolodex</h1>

      <SearchBox
        onSearchChange={onSearchChange}
        placeholder='search monsters'
        className='monster-search-box'
      />

      <CardList monsters={filteredMonsters} />
    </div>
  );
};

// class Monster extends Component {
//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//       counter: 0,
//       searchField: '',
//     };
//   }

// componentDidMount() {
//   fetch('https://jsonplaceholder.typicode.com/users')
//     .then((res) => res.json())
//     .then((users) =>
//       this.setState(() => {
//         return { monsters: users };
//       })
//     );
// }

//   onSearchChange = (event) => {
//     const searchField = event.target.value.toLowerCase();

//     this.setState(() => {
//       return { searchField };
//     });
//   };

//   onClickButton = () => {
//     const counter = this.state.counter + 1;
//     this.setState(() => {
//       return { counter };
//     });
//   };

//   render() {
//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;

// const filteredMonsters = monsters.filter((monsters) => {
//   return monsters.name.toLowerCase().includes(searchField);
// });

//     return (
//       <div>
//         <h1 className='app-title'>Monsters Rolodex</h1>

//         <SearchBox
//           onSearchChange={onSearchChange}
//           placeholder='search monsters'
//           className='monster-search-box'
//         />
//         <ClickMeButton onClickButton={this.onClickButton} />

//         <CardList monsters={filteredMonsters} />
//       </div>
//     );
//   }
// }

export default Monster;
