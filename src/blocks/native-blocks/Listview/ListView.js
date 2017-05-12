import React, { PropTypes, Component } from 'react';
import { ListView as RNListView, RecyclerViewBackedScrollView, View } from 'react-native';
import _ from 'lodash';

import styles from './ListView.style';

const DefaultListConfig = {
  initialListSize: 4,
  pageSize: 1,
  scrollRenderAheadDistance: 500
};

function cloneWithData( dataSource:RNListView.DataSource, data ) {
  if ( !data ) {
    return dataSource.cloneWithRows( [] );
  }
  if ( Array.isArray( data ) ) {
    return dataSource.cloneWithRows( data );
  }
  return dataSource.cloneWithRowsAndSections( data );
}

function viewHasChanged( v1, v2 ) {
  return v1 !== v2;
}

class ListViewComponent extends Component {

  static defaultProps = {
    shouldShowSeparator: false
  };

  constructor( props ) {
    super( props );
    const { data } = this.props;
    const dataSource = new RNListView.DataSource( {
      getRowData: ( dataBlob, sid, rid ) => dataBlob[ sid ][ rid ],
      getSectionHeaderData: ( dataBlob, sid ) => dataBlob[ sid ],
      rowHasChanged: viewHasChanged,
      sectionHeaderHasChanged: viewHasChanged
    } );
    this.state = {
      dataSource: cloneWithData( dataSource, data )
    };
  }

  componentWillReceiveProps( nextProps ) {
    const ds = new RNListView.DataSource( {
      getRowData: ( dataBlob, sid, rid ) => dataBlob[ sid ][ rid ],
      getSectionHeaderData: ( dataBlob, sid ) => dataBlob[ sid ],
      rowHasChanged: ( r1, r2 ) => r1 !== r2,
      sectionHeaderHasChanged: ( s1, s2 ) => s1 !== s2
    } );
    this.setState( { dataSource: cloneWithData( ds, nextProps.data ) } );
  }

  render() {
    const { props } = this;
    const { renderRow, renderSectionHeader, style, shouldShowSeparator, renderHeader, ...otherProps } = props;
    return (
      <RNListView
        style={[styles.listView, style]}
        dataSource={this.state.dataSource}
        renderRow={renderRow}
        renderSectionHeader={renderSectionHeader}
        initialListSize={DefaultListConfig.initialListSize}
        pageSize={DefaultListConfig.pageSize}
        removeClippedSubviews
        scrollRenderAheadDistance={DefaultListConfig.scrollRenderAheadDistance}
        enableEmptySections
        renderSeparator={shouldShowSeparator ? this.renderSeparator : _.noop}
        renderHeader={renderHeader}
        renderScrollComponent={prop => <RecyclerViewBackedScrollView {...prop} />}
        keyboardDismissMode="on-drag"
        keyboardShouldPersistTaps
        {...otherProps}
      />
    );
  }

  renderSeparator( sectionID, rowID ) {
    return (
      <View key={`${sectionID}-${rowID}`} style={styles.separator}/>
    );
  }
}

ListViewComponent.propTypes = {
  data: PropTypes.oneOfType( [ PropTypes.array, PropTypes.object ] ),
  renderHeader: PropTypes.func,
  renderSectionHeader: PropTypes.func,
  renderRow: PropTypes.func.isRequired,
  shouldShowSeparator: PropTypes.bool,
  style: PropTypes.object
};

module.exports = ListViewComponent;
