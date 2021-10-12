import { StyleSheet } from 'react-native';

export const appStyles = StyleSheet.create({
  btnPrimary: {
    backgroundColor: '#3F19F9',
    borderColor: '#3F19F9',
    borderRadius: 50,
    borderWidth: 1,
    color: 'white',
    marginBottom: 5,
    marginTop: 10,
    paddingVertical: 8,
    textAlign: 'center',
    width: 320,
    fontWeight: '700',
  },
  btnSecondary: {
    backgroundColor: '#F5F5F5',
    borderColor: '#41B8F9',
    borderRadius: 50,
    borderWidth: 1,
    marginBottom: 5,
    marginTop: 10,
    paddingVertical: 8,
    textAlign: 'center',
    width: 320,
    color: '#3F19F9',
    fontWeight: '700',
  },
  container: {
    width: '90%',
    height: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 'auto',
    borderRadius: 10,
  },
  textCenter: {
    textAlign: 'center',
    color: 'white',
  },
});
