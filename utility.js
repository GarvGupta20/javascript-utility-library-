//jshint esversion:6
var arrayproto=Array.prototype;
var objectproto=Object.prototype;
var numberproto=Number.prototype;
var stringproto=String.prototype;


function isOject(obj) {
  return typeof obj==="object" || typeof obj==="function" && !!obj;
}

function isundefined(obj) {
  return !!obj && obj===void 0;
}

function isNull(obj) {
  return typeof obj===null;
}

function isBoolean(obj) {
  return obj===true || obj===false || toString.call(obj)==='[object Boolean]';
}



function contains(arr,b) {
  if(b in arr) {
    return true;
  }
  else {
    return false;
  }
}



function indexBY(arr,key) {
  obje={};
  for(let i=0; i<arr.length; i++) {
    let m=String(arr[i].key);
    obje.m=arr[i];
  }
  return obje;
}

function first(arr,n,fn) {
  let arra=[];
  if(fn && n) {
    for(let i=0; i<n; i++) {
      fn(arr[i]);
    }
  }
  else if(n) {
    if(n==0) {
      return arr[0];
    }
     for(let i=0; i<n; i++ )
     {
        arra.push(arr[i]);
     }
     return arra;
   }
  else {
    return arr[0];
  }
}
//console.log(first([1,2,3,4],2));

function len (arr) {
  return arr.length;
}
function last(arr,n,fn) {
  let arra=[];
  let l=len(arr);
  if(fn && n) {
    for(let i=0; i<n; i++) {
      fn(arr[(l-1)-i]);
    }
  }
  else if(n>0) {
      for(let i=0; i<n; i++)
      {
         arra.push(arr[(l-1)-i]);
      }
      return arra.reverse();
   }
  else {
    return arr[l-1];
  }
}

//console.log(last([1,2,3,4],2));

function doArray(arr,fn) {
  for(let i=0; i<arr.length; i++) {
    fn(arr[i]);
  }
}

function compact(arr) {
  let arra=[];
  doArray(arr,function (item) {
    arra.push(item);
  });
  return arra;
}

//console.log(compact(["1",2,3,4,0]));

function flatten(arr,n) {
  let arra=[];
  let b=arr;
  let getflattened=function (arr)
  {
    doArray(arr,function (item) {
    if(item.length===undefined) {
      arra.push(item);
    }
    else {
      for(let i=0; i<item.length; i++) {
        arra.push(item[i]);
      }
    }

  });
};
for(let j=0; j<n; j++) {
  getflattened(b);
  b=arra;
  arra=[];
}
  return b;
}
//console.log(flatten([1,[2],[3,[[4]]]],true));


var inheritWithout=(...obj) => {
  console.log(obj);
     let len=obj.length;
     if(len<2 || len==null) {
       return obj[0];
     }
     else {
       for(let i=1; i<len; i++) {
         let source=obj[i];
         for(let k in source) {
           if(source.hasOwnProperty(k)) {
             obj[0][k]=source[k];
           }
         }
       }
     }
     return obj[0];
};

var b={
  address:'11'
};

var d={
  h:"6"
};



console.log(inheritWithout({
  name:"garv"
}),b,d);
