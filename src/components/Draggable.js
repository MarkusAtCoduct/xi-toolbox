import {useDraggable} from '@dnd-kit/core';
import {snapCenterToCursor} from '@dnd-kit/modifiers';

import React from 'react';

export function Draggable(props) {
  const {attributes, listeners, setNodeRef} = useDraggable({
    id: props.id,
  });

  
  return (
    <div ref={setNodeRef} {...listeners} {...attributes}>
      {props.children}
    </div>
  );
}