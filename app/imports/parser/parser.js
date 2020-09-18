import grammar from '/imports/parser/grammar.js';
import nearley from 'nearley';

const nearleyGrammar = nearley.Grammar.fromCompiled(grammar);

export default function parser(){
  return new nearley.Parser(nearleyGrammar);
}

export class CompilationContext {
  constructor({doubleRolls} = {}){
    this.errors = [];
    this.rolls = [];
    this.doubleRolls = doubleRolls;
  }
  storeError(e){
    this.errors.push(e);
  }
  storeRoll(r){
    this.rolls.push(r);
  }
}

export function parse(string){
  let parser = new nearley.Parser(nearleyGrammar);
  parser.feed(string);
  let results = parser.results;
  if (results.length === 1){
    return results[0];
  } else if (results.length === 0){
    // Valid parsing up until now, but need more. Unexpected end of input.
    return null;
  } else {
    console.warn('Grammar is ambiguous!', {string, results});
    return results[0];
  }
}
