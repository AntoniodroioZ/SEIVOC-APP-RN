import axios from 'axios';
import * as React from 'react';
import * as RN from 'react-native';

import logoAzul from '../images/logo_en_azul.png';

const Materiales = ({ route }) => {
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
            return (datosRetro[0].imagenGif);
        }
    }
    const comprobarTexto = () => {
        if (datosRetro[0] != undefined) {
            return (datosRetro[0].Materiales);
        }
    }
    const comprobarVideo = () => {
        if (datosRetro[0] != undefined) {
            return (datosRetro[0].video);
        }
    }
    const comprobarPDF = () => {
        if (datosRetro[0] != undefined) {
            return (datosRetro[0].hojas);
        }
    }

    return (
        <RN.View style={styles.container}>
            {/* <RN.Text>Materiales {route.params.id_usuario}</RN.Text> */}
            <RN.Image source={logoAzul} style={styles.image} />
            <RN.View style={{ alignItems: "center" }}>
                <RN.Image source={{ uri: `http://132.248.47.240/${comprobarImg()}` }} style={styles.imagePeticion} />
                <RN.Text>{comprobarTexto()}</RN.Text>
                <RN.Button
                    title="Video de ayuda"
                    color="#f194ff"
                    onPress={() => RN.Linking.openURL(`http://132.248.47.240/${comprobarVideo()}`)}
                />
                <RN.Button
                    title="Material PDF"
                    color="#f194ff"
                    onPress={() => RN.Linking.openURL(`http://132.248.47.240/${comprobarPDF()}`)}
                />
            </RN.View>
        </RN.View>
    );
}

export default Materiales;