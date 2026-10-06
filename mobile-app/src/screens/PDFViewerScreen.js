// screens/PDFViewerScreen.js
import React from 'react';
import { View, Dimensions } from 'react-native';
import { WebView } from 'react-native-webview';

export default function PDFViewerScreen({ route }) {
  const { url } = route.params;

  return (
    <View style={{ flex: 1 }}>
      <WebView
        source={{ uri: url }}
        style={{ flex: 1, width: Dimensions.get('window').width }}
      />
    </View>
  );
}
