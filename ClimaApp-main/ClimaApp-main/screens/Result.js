import React, { useState, useEffect } from 'react'
import {StyleSheet, ScrollView, View, Text, Keyboard, ImageBackground, TouchableWithoutFeedback, Alert, Image, StatusBar } from 'react-native'
import Mapa from "./screens/components/Mapa";
import Formulario from "./screens/Formulario";
import StatusBar from "./screens/Search";

//en esta screren montramos el mapa 

const Result =() =>{

	Return: (

<TouchableWithoutFeedback onPress={() => ocultarTeclado()}>
                <View style={[styles.app, bgColorApp]}>
                    <View style={styles.contenido}>
                        <Mapa
                            vermapa={vermapa}/>
                            
                           </View>
                </View>
            </TouchableWithoutFeedback>

        </View>
    )



}


export default Result;

const styles = StyleSheet.create({
    contenido: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    texto: {
        color: "#EDF2F4"
    },
    app: {
        flex: 1,
        justifyContent: 'center'
      },
    contenido: {
        marginHorizontal: '2.5%'
    }
});