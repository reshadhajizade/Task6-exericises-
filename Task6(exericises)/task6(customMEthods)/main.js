//customFilter
Array.prototype.myFilter = function (callback) {
    const resultFilter = [];
    for (let index = 0; index < this.length; index++) {
      if (!!callback(this[index], index, this)) {
        resultFilter.push(this[index]);
      }
    }
    return resultFilter;
  };
  
  //customReduce
  Array.prototype.myReduce = function (callback, acm) {
    if (this.length < 1) {
      throw new Error("Hecne tapilmadi!");
    }
    if (!acm) {
      if (typeof this[0] == "string") {
        acm = "";
      } else if (typeof this[0] == "number") {
        acm = 0;
      }
    }
    for (let index = 0; index < this.length; index++) {
      acm = callback(acm, this[index]);
    }
    return acm;
  };
  const names = ["Rashad", "eli", "veli"];
  const filterNames = names.myFilter((name) => name !== "Rashad");
  const statment = names.myReduce((ac, element) => ac + element);
  
  console.log(filterNames);
  console.log(statment);
  
  //customForeach
  
  Array.prototype.myForeach = function (callback) {
    for (let i = 0; i < this.length; i++) {
      callback(this[i]);
    }
  };
  function callback(element) {
    console.log(element);
  }
  const array = [1, 2, 3, 4, 5];
  array.myForeach(callback);



//customEvery
  Array.prototype.myevery = function(cb){
    return this.reduce((p,c,i,a) => i === 1 ? cb(p,i-1,a) && cb(c,i,a)
                                            : p && cb(c,i,a));
  };
  
  var arr = [1,2,3,4,5,6,7,8,9,10,11],
      brr = [1,2,3,4,5,6,9];
  console.log(arr.myevery(e => e < 10));
  console.log(brr.myevery(e => e < 10));

  //customSome


  Array.prototype.mysome=function(callback){
      const arr=this;
      for(let i=0; i<arr.length; i++){
          if(callback(arr[i]),i,arr) return true;
      }

      return false;

  }
  const namess=['Reshad','Eli','veli','asif','vasif'];
  const someresult=namess.mysome(item => item==='Reshad')
  console.log(someresult)
 




  
  // customMap
  
  Array.prototype.mynewmap = function (callback) {
    const resultArray = [];
    for (let i = 0; i < this.length; i++) {
      resultArray.push(callback(this[i], i, this));
    }
    return resultArray;
  };
  const eded = [1, 2, 3, 4, 5];
  let result = eded.mynewmap(function (ed, index, array) {
    return ed * 2;
    console.log(ed, index, array);
    
  });