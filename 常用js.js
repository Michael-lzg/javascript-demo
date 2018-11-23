['1','2','3'].map(parseInt); // [1,NaN,NaN]

// map有三个参数:数组元素，元素索引，原数组本身
// parseInt有两个参数,元素本身以及进制
// 理清了这两个就好办了...
// ['1','2','3'].map(parseInt); 等于如下
['1','2','3'].map(function(item,index,array){
    return parseInt(item,index); // 是不是一目了然
});

parseInt("1",0); // 1
parseInt("2",1); // NaN
parseInt("3",2); // NaN


// 实现一个闭包函数,每次调用都自增1;
var add = (function() {
  // 声明一变量,由于下面 return所以变量只会声明一次
  var count = 0; 
  return function() {
    return console.log(count++);
  };
})();
add(); // 0
add(); // 1
add(); // 2



// 对数组 ['2018-03-05', '2013-06-12','2019-03-12','2018-03-05','2014-02-22'] 去重且排序
let arr = [...new Set(['2018-03-05', '2013-06-12','2019-03-12','2018-03-05','2014-02-22'])].sort(function(a,b){
  return a<b ? -1:1; // 这里返回的是升序的,降序改下返回值就好了.所以是相对
})
// ["2013-06-12", "2014-02-22", "2018-03-05", "2019-03-12"]

// 对数组[1,2,3,4,5,'6',7,'8','a','b','z']进行乱序
let tempArr = [1,2,3,4,5,'6',7,'8','a','b','z'].sort(function(){
  return Math.random() > 0.5 ? -1 : 1;
})
// 因为里面有随机数,所以答案没有标准答案,我这边跑了一次是输出这个
//["6", "z", 3, "b", 5, 2, 7, "8", "a", 1, 4]


// JS 实现函数运行一秒后打印输出0-9;给定如下代码
for(var i=0;i<10;i++){
  setTimeout((function(i){
   return function(){
       console.log(i);
   }
  })(i),1000);
}
// es6
for(let i=0;i<10;i++){
  setTimeout(function(){
       console.log(i);
  },1000);
}