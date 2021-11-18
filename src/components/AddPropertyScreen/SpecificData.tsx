import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

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
        <Text>Selección múltiple</Text>
        <Text>
          Cuarto de servicio / Área de lavado / Bodega / Balcón / Terraza / Roof
          Garden / Family Room / Estudio / Cuarto de TV / Elevautos
        </Text>
        <Text>Seguridad</Text>
        <Text>
          Alambrado / Cerca eléctrica / Calle cerrada / CCTV / Alarmas /
          Concerjería / Vigilancia 24/7
        </Text>
        <Text>Amenidades</Text>
        <Text>
          Piscina / Canchas / Carril de nado / Centro de negocios / Juegos
          infantiles / Gym
        </Text>
        <Text>Servicios</Text>
        <Text>
          Elevador / Aire acondicionado / Mantenimiento incluido (solo renta)
        </Text>
        <TextInput placeholder="Costo de mantenimiento" />
        <Text>Tipo de gas</Text>
        <Text>LP / Natural / No instalado</Text>
        <Text>Pet friendly</Text>
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
