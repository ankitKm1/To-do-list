import { useState } from 'react'
import AddItem from './AddItem'

import Content from "./Content"
import Header from "./Header"
import './index.css'

const App = () => {

  const [items, setItems] = useState([ ])

  const [newItem, setNewItem] = useState('')

  const setAndSave = (newItems) => {
    setItems(newItems);
    localStorage.setItem('Todolist', JSON.stringify(newItems));
  }
  
  const addItem = (item) => {
    const id =  items.length ? items[items.length-1].id + 1 : 1;
    const myNewItem = { id, checked: false, item };
    const ItemList = [...items, myNewItem];
    setAndSave(ItemList);
  }

  const handleCheck = (id) => { 
    const ItemList = items.map((item) => 
      item.id === id ? {...item, checked: !item.checked} : item
    );
    setAndSave(ItemList);
  }
  
  const handleDelete = (id) => {
    const ItemList = items.filter((item) => item.id !== id);
    setAndSave(ItemList);
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(!newItem) return;
    addItem(newItem);
    setNewItem('')
  }

  return (
    <div className="App">
      <Header />
      <AddItem 
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <Content 
        items={items}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
    </div>
  )
}

export default App



