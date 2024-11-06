import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const windowFontScale = Dimensions.get('window').fontScale;

export default function App() {
  const [width, setWidth] = useState(windowWidth);
  const [height, setHeight] = useState(windowHeight);

  useEffect(() => {
    const dimensions = Dimensions.addEventListener(
      'change',
      ({window}) => {
        setWidth(window.width);
        setHeight(window.height);
      }
    )
    return () => dimensions.remove();
  });

  return (
    <View style={styles.container}>
      <View style={styles.propertiesContainer}>
        <Text style={[styles.title, {fontSize: windowFontScale * 25}]}>Window dimensions</Text>
        <Text style={styles.properties}>Window width: {width}</Text>
        <Text style={styles.properties}>Window height: {height}</Text>
      </View>
      <View style={[styles.box, { width: width / 2, height: height / 3 }]}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f4d2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  propertiesContainer: {
    marginBottom: windowHeight/12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 10,
  },
  properties: {
    fontSize: 16,
    marginBottom: 5,
  },
  box: {
    backgroundColor: '#f19c79',
    borderRadius: 10,
  }
});
