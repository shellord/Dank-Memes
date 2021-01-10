import React, { useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import colors from '../styles/styles'
import Constants from 'expo-constants'
import getMeme from '../utils/getMeme'
import MemeList from '../components/MemeList'

const Home = () => {
  const [memes, setmemes] = useState([{}])

  const newMeme = () => {
    getMeme('dankmemes').then((data) => {
      setmemes(data)
    })
  }

  useEffect(() => {
    newMeme()
  }, [])

  return (
    <View style={styles.container}>
      <MemeList memes={memes} />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: colors.BACKGROUND_COLOR,
    alignItems: 'center',
  },
})
