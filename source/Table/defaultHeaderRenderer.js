/** @flow */
import React from 'react';
import SortIndicator from './SortIndicator';
import type {HeaderRendererParams} from './types';

/**
 * Default table header renderer.
 */
export default function defaultHeaderRenderer({
  dataKey,
  label,
  sortBy,
  sortDirection,
  styleName,
}: HeaderRendererParams) {
  const showSortIndicator = sortBy === dataKey;
  const children = [
    <span
      className="ReactVirtualized__Table__headerTruncatedText"
      key="label"
      title={label}
      styleName={`header ${styleName || ''}`}
    >
      {label}
    </span>,
  ];

  if (showSortIndicator) {
    children.push(
      <SortIndicator key="SortIndicator" sortDirection={sortDirection} />,
    );
  }

  return children;
}
