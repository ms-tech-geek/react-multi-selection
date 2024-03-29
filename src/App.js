import List from './components/List';
import './App.css';

function App() {
  const sizes = ['tiny', 'small', 'medium', 'large', 'huge'];
  const colors = [
    'navy',
    'blue',
    'aqua',
    'teal',
    'olive',
    'green',
    'lime',
    'yellow',
    'orange',
    'red',
    'maroon',
    'fuchsia',
    'purple',
    'silver',
    'gray',
    'black',
  ];
  const fruits = [
    'apple',
    'banana',
    'watermelon',
    'orange',
    'peach',
    'tangerine',
    'pear',
    'kiwi',
    'mango',
  ];

  const items = sizes.reduce(
    (items, size) => [
      ...items,
      ...fruits.reduce(
        (acc, fruit) => [
          ...acc,
          ...colors.reduce(
            (acc, color) => [
              ...acc,
              {
                name: `${size} ${color} ${fruit}`,
                color,
              },
            ],
            []
          ),
        ],
        []
      ),
    ],
    []
  );

  return (
    <>
      <List items={items} />,
    </>
  );
}

export default App;
