import React from 'react'
import { Text, View, StyleSheet, Pressable } from 'react-native'
import colors from '../../utils/colors'

const PrimaryButton = ({ children, onPress }) => {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        android_ripple={{ color: colors.lightRed }}
        onPress={onPress}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  buttonOuterContainer: {
    // backgroundColor: colors.darkRed,
    borderRadius: 28,
    margin: 4,
    overflow: 'hidden',
  },
  buttonInnerContainer: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    elevation: 2,
    backgroundColor: colors.darkRed,
  },
  buttonText: {
    color: colors.lightGrey,
    textAlign: 'center',
    fontSize: 18,
  },
  pressed: {
    opacity: 0.75,
  },
})

export default PrimaryButton
