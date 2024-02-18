import accessor from './accessor';
import array from './array';
import call from './call';
import constant from './constant';
import error from './error';
import ifNode from './if';
import index from './indexNode';
import not from './not';
import operator from './operator';
import parenthesis from './parenthesis';
import roll from './roll';
import rollArray from './rollArray';
import unaryOperator from './unaryOperator';
import NodeFactory from '/imports/parser/parseTree/NodeFactory';

const factories: Record<string, NodeFactory> = {
  accessor,
  array,
  call,
  constant,
  error,
  if: ifNode,
  index,
  not,
  operator,
  parenthesis,
  roll,
  rollArray,
  // What used to be symbols are now just treated as accessors without a path
  symbol: accessor,
  unaryOperator,
};

export default factories;