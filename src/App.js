import './App.css';
import Table from './components/Table';

function App() {

  const userArr = [
    {
      key: 1,
      firstName: "Rahul",
      lastName: "Sahu",
      age: 12,
      status: false
    },
    {
      key: 2,
      firstName: "Lonnie",
      lastName: "O' Connell",
      age: 18,
      status: true
    },
    {
      key: 3,
      firstName: "Nikolos",
      lastName: "Botler",
      age: 22,
      status: true
    },
    {
      key: 4,
      firstName: "Burgess",
      lastName: "Caddens",
      age: 38,
      status: false
    },
    {
      key: 5,
      firstName: "Elissa",
      lastName: "Lesslie",
      age: 52,
      status: true
    },
    {
      key: 6,
      firstName: "Zuppa",
      lastName: "Virgie",
      age: 52,
      status: true
    },
    {
      key: 7,
      firstName: "De Ruel",
      lastName: "Lesslie",
      age: 52,
      status: true
    },
    {
      key: 8,
      firstName: "Elissa",
      lastName: "Aigneis",
      age: 52,
      status: true
    },
    {
      key: 9,
      firstName: "Ermina",
      lastName: "Virgie",
      age: 52,
      status: true
    },
    {
      key: 10,
      firstName: "Xylina",
      lastName: "Coom",
      age: 52,
      status: true
    },
    {
      key: 11,
      firstName: "Richel",
      lastName: "Federica",
      age: 52,
      status: false
    },
    {
      key: 12,
      firstName: "Raffarty",
      lastName: "Richel",
      age: 52,
      status: true
    },
    {
      key: 13,
      firstName: "Dyster",
      lastName: "Raffarty",
      age: 52,
      status: false
    },
    {
      key: 14,
      firstName: "Elissa",
      lastName: "Lesslie",
      age: 52,
      status: true
    },

  ];




  return (
    <>
      <div className="container-fluid">
        <br />
        <h2 className="text-center">
          Custom Data Table
        </h2>
        <br />
        <Table userArr={userArr} />
        <br />
      </div>
    </>
  );
}

export default App;
