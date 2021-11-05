import {React,useState} from "react";
import Header from "./components/Header";
import List from "./components/List";
import Button from "./components/Button";
import AddBirthday from "./components/AddBirthday";
import data from "./Data/data";


function App() {
  const [people,setPeople] = useState(data)
  const [toggle, setToggle] = useState(true)

  const onClick = () => {
    setPeople([]);
  }

  const onToggle = () => {
    setToggle(!toggle);
  }

  return (
       <main>
            <section className='container'>
                  <Header numPeople={people.length} onToggle={onToggle}/>
                  <AddBirthday toggle={toggle} />
                  <List people={people}/>
                  <Button onClick={onClick} className='container-button'/>
            </section>
       </main>
  );
}

export default App;
