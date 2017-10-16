/** @flow */
import React from 'react';
import type {RowRendererParams} from './types';

/**
 * Default row renderer for Table.
 */
export default function defaultRowRenderer({
  columns,
  index,
  key,
  onRowClick,
  onRowDoubleClick,
  onRowMouseOut,
  onRowMouseOver,
  onRowRightClick,
  rowData,
  styleName,
  ...rest
}: RowRendererParams) {
  const a11yProps = {};

  if (
    onRowClick ||
    onRowDoubleClick ||
    onRowMouseOut ||
    onRowMouseOver ||
    onRowRightClick
  ) {
    a11yProps['aria-label'] = 'row';
    a11yProps.tabIndex = 0;

    if (onRowClick) {
      a11yProps.onClick = event => onRowClick({event, index, rowData});
    }
    if (onRowDoubleClick) {
      a11yProps.onDoubleClick = event =>
        onRowDoubleClick({event, index, rowData});
    }
    if (onRowMouseOut) {
      a11yProps.onMouseOut = event => onRowMouseOut({event, index, rowData});
    }
    if (onRowMouseOver) {
      a11yProps.onMouseOver = event => onRowMouseOver({event, index, rowData});
    }
    if (onRowRightClick) {
      a11yProps.onContextMenu = event =>
        onRowRightClick({event, index, rowData});
    }
  }

  return (
    <div
      {...a11yProps}
      key={key}
      role="row"
      styleName={`row ${styleName || ''}`}
      {...rest}
    >
      {columns}
    </div>
  );
}
