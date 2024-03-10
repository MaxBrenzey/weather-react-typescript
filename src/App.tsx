import { ChangeEvent, useEffect, useState } from "react" 
import { optionType } from './types'
import Search from "./components/Icons/Search"
import useForcast from './hooks/useForcast'
import Forecast from './components/Forecast'


const App = (): JSX.Element => {

  const {
    options, 
    forcast, 
    onInputChange, 
    onOptionSelect, 
    onSubmit
  } = useForcast()

  return (
    <main className="flex justify-center items-center bg-gradient-to-br from-sky-400 via-rose-400 
      to-lime-400 h-[100vh] w-full">
        {forcast ? (
          <Forecast data={forcast} />
        ) : (
          <Search 
            term={term}
            options={options}
            onInputChange={onInputChange}
            onOptionSelect={onOptionSelect}
            onSubmit={onSubmit}
          />
        )}
      
    </main>
  )
}

export default App
