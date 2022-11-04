import {useSortable} from '@dnd-kit/sortable';
import {CSS} from '@dnd-kit/utilities';

import React from 'react';


export function Sortable(props) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({id: props.id});
  
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };
  const dragging = {
    height: "156px",
    width: "270px",
    borderRadius: "16px",
    backgroundColor: "#e2e2e2e2",
  };

  
  return (
    <div ref={setNodeRef} {...listeners} {...attributes} style={style}>
      {isDragging 
      ?<div style={dragging}></div>
      :<>{props.children}</>
}
    </div>
  );
}