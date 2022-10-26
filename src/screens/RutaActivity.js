import * as React from 'react';
import * as RN from 'react-native';

import axios from 'axios';

import ruta from '../images/ruta.jpeg';
import imgContinuar from '../images/boton_continuar.png';
import Background from '../images/trama_azul1.png';
import pregunta from '../images/pregunta_4.png';
import boton1 from '../images/happy_3.png';
import boton2 from '../images/happy_2.png';
import boton3 from '../images/confused.png';
import boton4 from '../images/angry.png';

import { StackActions } from '@react-navigation/native';

const RutaActivity = ({ navigation, route }) => {
    const [instrucciones, setInstrucciones] = React.useState(false);
    const [listaPreguntas, setListaPreguntas] = React.useState([{}]);
    const [cuentaPreguntas, setCuentaPreguntas] = React.useState();
    const [preguntaT, setPreguntaT] = React.useState();
    const [respuestas, setRespuestas] = React.useState([]);


    // const onPress = (value) => setRespuestas(respuestas.push(value));

    const styles = {
        visibilidadInstrucciones: {
            display: `${instrucciones == false ? 'flex' : 'none'}`,
        },
        imagePresentacionRuta: {
            width: '100%',
            height: '100%',
        },
        botones: {
            height: 60,
            width: 200,
            resizeMode: 'contain',
        },
        botonContinuar: {
            // width: 600,
            bottom: 5,
            alignSelf: 'center',
            zIndex: 2, // works on ios
            elevation: 2,
            position: 'absolute',
        },
        imageBackground: {
            flex: 1,
            // justifyContent: "center"
        },
        container: {
            flex: 1,
            backgroundColor: 'rgba(30, 60, 255, 0.7)',
            alignItems: 'center',
            width: '100%',
        },
        mainContainer: {
            flex: 1,
        },
        preguntaStyle: {
            top: -50,
            left: 20,
            width: 400,
            position: 'absolute',
            resizeMode: 'contain',
        },
        preguntaContainer: {
            width: "100%",
            margin: 40,
            padding: 65,
            alignItems: 'center',
            backgroundColor: 'rgba(30, 60, 255, 0.7)',
        },
        preguntaTexto: {
            color: 'white',
            fontSize: 20,
            fontWeight: '700',
        },
        botonesRespuesta: {
            width: 120,
            height: 120,
            resizeMode: 'contain',
        },
        viewBotonesRespuesta: {
            flex: 1,
            flexDirection: 'row',
            maxHeight: 140,
        },
        containerNumPregunta: {
            flex: 1,
            backgroundColor: 'gray',
            alignItems: 'center',
            maxHeight: 28,
        },
        barraProgresoContainer: {
            flex: 1,
            backgroundColor: 'rgba(30, 60, 255, 0.7)',
            justifyContent: "center",
            width: "100%",
            maxHeight: 20,
        },
        barraProgreso: {
            flex: 1,
            backgroundColor: 'rgb(0, 251, 255)',
            width: `${(100 / 61) * cuentaPreguntas}%`,
            maxHeight: 6,
            // marginTop:7,
        },
        botonEnvioRespuestas: {
            display: `${(cuentaPreguntas + 1) > 61 ? "flex" : "none"}`
        }
    };

    // console.log(cuentaPreguntas);

    React.useEffect(() => {
        // axios.get('http://132.248.47.240/api/pregunta/' + route.params.id_usuario)
        axios.get('http://132.248.47.240/api/pregunta/' + 33632)
            .then(response => {
                const json = response.data;
                setListaPreguntas(json);
                // console.log(json.descripcion[3]);
            })
            .catch((error) => {
                console.log(error);
            })
    }, []);

    React.useEffect(() => {
        listaComprobacion();

    }, [cuentaPreguntas]);

    const listaComprobacion = () => {
        if (listaPreguntas.descripcion != undefined) {
            setPreguntaT(listaPreguntas.descripcion[cuentaPreguntas]);
        } else {
            setPreguntaT("Cargando preguntas...");
        }
    }

    const envioRespuestas = () => {
        if (respuestas[60] == 1) {
            respuestas[4] = 0;
            respuestas[14] = 0;
            respuestas[24] = 0;
            respuestas[34] = 0;
            respuestas[44] = 0;
            respuestas[54] = 0;
        }

        axios.post('http://132.248.47.240/api/Cuestionario/Save', { 'id_usuario': route.params.id_usuario, 'respuestas': respuestas })
            // axios.post('http://132.248.47.240/api/Cuestionario/Save',{ 'id_usuario': 33632, 'respuestas':respuestas})
            .then(response => {
                // console.log(response.data)
                navigation.dispatch(
                    StackActions.replace('ViewMainData', { id_usuario: route.params.id_usuario, dataMain: response.data })
                    // StackActions.replace('ViewMainData', { id_usuario: 33632, dataMain:response.data })
                )
            })
            .catch((error) => {
                console.log(error);
            })
    }


    return (
        <>
            <RN.View style={styles.visibilidadInstrucciones}>
                <RN.Image source={ruta} style={styles.imagePresentacionRuta} />
                <RN.TouchableOpacity style={styles.botonContinuar} onPress={() => { setInstrucciones(true); setCuentaPreguntas(0); }}>
                    <RN.Image source={imgContinuar} style={styles.botones} />
                </RN.TouchableOpacity>
            </RN.View>
            <RN.View style={styles.mainContainer}>
                <RN.ImageBackground source={Background} resizeMode="cover" style={[styles.imageBackground, styles.container]}>
                    <RN.View style={styles.preguntaContainer}>
                        <RN.Text style={styles.preguntaTexto}>{preguntaT}</RN.Text>
                    </RN.View>
                    <RN.Image source={pregunta} style={styles.preguntaStyle} />
                    <RN.View style={styles.viewBotonesRespuesta}>
                        <RN.TouchableOpacity style={{
                            paddingLeft: 10,
                            paddingRight: 10,
                            display: `${cuentaPreguntas >= 61 ? 'none' : 'flex'}`
                        }}
                            onPress={() => {
                                setCuentaPreguntas(cuentaPreguntas + 1);
                                respuestas.push(4); ;
                            }}
                        >
                            <RN.Image style={styles.botonesRespuesta} source={boton1} />
                        </RN.TouchableOpacity>
                        <RN.TouchableOpacity style={{
                            paddingLeft: 10,
                            paddingRight: 10,
                            display: `${cuentaPreguntas >= 60 ? 'none' : 'flex'}`
                        }}
                            onPress={() => {
                                setCuentaPreguntas(cuentaPreguntas + 1)
                                respuestas.push(3); ;
                            }}
                        >
                            <RN.Image style={styles.botonesRespuesta} source={boton2} />
                        </RN.TouchableOpacity>
                    </RN.View>
                    <RN.View style={styles.viewBotonesRespuesta}>
                        <RN.TouchableOpacity style={{
                            paddingLeft: 10,
                            paddingRight: 10,
                            display: `${cuentaPreguntas >= 60 ? 'none' : 'flex'}`
                        }}
                            onPress={() => {
                                setCuentaPreguntas(cuentaPreguntas + 1)
                                respuestas.push(2); ;
                            }}
                        >
                            <RN.Image style={styles.botonesRespuesta} source={boton3} />
                        </RN.TouchableOpacity>
                        <RN.TouchableOpacity style={{
                            paddingLeft: 10,
                            paddingRight: 10,
                            display: `${cuentaPreguntas >= 61 ? 'none' : 'flex'}`
                        }}
                            onPress={() => {
                                setCuentaPreguntas(cuentaPreguntas + 1)
                                respuestas.push(1); ;
                            }}
                        >
                            <RN.Image style={styles.botonesRespuesta} source={boton4} />
                        </RN.TouchableOpacity>
                    </RN.View>

                    <RN.View style={styles.containerNumPregunta}>
                        <RN.Text style={styles.preguntaTexto}>Pregunta {(cuentaPreguntas + 1) >= 62 ? 61 : (cuentaPreguntas + 1)} de 61</RN.Text>
                    </RN.View>
                    <RN.View style={styles.barraProgresoContainer}>
                        <RN.View style={styles.barraProgreso}></RN.View>
                    </RN.View>
                    <RN.TouchableOpacity style={[styles.botonContinuar, styles.botonEnvioRespuestas]} onPress={() => { envioRespuestas() }}>
                        <RN.Image source={imgContinuar} style={styles.botones} />
                    </RN.TouchableOpacity>
                </RN.ImageBackground>
            </RN.View>
        </>
    );

}

// delete from cuestionario_pregunta_v2 where cuestionario_id = 24062;
// delete from cuestionario_v2 where usuario_id = 33632;


export default RutaActivity;
