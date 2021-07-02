import React, {useState, useEffect} from 'react';



export default function Weather() {
    const [lat, setLat] = useState([]);
    const [long, setLong] = useState([]);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(function (position) {
            setLat(position.coords.latitude);
            setLong(position.coords.longitude);
        });

        console.log("Latitude is:", lat);
        console.log("Longitude is:", long);
    }, [lat, long]);

    return (
        <div>
            <div className="rainbow">
                <h2>Latitude is: {lat}</h2>
                <h2>Longitude is: {long}</h2>
            </div>
        </div>
    )
}

