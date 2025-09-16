import React from "react";
import styles from './Weather.module.scss'

function Weather() {
    const weatherData = {
        "hanoi": { city: "Hà Nội", temp: 28, weather: "Nắng", humidity: 65 },
        "hcm": { city: "TP.HCM", temp: 32, weather: "Có mây", humidity: 78 },
        "danang": { city: "Đà Nẵng", temp: 30, weather: "Mưa nhẹ", humidity: 82 }
    };

    const locations = ['hanoi', 'hcm', 'danang']
    const [location, setLocation] = React.useState(weatherData.danang)

    function getWeatherIcon() {
        if (location.weather === 'Nắng') {
            return '☀️'
        } else if (location.weather === 'Có mây') {
            return '🌤️'
        } else if (location.weather === 'Mưa nhẹ') {
            return '🌧️'
        }
    }

    function getBackgroundImage() {
        if (location.weather === 'Nắng') {
            return 'https://img.freepik.com/free-photo/white-cloud-blue-sky-sea_74190-4488.jpg?semt=ais_hybrid&w=740&q=80'
        } else if (location.weather === 'Có mây') {
            return 'https://png.pngtree.com/thumb_back/fh260/background/20221013/pngtree-dark-rainy-clouds-lurid-sky-cloudy-skyscape-photo-image_627953.jpg'
        } else if (location.weather === 'Mưa nhẹ') {
            return 'https://img.tripi.vn/cdn-cgi/image/width=700,height=700/https://gcs.tripi.vn/public-tripi/tripi-feed/img/474080Bkh/anh-mua-roi-tren-mat-dat_113308229.jpg'
        }
    }

    function handleSetLocation(e) {
        const settingLocation = locations.find(location => weatherData[location].city === e.target.value)
        setLocation(weatherData[settingLocation])
    }

    function getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    return (
        <div className={styles.weatherWrapper}>
            <div className={styles.weatherAppWrapper} style={{ backgroundImage: `url(${getBackgroundImage()})` }}>
                <div className={styles.overlay}></div>
                <div className={styles.location}>
                    <i className={`${styles.locationIcon} fa-solid fa-location-dot`}></i>
                    <select id={styles.locationSelect}
                        value={location.city}
                        onChange={handleSetLocation}
                    >
                        {locations.map((location, index) => (
                            <option key={index} value={weatherData[location].city}>{weatherData[location].city}</option>
                        ))}
                    </select>
                </div>

                <div className={styles.weatherDetail}>
                    <h2 className={styles.temperature}>
                        <p className={styles.temperatureIndex}>{location.temp + getRandomNumber(-1, 1)}°C</p>
                        <span className={styles.temperatureIcon}>{getWeatherIcon()}</span>
                        <div className={styles.description}>{location.weather}</div>
                    </h2>
                    <div className={styles.statistics}>
                        <div className={styles.statistic}>
                            <i className={`${styles.statisticIcon} fa-solid fa-droplet`}></i>
                            <p className={styles.statisticPercent}>{location.humidity + getRandomNumber(-5, 5)}%</p>
                            <p className={styles.statisticTitle}>Humidity</p>
                        </div>
                    </div>
                </div>

                <div className={styles.refresh} onClick={() => setLocation({ ...location })}>
                    <i className="fa-solid fa-rotate"></i>
                    Refresh
                </div>
            </div>
        </div>
    )

}

export default Weather