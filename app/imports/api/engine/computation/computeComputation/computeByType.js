import _variable from './computeByType/computeVariable.js';
import action from './computeByType/computeAction.js';
import attribute from './computeByType/computeAttribute.js';
import skill from './computeByType/computeSkill.js';
import pointBuy from './computeByType/computePointBuy.js';
import propertySlot from './computeByType/computeSlot.js';
import container from './computeByType/computeContainer.js';
import _calculation from './computeByType/computeCalculation.js';

export default Object.freeze({
  _variable,
  _calculation,
  action,
  attribute,
  container,
  skill,
  pointBuy,
  propertySlot,
  spell: action,
});
