// enables Strict Mode for improved error handling and disables other bad features
'use strict';

// loads react-native module and assigns it to React
var React = require('react-native');
var SearchPage = require('./SearchPage');

var styles = React.StyleSheet.create({
  text: {
    color: 'black',
    backgroundColor: 'white',
    fontSize: 30,
    margin: 80
  }
});

// RN runs within JavaScriptCore; as a result,
// you can use modern language features w/o
// worrying about supporting legacy browsers!
class PropertyFinderApp extends React.Component {
  render() {
    // constructs navigation controller and sets initial route to SearchPage component
    return (
      <React.NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Property Finder',
          component: SearchPage,
        }}
      />
    );
  }
}

var styles = React.StyleSheet.create({
  text: {
    color: 'black',
    backgroundColor: 'white',
    fontSize: 30,
    margin: 80,
  },
  container: {
    flex: 1,
  }
});

// AppRegistry defines the entry point to the application and provides the Root Component
React.AppRegistry.registerComponent('PropertyFinderApp', function() { return PropertyFinderApp});
