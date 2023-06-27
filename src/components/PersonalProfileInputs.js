import { View, TextInput, StyleSheet } from 'react-native'
import React from 'react'

const PersonalProfileInputs = ({value, setValue, placeholder, secureTextEntry  }) => {
    return (
        <View>
            <TextInput
                placeholder={placeholder }
                value={value}
                onChangeText={setValue}
                style={styles.textInput}
                secureTextEntry = {secureTextEntry}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    textInput: {
        borderWidth: 1,
        borderColor: '#05509b',
        width: 370,
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingHorizontal: 10,
        paddingVertical: 15,
        borderRadius: 5,
        marginBottom: 20
    },
})

export default PersonalProfileInputs