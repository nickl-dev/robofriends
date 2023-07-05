import CardList from './components/CardList'
import React, { Component } from 'react'
import robots from './utils/robots'
import SearchInput from './components/SearchInput'

class App extends Component {
  constructor () {
    super ();

    this.state = {
      robots,
      searchInput: ''
    }
  }

  onSearchChange = (event) => {
    this.setState({ searchInput: event.target.value })
    console.log(this.state)
  }

  trimAndLowerCase = (string) => string.trim().toLowerCase();

  render () {
    const filteredRobots = this.state.robots.filter((robot) => {
      return this.trimAndLowerCase(robot.name).includes(this.trimAndLowerCase(this.state.searchInput))
    })

    return (
      <div className='text-center p-4'>
        <h1 className='text-4xl'>Robofriends</h1>

        {/* Filter robots */}
        <SearchInput searchChange={this.onSearchChange} />
  
        <section className='mt-5'>
          {filteredRobots.length 
            ? <CardList cards={filteredRobots} /> 
            : <h3>No robots found for `'${this.state.searchInput}'`</h3>
          }
        </section>
      </div>
    );
  }
}

export default App;
