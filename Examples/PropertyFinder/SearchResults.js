'use strict'

var React = require('react-native');
var {
  StyleSheet,
  Image,
  View,
  TouchableHighlight,
  ListView,
  Text,
  Component
} = React;

class SearchResults extends Component {
  constructor(props) {
    super(props);
    // when constructing the data source, you provide a
    // function that compares the identity of a pair
    // of rows. the ListView uses this during reconciliation
    // to determine the changes in the list data.
    var dataSource = new ListView.DataSource(
      {rowHasChanged: (r1,r2) => r1.guid !== r2.guid}
    );
    this.state = {
      dataSource: dataSource.cloneWithRows(this.props.listings)
    };
  }

  renderRow(rowData, sectionID, rowID) {
    return (
      <TouchableHighlight underlayColor='#dddddd'>
        <View>
          <Text>{rowData.title}</Text>
        </View>
      </TouchableHighlight>
    );
  }

  render() {
    return (
      // ListView displays rows of data within
      // a scrolling container, like UITableView
      // You supply data to LV via a ListView.DataSource
      // and a function that supplies the UI for each row.
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderRow.bind(this)}
      />
    );
  }
}

module.exports = SearchResults;
