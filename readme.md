# Live Video App with React Native

This app demonstrates live video streaming capabilities in a cross-platform React Native application using Expo.

## Key Features

1. **Live Video Streaming**
   - Implemented using Expo's `expo-av` package
   - Currently using a test video stream from a public URL
   - In a production environment, this would connect to:
     - Device's camera using `expo-camera`
     - A real RTMP/WebRTC stream from a cloud service
     - A private streaming server

2. **Cloud Integration Points**
   - **Video Storage/Streaming**: Would integrate with services like:
     - AWS IVS (Interactive Video Service)
     - Wowza Streaming Engine
     - Agora for real-time video

3. **Real-Time Considerations**
   - For lower latency, would implement WebRTC for peer-to-peer streaming
   - For broadcast scenarios, would use RTMP with a CDN
   - Would add adaptive bitrate streaming for varying network conditions

## Running the App

1. Install dependencies: `npm install`
2. Start the project: `expo start`
3. Scan the QR code with the Expo Go app or run on emulator