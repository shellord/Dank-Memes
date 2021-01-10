import React, { useState, useEffect } from 'react'
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Dimensions,
  ActivityIndicator,
} from 'react-native'
import MemeCard from '../components/MemeCard'
import getMeme from '../utils/getMeme'

const MemeList = (props: any) => {
  const [memes, setmemes] = useState([{}])
  useEffect(() => {
    setmemes(props.memes)
  }, [props])

  const addMemes = () => {
    getMeme('dankmemes').then((data) => {
      setmemes([...memes, ...data])
      console.log(memes)
    })
  }

  const renderItem = (item: any) => (
    <MemeCard title={item.item.title} url={item.item.url} />
  )

  return (
    <FlatList
      data={memes}
      renderItem={(item) => renderItem(item)}
      keyExtractor={(item, index) => index.toString()}
      showsVerticalScrollIndicator={false}
      snapToInterval={Dimensions.get('window').height}
      snapToAlignment={'start'}
      decelerationRate={'fast'}
      ListFooterComponent={() => (
        <ActivityIndicator size="small" color="blue" />
      )}
      onEndReached={() => addMemes()}
    />
  )
}

export default MemeList

const styles = StyleSheet.create({})
