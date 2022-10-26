import * as React from 'react';
import * as RN from 'react-native';

import { useNavigation } from '@react-navigation/native';
import email from 'react-native-email'

import LogoInicio from '../images/logo_en_azul.png'
import Background from '../images/trama_azul1.png';
import Entrar from '../images/boton_entrar.png';
import CrearCuenta from '../images/boton_registro_grande.png';
import Email from '../images/logo_email.png';
import Facebook from '../images/logo_face.png';
import Instagram from '../images/logo_insta.png';



export default function Inicio() {

    const handleEmail = () => {
        const to = ['vocacionenlinea@unam.mx'] // string or array of email addresses
        email(to, {
            // Optional additional arguments
            cc: '', // string or array of email addresses
            bcc: '', // string or array of email addresses
            subject: '',
            body: '',
            checkCanOpen: false // Call Linking.canOpenURL prior to Linking.openURL
        }).catch(console.error)
    }

    const navigation = useNavigation(); 
    return (

            <RN.View style={styles.mainContainer}>
                <RN.ImageBackground source={Background} resizeMode="cover" style={styles.imageBackground}>
                    <RN.View style={styles.container} >
                        <RN.Image style={styles.image} source={LogoInicio} />
                        <RN.TouchableOpacity onPress={() => { navigation.navigate('Login') }}>
                            <RN.Image style={styles.botones} source={Entrar} />
                        </RN.TouchableOpacity>
                        <RN.TouchableOpacity onPress={() => { navigation.navigate('Registro') }}>
                            <RN.Image style={styles.botones} source={CrearCuenta} />
                        </RN.TouchableOpacity>


                        <RN.View style={styles.viewRedes}>
                            <RN.TouchableOpacity
                                onPress={() => RN.Linking.openURL('https://www.facebook.com/SEIVOC/')}
                            >
                                <RN.Image style={[styles.botones, styles.botonesRedes]} source={Facebook} />
                            </RN.TouchableOpacity>
                            <RN.TouchableOpacity
                            onPress={() => RN.Linking.openURL('https://www.instagram.com/seivoc/')}
                            >
                                <RN.Image style={[styles.botones, styles.botonesRedes]} source={Instagram} />
                            </RN.TouchableOpacity>
                            <RN.TouchableOpacity
                                onPress={()=>{handleEmail()}}
                            >
                                <RN.Image style={[styles.botones, styles.botonesRedes]} source={Email} />
                            </RN.TouchableOpacity>

                        </RN.View>
                    </RN.View>
                </RN.ImageBackground>

            </RN.View>


    );
}


const styles = RN.StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    imageBackground: {
        flex: 1,
        justifyContent: "center"
    },
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop:40,
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
    viewRedes: {
        flex:1,
        flexDirection:'row',
        alignItems: 'flex-end',
        paddingBottom:10,
    },
    botonesRedes:{
        width:65,
        paddingLeft:50,
        paddingRight:50,
    }
});