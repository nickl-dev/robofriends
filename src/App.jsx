import CardList from './components/CardList'
import robots from './utils/robots'
import React, { Component } from 'react'

class App extends Component {
  render () {
    return (
      <>
        <h1 className='tc'>Robofriends</h1>

        {/* Filter robots */}
        <input />
  
        <section className=''>
          <CardList cards={robots} />
        </section>
      </>
    );
  }
}

export default App;
