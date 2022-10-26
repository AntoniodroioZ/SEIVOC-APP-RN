import * as React from 'react';
import * as RN from 'react-native';

import RNPickerSelect from 'react-native-picker-select';
import Background from '../images/trama_azul1.png';
import imgContinuar from '../images/boton_continuar.png';

import axios from 'axios';

import { StackActions } from '@react-navigation/native';

const RegistroComplementario = ({ navigation, route }) => {
    const [situacion, setSituacion] = React.useState([]);
    const [estadoSituacion, setEstadoSituacion] = React.useState(0);
    const [modalidad, setModalidad] = React.useState([]);
    const [estadoModalidad, setEstadoModalidad] = React.useState(0);
    const [grado, setGrado] = React.useState([]);
    const [estadoGrado, setEstadoGrado] = React.useState(0);
    const [escuela, setEscuela] = React.useState([]);
    const [estadoEscuela, setEstadoEscuela] = React.useState(0);
    const [anio, setAnio] = React.useState([]);
    const [estadoAnio, setEstadoAnio] = React.useState(0);
    const [plantel, setPlantel] = React.useState([]);
    const [estadoPlantel, setEstadoPlantel] = React.useState(0);
    const [residencia, setResidencia] = React.useState([]);
    const [estadoResidencia, setEstadoResidencia] = React.useState(0);
    const [delegacion, setDelegacion] = React.useState([]);
    const [estadoDelegacion, setEstadoDelegacion] = React.useState(0);
    const [pregunta1, setPregunta1] = React.useState([]);
    const [estadoPregunta1, setEstadoPregunta1] = React.useState(0);
    const [pregunta2, setPregunta2] = React.useState([]);
    const [estadoPregunta2, setEstadoPregunta2] = React.useState(0);
    const [pregunta3, setPregunta3] = React.useState([]);
    const [estadoPregunta3, setEstadoPregunta3] = React.useState(0);
    const [pregunta4, setPregunta4] = React.useState([]);
    const [estadoPregunta4, setEstadoPregunta4] = React.useState(0);


    // Funcionalidad situacion 
    React.useEffect(() => {
        axios.get('http://132.248.47.240/api/GetSituacion/0')
            .then(response => {
                setSituacion(response.data);

            })
            .catch((error) => {
                console.log(error);
            })
    }, []);

    const situacionComprobacion = () => {
        let items = []
        if (situacion.id !== undefined) {
            situacion.nombres.forEach((element, idx) => {
                // console.log(element, situacion.id[idx]);
                items.push({ label: element, value: situacion.id[idx] })
            })
            // console.log(items);
        }
        return items;
    }

    // Funcionalidad modalidad

    React.useEffect(() => {
        axios.get('http://132.248.47.240/api/GetModalidad/' + estadoSituacion)
            .then(response => {
                const json = response.data;
                setModalidad(json);
            })
            .catch((error) => {
                console.log(error);
            })

    }, [estadoSituacion]);

    const modalidadComprobacion = () => {
        let items = [];
        if (modalidad.id !== undefined) {
            modalidad.nombres.forEach((element, idx) => {
                // console.log(element, modalidad.id[idx]);
                items.push({ label: element, value: modalidad.id[idx] })
            })
            // console.log(items);
        }
        return items;
    }

    // Funcionalidad grado
    React.useEffect(() => {
        axios.get('http://132.248.47.240/api/GetGrado/0')
            .then(response => {
                setGrado(response.data);
                // console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, []);
    const gradoComprobacion = () => {
        let items = []
        if (grado.id !== undefined) {
            grado.nombres.forEach((element, idx) => {
                // console.log(element, grado.id[idx]);
                items.push({ label: element, value: grado.id[idx] })
            })
            // console.log(items);
        }
        return items;
    }

    // Funcionalidad escuela
    React.useEffect(() => {
        axios.post('http://132.248.47.240/api/GetEscuela', {
            id_grado: estadoGrado, id_modalidad: estadoModalidad
        })
            .then(response => {
                setEscuela(response.data);
                // console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, [estadoGrado, estadoModalidad]);

    const escuelaComprobacion = () => {
        let items = []
        if (escuela.id !== undefined) {
            escuela.nombres.forEach((element, idx) => {
                // console.log(element, escuela.id[idx]);
                items.push({ label: element, value: escuela.id[idx] })
            })
            // console.log(items);
        }
        return items;
    }

    // Funcionalidad plantel

    React.useEffect(() => {
        axios.get('http://132.248.47.240/api/getPlantel/' + estadoEscuela)
            .then(response => {
                const json = response.data;
                setPlantel(json);
            })
            .catch((error) => {
                console.log(error);
            })
    }, [estadoEscuela])

    const plantelComprobacion = () => {
        let items = []
        if (plantel.id !== undefined) {
            plantel.nombres.forEach((element, idx) => {
                // console.log(element, plantel.id[idx]);
                items.push({ label: element, value: plantel.id[idx] })
            })
            // console.log(items);
        }
        return items;
    }


    // Funcionalidad año
    React.useEffect(() => {
        axios.get('http://132.248.47.240/api/getAnio/' + estadoGrado)
            .then(response => {
                const json = response.data;
                setAnio(json);
            })
            .catch((error) => {
                console.log(error);
            })
    }, [estadoGrado]);

    const anioComprobacion = () => {
        let items = []
        if (anio.id !== undefined) {
            anio.nombres.forEach((element, idx) => {
                // console.log(element, anio.id[idx]);
                items.push({ label: element, value: anio.id[idx] })
            })
            // console.log(items);
        }
        return items;
    }

    // Funcionalidad residencia

    React.useEffect(() => {
        axios.get('http://132.248.47.240/api/getRecidencia/0')
            .then(response => {
                const json = response.data;
                setResidencia(json);
            })
            .catch((error) => {
                console.log(error);
            })
    }, []);

    const residenciaComprobacion = () => {
        let items = []
        if (residencia.id !== undefined) {
            residencia.nombres.forEach((element, idx) => {
                // console.log(element, residencia.id[idx]);
                items.push({ label: element, value: residencia.id[idx] })
            })
            // console.log(items);
        }
        return items;
    }

    // Funcionalidad delegacion
    React.useEffect(() => {
        axios.get('http://132.248.47.240/api/getDelegacion/' + estadoResidencia)
            .then(response => {
                const json = response.data;
                setDelegacion(json);
            })
            .catch((error) => {
                console.log(error);
            })
    }, [estadoResidencia]);

    const delegacionComprobacion = () => {
        let items = []
        if (delegacion.id !== undefined) {
            delegacion.nombres.forEach((element, idx) => {
                // console.log(element, delegacion.id[idx]);
                items.push({ label: element, value: delegacion.id[idx] })
            })
            // console.log(items);
        }
        return items;
    }

    // Funcionalidad pregunta

    React.useEffect(() => {
        axios.get('http://132.248.47.240/api/getPregunta/1')
            .then(response => {
                const json = response.data;
                setPregunta1(json);
            })
            .catch((error) => {
                console.log(error);
            })
        axios.get('http://132.248.47.240/api/getPregunta/2')
            .then(response => {
                const json = response.data;
                setPregunta2(json);
            })
            .catch((error) => {
                console.log(error);
            })
        axios.get('http://132.248.47.240/api/getPregunta/3')
            .then(response => {
                const json = response.data;
                setPregunta3(json);
            })
            .catch((error) => {
                console.log(error);
            })
        axios.get('http://132.248.47.240/api/getPregunta/4')
            .then(response => {
                const json = response.data;
                setPregunta4(json);
            })
            .catch((error) => {
                console.log(error);
            })
    }, [])

    const pregunta1Comprobacion = () => {
        let items = []
        if (pregunta1.id !== undefined) {
            pregunta1.nombres.forEach((element, idx) => {
                // console.log(element, pregunta1.id[idx]);
                items.push({ label: element, value: pregunta1.id[idx] })
            })
            // console.log(items);
        }
        return items;
    }
    const pregunta2Comprobacion = () => {
        let items = []
        if (pregunta2.id !== undefined) {
            pregunta2.nombres.forEach((element, idx) => {
                // console.log(element, pregunta2.id[idx]);
                items.push({ label: element, value: pregunta2.id[idx] })
            })
            // console.log(items);
        }
        return items;
    }
    const pregunta3Comprobacion = () => {
        let items = []
        if (pregunta3.id !== undefined) {
            pregunta3.nombres.forEach((element, idx) => {
                // console.log(element, pregunta3.id[idx]);
                items.push({ label: element, value: pregunta3.id[idx] })
            })
            // console.log(items);
        }
        return items;
    }
    const pregunta4Comprobacion = () => {
        let items = []
        if (pregunta4.id !== undefined) {
            pregunta4.nombres.forEach((element, idx) => {
                // console.log(element, pregunta4.id[idx]);
                items.push({ label: element, value: pregunta4.id[idx] })
            })
            // console.log(items);
        }
        return items;
    }

    const enviarDatos = () => {
        let arrayEnvio = {};
        arrayEnvio.id_usuario = route.params.id_usuario;
        arrayEnvio.situacion = estadoSituacion;
        arrayEnvio.ultimo_anio_cursado = estadoAnio;
        arrayEnvio.delegacion = estadoDelegacion;
        arrayEnvio.escuela = estadoEscuela;
        arrayEnvio.grado = estadoGrado;
        arrayEnvio.modalidad = estadoModalidad;
        arrayEnvio.plantel = estadoPlantel;
        arrayEnvio.residencia = estadoResidencia;
        arrayEnvio.para_que_me_sirve = estadoPregunta1;
        arrayEnvio.opcion_de_carrera = estadoPregunta2;
        arrayEnvio.interes_campo_de_conocimiento = estadoPregunta3;
        arrayEnvio.porque_seguir_estudiando = estadoPregunta4;
        if (estadoSituacion == null) {
            arrayEnvio.situacion = 0;
        }
        if (estadoAnio == null) {
            arrayEnvio.ultimo_anio_cursado = 0;
        }
        if (estadoDelegacion == null) {
            arrayEnvio.delegacion = 0;
        }
        if (estadoEscuela == null) {
            arrayEnvio.escuela = 0;
        }
        if (estadoGrado == null) {
            arrayEnvio.grado = 0;
        }
        if (estadoModalidad == null) {
            arrayEnvio.modalidad = 0;
        }
        if (estadoPlantel == null) {
            arrayEnvio.plantel = 0;
        }
        if (estadoResidencia == null) {
            arrayEnvio.residencia = 0;
        }
        if (estadoPregunta1 == null) {
            arrayEnvio.para_que_me_sirve = 0;
        }
        if (estadoPregunta2 == null) {
            arrayEnvio.opcion_de_carrera = 0;
        }
        if (estadoPregunta3 == null) {
            arrayEnvio.interes_campo_de_conocimiento = 0;
        }
        if (estadoPregunta4 == null) {
            arrayEnvio.porque_seguir_estudiando = 0;
        }

        // envioEffect(arrayEnvio);
        console.log(arrayEnvio);
        axios.post('http://132.248.47.240/api/SaveAlumno', {
            "id_usuario": arrayEnvio.id_usuario,
            "situacion": arrayEnvio.situacion,
            "ultimo_anio_cursado": arrayEnvio.ultimo_anio_cursado,
            "delegacion": arrayEnvio.delegacion,
            "escuela": arrayEnvio.escuela,
            "grado": arrayEnvio.grado,
            "modalidad": arrayEnvio.modalidad,
            "plantel": arrayEnvio.plantel,
            "residencia": arrayEnvio.residencia,
            "para_que_me_sirve": arrayEnvio.para_que_me_sirve,
            "opcion_de_carrera": arrayEnvio.opcion_de_carrera,
            "interes_campo_de_conocimiento": arrayEnvio.interes_campo_de_conocimiento,
            "porque_seguir_estudiando": arrayEnvio.porque_seguir_estudiando,

        })
            .then(response => {
                console.log(response.data);
                navigation.dispatch(
                    StackActions.replace('RutaActivity', { id_usuario: route.params.id_usuario })
                )

            })
            .catch((error) => {
                console.error(error);
            })
    }
    if(route.params.status_Usuario == 2){
        navigation.dispatch(
            StackActions.replace('RutaActivity', { id_usuario: route.params.id_usuario })
        )
    }
    if(route.params.status_Usuario == 3 ){
        navigation.dispatch(
            StackActions.replace('ViewMainData', { id_usuario: route.params.id_usuario })
        )
    }else{
        return (
                <RN.View style={styles.mainContainer}>
                    <RN.ImageBackground source={Background} resizeMode="cover" style={[styles.imageBackground, styles.container]}>
                        <RN.ScrollView>
                            <RN.View style={styles.container}>
                                <RN.Text style={styles.title}>Formación académica</RN.Text>
                                <RN.Text style={styles.selectionLabel}>Situación actual:</RN.Text>
                                <RNPickerSelect
    
                                    onValueChange={(value) => setEstadoSituacion(value)}
                                    items={situacionComprobacion()}
                                />
                                <RN.Text style={styles.selectionLabel}>Modalidad de estudios:</RN.Text>
                                <RNPickerSelect
                                    disabled={estadoSituacion === 0 ? true : false}
                                    onValueChange={(value) => { setEstadoModalidad(value) }}
                                    items={modalidadComprobacion()}
                                />
                                <RN.Text style={styles.selectionLabel}>Ultimo año de escolaridad:</RN.Text>
                                <RNPickerSelect
    
                                    onValueChange={(value) => { setEstadoGrado(value) }}
                                    items={gradoComprobacion()}
                                />
                                <RN.Text style={styles.selectionLabel}>Escuela:</RN.Text>
                                <RNPickerSelect
    
                                    onValueChange={(value) => { setEstadoEscuela(value) }}
                                    items={escuelaComprobacion()}
                                />
                                <RN.Text style={styles.selectionLabel}>Plantel:</RN.Text>
                                <RNPickerSelect
    
                                    onValueChange={(value) => { setEstadoPlantel(value) }}
                                    items={plantelComprobacion()}
                                />
                                <RN.Text style={styles.selectionLabel}>Año que cursaste:</RN.Text>
                                <RNPickerSelect
    
                                    onValueChange={(value) => { setEstadoAnio(value) }}
                                    items={anioComprobacion()}
                                />
                                <RN.Text style={styles.selectionLabel}>Lugar de residencia:</RN.Text>
                                <RNPickerSelect
    
                                    onValueChange={(value) => { setEstadoResidencia(value) }}
                                    items={residenciaComprobacion()}
                                />
                                <RN.Text style={styles.selectionLabel}>Delegación:</RN.Text>
                                <RNPickerSelect
    
                                    onValueChange={(value) => { setEstadoDelegacion(value) }}
                                    items={delegacionComprobacion()}
                                />
                                <RN.Text style={styles.selectionLabel}>¿Para crees que te servirá contestar el presente cuestionario de intereses?</RN.Text>
                                <RNPickerSelect
    
                                    onValueChange={(value) => { setEstadoPregunta1(value) }}
                                    items={pregunta1Comprobacion()}
                                />
                                <RN.Text style={styles.selectionLabel}>¿Has pensado en alguna opción de carrera?</RN.Text>
                                <RNPickerSelect
    
                                    onValueChange={(value) => { setEstadoPregunta2(value) }}
                                    items={pregunta2Comprobacion()}
                                />
                                <RN.Text style={styles.selectionLabel}>¿Qué campo de conocimiento te interesa para realizar estudios de nivel superior?</RN.Text>
                                <RNPickerSelect
    
                                    onValueChange={(value) => { setEstadoPregunta3(value) }}
                                    items={pregunta3Comprobacion()}
                                />
                                <RN.Text style={styles.selectionLabel}>¿Por qué quieres seguir estudiando?</RN.Text>
                                <RNPickerSelect
    
                                    onValueChange={(value) => { setEstadoPregunta4(value) }}
                                    items={pregunta4Comprobacion()}
                                />
                                <RN.TouchableOpacity onPress={enviarDatos}>
                                    <RN.Image source={imgContinuar} style={styles.botones} />
                                </RN.TouchableOpacity>
                            </RN.View>
                        </RN.ScrollView>
                    </RN.ImageBackground>
                </RN.View>
        )
    }
}

export default RegistroComplementario;

const styles = RN.StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    container: {
        flex: 1,
        backgroundColor: 'rgba(48, 50, 130, 0.7)',
        alignItems: 'center',
        width: '100%',
    },
    title: {
        fontSize: 24,
        fontWeight: '700',
        color: 'white',
        paddingLeft: 30,
        paddingRight: 30,
    },
    selectionLabel: {
        color: 'white',
        fontWeight: '700',
    },
    inputContainer: {
        width: '90%',
        padding: 13,
        marginVertical: 6,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 6,
        backgroundColor: '#fff',
    },
    imageBackground: {
        flex: 1,
        // justifyContent: "center"
    },
    image: {
        height: 200,
        width: 250,
        resizeMode: 'contain'
    },
    botones: {
        width: 150,
        height: 40,
        resizeMode: 'contain',

    },

});