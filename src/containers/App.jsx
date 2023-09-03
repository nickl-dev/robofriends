import { connect } from 'react-redux';
import { setSearchField, requestRobots } from '../actions';
import CardList from '../components/CardList'
import Loader from '../components/Loader'
import React, { useEffect } from 'react'
import Scroll from '../components/Scroll'
import SearchInput from '../components/SearchInput'

const mapStateToProps = (state) => { 
  return {
    error: state.requestRobots.error,
    isPending: state.requestRobots.isPending,
    robots: state.requestRobots.robots,
    searchField: state.searchRobots.searchField
  } 
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
  }
}

function App ({ onSearchChange, onRequestRobots, error, isPending, robots, searchField }) {  
  useEffect (() => {
    onRequestRobots();
  }, [])

  const trimAndLowerCase = (string) => string.trim().toLowerCase();

  const filteredRobots = robots.filter((robot) => trimAndLowerCase(robot.name).includes(trimAndLowerCase(searchField)))

  return (
    <div className='bg-gradient-to-b from-slate-700 to-blue-500 text-center p-5 min-h-screen'>
      <h1 className='text-4xl sm:text-5xl md:text-6xl text-cyan-400 font-japanese-robot mt-6'>RoboFriends</h1>
      { isPending ? 
        <Loader />
        : error 
          ? <h3 className='text-cyan-300 mt-10'>Oops! There was an error while gathering the robofriends.</h3>
          : <>
              <SearchInput searchChange={onSearchChange} />

              <section className='mt-5'>
                {filteredRobots.length
                  ? <Scroll>
                      <CardList cards={filteredRobots} />
                    </Scroll> 
                  : <h3 className='text-cyan-300'>Oops! No robots found for
                      <strong> '{`${searchField}`}'</strong>
                    </h3>
                }
              </section>
            </>
      }
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(App);