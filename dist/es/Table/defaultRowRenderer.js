import _extends from 'babel-runtime/helpers/extends';
import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
import React from 'react';

/**
 * Default row renderer for Table.
 */
var babelPluginFlowReactPropTypes_proptype_RowRendererParams = require('./types').babelPluginFlowReactPropTypes_proptype_RowRendererParams || require('prop-types').any;

export default function defaultRowRenderer(_ref) {
  var columns = _ref.columns,
      index = _ref.index,
      key = _ref.key,
      onRowClick = _ref.onRowClick,
      onRowDoubleClick = _ref.onRowDoubleClick,
      onRowMouseOut = _ref.onRowMouseOut,
      onRowMouseOver = _ref.onRowMouseOver,
      onRowRightClick = _ref.onRowRightClick,
      rowData = _ref.rowData,
      styleName = _ref.styleName,
      rest = _objectWithoutProperties(_ref, ['columns', 'index', 'key', 'onRowClick', 'onRowDoubleClick', 'onRowMouseOut', 'onRowMouseOver', 'onRowRightClick', 'rowData', 'styleName']);

  var a11yProps = {};

  if (onRowClick || onRowDoubleClick || onRowMouseOut || onRowMouseOver || onRowRightClick) {
    a11yProps['aria-label'] = 'row';
    a11yProps.tabIndex = 0;

    if (onRowClick) {
      a11yProps.onClick = function (event) {
        return onRowClick({ event: event, index: index, rowData: rowData });
      };
    }
    if (onRowDoubleClick) {
      a11yProps.onDoubleClick = function (event) {
        return onRowDoubleClick({ event: event, index: index, rowData: rowData });
      };
    }
    if (onRowMouseOut) {
      a11yProps.onMouseOut = function (event) {
        return onRowMouseOut({ event: event, index: index, rowData: rowData });
      };
    }
    if (onRowMouseOver) {
      a11yProps.onMouseOver = function (event) {
        return onRowMouseOver({ event: event, index: index, rowData: rowData });
      };
    }
    if (onRowRightClick) {
      a11yProps.onContextMenu = function (event) {
        return onRowRightClick({ event: event, index: index, rowData: rowData });
      };
    }
  }

  return React.createElement(
    'div',
    _extends({}, a11yProps, {
      key: key,
      role: 'row',
      styleName: 'row ' + (styleName || '')
    }, rest),
    columns
  );
}
defaultRowRenderer.propTypes = babelPluginFlowReactPropTypes_proptype_RowRendererParams === require('prop-types').any ? {} : babelPluginFlowReactPropTypes_proptype_RowRendererParams;