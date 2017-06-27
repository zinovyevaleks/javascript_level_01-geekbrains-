function color(r,g,b){
	function tencolor(ten){
	    if (isNaN(ten)){
	        return console.log('Ошибка: параметр не является числом');
	    } else if(ten>255||ten<0) {
	        return console.log('Ошибка: допустимый диапазон 0-255');
	    } else {
	        return ten > 15 ? ten.toString(16) : '0' + ten.toString(16);
	    }
	}
	var rgb=[tencolor(r),tencolor(g),tencolor(b)]
  return rgb
}
console.log(color(10,100,190));



function num2Obj(num){
	if (isNaN(num)){
	  console.log('Ошибка: параметр не является числом');
	} else if(num>999 || num<0){
		console.log('Ошибка: допустимый диапазон 0-999');
	  var obj={};
	  return obj;
	} else {
		var digits=['единицы','десятки','сотни'];
	  var obj={};
	  var i=0;
	  for(var i=0; num!=0; i++){
	  	obj[digits[i]]=num%10;
	  	num=(num-num%10)/10;
		}
		}
		return obj;
	}
console.log(num2Obj(159));


function objectToQueryString(obj){
	return Object.keys(obj).map(function(key) { return key + '=' + obj[key]; }).join('&');
};
console.log(objectToQueryString({user: 'Dmitry'}));
console.log(objectToQueryString({user: 'Dmitry', password: 'pass'}));
console.log(objectToQueryString({user: 'Dmitry', password: 'pass', id:1}));
