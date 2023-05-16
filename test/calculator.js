var assert = require('assert');
const { Calculator } = require('../src/calculator');


   const { Calculator } = require('../src/calculator')
   var assert = require('assert');
   describe('Calculator', function () {
    var calc;
    beforeEach(function () {
    calc = new Calculator()
    this.retries(2)
    })
    describe('getResult()', function () {
    it('should return 0 when the calculator is created', () => {
    assert.equal(calc.getResult(), 0);
    });
});
});





// describe('Calculator', function() {
//     describe('add', function() {
//       it('1+2 should return 3', function() {
//         assert.equal(1 + 2, 3);
//       })
  
//       it('0 + 0 should equal 0', function() {
//         assert.equal(0 + 0, 0);
//       })
  
//       it('-1 + 0 should equal -1', () => {
//         assert.equal(-1 + 0, -1);
//       })
  
//       it('-1 +-1 should equal -2', () => {
//         assert.equal(-1 + -1, -2);
//       })
  
//       it('-1 + 1 should equal 0', () => {
//         assert.equal(-1 + 1, 0);
//       })
//     })
  
//     describe('multiply', function() {
//       it('1 * 1 should equal 1', () => {
//         assert.equal(1 * 1, 1);
//       })
  
//       it('1 * 0 should equal 0', () => {
//         assert.equal(1 * 0, 0);
//       })
  
//       it('0 * 1 should equal 0', () => {
//         assert.equal(0 * 1, 0);
//       })
  
//       it('2 * 2 should equal 4', () => {
//         assert.equal(2 * 2, 4);
//       })
  
//       it('-2 * 2 should equal -4', () => {
//         assert.equal(-2 * 2, -4);
//       })
  
//       it('-2 * -2 should equal 4', () => {
//         assert.equal(-2 * -2, 4);
//       })
//     })
//   })