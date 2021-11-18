import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import Clima from "./screens/components/Clima";




// en este componente se hace el llamado a la api con el mapa,
const Mapa = ({ resultado }) => {

const [vermapa, GuardarMapa] = useState({
        json.lat: '', //json.lat y json.lon son los parametros latitud y lungitud que vienen ene resultado de la primera busqueda y se pasan aqui a la segunda, 
                      // aqui son variables vacias para capturar los nuevos datos
        json.lon: ''

      });
     const [consultarMapa, guardarConsultarMapa] = useState(false);
      
    const { json.lat, json.lon } = vermapa
    

    useEffect(() => {
        const consultarMapa = async () => {
          if (consultarMapa) {
            const appId = 'f3e0019459448698b2d30f3b5e803701';
            const url = "http://maps.openweathermap.org/maps/2.0/weather/{TA2}/{Z}/${json.lat}/${json.lot}?appid={appID}";
            try {
              const respuesta = await fetch(url);
              const vermapa = await respuesta.json();
              guardarMapa(verMapa);
              guardarConsultarMapa(false);

              const kelvin = 273.15;
              const { main } = resultado;
              const actual = main.temp - kelvin;

          }


          export default Mapa; 