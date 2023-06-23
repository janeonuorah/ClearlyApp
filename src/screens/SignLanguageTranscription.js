import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  FlatList,
  TouchableOpacity
} from 'react-native'
import React from 'react'
import { COLORS, width, height } from '../components/styles'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

// items to be rendered on screen
const features = [
  {
    id: '1',
    title: 'American Sign Language',
    screenName: 'MeetWithTranslatorScreen'
  },
  {
    id: '2',
    title: 'British Sign Language',
    screenName: 'MeetWithTranslatorScreen'
  },
  {
    id: '3',
    title: 'Nigerian Sign Language',
    screenName: 'MeetWithTranslatorScreen'
  },
]

const SignLanguageTranscription = () => {
  const navigation = useNavigation();

  const handleItemPress = (screenName) => {
    navigation.navigate(screenName)
  }

  // function to render each of the items
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.flatListContainer}
      onPress={() => handleItemPress(item.screenName)}
    >
      <View style={{
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around'
      }}>
        <Text style={styles.title}>{item.title}</Text>
        <Icon
          name='greater-than'
          style={{
            fontSize: 22,
            fontWeight: '500'
          }} />
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.primary,
        alignItems: 'center'
      }}>

      <Icon
        name="arrow-left"
        onPress={() => navigation.navigate('HomeScreen')}
        style={{
          fontSize: 30,
          color: COLORS.white,
          marginTop: 10,
          marginLeft: 20,
          alignSelf: 'flex-start'
        }}
      />

      <View style={styles.headerContainer}>

        <View style={styles.selectLanguagePromptContainer}>
          <Text style={{ fontSize: 18 }}>Select Sign Language Type</Text>
        </View>

      </View>

      <View style={styles.signsContainer}>
        <FlatList
          data={features}
          horizontal={false}
          numColumns={1}
          keyExtractor={(item) => item.title}
          renderItem={renderItem}
          style={{ paddingVertical: 10 }}
        />
      </View>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: COLORS.primary,
    height: height * 0.1
  },

  selectLanguagePromptContainer: {
    backgroundColor: COLORS.white,
    position: 'absolute',
    bottom: 0,
    left: -115,
    padding: 10
  },

  signsContainer: {
    width: width,
    height: height,
    backgroundColor: COLORS.secondary,
    padding: 20,
    justifyContent: 'center',
  },

  flatListContainer: {
    backgroundColor: COLORS.white,
    marginBottom: 10,
    padding: 10,
    borderRadius: 10,
    marginTop: 50
  },

  title: {
    fontSize: 22,
    fontWeight: '500'
  }
})

export default SignLanguageTranscription