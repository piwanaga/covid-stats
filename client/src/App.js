import React, { useState } from 'react';
import { gql, useQuery } from '@apollo/client';

const GET_CASES = gql`
  query GetCases($location: String!) {
    cases(location: $location) {
      state
      newCases
      newDeaths
      totalCases
      totalDeaths
    }
  }
`

function App() {
  const [location, setLocation] = useState('')
  const [nextLocation, setNextLocation] = useState('')

  const { data, loading, error } = useQuery(GET_CASES, {
    variables: { location }
  });

  const handleChange = e => {
    setNextLocation(e.currentTarget.value)
  };

  const handleSubmit = e => {
    e.preventDefault()
    setLocation(`US-${nextLocation}/`)
    setNextLocation('')
  };

  return (
    <div className="App">
      <h1 className='text-5xl text-center my-16'>Get Covid Stats by U.S. State</h1>
      <form onSubmit={handleSubmit}>
        <div className='max-w-md mx-auto text-center'>
          <input 
            type='text'
            placeholder='Enter state code e.g. CA'
            value={nextLocation} 
            onChange={handleChange}
            className='border-gray-500 mr-2 mb-10 focus:border-red-300 focus:ring-red-300 focus:ring-opacity-50'
          />
          <button className='text-white bg-red-500 p-2' type='submit'>Submit</button>
        </div>
      </form>
      <div className='max-w-md mx-auto text-center'>
        {loading && <h5>Loading...</h5>}
        {error && <h5 className='italic text-gray-500'>Oops! Something went wrong. Please enter a valid state code.</h5>}
        {data &&
          <div>
            <p className='text-xl font-semibold mb-2'>{data.cases.state}</p>
            <p>Total Cases: {data.cases.totalCases.toLocaleString()}</p>
            <p>Total Deaths: {data.cases.totalDeaths.toLocaleString()}</p>
            <p>New Cases: {data.cases.newCases.toLocaleString()}</p>
            <p>New Deaths: {data.cases.newDeaths.toLocaleString()}</p>
          </div>  
        }
      </div>
    </div>
  );
}

export default App;
