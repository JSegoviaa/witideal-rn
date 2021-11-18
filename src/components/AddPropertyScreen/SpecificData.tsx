import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

const SpecificData = () => {
  return (
    <View>
      <View>
        <Text>El tipo de inmueble que seleccionaste fue Departamento</Text>
        <Text>
          Llena el siguiente formulario, mientras más completa la información,
          mejor oportunidad tendrá el anuncion de aparecer en la búsqueda de
          usuarios
        </Text>
      </View>
      <View>
        <Text>Características Físicas</Text>
        <TextInput placeholder="M2 construidos" />
        <TextInput placeholder="Total de unidades del conjunto" />
        <TextInput placeholder="Niveles del edificio" />
        <TextInput placeholder="Nivel en el que se encuentra" />
      </View>
      <View>
        <Text>Ubicación en edificio</Text>
        <Text>Interior / Exterior</Text>
      </View>
      <View>
        <Text>Estado de conservación</Text>
        <Text>Excelente / Bueno / Regular / Remodelar</Text>
      </View>
      <View>
        <Text>Espacios internos</Text>
        <TextInput placeholder="Recámaras" />
        <TextInput placeholder="Baños completos" />
        <TextInput placeholder="Medio baños" />
        <TextInput placeholder="Estacionamientos" />
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

const styles = StyleSheet.create({});
