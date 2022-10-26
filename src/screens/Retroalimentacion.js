import axios from 'axios';
import * as React from 'react';
import * as RN from 'react-native'

import logoAzul from '../images/logo_en_azul.png';

const Retroalimentacion = ({ route }) => {

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
        imagePeticion: {
            width: 250,
            height: 250,
            resizeMode: 'contain',
        },
    });

    const comprobarImg = () => {
        if (datosRetro[0] != undefined) {
            return (datosRetro[0].imagenEx);
        }
    }
    const comprobarExplicacion = () => {
        if (datosRetro[0] != undefined) {
            return (datosRetro[0].Explicacion);
        }
    }

    const comprobarCarreras = () => {
        if (datosRetro[0] != undefined) {
            return (datosRetro[0].Carreras);
        }
    }

    return (
        <RN.View style={styles.container}>
            {/* <RN.Text>Retroalimentacion {route.params.id_usuario}</RN.Text> */}
            <RN.Image source={logoAzul} style={styles.image} />
            <RN.ScrollView>
                <RN.View style={{ alignItems: "center" }}>
                    <RN.Image style={styles.imagePeticion} source={{ uri: `http://132.248.47.240/${comprobarImg()}` }} />
                    <RN.Text style={{ textAlign: 'center' }}>{comprobarExplicacion()}</RN.Text>
                    <RN.Text style={{ textAlign: 'center' }}>Carreras: {comprobarCarreras()}</RN.Text>
                </RN.View>
            </RN.ScrollView>
        </RN.View>
    );
}

export default Retroalimentacion;