import React from 'react'

import { ChakraProvider } from '@chakra-ui/react'
import { SearchOptions } from './components/SearchOptions/SearchOptions'
import { FilterProvider } from './context/FilterContext'

import 'react-datepicker/dist/react-datepicker.css'

export const SearchFilter = ({ options, selected, updateSelected }) => {
  return (
    <ChakraProvider>
      <FilterProvider
        options={options}
        selected={selected}
        updateSelected={updateSelected}
      >
        <SearchOptions />
      </FilterProvider>
    </ChakraProvider>
  )
}
