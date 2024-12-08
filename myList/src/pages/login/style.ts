import { Dimensions, StyleSheet } from "react-native";
import { themes } from '../../global/themes';

export const style = StyleSheet.create({
    //Container das divs
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',//padding: 20,
    },
    //Div superior
    boxTop:{
        height: Dimensions.get('window').height /3,
        width: '100%',
        backgroundColor: 'red',
        alignItems: 'center',
    },
    //Div média
    boxMid:{
        height: Dimensions.get('window').height /4,
        width: '100%',
        //backgroundColor: 'green',
        paddingHorizontal: 17,
    },
    //Div inferir
    boxBottom:{
        height: Dimensions.get('window').height /3,
        width: '100%',
        //backgroundColor: 'blue',
        alignItems: 'center',
        //justifyContent: 'center',
    },
    //Estilo da logo
    logo: {
        width: 80,
        height: 80,
    },
    text:{
        fontWeight: 'bold',
        marginTop: 40,
        fontSize: 18,
    },
    //Estilo dos textos
    titleInput:{
        marginLeft: 5,
        color: themes.colors.gray, //Importando os padrões de cores do global/themes
        marginTop: 20,
    },
    //Estilo dos input
    inputBox:{
        width: '100%',
        height: 40,
        borderWidth: 1,
        borderRadius: 40,
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 5,
        backgroundColor: themes.colors.lightGray,
        borderColor: themes.colors.lightGray,
    },
    //Estilização mais especifica dos input
    input:{
        height: '100%',
        width: '90%',
        borderRadius: 40,
        paddingLeft: 5,
    },
    //Estilo do botão
    button:{
        width: 250,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: themes.colors.primary,
        borderRadius: 40,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
    },
    //Estilo do texto do botão
    textButton:{
        fontSize: 16,
        color: '#FFFF',
        fontWeight: 'bold',
    },
    //Estilo do texto de cadastro
    textBottom:{
        fontSize: 16,
        color: themes.colors.gray,
    },
})