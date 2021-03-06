import React, { useEffect, useState } from 'react';
import './App.css';

const App = () => {
    const [ip, setIp] = useState([]);
    useEffect(() =>{
        const url=`http://whatismyip-api.herokuapp.com/?fbclid=IwAR3cH1PkUkf98itMDcJFS9Gjdmqyd419m6aznIsOUy1j3ai-SuZ_QDXRnoU`;
        fetch(url)
        .then(res => res.json())
        .then(data => setIp(data))
    },[])


    return (
        <div className="ip-app">
            <h1>
                {ip.public_ip}
            </h1>
        </div>
    );
};

export default App;