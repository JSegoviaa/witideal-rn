import React, { useContext } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import Loading from '../components/ui/Loading';
import { risingStar, rockStar, superStar } from '../constant/role';
import { AuthContext } from '../context/auth/AuthContext';
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
const Payments = () => {
  const { user } = useContext(AuthContext);
  const { loading, subscription } = useSubscription(user?.uid!);
  subscription && console.log(subscription);
  return (
    <View>
      <View style={appStyles.container}>
        {loading ? (
          <Loading size="large" color="#1E0E9D" />
        ) : (
          <>
            {subscription &&
              subscription.map(subscription => (
                <View key={subscription.id} style={styles.border}>

                  <View>
                    <Text style={styles.title}>Inicio:</Text>
                    <Text style={styles.description}>
                      {subscription && subscription.current_period_start}
                    </Text>
                  </View>

                  <View>
                    <Text style={styles.title}>Fin:</Text>
                    <Text style={styles.description}>
                      {subscription && subscription.current_period_end}
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
                      {subscription && subscription.data.role == superStar
                        ? '$1990 MXN'
                        : ''}
                      {subscription && subscription.data.role == rockStar
                        ? '$2500 MXN'
                        : ''}
                    </Text>
                  </View>
                </View>
              ))}
          </>
        )}
      </View>
    </View>
  );
};

const PaymentsScreen = () => {
  const { user } = useContext(AuthContext);
  const { subscription } = useSubscription(user?.uid!);

  return <>{subscription && 1 > 0 ? <Payments /> : <NoPayments />}</>;
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
