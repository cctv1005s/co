var co = require('./index.js');

var fn = function(r){
    return new Promise((res,rej) =>{
        setTimeout(()=>{
            res(r);
        },500);
    });
};

var s = {
    fn:fn,
    num:1,
    ok:function*(){
        var r = yield fn(10);
        console.log(r);
    },
    c:function(a,b,c){
        console.log(a,b,c);
    }
};

// var r = s.ok();
// console.log(r.next());
// console.log(r.next());
// console.log(r.next());


var x = function*(){
    var s = yield 5;
    var j = yield 6;
}


co(s.ok);