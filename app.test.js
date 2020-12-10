const { test } = require('@jest/globals');
const dealer = require('./app');
const random1 = require('./app');
const cards = require('./app');
const random = require('./app');

test('dealer function testing',()=>{
    // let array = [0,1,2,3,4,5,6,7,8,9,10,11,12];
    expect(dealer).not.toBeNull();
    expect(random1).not.toBeNull();
    expect(dealer).not.undefined;
})
test('random function testing',()=>{
    expect(dealer).not.toBeNull();
    expect(random1).not.toBeNull();
    expect(dealer).not.undefined;
})

test('matching the array',()=>{
    expect(cards).toContain('03.png')
})

test('checking type of',()=>{
    expect(typeof random).toEqual('object')
})
test('checking type of',()=>{
    expect(typeof random).not.toEqual('function')
})