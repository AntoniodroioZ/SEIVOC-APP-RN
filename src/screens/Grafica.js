import axios from 'axios';
import * as React from 'react';
import * as RN from 'react-native'
import { BarChart } from 'react-native-gifted-charts';

import logoAzul from '../images/logo_en_azul.png';

const Grafica = ({ route }) => {
    const [datosRetro, setDatosRetro] = React.useState([]);
    // const [dataChart, setDataChart] = React.useState([{}]);
    // let barData = [];
    React.useEffect(() => {
        axios.get('http://132.248.47.240/api/Respuesta/' + route.params.id_usuario)
            .then(response => {
                let json = response.data;
                setDatosRetro(json);
                // console.log(json[0].Grafica)
            })
            .catch(error => {
                console.log(error)
            })
    }, []);

    const styles = RN.StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#fff',
            padding:10,
            // alignItems: 'center',
        },
        image: {
            height: 50,
            width: 100,
            resizeMode: 'contain',
            paddingBottom:100
            // padding
        },
    });

    let barData = [];
    if (datosRetro[0] == undefined) {
        barData = [];
    } else {
        barData = [
            { value: datosRetro[0].Grafica[0], label:'V',  topLabelComponent: () => (
                <RN.Text style={{color: 'blue', fontSize: 18, marginBottom: 6}}>{datosRetro[0].Grafica[0]}</RN.Text>
              ),},
            { value: datosRetro[0].Grafica[1], label:'MS' ,  topLabelComponent: () => (
                <RN.Text style={{color: 'blue', fontSize: 18, marginBottom: 6}}>{datosRetro[0].Grafica[1]}</RN.Text>
              ),},
            { value: datosRetro[0].Grafica[2], label:'AP' ,  topLabelComponent: () => (
                <RN.Text style={{color: 'blue', fontSize: 18, marginBottom: 6}}>{datosRetro[0].Grafica[2]}</RN.Text>
              ),},
            { value: datosRetro[0].Grafica[3], label:'CT' ,  topLabelComponent: () => (
                <RN.Text style={{color: 'blue', fontSize: 18, marginBottom: 6}}>{datosRetro[0].Grafica[3]}</RN.Text>
              ),},
            { value: datosRetro[0].Grafica[4], label:'CL' ,  topLabelComponent: () => (
                <RN.Text style={{color: 'blue', fontSize: 18, marginBottom: 6}}>{datosRetro[0].Grafica[4]}</RN.Text>
              ),},
            { value: datosRetro[0].Grafica[5], label:'SS' ,  topLabelComponent: () => (
                <RN.Text style={{color: 'blue', fontSize: 18, marginBottom: 6}}>{datosRetro[0].Grafica[5]}</RN.Text>
              ),},
            { value: datosRetro[0].Grafica[6], label:'EP' ,  topLabelComponent: () => (
                <RN.Text style={{color: 'blue', fontSize: 18, marginBottom: 6}}>{datosRetro[0].Grafica[6]}</RN.Text>
              ),},
            { value: datosRetro[0].Grafica[7], label:'OG' ,  topLabelComponent: () => (
                <RN.Text style={{color: 'blue', fontSize: 18, marginBottom: 6}}>{datosRetro[0].Grafica[7]}</RN.Text>
              ),},
            { value: datosRetro[0].Grafica[8], label:'MC' ,  topLabelComponent: () => (
                <RN.Text style={{color: 'blue', fontSize: 18, marginBottom: 6}}>{datosRetro[0].Grafica[8]}</RN.Text>
              ),},
            { value: datosRetro[0].Grafica[9], label:'AL' ,  topLabelComponent: () => (
                <RN.Text style={{color: 'blue', fontSize: 18, marginBottom: 6}}>{datosRetro[0].Grafica[9]}</RN.Text>
              ),}
        ];
    }

    const comprobarPresentacion = ()=>{
        if(datosRetro[0] != undefined){
            return(datosRetro[0].Presentacion);
        }
    }

    const comprobarCarreras = ()=>{
        if(datosRetro[0] != undefined){
            return(datosRetro[0].Carreras);
        }
    }

    return (
        <RN.View style={styles.container}>
            <RN.Image source={logoAzul} style={styles.image}/>
            <BarChart
                frontColor={'#177AD5'}
                barWidth={26}
                data={barData}
                spacing={5}
                initialSpacing={5}
                maxValue={100}
            />
            <RN.Text>{comprobarPresentacion()}</RN.Text>
            <RN.Text>Carreras: {comprobarCarreras()}</RN.Text>
        </RN.View>
    );
}

export default Grafica;