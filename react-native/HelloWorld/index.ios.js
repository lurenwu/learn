

var React = require('react');
var Index = require('./pages/index');

var {
    NavigatorIOS,
	  AppRegistry,
    StyleSheet,
} = require('react-native');

var NV = React.createClass({
    render: function(){
      return(
          <NavigatorIOS
            style={styles.container}
            initialRoute={{
              title: '首页',
              component: Index,
            }}
            />
      );
    }
});

var styles = StyleSheet.create({
  container: {
    
    flex: 1,
  }
});


AppRegistry.registerComponent('HelloWorld', () => NV);