import React, { useState } from 'react';
import {
  Image,
  Modal,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Pressable,
} from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import { RootLoginStackNavigation } from '../navigation/LoginStackNavigation';
import { appStyles } from '../theme/appTheme';
import {
  independenBroker,
  inmobiliaria,
  owner,
} from '../constant/promoterType';

interface Props
  extends StackScreenProps<RootLoginStackNavigation, 'RegisterScreen'> {}

const RegisterScreen = ({ navigation }: Props) => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleModal = () => setModalVisible(true);

  const handleToInmobiliaria = () => {
    setModalVisible(false);
    navigation.navigate('RegisterPromoterForm', { id: inmobiliaria });
  };

  const handleToIndependent = () => {
    setModalVisible(false);
    navigation.navigate('RegisterPromoterForm', { id: independenBroker });
  };

  const handleToOwner = () => {
    setModalVisible(false);
    navigation.navigate('RegisterPromoterForm', { id: owner });
  };

  return (
    <ScrollView>
      <View style={styles.background}>
        <View style={appStyles.container}>
          <View style={appStyles.logoContainer}>
            <Image
              style={appStyles.logo}
              source={require('../assets/logo-brand.png')}
            />
          </View>
          <Text style={styles.title}>Empecemos con tu cuenta</Text>

          <View style={styles.card}>
            <Icon style={styles.iconColor} name="search-outline" size={45} />
            <Text style={styles.subtitle}>
              Crea una cuenta para buscar propiedades
            </Text>
            <TouchableOpacity
              style={appStyles.btnRegister}
              onPress={() => {
                navigation.navigate('RegisterForm');
              }}>
              <Text style={{ color: '#41B8F9', textAlign: 'center' }}>
                Buscador
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.card}>
            <Icon style={styles.iconColor} name="megaphone-outline" size={45} />
            <Text style={styles.subtitle}>
              Crea una cuenta para anunciar propiedades
            </Text>

            <TouchableOpacity
              style={appStyles.btnRegister}
              onPress={handleModal}>
              <Text style={{ color: '#41B8F9', textAlign: 'center' }}>
                Promotor
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Modal  */}
        <Modal
          animationType="fade"
          statusBarTranslucent={true}
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalTitle}>Selecciona una opción</Text>

              <TouchableOpacity
                style={styles.toRegister}
                onPress={handleToOwner}>
                <Text style={styles.modalOptions}>
                  <Icon
                    name="checkmark-circle-outline"
                    size={20}
                    color="#3F19F9"
                  />
                  {'  '}
                  Soy dueño de propiedad
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.toRegister}
                onPress={handleToInmobiliaria}>
                <Text style={styles.modalOptions}>
                  <Icon
                    name="checkmark-circle-outline"
                    size={20}
                    color="#3F19F9"
                  />
                  {'  '}
                  Soy una inmobiliaria
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.toRegister}
                onPress={handleToIndependent}>
                <Text style={styles.modalOptions}>
                  <Icon
                    name="checkmark-circle-outline"
                    size={20}
                    color="#3F19F9"
                  />
                  {'  '}
                  Soy independiente
                </Text>
              </TouchableOpacity>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={{ color: 'white', textAlign: 'center' }}>
                  Cerrar
                </Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        {/* Se acaba el modal */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  background: { backgroundColor: '#f5f5f5', flex: 1 },
  card: {
    margin: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
    elevation: 2,
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    color: '#1E0E6F',
    fontWeight: '700',
    padding: 10,
  },
  subtitle: {
    fontSize: 20,
    textAlign: 'center',
    color: '#1e0e6f',
    fontWeight: '600',
    padding: 5,
  },
  iconColor: {
    color: '#3F19F9',
    padding: 5,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    backgroundColor: 'rgba(255,255,255,0.7)',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    paddingHorizontal: 30,
    paddingVertical: 8,
    elevation: 2,
    marginTop: 10,
  },
  buttonClose: {
    backgroundColor: '#3F19F9',
  },
  toRegister: {
    paddingVertical: 5,
  },
  modalTitle: {
    fontSize: 25,
    textAlign: 'center',
    color: '#1E0E6F',
    fontWeight: '700',
    padding: 10,
  },
  modalOptions: {
    color: 'black',
    paddingVertical: 15,
    fontSize: 18,
  },
});

export default RegisterScreen;
