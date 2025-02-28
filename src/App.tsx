import './App.css'
import {TodolistItem} from "./components/TodolistItem";

export const App= () => {
  return (
      <div className="app">
        <TodolistItem />
        <TodolistItem />
        <TodolistItem />
      </div>
  )
}


