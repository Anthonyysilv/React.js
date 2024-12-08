import React from 'react';
import {Text, View, Image, TextInput} from 'react-native';
import { style } from './style';
import Logo from '../../assets/logo.png';

export default function Login() {
    return (
        <View style={style.container}>
            <View style={style.boxTop}>
                <Image 
                    source={Logo}
                    style={style.logo}
                    resizeMode='contain'
                />
                <Text style={style.text} >Bem vindo de volta!</Text>
            </View>
            <View style={style.boxMid}>
                <Text style={style.titleInput}>Endereço de e-mail</Text>
                <View style= {style.inputBox}>
                    <TextInput />
                    <Text>Olá</Text>
                </View>
                <Text style={style.titleInput}>Senha</Text>
                <View style= {style.inputBox}>
                    <TextInput />
                </View>
            </View>
            <View style={style.boxBottom}>
                
            </View>
        </View>
    )
}