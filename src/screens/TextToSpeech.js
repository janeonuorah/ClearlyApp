import React, { useState } from 'react'
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import { COLORS, height, width } from '../components/styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { useNavigation } from '@react-navigation/native';
import { TextInput } from 'react-native-gesture-handler';

const TextToSpeech = () => {
  const navigation = useNavigation();

  const onBackPress = () => {
    navigation.goBack()
  }

  return (
    <SafeAreaView style={{ backgroundColor: COLORS.primary }}>
      {/* header area */}
      <View style={styles.header}>
        <TouchableOpacity onPress={onBackPress}>
          <Icon
            name='arrow-left'
            style={{
              color: COLORS.white,
              fontSize: 30,
              fontWeight: 'bold'
            }}
          />
        </TouchableOpacity>

        {/* mic container and clear icon */}
        <View>
          <Icon
            name='close-circle-outline'
            style={styles.clearTextIcon}
          />

          {/* mic and mic container */}
          <View style={styles.micContainer1}>
            <View style={styles.micContainer2}>

              <TouchableOpacity style={{ alignItems: 'center' }}>
                <Icon
                  name='microphone'
                  style={{
                    color: COLORS.grey,
                    fontSize: 30,
                    alignSelf: 'center',
                    marginTop: 50
                  }} />
                <Text
                  style={{
                    fontSize: 22,
                    fontWeight: 'bold',
                    marginTop: 5
                  }}>Tap Mic
                </Text>
              </TouchableOpacity>

            </View>
          </View>
        </View>

      </View>

      <View
        style={{
          height: height * 0.14,
          backgroundColor: COLORS.white,
          zIndex: -1
        }}>
      </View>

      {/* text area */}
      <View style={{ backgroundColor: COLORS.white }}>
        <View style={styles.textAreaBackground}>

          <View style={styles.textArea}>
            <TextInput
              style={styles.textInputArea}
              placeholder='Enter text to speak'
              placeholderTextColor={COLORS.white}
              color={COLORS.white}
            />
          </View>

          {/* play and pause buttons */}
          <View style={styles.playAndPauseButtonsContainer}>
            <TouchableOpacity>
              <Icon name='play-circle' style={styles.playAndPauseButtons} />
            </TouchableOpacity>

            <TouchableOpacity>
              <Icon name='pause-circle-outline' style={styles.playAndPauseButtons} />
            </TouchableOpacity>
          </View>

        </View>
      </View>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: COLORS.primary,
    width: width,
    height: height * 0.20,
    paddingHorizontal: 10,
  },

  micContainer1: {
    borderWidth: 1,
    borderColor: COLORS.black,
    backgroundColor: '#D6D4D4',
    borderRadius: 150,
    width: 200,
    height: 200,
    alignSelf: 'center',
    marginTop: 25
  },

  micContainer2: {
    borderWidth: 1,
    borderColor: COLORS.black,
    backgroundColor: '#E8E6E6',
    borderRadius: 150,
    width: 150,
    height: 150,
    alignSelf: 'center',
    marginTop: 25
  },

  clearTextIcon: {
    fontSize: 35,
    color: COLORS.white,
    fontWeight: 'bold',
    alignSelf: 'flex-end',
    position: 'absolute',
    marginTop: 70,
    right: 20
  },

  textAreaBackground: {
    backgroundColor: COLORS.secondary,
    width: width,
    height: height * 0.66,
    borderRadius: 20,
  },

  textArea: {
    backgroundColor: COLORS.primary,
    width: width,
    height: '60%',
    marginTop: 30,
    borderRadius: 20
  },

  textInputArea: {
    width: '100%',
    height: '100%',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 50,
    fontWeight: '300',
    fontSize: 25,
    fontStyle: 'italic',
  },

  playAndPauseButtonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20
  },

  playAndPauseButtons: {
    fontSize: 50,
    fontWeight: 'bold',
    paddingHorizontal: 10
  }
})

export default TextToSpeech