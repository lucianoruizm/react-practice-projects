import styles from './weatherMainInfo.module.css';

export default function WeatherMainInfo({weather}) {

    return (
        <div className={styles.mainInfo}>
            <div className={styles.city}>{weather?.location.name}</div>
            <div className={styles.country}>{weather?.location.country}</div>
            <div className={styles.row}>
                <div>
                    <img 
                    className={styles.weatherIcon}
                    src={weather?.current.weather_icons}
                    width = '128'
                    alt={weather?.current.weather_descriptions}
                    />
                </div>
                <div>
                    <div className={styles.description}>{weather?.current.weather_descriptions}</div>
                    <div className={styles.temperature}>{weather?.current.temperature}º</div>
                    <div className={styles.others}>Humidity: {weather?.current.humidity}</div>
                    <div className={styles.others}>Pressure: {weather?.current.pressure}</div>
                    <div className={styles.others}>Visibility: {weather?.current.visibility}</div>
                </div>
            </div>
            <iframe
            title="mapa"
            src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d317715.7119369244!2d${weather?.location.lon}6!3d${weather?.location.lat}5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sar!4v1659224599254!5m2!1ses!2sar`}
            className={styles.cityMap}
            width="100%" 
            height="450" 
            style={{ border:0 }} 
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
    )
}