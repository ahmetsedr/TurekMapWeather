import React, { useState, useEffect } from 'react';
import TurkeyMap from 'turkey-map-react';
import SignOut from '../components/SignOut';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from "../firebase";

const Home = () => {
    const [selectedCity, setSelectedCity] = useState('');
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState(null);
    const [email, setEmail] = useState('');

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setEmail(user.email);
            }
        });

        return () => {
            unsubscribe();
        };
    }, []);

    const handleClick = async ({ name }) => {
        setSelectedCity(name);
        setWeatherData(null);
        setError(null);

        try {
            const apiKey = '8743577dce205d401ad0d7f04223b711';
            const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${apiKey}&units=metric`;

            const response = await fetch(apiUrl);
            const data = await response.json();

            if (response.ok) {
                setWeatherData(data);
                setError(null);
            } else {
                setError('Hava durumu verisi bulunamadı.');
            }
        } catch (error) {
            console.error('Hava durumu verisi alınamadı:', error);
            setError('Hava durumu verisi alınamadı.');
        }
    };

    return (
        <div>
            <SignOut />
            <div>
                <h1>Hoşgeldin 👋, {email}</h1>
                <TurkeyMap onClick={handleClick} />
                {selectedCity && (
                    <div>
                        <h6>
                            {selectedCity} ilindesiniz
                        </h6>
                        {error ? (
                            <p>
                                {error}
                            </p>
                        ) : (
                            weatherData && (
                                <div>
                                    <p>
                                        Hava Durumu: {weatherData.weather[0].description}
                                    </p>
                                    <p>
                                        Sıcaklık: {weatherData.main.temp}°C
                                    </p>
                                    <p>
                                        Rüzgar Hızı: {weatherData.wind.speed} km/s
                                    </p>
                                </div>
                            )
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Home;
