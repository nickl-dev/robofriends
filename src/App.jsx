import CardList from './components/CardList'
import Loader from './components/Loader'
import React, { Component } from 'react'
import SearchInput from './components/SearchInput'
import Scroll from './components/Scroll'

class App extends Component {
  constructor () {
    super ();

    this.state = {
      robots: [],
      searchInput: ''
    }
  }

  async componentDidMount () {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users')
      const data = await response.json();
      this.setState({ robots: data });
    } catch (error) {
      throw error;
    }
  }

  onSearchChange = (event) => {
    setTimeout(() => {
      this.setState({ searchInput: event.target.value })
    }, 100)
  }

  trimAndLowerCase = (string) => string.trim().toLowerCase();

  render () {
    const filteredRobots = this.state.robots.filter((robot) => {
      return this.trimAndLowerCase(robot.name).includes(this.trimAndLowerCase(this.state.searchInput))
    })

    if (!this.state.robots.length) {
      return (
        <div className='bg-gradient-to-b from-slate-700 to-blue-500 text-center p-5 min-h-screen'>
          <Loader />
        </div>
      )
    } else {
      return (
        <div className='bg-gradient-to-b from-slate-700 to-blue-500 text-center p-5 min-h-screen'>
          <h1 className='text-4xl sm:text-5xl md:text-6xl text-cyan-400 font-japanese-robot mt-6'>RoboFriends</h1>

          <SearchInput searchChange={this.onSearchChange} />

          <section className='mt-5'>
            {filteredRobots.length
              ? <Scroll>
                  <CardList cards={filteredRobots} />
                </Scroll> 
              : <h3 className='text-cyan-300 font-semibold'>No robots found for 
                  <strong>'{`${this.state.searchInput}`}'</strong>
                </h3>
            }
          </section>
        </div>
      )
    }
  }
}

export default App;
