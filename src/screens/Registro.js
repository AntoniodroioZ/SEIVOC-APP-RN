import * as React from 'react';
import * as RN from 'react-native';


import LogoInicio from '../images/logo_en_azul.png'
import Background from '../images/trama_azul1.png';
import Entrar from '../images/boton_entrar.png';
import { RadioButton, Modal, Portal, Text, Button, Provider } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import LogoPersonajes from '../images/logo_personajes.png';

import { StackActions } from '@react-navigation/native';

import axios from 'axios';

const Registro = () => {
    const navigation = useNavigation();

    const [visible, setVisible] = React.useState(false);
    const [funcionModal, setFuncionModal] = React.useState(false);

    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    const containerStyle = { backgroundColor: 'white', padding: 20, margin: 20, };

    const [message, setMessage] = React.useState("Toca fuera de este recuadro para cerrar, se te redirigira al inicio de sesion para que inicies sesión con tu cuenta.");

    const [checked, setChecked] = React.useState('2');
    const [nuevoRegistro, setNuevoRegistro] = React.useState({
        alias: '',
        email: '',
        pass: '',
        sexo: checked,
        edad: '',
    });
    const [avisoPrivacidad, setAvisoPrivacidad] = React.useState(false);
    const [result, setResult] = React.useState([]);

    const toLogin = ()=>{
        hideModal();
        navigation.navigate('Login');
    }

    const postData = ()=>{
        axios.post('http://132.248.47.240/api/SaveUsuario1',{"alias":nuevoRegistro.alias,"email":nuevoRegistro.email, 'pass':nuevoRegistro.pass,"sexo":nuevoRegistro.sexo,"edad":nuevoRegistro.edad})
        .then((response)=>{
            if(Object.keys(response.data.nombres).length == 0){
                setMessage("Toca fuera de este recuadro para cerrar, se te redirigira al inicio de sesion para que inicies sesión con tu cuenta.");
                showModal();
                setFuncionModal(false);
            }else{
                setMessage(response.data.nombres[Object.keys(response.data.nombres)]);
                showModal();
                setFuncionModal(true);
            }
        }).catch((error)=>{
            console.log(error);
        })
    }

    const enviarRegistro = () => {
        if (nuevoRegistro.alias == '') {
            console.log('Coloque un alias en el campo correspondiente');
        } else
            if (nuevoRegistro.email == '') {
                console.log('Coloque un email en el campo correspondiente');
            } else
                if (nuevoRegistro.pass == '') {
                    console.log('Coloque un password en el campo correspondiente');
                } else
                    if (nuevoRegistro.edad == '') {
                        console.log('Coloque su edad en el campo correspondiente');
                    } else
                        if (avisoPrivacidad === false) {
                            console.log('Acepte el aviso de privacidad');
                        }
                        else {
                            postData();
                            // console.log("Datos enviados correctamente");
                        }
    }  

    return (
        <RN.View style={styles.mainContainer}>

            <RN.ImageBackground source={Background} resizeMode="cover" style={[styles.imageBackground, styles.container]}>
                <RN.View style={styles.container}>
                    <RN.Image source={LogoInicio} style={styles.image} />
                    <RN.TextInput
                        onChangeText={(text) => { setNuevoRegistro({ ...nuevoRegistro, alias: text }) }}
                        style={styles.inputContainer}
                        placeholder="Alias"
                    />
                    <RN.TextInput
                        onChangeText={(text) => { setNuevoRegistro({ ...nuevoRegistro, email: text }) }}
                        style={styles.inputContainer}
                        placeholder="Email"
                        keyboardType='email-address'
                    />
                    <RN.TextInput
                        onChangeText={(text) => { setNuevoRegistro({ ...nuevoRegistro, pass: text }) }}
                        style={styles.inputContainer}
                        placeholder="Password"
                        secureTextEntry={true}
                    />
                    <RN.TextInput
                        onChangeText={(text) => { setNuevoRegistro({ ...nuevoRegistro, edad: text }) }}
                        style={styles.inputContainer}
                        placeholder="Edad"
                        keyboardType='number-pad'
                    />
                    <RN.Text style={styles.textRadioButton}>Sexo:</RN.Text>
                    <RN.View style={styles.radioButton}>
                        <RadioButton
                            value="2"
                            status={checked === '2' ? 'checked' : 'unchecked'}
                            onPress={() => setChecked('2')} />
                        <RN.Text style={styles.textRadioButton}>H</RN.Text>
                    </RN.View>
                    <RN.View style={styles.radioButton}>
                        <RadioButton
                            value="1"
                            status={checked === '1' ? 'checked' : 'unchecked'}
                            onPress={() => setChecked('1')} />
                        <RN.Text style={styles.textRadioButton}>M</RN.Text>
                    </RN.View>
                    <RN.Text onPress={() => RN.Linking.openURL('http://132.248.47.240/pdf/AvisoPrivacidad.pdf')}>Ver aviso de privacidad</RN.Text>
                    <RN.View style={styles.radioButton}>
                        
                        <RadioButton
                            status={avisoPrivacidad === true ? 'checked' : 'unchecked'}
                            onPress={() => {
                                setAvisoPrivacidad(!avisoPrivacidad);

                            }}
                        />
                        
                        <RN.Text style={styles.textRadioButton}>He leído y acepto el aviso de privacidad.</RN.Text>
                    </RN.View>
                    <RN.TouchableOpacity
                        onPress={() => {
                            enviarRegistro()
                        }}
                    >
                        <RN.Image
                            source={Entrar}
                            style={styles.botones}
                        />
                    </RN.TouchableOpacity>
                    <Provider>
                        <Portal>
                            <Modal visible={visible} onDismiss={ funcionModal==true ? hideModal : toLogin} contentContainerStyle={containerStyle}>
                                <Text>{message}</Text>
                            </Modal>
                        </Portal>
                    </Provider>
                </RN.View>
            </RN.ImageBackground>
        </RN.View>
    )
}

export default Registro;

const styles = RN.StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    container: {
        flex: 1,
        backgroundColor: 'rgba(48, 50, 130, 0.7)',
        alignItems: 'center',
        width: '100%',
        color:"white"
    },
    title: {
        fontSize: 32,
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
        height: 100,
        width: 150,
        resizeMode: 'contain'
    },
    botones: {
        height: 65,
        resizeMode: 'contain',
    },
    radioButton: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 4
    },
    textRadioButton: {
        fontSize: 16
    }
});