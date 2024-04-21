'use strict';

var AbstractEvent = require("../../../shared/AbstractEvent/AbstractEvent.cjs");

class SensorEvent extends AbstractEvent.AbstractEvent {

  get originalEvent() {
    return this.data.originalEvent;
  }

  get clientX() {
    return this.data.clientX;
  }

  get clientY() {
    return this.data.clientY;
  }

  get target() {
    return this.data.target;
  }

  get container() {
    return this.data.container;
  }

  get originalSource() {
    return this.data.originalSource;
  }

  get pressure() {
    return this.data.pressure;
  }
}

class DragStartSensorEvent extends SensorEvent {}

DragStartSensorEvent.type = 'drag:start';
class DragMoveSensorEvent extends SensorEvent {}

DragMoveSensorEvent.type = 'drag:move';
class DragStopSensorEvent extends SensorEvent {}

DragStopSensorEvent.type = 'drag:stop';
class DragPressureSensorEvent extends SensorEvent {}
DragPressureSensorEvent.type = 'drag:pressure';

exports.DragMoveSensorEvent = DragMoveSensorEvent;
exports.DragPressureSensorEvent = DragPressureSensorEvent;
exports.DragStartSensorEvent = DragStartSensorEvent;
exports.DragStopSensorEvent = DragStopSensorEvent;
exports.SensorEvent = SensorEvent;