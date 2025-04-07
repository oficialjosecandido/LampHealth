import React, { useRef, useEffect } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { Camera } from 'expo-camera';

export default function VideoScreen() {
  const cameraRef = useRef(null);

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} ref={cameraRef} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  camera: {
    flex: 1
  }
});
