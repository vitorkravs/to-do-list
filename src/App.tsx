import { useState } from 'react';
import * as C from './App.styles';
import './App.css';
import './index.css'

import { Item } from './types/itemTypes';
import { ListItem } from './components/ItemList';
import { AddArea } from './components/AddArea';

const App = () => {
  const [list, setList] = useState<Item[]>([
  ]);

  const handleAddTask = (taskName: string) => {
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false
    });
    setList(newList);
  }

  // Função feita para tarefinha de casa.
  const handleTaskChange = (id: number, done: boolean) => {
    let newList = [...list];
    for(let i in newList) {
      if(newList[i].id === id) {
        newList[i].done = done;
      }
    }
    setList(newList);
  }

  return (
    	<C.Container>
        <C.Area>
          <C.Header><h1>Lista de Tarefas</h1></C.Header>

          <AddArea onEnter={handleAddTask} />

          {list.map((item, index)=>(
            <ListItem
              key={index}
              item={item}
              onChange={handleTaskChange}
            />
          ))}

        </C.Area>
      </C.Container>
  );
}

export default App;