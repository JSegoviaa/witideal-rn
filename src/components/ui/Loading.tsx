import React from 'react';
import { ActivityIndicator, ActivityIndicatorProps, View } from 'react-native';

const Loading = ({
  size = 'large',
  color = '#3F19F9',
}: ActivityIndicatorProps) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <ActivityIndicator color={color} size={size} />
    </View>
  );
};

export default Loading;
