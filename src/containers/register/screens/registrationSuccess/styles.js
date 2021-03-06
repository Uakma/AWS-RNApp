import {StyleSheet, Dimensions} from 'react-native';
import {Colors} from '@AppTheme';
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.darkBackgroundColor,
  },
  container1: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: width,
    height: height,
  },
  logo: {
    width: width * 0.4,
    height: width * 0.4,
  },
  congrate: {
    width: width * 0.2,
    height: width * 0.2,
    marginTop: 30,
    marginBottom: 20,
    // margin: 40
  },
  txt1: {
    fontSize: 24,
    color: '#FFF',
    fontFamily: 'Rajdhani-Bold',
  },
  txt2: {
    fontSize: 32,
    marginHorizontal: 30,
    color: Colors.malachite,
    fontFamily: 'Rajdhani-Bold',
    textAlign: 'center',
  },
});

export default styles;
