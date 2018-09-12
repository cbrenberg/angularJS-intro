console.log('client.js');

let myApp = angular.module('MyApp', []);

myApp.controller('WelcomeController', function(){
  let self = this;

  self.message = '';
  self.addPointyThing = function(input){
    self.pointyThings.push(input);
  }
  self.pointyThings = [
    {name: 'knives', sharpness: 10},
    {name: 'wits', sharpness: 11},
    {name:'waffle cones', sharpness: 3},
    {name: 'sea urchins', sharpness: 5, isPoisonous: true},
    {name:'narwhals', sharpness: 7}];
})

