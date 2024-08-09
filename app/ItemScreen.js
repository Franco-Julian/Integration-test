import { View, Text, Button } from 'react-native'
import { connect } from 'react-redux';

const ItemScreen = ({ count, increment, decrement }) => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Item Screen</Text>
        <Text style={{ fontSize: 24 }}>{count}</Text>
      <Button title="Incrementar" onPress={increment} />
      <Button title="Decrementar" onPress={decrement} />
      </View>
    );
  }

const mapStateToProps = (state) => ({
  count: state.count,
});

const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch({ type: 'INCREMENT' }),
  decrement: () => dispatch({ type: 'DECREMENT' }),
});

  export default connect(mapStateToProps, mapDispatchToProps)(ItemScreen);