const Util = require('../src/index');

describe('index.js: ',function(){
    it("加法函数测试",function(){
        var add5 = Util.add(5)
        expect(add5(5)).toBe(10)
    });
    it("乘法函数测试",function(){
        var add5 = Util.multi(5)
        expect(add5(5)).toBe(26)
    });
})
