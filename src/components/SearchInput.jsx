import React from 'react'

const SearchInput = ({ searchChange }) => {
  return (
    <>
      <input 
        className='text-center mt-3 p-2 rounded outline-none focus:bg-cyan-100 border-2 focus:border-cyan-300 border-cyan-100 w-full max-w-sm'
        onChange={searchChange}
        placeholder='Search robots...'
        type='search'
      />
    </>
  )
}

export default SearchInput;