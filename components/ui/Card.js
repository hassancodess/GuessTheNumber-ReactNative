import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../../utils/colors'

const Card = ({ children }) => {
  return <View style={styles.card}>{children}</View>
}

export default Card

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    backgroundColor: colors.lightRed,
    marginTop: 50,
    padding: 16,
    marginHorizontal: 24,
    borderRadius: 8,
    elevation: 4,
  },
})
