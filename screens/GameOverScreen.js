import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Title from '../components/ui/Title'
import Success from '../assets/success.png'
import colors from '../utils/colors'
import PrimaryButton from '../components/ui/PrimaryButton'

const GameOverScreen = ({ roundsNumber, userNumber, onStartNewGame }) => {
  return (
    <View style={styles.rootContainer}>
      <Title>Game Over</Title>
      <View style={styles.imageContainer}>
        <Image source={Success} style={styles.image} />
      </View>
      <Text style={styles.summaryText}>
        You phone needed <Text style={styles.highlight}>{roundsNumber}</Text>{' '}
        rounds to guess the number{' '}
        <Text style={styles.highlight}>{userNumber}</Text>.
      </Text>
      <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
    </View>
  )
}

export default GameOverScreen

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    overflow: 'hidden',
    margin: 36,
  },
  image: {
    height: '100%',
    width: '100%',
  },
  summaryText: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 18,
    color: colors.lightGrey,
    paddingHorizontal: 20,
    textAlign: 'justify',
    marginVertical: 20,
  },
  highlight: {
    fontFamily: 'Poppins_700Bold',
    color: colors.mediumGrey,
    fontSize: 24,
  },
})
