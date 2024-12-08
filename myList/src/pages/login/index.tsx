import React from 'react';
import {Text, View, Image, TextInput, TouchableOpacity} from 'react-native';
import { style } from './style';
import Logo from '../../assets/logo.png';
import {MaterialIcons} from '@expo/vector-icons';
import { themes } from '../../global/themes';

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
                <View style= {style.boxInput}>
                    <TextInput 
                        style={style.input}
                    />
                    <MaterialIcons 
                        name='email'
                        size={20}
                        color={themes.colors.gray}
                    />
                </View>
                <Text style={style.titleInput}>Senha</Text>
                <View style= {style.boxInput}>
                    <TextInput 
                        style={style.input}
                    />
                    <MaterialIcons 
                        name='remove-red-eye'
                        size={20}
                        color={themes.colors.gray}
                    />
                </View>
            </View>
            <View style={style.boxBottom}>
                <TouchableOpacity style={style.button}>
                    <Text style={style.textButton}>Entrar</Text>
                </TouchableOpacity>
            </View>
            <Text style={style.textBottom}>Não tem conta? <Text style={{color: themes.colors.primary}}>Clique agora!</Text></Text>
        </View>
    )
}