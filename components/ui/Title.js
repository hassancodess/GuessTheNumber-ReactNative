import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import colors from '../../utils/colors'

const Title = ({ children }) => <Text style={styles.title}>{children}</Text>

export default Title

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    padding: 12,
    borderWidth: 4,
    borderColor: colors.lightGrey,
    color: colors.lightGrey,
    textAlign: 'center',
    fontWeight: 'bold',
  },
})
