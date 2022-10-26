import * as React from 'react';
import * as RN from 'react-native';

import Background from '../images/trama_azul1.png';
import Entrar from '../images/boton_entrar.png';
import LogoPersonajes from '../images/logo_personajes.png';
import axios from 'axios';
import { RadioButton, Modal, Portal, Text, Button, Provider } from 'react-native-paper';

import { StackActions } from '@react-navigation/native';

const Login = ({ navigation }) => {
    const containerStyle = { backgroundColor: 'white', padding: 20, margin: 20, };

    const [visible, setVisible] = React.useState(false);
    const [result, setResult] = React.useState([]);
    const [login, setLogin] = React.useState({
        email: '',
        password: '',
    });

    const postData = () => {
        // console.log(JSON.stringify({"email":login.email, 'password':login.password}));
        axios.post('http://132.248.47.240/api/login/appSeivoc', { "email": login.email, 'password': login.password })
            .then((response) => {
                if (response.data.status == 1) {
                    setVisible(true);
                }
                if (response.data.status == 0) {
                    if(response.data.status_Usuario == 1){
                        // console.log(response.data.id_usuario);
                        navigation.dispatch(
                            StackActions.replace('RegistroComplementario', { id_usuario: response.data.id_usuario, status_Usuario: response.data.status_Usuario})
                        )
                    }
                    if(response.data.status_Usuario == 2){
                        // console.log(response.data.id_usuario);
                        navigation.dispatch(
                            StackActions.replace('RutaActivity', { id_usuario: response.data.id_usuario, status_Usuario: response.data.status_Usuario })
                        )
                    }
                    if(response.data.status_Usuario == 3){
                        // console.log(response.data.id_usuario);
                        navigation.dispatch(
                            StackActions.replace('ViewMainData', { id_usuario: response.data.id_usuario, status_Usuario: response.data.status_Usuario })
                        )
                    }
                    
                }
                // console.log(response.data);
            })


    }
    const enviarLogin = () => {
        if (login.email == '') {
            // console.log('Coloque un email en el campo correspondiente');
        } else
            if (login.password == '') {
                // console.log('Coloque un password en el campo correspondiente');
            }
            else {
                postData();
                // console.log("Datos enviados correctamente");
            }
    }

    return (
        <RN.View style={styles.mainContainer}>
            <RN.ImageBackground source={Background} resizeMode="cover" style={[styles.imageBackground, styles.container]}>
                {/* <RN.View style={styles.container}> */}
                <RN.Image source={LogoPersonajes} style={styles.image} />

                <RN.TextInput
                    onChangeText={(text) => {
                        setLogin({ ...login, email: text })
                    }}
                    style={styles.inputContainer}
                    keyboardType="email-address"
                    placeholder="Email"
                />
                <RN.TextInput
                    onChangeText={(text) => {
                        setLogin({ ...login, password: text })
                    }}
                    style={styles.inputContainer}
                    placeholder="Password"
                    secureTextEntry={true}
                />
                <RN.TouchableOpacity onPress={() => {
                    enviarLogin()
                }}>
                    <RN.Image
                        source={Entrar}
                        style={styles.botones}
                    />
                </RN.TouchableOpacity>
                <Provider>
                    <Portal>
                        <Modal visible={visible}
                            onDismiss={() => { setVisible(!visible) }}
                            contentContainerStyle={containerStyle}>
                            <Text>{"Verifica que tu correo y contraseña esten escritos correctamente."}</Text>
                        </Modal>
                    </Portal>
                </Provider>
                {/* </RN.View> */}
            </RN.ImageBackground>
        </RN.View>
    );
}

export default Login;

const styles = RN.StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
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
        height: 200,
        width: 250,
        resizeMode: 'contain'
    },
    botones: {
        height: 65,
        resizeMode: 'contain',
    },

});