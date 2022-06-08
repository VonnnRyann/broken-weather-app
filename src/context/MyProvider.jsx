import {useState,useRef} from 'react'
import { Country} from 'country-state-city'
import MyContext from './MyContext'
import axios from 'axios'
//import dateFormatter from '../helpers/dateFormatter'

const MyProvider = ({children}) => {
    //
    const countries = useRef(Country.getAllCountries());
    const [data,setData] = useState({});
    const [location,setLocation] = useState('')
    const [citySelect, setCitySelect] = useState('');
    const [country, setCountry] = useState({
        Country: ''
    })
    

    const searchLocation = (e) => {
        if(e.key === 'Enter') {
        axios.get(URL).then((res) => {
            setData(res.data)
            })

            setLocation('')
            setCountry('')
            
        }
    }

     const searchLocation2 = (e) => {
        if(e.key === 'Enter') {
        axios.get(URL2).then((res2) => {
            setData(res2.data)
            console.log(res2.data);
        })

            setLocation('')
            setCountry('')
            
        }
    }
    //
    /* const countries = useRef(Country.getAllCountries());
    const [countrySelect, setCountrySelect] = useState({
        Country: '',
        flag: '',
        countryCode: ''
    });

    const [states,setStates] = useState([])
    const [stateSelect,setStateSelect] = useState({
        state: '',
        stateCode: ''
    });

    const [cities,setCities] = useState([]);
    const [citySelect, setCitySelect] = useState(''); */

    /* const [data, setData] = useState({
        result: null,
        loading: true,
        error: null
    }) */

    const API_KEY = process.env.REACT_APP_MY_KEY;
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${API_KEY}`;
    const URL2 = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=metric&appid=${API_KEY}`
    console.log(URL);
    console.log(URL2);
    /* console.log(country);
    console.log(citySelect); */



    /* useEffect(() => {
        setStates(State.getStatesOfCountry(countrySelect.countryCode))
        setData({
            result: null,
            loading:true,
            error: null
        })
    }, [countrySelect])


    useEffect(() => {
        setCities(City.getCitiesOfState(countrySelect.countryCode,stateSelect.stateCode))
    }, [countrySelect,stateSelect])

    useEffect(() => {
        fetch(URL)
        .then((res) => res.json())
        .then((result) => setData({
            result, 
            loading:false,
            error: null
        }))
        .catch((error) => setData({
            result: null,
            loading: false,
            error
        }))
    }, [URL]) */



  return (

    <MyContext.Provider value={{
        countries,
        location,
        setLocation,
        searchLocation,
        searchLocation2,
        citySelect,
        setCitySelect,
        //searchLocation2,
        //dateFormatter,
        data,
    }}>
        {children}
    </MyContext.Provider>
  )
}

export default MyProvider