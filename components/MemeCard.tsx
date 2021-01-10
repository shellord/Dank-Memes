import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import ShimmerPlaceholder from 'react-native-shimmer-placeholder'

interface Props {
  title: string
  url: string
}

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

const MemeCard = (props: Props) => {
  const [isTitleLoaded, setisTitleLoaded] = useState<boolean>(false)
  const [isImageLoaded, setisImageLoaded] = useState<boolean>(false)

  useEffect(() => {
    setisTitleLoaded(false)
    setisImageLoaded(false)
    props.title != '' ? setisTitleLoaded(true) : setisTitleLoaded(false)
  }, [props])

  return (
    <View style={styles.container}>
      <ShimmerPlaceholder
        visible={isImageLoaded}
        width={windowWidth / 1.1}
        height={windowHeight / 1.1}
      >
        <View style={styles.imageContainer}>
          {props.url ? (
            <Image
              source={{ uri: props.url }}
              style={styles.memeImage}
              onLoad={() => setisImageLoaded(true)}
            />
          ) : null}
        </View>
      </ShimmerPlaceholder>

      {/* <ShimmerPlaceholder
        visible={isTitleLoaded}
        width={windowWidth / 1.1}
        height={windowHeight - windowHeight / 1.3}
      >
        <View style={styles.titleContainer}>
          <Text style={styles.memeTitle}>{props.title}</Text>
        </View>
      </ShimmerPlaceholder> */}
    </View>
  )
}

export default MemeCard

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    height: windowHeight,
    width: windowWidth / 1.1,
  },
  titleContainer: {
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    height: windowHeight - windowHeight / 1.3,
  },
  imageContainer: {
    height: windowHeight / 1.1,
    width: windowWidth / 1.1,
  },
  memeTitle: {
    padding: 10,
    fontSize: 26,
    color: 'white',
    fontWeight: 'bold',
  },
  memeImage: {
    flex: 1,
    resizeMode: 'stretch',
  },
})
