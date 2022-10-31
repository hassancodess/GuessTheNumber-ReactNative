import { useState } from 'react'
import {
  ImageBackground,
  StyleSheet,
  SafeAreaView,
  Text,
  View,
} from 'react-native'
import GameStartScreen from './screens/GameStartScreen'
import { LinearGradient } from 'expo-linear-gradient'
import colors from './utils/colors'
import Background from './assets/background.jpg'
import GameScreen from './screens/GameScreen'
import GameOverScreen from './screens/GameOverScreen'
import AppLoading from 'expo-app-loading'
import {
  useFonts,
  Poppins_400Regular,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins'

const App = () => {
  const [userNumber, setUserNumber] = useState()
  const [isGameOver, setIsGameOver] = useState(false)
  const [guessRounds, setGuessRounds] = useState(0)

  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
  })

  const startNewGameHandler = () => {
    setUserNumber(null)
    setGuessRounds(0)
    setIsGameOver(false)
  }

  const gameOverHandler = (totalRounds) => {
    setIsGameOver(true)
    setGuessRounds(totalRounds)
  }

  const pickedNumberHandler = (pickedNumber) => {
    setUserNumber(pickedNumber)
  }
  let screen = <GameStartScreen onPickNumber={pickedNumberHandler} />

  if (userNumber) {
    screen = (
      <GameScreen userNumber={userNumber} gameOverHandler={gameOverHandler} />
    )
  }

  if (isGameOver && userNumber) {
    screen = (
      <GameOverScreen
        userNumber={userNumber}
        roundsNumber={guessRounds}
        onStartNewGame={startNewGameHandler}
      />
    )
  }

  if (!fontsLoaded) {
    return (
      <View style={{ marginTop: 100, padding: 50 }}>
        <Text>Loading</Text>
      </View>
    )
  } else {
    return (
      <LinearGradient
        colors={[colors.purple, colors.lightRed]}
        style={styles.container}
      >
        <ImageBackground
          source={Background}
          resizeMode='cover'
          style={styles.container}
          imageStyle={styles.imageBackground}
        >
          <SafeAreaView style={styles.container}>{screen}</SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: colors.purple,
  },
  imageBackground: {
    opacity: 0.1,
  },
})

export default App
