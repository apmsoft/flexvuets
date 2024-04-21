import Draggable from "../../../plugins/@shopify/draggable/build/esm/Draggable/Draggable.mjs";
import Droppable from "../../../plugins/@shopify/draggable/build/esm/Droppable/Droppable.mjs";
import Sortable from "../../../plugins/@shopify/draggable/build/esm/Sortable/Sortable.mjs";
import SortAnimation from "../../../plugins/@shopify/draggable/build/esm/Plugins/SortAnimation/SortAnimation.mjs";
import Snappable from "../../../plugins/@shopify/draggable/build/esm/Plugins/Snappable/Snappable.mjs";
const onReady = () => {
  // draggable
  const draggable = new Draggable(document.querySelectorAll('.ul'), {
    draggable: '.li',
    exclude: {
      plugins: [Draggable.Plugins.Focusable],
      sensors: [Draggable.Sensors.TouchSensor]
    },
    classes: {
      'draggable:over': ['draggable--over', 'bg-red-200', 'bg-opacity-25']
    }
  });
  draggable.on('drag:start', () => console.log('drag:start'));
  draggable.on('drag:move', () => console.log('drag:move'));
  draggable.on('drag:stop', () => console.log('drag:stop'));
  // droppable
  const droppable = new Droppable(document.querySelectorAll('.droppable_container'), {
    draggable: '.item',
    dropzone: '.dropzone'
    // classes: {
    //     'draggable:over': ['draggable--over', 'bg-red-200', 'bg-opacity-25'],
    // },
  });
  droppable.on('droppable:dropped', () => console.log('droppable:dropped'));
  droppable.on('droppable:returned', () => console.log('droppable:returned'));
  // sortable
  const sortable = new Sortable(document.querySelectorAll('.sortul'), {
    draggable: '.sortli',
    classes: {
      'draggable:over': ['draggable--over', 'bg-red-200', 'bg-opacity-25']
    },
    sortAnimation: {
      duration: 200,
      easingFunction: 'ease-in-out'
    },
    plugins: [SortAnimation, Snappable]
  });
  sortable.on('sortable:start', () => console.log('sortable:start'));
  sortable.on('sortable:sort', () => console.log('sortable:sort'));
  sortable.on('sortable:sorted', () => console.log('sortable:sorted'));
  sortable.on('sortable:stop', () => console.log('sortable:stop'));
};
// document ready
document.addEventListener("DOMContentLoaded", onReady);