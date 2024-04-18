import { useState } from "react";
import Logo from "./components/Logo";
import Form from "./components/Form";
import  ParkingList from "./components/ParkingList";
import Stats from "./components/Stats";

const initialItems = [


  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
  { id: 3, description: "Charger", quantity: 1, packed: false },
];

export default function App() {
  const[items, setItems]=useState([])


  function handleAddItems(item){
    setItems((items)=>[...items, item])
   }

   function handleDelete(id){
    console.log(id)
    setItems(items=>items.filter(item=>item.id !== id))
   }

  

   function handleToggleItem(id){
    setItems(items=> items.map(item=>item.id=== id ? {...item, packed:!item.packed}: item))

   }

   function handleClearList(){
    const confirmed=window.confirm('Are you sure you want to delete all items?')
      if (confirmed) setItems([])
   }
  return <div className="app">
    <Logo/>
    <Form onAddItems={handleAddItems}/>
    <ParkingList items={items} 
    onDeleteItem={handleDelete}
    onToggleItems={handleToggleItem}
    onClearList={handleClearList}/>
    <Stats items={items}/>
  </div>
}



