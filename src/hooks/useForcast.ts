import { ChangeEvent, useEffect, useState } from "react" 
import { optionType, forcastType } from '../types'

const useForcast = () => {
  const [term, setTerm] = useState<string>('')
  const [city, setCity] = useState<optionType | null>(null)
  const [options, setOptions] = useState<[]>([])
  const [forcast, setForecast] = useState<forcastType | null>(null)

  const getSearchOptions = (value: string) => {
    fetch(
      `http://api.openweathermap.org/data/2.5/forecast?lat=${city.lat}
      &lon=${city.lon}&units=metric&appid=${process.env.REACT_APP_API_KEY}`
    )
    .then(res=> res.json())
    .then(data => setOptions(data))
  }

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim()
    setTerm(value)

    if (value === '') return

    getSearchOptions(value)
  }

  const getForecast = (city: optionType) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather? lat=${city.lat}&lon=${city.lon}&units=metric&
      appid=${process.env.REACT_APP_API_KEY}`
    )
    .then(res => res.json())
    .then(data => {
      const forecastData = {
        ...data.city,
        list: data.list.slice(0, 16)
      }

      setForecast(forecastData)
    })
  }

  const onSubmit = () => {
    if (!city) return

    getForecast(city)
  }

  const onOptionSelect = (option: optionType ) => {
    setCity(option)
    
  }

  useEffect(() => {
    if (city) {
      setTerm(city.name)
      setOptions([])
    }

  }, [city])
}

return {
  options, 
  forcast, 
  onInputChange, 
  onOptionSelect, 
  onSubmit
}

export default useForcast;