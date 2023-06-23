import React, { useState } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import { COLORS, height, width } from '../components/styles';

const MeetWithTranslator = () => {
  const navigation = useNavigation();
  const [selectedOption, setSelectedOption] = useState('');

  const toggleCheckbox = (option) => {
    setSelectedOption(option);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View style={styles.container}>
        <Icon
          name="arrow-left"
          onPress={() => navigation.goBack()}
          style={styles.arrowIcon}
        />

        <TouchableOpacity style={styles.buttonContainer} onPress={() => { /* onLoginPress(); onHomePress() */ }}>
          <Text style={styles.buttonText}>Meet With Translator</Text>
        </TouchableOpacity>

        <View style={styles.genderContainer}>
          <Text style={styles.genderText}>Select Gender</Text>

          <TouchableOpacity
            style={styles.checkboxContainer}
            onPress={() => toggleCheckbox('male')}
          >
            <Text style={styles.checkboxLabel}>Male</Text>
            <Icon
              name={selectedOption === 'male' ? 'checkbox-marked-outline' : 'checkbox-blank-outline'}
              style={styles.checkbox}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.checkboxContainer}
            onPress={() => toggleCheckbox('female')}
          >
            <Text style={styles.checkboxLabel}>Female</Text>
            <Icon
              name={selectedOption === 'female' ? 'checkbox-marked-outline' : 'checkbox-blank-outline'}
              style={styles.checkbox}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.checkboxContainer}
            onPress={() => toggleCheckbox('both')}
          >
            <Text style={styles.checkboxLabel}>Both</Text>
            <Icon
              name={selectedOption === 'both' ? 'checkbox-marked-outline' : 'checkbox-blank-outline'}
              style={styles.checkbox}
            />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primary,
    height: height * 0.5,
  },
  arrowIcon: {
    fontSize: 30,
    color: COLORS.white,
    fontWeight: 'bold',
    marginTop: 10,
    marginLeft: 20,
  },
  buttonContainer: {
    borderWidth: 0.5,
    borderColor: '#80CAFF',
    borderRadius: 5,
    marginTop: 40,
    marginHorizontal: 20,
    width: width * 0.9,
    alignItems: 'center',
    paddingVertical: 10,
  },
  buttonText: {
    fontSize: 22,
    fontWeight: '500',
    color: COLORS.white,
  },
  genderContainer: {
    marginTop: 30,
    alignItems: 'center',
  },
  genderText: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: '400',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  checkboxLabel: {
    color: COLORS.white,
    fontSize: 16,
    marginRight: 10,
  },
  checkbox: {
    fontSize: 22,
    color: COLORS.white,
  },
});

export default MeetWithTranslator;
