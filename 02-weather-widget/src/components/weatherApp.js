import { useEffect, useState } from 'react';
import WeatherForm from './weatherForm';
import WeatherMainInfo from './weatherMainInfo';
import styles from './weatherApp.module.css';
import Loading from './loading';

export default function WeatherApp() {
    const [weather, setWeather] = useState(null);

    useEffect(() => {
        loadInfo();
    }, []); //Array vacío, quiere decir que el useEffect se ejecutará una sola vz cuando se crea el componente

    useEffect(() => {
        document.title = `Weather | ${weather?.location.name ?? ''}` // Si no es nulo retorna nombre de localización sino un string vacío
    }, [weather])

    async function loadInfo(city = 'Buenos Aires') {
        try {
          const request = await fetch(
            `${process.env.REACT_APP_URL}current?access_key=${process.env.REACT_APP_KEY}&query=${city}`
          )
          const json = await request.json();

          setTimeout(() =>{
            setWeather(json);
          }, 2000);
          setWeather(json);

          console.log(json);
        }
        
        catch(e){
               console.log(e);
        }
    }

    function handleChangeCity(city){
        setWeather(null);
        loadInfo(city)
    }

    return (
        <div className={styles.weatherContainer}>
            <WeatherForm onChangeCity={handleChangeCity} />
            {weather ? <WeatherMainInfo weather={weather} /> : <Loading />}
            <footer>Created with React - 2022</footer>
        </div>
    )
}