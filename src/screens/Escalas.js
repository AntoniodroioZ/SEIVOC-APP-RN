import axios from 'axios';
import * as React from 'react';
import * as RN from 'react-native'

import logoAzul from '../images/logo_en_azul.png';

const Escalas = ({ route }) => {
    const [datosRetro, setDatosRetro] = React.useState([]);

    React.useEffect(() => {
        axios.get('http://132.248.47.240/api/Respuesta/' + route.params.id_usuario)
            .then(response => {
                let json = response.data;
                setDatosRetro(json);
            })
            .catch(error => {
                console.log(error)
            })
    }, []);

    const styles = RN.StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#fff',
            padding: 10,
            // alignItems: 'center',
        },
        image: {
            height: 50,
            width: 100,
            resizeMode: 'contain',
            paddingBottom: 100
            // padding
        },
    });

    return (
        <RN.View style={styles.container}>
            {/* <RN.Text>Escalas {route.params.id_usuario}</RN.Text> */}
            <RN.Image source={logoAzul} style={styles.image} />
            <RN.ScrollView>
                <RN.View >
                    <RN.Text style={{textAlign:'center'}}>Descripción de escalas:</RN.Text>
                    <RN.Text style={{textAlign:'center'}}>SS : Expresas un interés de ayuda afectuosa  y desinteresada hacia tus semejantes y  por la comprensión de problemas humanos.</RN.Text>
                    <RN.Text style={{textAlign:'center'}}>EP : Posees un interés por ser el líder en la organización,  dirección o supervisión de grupos y eventos  a través de buenas relaciones interpersonales.</RN.Text>
                    <RN.Text style={{textAlign:'center'}}>V : Tienes un interés en adquirir el conocimiento  a través del lenguaje oral y escrito, utilizando  las palabras precisas y adecuadas.</RN.Text>
                    <RN.Text style={{textAlign:'center'}}>AP : Reflejas un interés por el aprecio de elementos estéticos  a través de las formas, colores y dimensiones de un objeto  que puede ser un dibujo, escultura, pintura o una construcción.</RN.Text>
                    <RN.Text style={{textAlign:'center'}}>MS : Posees un interés en captar y distinguir sonidos  en sus diversas modalidades para reproducirlos  o utilizarlos de forma creativa.</RN.Text>
                    <RN.Text style={{textAlign:'center'}}>OG : Manifiestas un interés por el orden y la organización de  sistemas, documentos, organizaciones, poniendo  atención en los detalles.</RN.Text>
                    <RN.Text style={{textAlign:'center'}}>CT : Reflejas un interés por captar, definir, comprender  y explicar principios y relaciones causales de fenómenos  científicos y sociales para generar nuevas propuestas.</RN.Text>
                    <RN.Text style={{textAlign:'center'}}>CL : Expresas interés en las operaciones numéricas para  explicar procesos a través de expresiones matemáticas.</RN.Text>
                    <RN.Text style={{textAlign:'center'}}>MC : Muestras un interés en comprender y razonar los  mecanismos y movimientos de los objetos a través  de su manipulación; de imaginarlos y analizarlos en  2 o 3 dimensiones.</RN.Text>
                    <RN.Text style={{textAlign:'center'}}>AL : Reflejas un interés por actividades que se realizan  al aire libre, fuera de una oficina, en espacios abiertos,  te gusta estar en contacto con la naturaleza.</RN.Text>
                </RN.View>
            </RN.ScrollView>
        </RN.View>
    );
}

export default Escalas;
