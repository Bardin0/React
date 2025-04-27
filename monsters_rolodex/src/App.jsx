import { useState, useEffect } from 'react'
import './App.css'
import CardList from './components/card-list/card-list.component'
import Search from './components/search/search.component'

const App = () => {

  const [monsters, setMonsters] = useState([])
  const [filteredMonsters, setFilteredMonsters] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((data) => {
      setMonsters(data)
      setFilteredMonsters(data)
    })
  }, []) // Empty array means it occurs once on mount, and never again.

  const onSearchChange = () => {
    const searchString = event.target.value.toLowerCase()
          const newFilteredMonsters = monsters.filter((monsters) => 
            monsters.name.toLowerCase().includes(searchString)
          )
          setFilteredMonsters(newFilteredMonsters)
  }

  return (
    <>
      <div className="app-container">
        <h1 className='app-title'>Monsters Rolodex</h1>
        <Search onChangeHandler={ onSearchChange }/>
        <CardList monsters={filteredMonsters} />
      </div>
    </>
  )

}

export default App
