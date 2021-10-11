import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import BtnList from '../components/ProfileScreen/BtnList';
// import Packages from '../components/ProfileScreen/Packages';
import PersonalInfo from '../components/ProfileScreen/PersonalInfo';


const ProfileScreen = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View>
          <PersonalInfo />
          {/* <Packages /> */}
          <BtnList   />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: '98%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 'auto',
    borderRadius: 10,
  },
});

export default ProfileScreen;
