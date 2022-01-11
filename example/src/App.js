import React from 'react'

import { SearchFilter } from '@search-filter/react'
import '@search-filter/react/dist/index.css'
import response from './__data/Shops_attributes_response.json'
const App = () => {
  const updateFilter = (newFilter) => {
    console.log(newFilter)
  }
  return (
    <SearchFilter
      options={response.response.data}
      selected={{}}
      updateFilter={updateFilter}
    />
  )
}

export default App
