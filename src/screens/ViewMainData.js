import * as React from 'react';
import * as RN from 'react-native';

import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import { AntDesign, Entypo, Feather, MaterialIcons  } from '@expo/vector-icons';

import axios from 'axios';

import Escalas from './Escalas';
import Grafica from './Grafica';
import Retroalimentacion from './Retroalimentacion';
import Materiales from './Materiales';

const ViewMainData = ({ route }) => {
    const [datosRetro, setDatosRetro] = React.useState([]);

    const Tab = createMaterialBottomTabNavigator();

    React.useEffect(() => {
        axios.get('http://132.248.47.240/api/Respuesta/' + route.params.id_usuario)
            .then(response => {
                let json = response.data;
                setDatosRetro(json);
            })
            .catch(error => {
                console.log(error)
            })
    }, [])


    return (
        // <NavigationContainer>
        <Tab.Navigator
            activeColor="#fff"
            inactiveColor="gray"
            labeled={true}
            shifting={false}
            barStyle={{ backgroundColor: '#30326B' }}
            
        >
            <Tab.Screen
                name="Grafica"
                component={Grafica}
                initialParams={{ id_usuario: route.params.id_usuario, dataMain: datosRetro }}
                options={{
                    tabBarIcon: ({ color }) => (
                        <AntDesign name="barschart" size={24} color={color} />
                    ),
                }} />
            <Tab.Screen
                name="Escalas"
                component={Escalas}
                initialParams={{ id_usuario: route.params.id_usuario, dataMain: datosRetro }}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Entypo name="text" size={24} color={color} />
                    ),
                }} />

            <Tab.Screen
                name="Retroalimentacion"
                component={Retroalimentacion}
                initialParams={{ id_usuario: route.params.id_usuario, dataMain: datosRetro }}
                options={{
                    tabBarLabel: "Retroalimenta...",
                    tabBarIcon: ({ color }) => (
                        <AntDesign name="retweet" size={24} color={color} />
                    ),
                }} />
            <Tab.Screen
                name="Materiales"
                component={Materiales}
                initialParams={{ id_usuario: route.params.id_usuario, dataMain: datosRetro }} 
                options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialIcons name="picture-as-pdf" size={24} color={color} />
                    ),
                }} />
        </Tab.Navigator>
        //</NavigationContainer>
    )
}

export default ViewMainData;