import CardList from './components/CardList'
import Loader from './components/Loader'
import React, { Component } from 'react'
import SearchInput from './components/SearchInput'

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

    const shouldRenderRobots = this.state.robots.length > 0

    return (
      <div className='bg-gradient-to-b from-slate-600 to-slate-400 text-center p-5 min-h-screen'>
        <h1 className='text-6xl text-cyan-400 font-japanese-robot mt-6'>RoboFriends</h1>

        {shouldRenderRobots ? <SearchInput searchChange={this.onSearchChange} /> : null}

        <section className='mt-5'>
          {shouldRenderRobots 
            ? <CardList cards={filteredRobots} /> 
            : <Loader />
          }

          {shouldRenderRobots && !filteredRobots.length 
            ? <h3 className='text-cyan-300 font-semibold'>No robots found for <strong>'{`${this.state.searchInput}`}'</strong></h3>
            : null
          }
        </section>
      </div>
    );
  }
}

export default App;
