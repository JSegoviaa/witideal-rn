import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { appStyles } from '../../theme/appTheme';
import {
  bueno,
  excelente,
  regular,
  remodelar,
} from '../../constant/propertyConvervation';

const SpecificData = () => {
  const [locationBuilding, setLocationBuilding] = useState('interior');
  const [preservationState, setPreservationState] = useState(excelente);

  return (
    <View>
      <View>
        <Text style={styles.title}>
          El tipo de inmueble que seleccionaste fue Departamento
        </Text>
        <Text style={styles.text}>
          Llena el siguiente formulario, mientras más completa la información,
          mejor oportunidad tendrá el anuncion de aparecer en la búsqueda de
          usuarios
        </Text>
      </View>
      <View>
        <Text style={styles.subtitle}>Características Físicas</Text>
        <TextInput style={appStyles.input} placeholder="M2 construidos" />
        <TextInput
          style={appStyles.input}
          placeholder="Total de unidades del conjunto"
        />
        <TextInput style={appStyles.input} placeholder="Niveles del edificio" />
        <TextInput
          style={appStyles.input}
          placeholder="Nivel en el que se encuentra"
        />
        <TextInput style={appStyles.input} placeholder="Niveles del edificio" />
      </View>

      <View>
        <Text style={styles.subtitle}>Ubicación en edificio</Text>
        <View style={appStyles.picker}>
          <Picker
            selectedValue={locationBuilding}
            style={{ color: '#000' }}
            onValueChange={(itemValue, itemIndex) =>
              setLocationBuilding(itemValue)
            }>
            <Picker.Item label="Interior" value="interior" />
            <Picker.Item label="Exterior" value="exterior" />
          </Picker>
        </View>
      </View>

      <View>
        <Text style={styles.subtitle}>Estado de conservación</Text>
        <View style={appStyles.picker}>
          <Picker
            selectedValue={preservationState}
            style={{ color: '#000' }}
            onValueChange={(itemValue, itemIndex) =>
              setPreservationState(itemValue)
            }>
            <Picker.Item label="Excelente" value={excelente} />
            <Picker.Item label="Bueno" value={bueno} />
            <Picker.Item label="Regular" value={regular} />
            <Picker.Item label="Remodelar" value={remodelar} />
          </Picker>
        </View>
      </View>
      <View>
        <Text style={styles.subtitle}>Espacios internos</Text>
        <TextInput style={appStyles.input} placeholder="Recámaras" />
        <TextInput style={appStyles.input} placeholder="Baños completos" />
        <TextInput style={appStyles.input} placeholder="Medio baños" />
        <TextInput style={appStyles.input} placeholder="Estacionamientos" />
      </View>
      <View>
        <Text>Cocina</Text>
        <Text>Abierta / Cerrada</Text>
        <BouncyCheckbox
          size={25}
          fillColor="#3F19F9"
          unfillColor="#FFFFFF"
          text="Cuarto de servicio"
          iconStyle={{ borderColor: '#3F19F9' }}
          textStyle={{
            fontFamily: 'JosefinSans-Regular',
            textDecorationLine: 'none',
          }}
        />
        <BouncyCheckbox
          size={25}
          fillColor="#3F19F9"
          unfillColor="#FFFFFF"
          text="Área de lavado"
          iconStyle={{ borderColor: '#3F19F9' }}
          textStyle={{
            fontFamily: 'JosefinSans-Regular',
            textDecorationLine: 'none',
          }}
        />
        <BouncyCheckbox
          size={25}
          fillColor="#3F19F9"
          unfillColor="#FFFFFF"
          text="Bodega"
          iconStyle={{ borderColor: '#3F19F9' }}
          textStyle={{
            fontFamily: 'JosefinSans-Regular',
            textDecorationLine: 'none',
          }}
        />
        <BouncyCheckbox
          size={25}
          fillColor="#3F19F9"
          unfillColor="#FFFFFF"
          text="Balcón"
          iconStyle={{ borderColor: '#3F19F9' }}
          textStyle={{
            fontFamily: 'JosefinSans-Regular',
            textDecorationLine: 'none',
          }}
        />
        <BouncyCheckbox
          size={25}
          fillColor="#3F19F9"
          unfillColor="#FFFFFF"
          text="Terraza"
          iconStyle={{ borderColor: '#3F19F9' }}
          textStyle={{
            fontFamily: 'JosefinSans-Regular',
            textDecorationLine: 'none',
          }}
        />
        <BouncyCheckbox
          size={25}
          fillColor="#3F19F9"
          unfillColor="#FFFFFF"
          text="Roof garden"
          iconStyle={{ borderColor: '#3F19F9' }}
          textStyle={{
            fontFamily: 'JosefinSans-Regular',
            textDecorationLine: 'none',
          }}
        />
        <BouncyCheckbox
          size={25}
          fillColor="#3F19F9"
          unfillColor="#FFFFFF"
          text="Family room"
          iconStyle={{ borderColor: '#3F19F9' }}
          textStyle={{
            fontFamily: 'JosefinSans-Regular',
            textDecorationLine: 'none',
          }}
        />
        <BouncyCheckbox
          size={25}
          fillColor="#3F19F9"
          unfillColor="#FFFFFF"
          text="Estudio"
          iconStyle={{ borderColor: '#3F19F9' }}
          textStyle={{
            fontFamily: 'JosefinSans-Regular',
            textDecorationLine: 'none',
          }}
        />
        <BouncyCheckbox
          size={25}
          fillColor="#3F19F9"
          unfillColor="#FFFFFF"
          text="Cuarto de TV"
          iconStyle={{ borderColor: '#3F19F9' }}
          textStyle={{
            fontFamily: 'JosefinSans-Regular',
            textDecorationLine: 'none',
          }}
        />
        <BouncyCheckbox
          size={25}
          fillColor="#3F19F9"
          unfillColor="#FFFFFF"
          text="Elevautos"
          iconStyle={{ borderColor: '#3F19F9' }}
          textStyle={{
            fontFamily: 'JosefinSans-Regular',
            textDecorationLine: 'none',
          }}
        />
        <Text>Seguridad</Text>
        <BouncyCheckbox
          size={25}
          fillColor="#3F19F9"
          unfillColor="#FFFFFF"
          text="Alambrado"
          iconStyle={{ borderColor: '#3F19F9' }}
          textStyle={{
            fontFamily: 'JosefinSans-Regular',
            textDecorationLine: 'none',
          }}
        />
        <BouncyCheckbox
          size={25}
          fillColor="#3F19F9"
          unfillColor="#FFFFFF"
          text="Cerca eléctrica"
          iconStyle={{ borderColor: '#3F19F9' }}
          textStyle={{
            fontFamily: 'JosefinSans-Regular',
            textDecorationLine: 'none',
          }}
        />
        <BouncyCheckbox
          size={25}
          fillColor="#3F19F9"
          unfillColor="#FFFFFF"
          text="Calle cerrada"
          iconStyle={{ borderColor: '#3F19F9' }}
          textStyle={{
            fontFamily: 'JosefinSans-Regular',
            textDecorationLine: 'none',
          }}
        />
        <BouncyCheckbox
          size={25}
          fillColor="#3F19F9"
          unfillColor="#FFFFFF"
          text="CCTV"
          iconStyle={{ borderColor: '#3F19F9' }}
          textStyle={{
            fontFamily: 'JosefinSans-Regular',
            textDecorationLine: 'none',
          }}
        />
        <BouncyCheckbox
          size={25}
          fillColor="#3F19F9"
          unfillColor="#FFFFFF"
          text="Alarmas"
          iconStyle={{ borderColor: '#3F19F9' }}
          textStyle={{
            fontFamily: 'JosefinSans-Regular',
            textDecorationLine: 'none',
          }}
        />
        <BouncyCheckbox
          size={25}
          fillColor="#3F19F9"
          unfillColor="#FFFFFF"
          text="Concercejería"
          iconStyle={{ borderColor: '#3F19F9' }}
          textStyle={{
            fontFamily: 'JosefinSans-Regular',
            textDecorationLine: 'none',
          }}
        />
        <BouncyCheckbox
          size={25}
          fillColor="#3F19F9"
          unfillColor="#FFFFFF"
          text="Vigilancia 24/7"
          iconStyle={{ borderColor: '#3F19F9' }}
          textStyle={{
            fontFamily: 'JosefinSans-Regular',
            textDecorationLine: 'none',
          }}
        />
        <Text>Amenidades</Text>
        <BouncyCheckbox
          size={25}
          fillColor="#3F19F9"
          unfillColor="#FFFFFF"
          text="Piscina"
          iconStyle={{ borderColor: '#3F19F9' }}
          textStyle={{
            fontFamily: 'JosefinSans-Regular',
            textDecorationLine: 'none',
          }}
        />
        <BouncyCheckbox
          size={25}
          fillColor="#3F19F9"
          unfillColor="#FFFFFF"
          text="Canchas"
          iconStyle={{ borderColor: '#3F19F9' }}
          textStyle={{
            fontFamily: 'JosefinSans-Regular',
            textDecorationLine: 'none',
          }}
        />
        <BouncyCheckbox
          size={25}
          fillColor="#3F19F9"
          unfillColor="#FFFFFF"
          text="Carril de nado"
          iconStyle={{ borderColor: '#3F19F9' }}
          textStyle={{
            fontFamily: 'JosefinSans-Regular',
            textDecorationLine: 'none',
          }}
        />
        <BouncyCheckbox
          size={25}
          fillColor="#3F19F9"
          unfillColor="#FFFFFF"
          text="Centro de negocios"
          iconStyle={{ borderColor: '#3F19F9' }}
          textStyle={{
            fontFamily: 'JosefinSans-Regular',
            textDecorationLine: 'none',
          }}
        />
        <BouncyCheckbox
          size={25}
          fillColor="#3F19F9"
          unfillColor="#FFFFFF"
          text="Juegos infantiles"
          iconStyle={{ borderColor: '#3F19F9' }}
          textStyle={{
            fontFamily: 'JosefinSans-Regular',
            textDecorationLine: 'none',
          }}
        />
        <BouncyCheckbox
          size={25}
          fillColor="#3F19F9"
          unfillColor="#FFFFFF"
          text="Salón de fiestas"
          iconStyle={{ borderColor: '#3F19F9' }}
          textStyle={{
            fontFamily: 'JosefinSans-Regular',
            textDecorationLine: 'none',
          }}
        />
        <BouncyCheckbox
          size={25}
          fillColor="#3F19F9"
          unfillColor="#FFFFFF"
          text="Gym"
          iconStyle={{ borderColor: '#3F19F9' }}
          textStyle={{
            fontFamily: 'JosefinSans-Regular',
            textDecorationLine: 'none',
          }}
        />
        <Text>Servicios</Text>
        <BouncyCheckbox
          size={25}
          fillColor="#3F19F9"
          unfillColor="#FFFFFF"
          text="Elevador"
          iconStyle={{ borderColor: '#3F19F9' }}
          textStyle={{
            fontFamily: 'JosefinSans-Regular',
            textDecorationLine: 'none',
          }}
        />
        <BouncyCheckbox
          size={25}
          fillColor="#3F19F9"
          unfillColor="#FFFFFF"
          text="Aire acondicionado"
          iconStyle={{ borderColor: '#3F19F9' }}
          textStyle={{
            fontFamily: 'JosefinSans-Regular',
            textDecorationLine: 'none',
          }}
        />
        <BouncyCheckbox
          size={25}
          fillColor="#3F19F9"
          unfillColor="#FFFFFF"
          text="Mantenimiento incluido (solo renta)"
          iconStyle={{ borderColor: '#3F19F9' }}
          textStyle={{
            fontFamily: 'JosefinSans-Regular',
            textDecorationLine: 'none',
          }}
        />
        <TextInput placeholder="Costo de mantenimiento" />
        <Text>Tipo de gas</Text>
        <Text>LP / Natural / No instalado</Text>
        <BouncyCheckbox
          size={25}
          fillColor="#3F19F9"
          unfillColor="#FFFFFF"
          text="Pet friendly"
          iconStyle={{ borderColor: '#3F19F9' }}
          textStyle={{
            fontFamily: 'JosefinSans-Regular',
            textDecorationLine: 'none',
          }}
        />
        <View>
          <Text>Características de la zona</Text>
          <TextInput placeholder="Centros comerciales" />
          <TextInput placeholder="Tiendes de autoservicio" />
          <TextInput placeholder="Bancos" />
          <TextInput placeholder="Escuelas" />
          <TextInput placeholder="Hospitales" />
          <TextInput placeholder="Avs. principales" />
          <TextInput placeholder="Estaciones de metro" />
          <TextInput placeholder="Estaciones de metrobús" />
        </View>
        <View>
          <Text>Tiempo</Text>
          <TextInput placeholder="Fecha de entrega" />
        </View>
        <View>
          <Text>Antigüedad (años)</Text>
          <Text>0-5 / 6-10 / 11-25 / 25+</Text>
        </View>
        <View>
          <Text>Título del inmueble</Text>
          <TextInput placeholder="Título" />
        </View>
        <View>
          <Text>Descripción del inmueble</Text>
          <TextInput placeholder="Descripción" />
        </View>
      </View>
    </View>
  );
};

export default SpecificData;

const styles = StyleSheet.create({
  subtitle: {
    color: '#1E0E6F',
    fontSize: 18,
    fontWeight: '700',
    paddingVertical: 10,
  },
  text: {
    color: '#1E0E6F',
    fontSize: 16,
    textAlign: 'center',
    paddingVertical: 10,
  },
  title: {
    color: '#1E0E6F',
    fontSize: 30,
    textAlign: 'center',
  },
});
