var assert = require('assert');
var should = require('chai').should();

describe('Basic Mocha Test', function(){
    it ('Should Throw Errors', function(){
        var obj = {name: 'jon', gender: 'male'};
        var objB = {name: 'jon', gender: 'male'};

        obj.should.deep.equal(objB);
    });
    it ('should allow testing nulls', function (){
        var iAmNull = null;
        should.not.exist(iAmNull);

    })
        
try{
    assert.equal(2,3);

}catch(e){
    console.log(e);
}

    })
})


