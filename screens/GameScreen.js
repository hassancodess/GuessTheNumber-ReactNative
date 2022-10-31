import React, { useEffect, useState } from 'react'
import { Text, View, StyleSheet, Alert, FlatList } from 'react-native'
import Title from '../components/ui/Title'
import NumberContainer from '../components/game/NumberContainer'
import PrimaryButton from '../components/ui/PrimaryButton'
import InstructionsText from '../components/ui/InstructionsText'
import { FontAwesome5 } from '@expo/vector-icons'
import Card from '../components/ui/Card'
import GuessLogItem from '../components/game/GuessLogItem'

const generateRandomNumber = (min, max, exclude) => {
  const rndNum = Math.floor(Math.random() * (max - min)) + min

  if (rndNum === exclude) {
    return generateRandomNumber(min, max, exclude)
  } else {
    return rndNum
  }
}

let minBoundary = 1
let maxBoundary = 100

const GameScreen = ({ userNumber, gameOverHandler }) => {
  const initialGuess = generateRandomNumber(1, 100, userNumber)
  const [currentGuess, setCurrentGuess] = useState(initialGuess)
  const [guessRounds, setGuessRounds] = useState([initialGuess])
  const guessRoundsLength = guessRounds.length
  useEffect(() => {
    if (userNumber === currentGuess) {
      gameOverHandler(guessRoundsLength)
    }
  }, [currentGuess])

  useEffect(() => {
    minBoundary = 1
    maxBoundary = 100
  }, [])

  const Item = (itemData) => {
    return <Text>{itemData.item}</Text>
  }

  const handleNextGuess = (direction) => {
    // console.log(minBoundary, maxBoundary, currentGuess)
    // Check for Infinite Loop
    if (
      (direction === 'lower' && currentGuess < userNumber) ||
      (direction === 'higher' && currentGuess > userNumber)
    ) {
      Alert.alert("Don't Lie!", 'You know that is wrong...', [
        { text: 'Sorry', style: 'cancel' },
      ])
      return
    }

    if (direction === 'lower') {
      maxBoundary = currentGuess
    } else {
      minBoundary = currentGuess + 1
    }
    const newRndNumber = generateRandomNumber(
      minBoundary,
      maxBoundary,
      currentGuess
    )
    setCurrentGuess(newRndNumber)
    setGuessRounds((prev) => [...prev, newRndNumber])
    console.log(guessRounds)
  }
  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <View style={styles.stretch}>
        <NumberContainer>{currentGuess}</NumberContainer>
        <Card>
          <InstructionsText>Higher or Lower ?</InstructionsText>
          <View style={styles.buttonsContainer}>
            <View style={styles.buttonContainer}>
              <PrimaryButton onPress={() => handleNextGuess('higher')}>
                <FontAwesome5 name='plus' size={20} color='white' />
              </PrimaryButton>
            </View>
            <View style={styles.buttonContainer}>
              <PrimaryButton onPress={() => handleNextGuess('lower')}>
                <FontAwesome5 name='minus' size={20} color='white' />
              </PrimaryButton>
            </View>
          </View>
        </Card>
        <View style={styles.listContainer}>
          <FlatList
            data={guessRounds}
            renderItem={(item) => (
              <GuessLogItem
                roundNumber={guessRoundsLength - item.index}
                guess={item.item}
              />
            )}
            keyExtractor={(item) => item}
          />
        </View>
      </View>
    </View>
  )
}

export default GameScreen

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 16,
    marginTop: 100,
    alignItems: 'center',
  },
  stretch: {
    flex: 1,
    alignSelf: 'stretch',
  },
  buttonsContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  buttonContainer: {
    flex: 1,
  },
  listContainer: {
    padding: 16,
  },
})
