var assert = require('assert');
var authController = require('../Controllers/auth.controller');






describe('authController', function(){
    beforeEach(function settingUpRoles(){
        console.log('running before each');
        authController.setRoles(['user']);
    });


    describe("isAuthrized", function (){

        it('should return false is not authorized', function (){
            authController.setRoles(['user']);
            assert.equal(false, authController.isAuthorized("admin"));

        })
        it('should return true is not authorized', function (){
            authController.setRoles(['user']);
            assert.equal(false, authController.isAuthorized("admin"));

        })

        it('should not allow a get if not authorized');
        it('should allow get if authorized');
    })

    describe('isAuthorizedAsync', function (){

        it ('should return false if not authorized', function (done){
            authController.setRoles(['user']);
            authController.isAuthorizedAsync('admin',
                function (isAuth){
                    assert.equal(false, isAuth);
                    done();

                });
        })
    })
});