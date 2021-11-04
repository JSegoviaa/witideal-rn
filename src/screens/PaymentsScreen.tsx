import React, { useContext } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import Loading from '../components/ui/Loading';
import { risingStar, rockStar, superStar } from '../constant/role';
import { AuthContext } from '../context/auth/AuthContext';
import { toDateTime } from '../helpers/toDateTime';
import { useSubscription } from '../hooks/useSubscription';
import { appStyles } from '../theme/appTheme';

//Este componente se va a mostrar si no ha realizado pagos
const NoPayments = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <Image
        width={10}
        height={10}
        style={{
          width: 200,
          height: 200,
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
        source={require('../assets/warning.png')}
      />
      <Text style={styles.noPayments}>Aún no has realizado ningún pago</Text>
    </View>
  );
};

//Este componente se muestra si tiene por lo menos un pago realizdo
const Payments = ({ subscription }: any) => {
  return (
    <View style={appStyles.container}>
      {subscription && subscription.length > 0 ? (
        <>
          {subscription &&
            subscription.map(subscription => (
              <View key={subscription.id} style={styles.border}>
                <View>
                  <Text style={styles.title}>Inicio:</Text>
                  <Text style={styles.description}>
                    {toDateTime(
                      subscription.data.current_period_start.seconds,
                    ).toLocaleDateString()}
                    {''}
                  </Text>
                </View>

                <View>
                  <Text style={styles.title}>Fin:</Text>
                  <Text style={styles.description}>
                    {toDateTime(
                      subscription.data.current_period_end.seconds,
                    ).toLocaleDateString()}
                  </Text>
                </View>

                <View>
                  <Text style={styles.title}>Orden de pago:</Text>
                  <Text style={styles.description}>
                    {subscription && subscription.id}
                  </Text>
                </View>
                <View>
                  <Text style={styles.title}>Cantidad:</Text>
                  <Text style={styles.description}>
                    {subscription && subscription.data.role == risingStar
                      ? '$1,500 MXN'
                      : ''}
                    {subscription && subscription.data.role == rockStar
                      ? '$1,990 MXN'
                      : ''}
                    {subscription && subscription.data.role == superStar
                      ? '$2,500 MXN'
                      : ''}
                  </Text>
                </View>
              </View>
            ))}
        </>
      ) : (
        <NoPayments />
      )}
    </View>
  );
};

const PaymentsScreen = () => {
  const { user } = useContext(AuthContext);
  // const { loading, subscription } = useSubscription(user?.uid!);
  const { loading, subscription } = useSubscription(user?.uid!);

  return (
    <>{loading ? <Loading /> : <Payments subscription={subscription} />}</>
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
