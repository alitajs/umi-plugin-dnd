import React from 'react';

export function rootContainer(container) {
  const DragDropComponent = require('@tmp/DragDropComponent').default;
  return React.createElement(DragDropComponent, null, container);
}
