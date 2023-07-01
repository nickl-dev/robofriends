import Card from './components/Card'
import robots from './utils/robots'
import React, { Component } from 'react'

class App extends Component {
  render () {
    return (
      <div className="p-3">
        <h1 className='text-center'>Robofriends</h1>

        {/* Filter robots */}
        <input />
  
        <section className='flex gap-1 flex-wrap'>
          {robots.map((robot) => {
            return (
              <Card
                key={robot.id}
                id={robot.id}
                name={robot.name}
                email={robot.email}
              />
            )
          })}
        </section>
      </div>
    );
  }
}

export default App;
