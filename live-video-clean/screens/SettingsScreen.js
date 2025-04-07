import React from 'react';
import { View, Text, Button, Alert } from 'react-native';

export default function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings (Mock)</Text>
      <Button title="Enter Privacy Mode" onPress={() => Alert.alert('Privacy Mode', 'Privacy mode enabled')} />
      <Button title="Turn Off Device" onPress={() => Alert.alert('Device', 'Device turned off')} />
    </View>
  );
}
