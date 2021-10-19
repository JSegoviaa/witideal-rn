import React, { FC, useContext, useEffect } from 'react';
import { Animated, StyleSheet, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { GradientContext } from '../../context/gradient/GradientContext';
import useFade from '../../hooks/useFade';

const GradientBackground: FC = ({ children }) => {
  const { colors, prevColors, setPrevMainColors } = useContext(GradientContext);

  const { fadeIn, fadeOut, opacity } = useFade();

  useEffect(() => {
    fadeIn(() => {
      setPrevMainColors(colors);
      fadeOut(0);
    });
  }, [colors]);

  return (
    <View>
      <LinearGradient
        colors={[prevColors.primary, prevColors.secondary, 'white']}
        style={{ ...StyleSheet.absoluteFillObject }}
        start={{ x: 0.1, y: 0.1 }}
        end={{ x: 0.5, y: 0.7 }}
      />
      <Animated.View style={{ ...StyleSheet.absoluteFillObject, opacity }}>
        <LinearGradient colors={[colors.primary, colors.secondary, 'white']}
            style={{...StyleSheet.absoluteFillObject}}
            start={{x:0.1,y:0.1}}
            end={{ x:0.5,y:0.7}}
        />
      </Animated.View>
      {children}
    </View>
  );
};

export default GradientBackground;
