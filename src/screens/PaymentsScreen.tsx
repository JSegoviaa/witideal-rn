import React, { useContext } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { AuthContext } from '../context/auth/AuthContext';
import { useSubscription } from '../hooks/useSubscription';
import { appStyles } from '../theme/appTheme';

interface Pago {
  [index: number]: {
    id: Number;
    inicio: String;
    fin: String;
    pagoId: Number;
    cantidad: Number;
  };
}

interface Props {
  id: Number;
  inicio: String;
  fin: String;
  pagoId: Number;
  cantidad: Number;
}

//Cambiar el any
const pagos: any = [
  { id: 1, inicio: '01/01/21', fin: '01/02/21', pagoId: 1234, cantidad: 1500 },
  { id: 2, inicio: '01/02/21', fin: '01/03/21', pagoId: 1235, cantidad: 1500 },
  { id: 3, inicio: '01/03/21', fin: '01/04/21', pagoId: 1485, cantidad: 1500 },
  { id: 4, inicio: '01/04/21', fin: '01/05/21', pagoId: 3226, cantidad: 1500 },
  { id: 5, inicio: '01/05/21', fin: '01/06/21', pagoId: 9634, cantidad: 1500 },
  { id: 6, inicio: '01/05/21', fin: '01/06/21', pagoId: 9634, cantidad: 1500 },
  { id: 7, inicio: '01/05/21', fin: '01/06/21', pagoId: 9634, cantidad: 1500 },
  { id: 8, inicio: '01/05/21', fin: '01/06/21', pagoId: 9634, cantidad: 1500 },
  { id: 9, inicio: '01/05/21', fin: '01/06/21', pagoId: 9634, cantidad: 1500 },
  { id: 10, inicio: '01/05/21', fin: '01/06/21', pagoId: 9634, cantidad: 1500 },
];

//Este componente se va a mostrar si no ha realizado pagos
const NoPayments = () => {
  return (
    <View style={appStyles.container}>
      <Text style={styles.noPayments}>Aún no has realizado ningún pago</Text>
    </View>
  );
};

//Este componente se muestra si tiene por lo menos un pago realizdo
const Payments = () => {
  return (
    <View>
      <View style={appStyles.container}>
        <FlatList
          data={pagos}
          renderItem={({ item }: any) => (
            <View style={styles.border}>
              <View>
                <Text style={styles.title}>Inicio:</Text>
                <Text style={styles.description}>{item.inicio}</Text>
              </View>
              <View>
                <Text style={styles.title}>Fin:</Text>
                <Text style={styles.description}> {item.fin} </Text>
              </View>
              <View>
                <Text style={styles.title}>Orden de pago:</Text>
                <Text style={styles.description}> {item.pagoId} </Text>
              </View>
              <View>
                <Text style={styles.title}>Cantidad:</Text>
                <Text style={styles.description}> ${item.cantidad} MXN </Text>
              </View>
            </View>
          )}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

const PaymentsScreen = () => {
  const { user } = useContext(AuthContext);
  const { subscription } = useSubscription(user?.uid!);

  return (
    <>
      {subscription && subscription!.data.length > 0 ? (
        <Payments />
      ) : (
        <NoPayments />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  border: {
    borderLeftColor: '#32FFD2',
    borderTopColor: '#ccc',
    borderBottomColor: '#ccc',
    borderRightColor: '#ccc',
    borderLeftWidth: 5,
    borderWidth: 1,
    borderRadius: 5,
    paddingBottom: 10,
    paddingTop: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  description: {
    color: '#1E0E9D',
    textAlign: 'center',
  },
  noPayments: {
    color: '#1C006F',
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
  },
  padding: {
    paddingTop: 10,
    paddingBottom: 10,
  },
  title: {
    color: 'black',
    fontWeight: '700',
    textAlign: 'center',
  },
});

export default PaymentsScreen;
