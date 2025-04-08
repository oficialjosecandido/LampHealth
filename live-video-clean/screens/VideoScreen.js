import React, { useRef, useState, useEffect } from 'react';
import { View, StyleSheet, Text, ActivityIndicator } from 'react-native';
import { Camera } from 'expo-camera';

export default function VideoScreen() {
  const cameraRef = useRef(null);
  const [hasPermission, setHasPermission] = useState(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    let isMounted = true;
    
    (async () => {
      try {
        const { status } = await Camera.requestCameraPermissionsAsync();
        if (isMounted) {
          setHasPermission(status === 'granted');
          setIsReady(true);
        }
      } catch (error) {
        console.error('Camera error:', error);
        if (isMounted) setHasPermission(false);
      }
    })();

    return () => { isMounted = false };
  }, []);

  if (!isReady || hasPermission === null) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (hasPermission === false) {
    return (
      <View style={styles.container}>
        <Text>Camera permission not granted</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Camera 
        style={styles.camera}
        ref={cameraRef}
        type={Camera.Constants.Type.back}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  camera: {
    flex: 1,
    width: '100%'
  }
});