/* eslint-disable no-unused-vars */
import EStylesheet from 'react-native-extended-stylesheet';
import {Fonts} from '@AppTheme';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default EStylesheet.create({
  container: {
    width: wp('80%'),
  },
  inputContainer: {
    borderWidth: 1,
    borderRadius: 25,
    borderColor: '#8E8E8E',
    flexDirection: 'row',
    height: 50,
    width: wp('80%'),
    paddingVertical: 10,
    paddingHorizontal: 15,
    alignItems: 'center',
  },
  input: {
    flex: 1,
    color: '#000',
    fontSize: '1.20rem',
  },
  icon: {
    marginRight: 8,
    height: 18,
    width: 18,
  },
  label: {
    color: '#000',
    fontSize: '1.063rem',
    textTransform: 'uppercase',
    marginBottom: 6,
    marginLeft: 15,
    letterSpacing: 2,
    fontFamily: Fonts.type.rajdhaniSemibold,
  },
});
