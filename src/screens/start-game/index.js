import React, { useState }  from "react";
import {  Button, Keyboard, Text, TextInput, TouchableWithoutFeedback, View } from "react-native";
import { Card, Header } from "../../components/index";
import styles from "./styles";
import theme from "../../constants/theme";

const StartGame = () => {

    const [numberInput, setNumberInput] = useState("")

    const onHandlerChangeText= text => {
        setNumberInput( text.replace(/[^0-9]/g, '' ))
    }

    return(
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss() } >
            <View style={ styles.container } >
                <Header title="Te damos la bienvenia"/>
                <Text style={ styles.title } > Comenzar Juego </Text>

                <Card style={ styles.inputContainer } >
                    <Text style={ styles.label } > Escribe un número </Text>
                    <TextInput 
                        style={ styles.input }  
                        placeholder="0"
                        keyboardType="number-pad"
                        maxLength={ 2 }  
                        autoCapitalize="none"
                        autoCorrect={ false }
                        blurOnSubmit
                        value={ numberInput }
                        onChangeText={ onHandlerChangeText }
                    />

                    <View style={ styles.buttonContainer } >
                        <Button 
                            title="Reiniciar"
                            color={ theme.colors.secondary }
                            onPress={() => {} }
                        />
                        <Button
                            title="Confirmar"
                            color= { theme.colors.primary }
                            onPress={() => {}}
                        />
                    </View>
                </Card>
            </View>
        </TouchableWithoutFeedback>
        
    )
}

export default StartGame;