import { useState } from 'react'
import { TextInput, Text, View, StyleSheet, Alert } from 'react-native'
import Card from '../components/ui/Card'
import PrimaryButton from '../components/ui/PrimaryButton'
import Title from '../components/ui/Title'
import InstructionsText from '../components/ui/InstructionsText'
import colors from '../utils/colors'

const GameStartScreen = ({ onPickNumber }) => {
  const [enteredText, setEnteredText] = useState('')
  const handleTextChange = (value) => {
    setEnteredText(value)
  }
  const handleReset = () => {
    setEnteredText('')
  }
  const handleStart = () => {
    if (!validateInput()) {
      Alert.alert('Error', 'Number has to be between 1 & 99.', [
        { text: 'Okay', style: 'destructive', onPress: handleReset },
      ])
    } else {
      onPickNumber(parseInt(enteredText))
    }
  }
  const validateInput = () => {
    if (parseInt(enteredText) < 1 || enteredText.length === 0) {
      return false
    } else {
      return true
    }
  }
  return (
    <View style={styles.rootContainer}>
      <Title>Guess The Number</Title>
      <Card>
        <InstructionsText>Enter a Number</InstructionsText>
        <TextInput
          style={styles.textInput}
          maxLength={2}
          keyboardType='number-pad'
          autoCapitalize='none'
          autoCorrect={false}
          value={enteredText}
          onChangeText={handleTextChange}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={handleStart}>Start</PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={handleReset}>Reset</PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  )
}
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: 'center',
  },
  textInput: {
    height: 50,
    width: 55,
    color: colors.lightGrey,
    borderBottomColor: colors.lightGrey,
    borderBottomWidth: 2,
    marginTop: 12,
    marginBottom: 20,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  buttonContainer: {
    flex: 1,
  },
})

export default GameStartScreen
