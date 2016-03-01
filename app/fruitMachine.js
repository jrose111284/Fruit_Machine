"use strict";

var FruitMachine = function() {
  this.results = ['black', 'white', 'green', 'yellow'];
};

FruitMachine.prototype.resultPicker = function (){
  var result = this.results[Math.floor(Math.random()*(this.results.length))];
  return result;
};

module.exports = FruitMachine;