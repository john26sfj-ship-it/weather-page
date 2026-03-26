import Header from "./components/Header.jsx"
import WeatherComponent from "./components/WeatherComponent.jsx"
import "./App.css"
import { useEffect, useState } from "react"

function App() {
  // Coordinates for Berlin.
  // const lat = 52.52;
  // const lon = 13.41;
  const apiUrl = "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m"

  const [data, setData] = useState();
    
  useEffect (() => {
  const dataFetch = async ()=> {

      const response = await fetch(`${apiUrl}`)
      setData(await response.json())
   }
  dataFetch(); 
    }, [])
  

  return (
    <>
      <Header />
      <WeatherComponent
      data={data}
       />
    </>
  )
}

export default App
