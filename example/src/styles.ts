import { StyleSheet, ViewStyle, TextStyle, ImageStyle } from 'react-native';

interface Styles {
  container: ViewStyle;
  flex: ViewStyle;
  rowContainer: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    height: 100,
    backgroundColor: '#00000010',
  },
  flex: {
    flex: 1,
  },
  rowContainer: {
    flex: 1,
    flexDirection: 'column',
  },

});

export default styles;
