import CardList from '../components/CardList'
import Loader from '../components/Loader'
import React, { useState, useEffect } from 'react'
import SearchInput from '../components/SearchInput'
import Scroll from '../components/Scroll'

function App () {
  const [robots, setRobots] = useState([]);
  const [searchInput, setSearchInput] = useState('');

  useEffect (() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => setRobots(data))
      .catch((error) => { throw error })
  }, [])

  const onSearchChange = (event) => {
    setTimeout(() => {
      setSearchInput(event.target.value)
    }, 100)
  }

  const trimAndLowerCase = (string) => string.trim().toLowerCase();

  const filteredRobots = robots.filter((robot) => {
    return trimAndLowerCase(robot.name).includes(trimAndLowerCase(searchInput))
  })

  if (!robots.length) {
    return (
      <div className='bg-gradient-to-b from-slate-700 to-blue-500 text-center p-5 min-h-screen'>
        <Loader />
      </div>
    )
  } else {
    return (
      <div className='bg-gradient-to-b from-slate-700 to-blue-500 text-center p-5 min-h-screen'>
        <h1 className='text-4xl sm:text-5xl md:text-6xl text-cyan-400 font-japanese-robot mt-6'>RoboFriends</h1>

        <SearchInput searchChange={onSearchChange} />

        <section className='mt-5'>
          {filteredRobots.length
            ? <Scroll>
                <CardList cards={filteredRobots} />
              </Scroll> 
            : <h3 className='text-cyan-300 font-semibold'>No robots found for 
                <strong>'{`${searchInput}`}'</strong>
              </h3>
          }
        </section>
      </div>
    )
  }
}

export default App;