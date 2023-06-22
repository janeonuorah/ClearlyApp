import React, { useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import { COLORS, height, width } from '../components/styles';

const SpeechToText = () => {
  const navigation = useNavigation();
  const [interpretedText, setInterpretedText] = useState('Tap on the mic and speak')

  const onBackPress = () => {
    navigation.goBack();
  };

  const handleSpeechToText = (text) => {
    setInterpretedText(text)
  }

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={onBackPress} style={styles.backButton}>
        <Icon name="arrow-left" style={styles.backIcon} />
      </TouchableOpacity>

      {/* Text area */}
      <View style={styles.textArea}>
        <View style={styles.textInputArea}>
          <Text style={styles.interpretedText}>{interpretedText}</Text>
        </View>
      </View>

      {/* Mic area */}
      <View style={styles.micArea}>
        <View style={styles.micContainer1}>
          <View style={styles.micContainer2}>
            <TouchableOpacity style={styles.micButton}>
              <Icon name="microphone" style={styles.micIcon} />
              <Text style={styles.micText}>Tap Mic</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },

  backButton: {
    marginLeft: 10,
  },

  backIcon: {
    color: COLORS.white,
    fontSize: 30,
    fontWeight: 'bold',
  },

  textArea: {
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    paddingVertical: 10,
  },

  textInputArea: {
    width: width * 0.95,
    height: height * 0.5,
    backgroundColor: COLORS.secondary,
    borderRadius: 20,
    padding: 20,
   justifyContent: 'center',
  },

  interpretedText: {
    fontSize: 25,
    fontStyle: 'italic',
    fontWeight: '300',
    color: COLORS.black,
    alignSelf: 'center'
  },

  micArea: {
    backgroundColor: COLORS.primary,
    width: width,
    height: height * 0.4,
    alignItems: 'center',
    justifyContent: 'center',
  },

  micContainer1: {
    borderWidth: 1,
    borderColor: COLORS.black,
    backgroundColor: '#D6D4D4',
    borderRadius: 150,
    width: 200,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },

  micContainer2: {
    borderWidth: 1,
    borderColor: COLORS.black,
    backgroundColor: '#E8E6E6',
    borderRadius: 150,
    width: 150,
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
  },

  micButton: {
    alignItems: 'center',
  },

  micIcon: {
    color: COLORS.grey,
    fontSize: 30,
    alignSelf: 'center',
  },

  micText: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 5,
  },
});

export default SpeechToText;