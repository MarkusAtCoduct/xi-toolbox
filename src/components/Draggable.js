import {useDraggable} from '@dnd-kit/core';

import React from 'react';

import CardItem from "./CardTemplate";

export function Draggable(props) {
  const {attributes, listeners, setNodeRef, isDragging} = useDraggable({
    id: props.id,
  });

  
  const dragging = {
    height: "156px",
    width: "270px",
    borderRadius: "16px",
    backgroundColor: "#e2e2e2e2",
    //border: "dashed 3px #e2e2e2e2"
  };

  
  return (
    <div ref={setNodeRef} {...listeners} {...attributes}>
      {isDragging
      ?<CardItem className="dragCard" data={props.data} drag></CardItem>
      :<>{props.children}</>
      }
      
    </div>
  );
}