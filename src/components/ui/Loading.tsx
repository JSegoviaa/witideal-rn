import React from 'react';
import { ActivityIndicator, ActivityIndicatorProps, View } from 'react-native';

const Loading = ({ size, color }: ActivityIndicatorProps) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <ActivityIndicator color={color} size={size} />
    </View>
  );
};

export default Loading;
