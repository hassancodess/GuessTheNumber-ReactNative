import { StyleSheet, Text } from 'react-native'
import React from 'react'
import colors from '../../utils/colors'
const InstructionsText = ({ children }) => {
  return <Text style={styles.instructionsText}>{children}</Text>
}

export default InstructionsText

const styles = StyleSheet.create({
  instructionsText: {
    color: colors.lightGrey,
    fontSize: 16,
    fontFamily: 'Poppins_700Bold',
  },
})
