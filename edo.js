'use strict';
const edotensei = new Map(); //穢土転生の入れ物

edotensei.set(0,'穢');
edotensei.set(1,'土');
edotensei.set(2,'転');
edotensei.set(3,'生'); //穢土転生用のDNAを採取

function edo(n){
    if(edotensei.has(n)) { //印を結ぶ
        return edotensei.get(n); //穢土転生成功
    }
    return 0; //穢土転生失敗
}
const length = 3;
for (let i = 0; i <= length; i++){
    console.log(edo(i)); //　穢土転生の術開始
}