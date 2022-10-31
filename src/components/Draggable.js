import {useDraggable} from '@dnd-kit/core';
import {snapCenterToCursor} from '@dnd-kit/modifiers';

import React from 'react';

export function Draggable(props) {
  const {attributes, listeners, setNodeRef, transform} = useDraggable({
    id: props.id,
  });
  const style = transform ? {
    transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
  } : undefined;

  
  return (
    <div ref={setNodeRef} style={style} {...listeners} {...attributes} modifiers={[snapCenterToCursor]}>
      {props.children}
    </div>
  );
}