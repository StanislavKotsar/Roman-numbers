
function convertToRoman(num) {
  var roman=[];
  var n=num.toString();
  var s= n.split('');
  var slc= s.slice(-3).reverse();
 var m=s.reverse().slice(3).reverse();
  m=m.join('');
  m=parseInt(m);
  for(var i = 0;i<m;i++){
    roman.push("M");
  }
  
  var d=slc.map(function(val){
    return parseInt(val);
    
  });
 
  switch(d[2]){
      case 1:
      roman.push("C");break;
      case 2:
      roman.push("CC");break; 
      case 3:
      roman.push("CCC");break;
      case 4:
      roman.push("CD");break;
      case 5:
      roman.push("D");break;
      case 6:
      roman.push("DC");break;
      case 7:
      roman.push("DCC");break;
      case 8:
      roman.push("DCCC");break;
      case 9:
      roman.push("CM");break;
  }
    switch(d[1]){
      case 1:
      roman.push("X");break;
      case 2:
      roman.push("XX");break; 
      case 3:
      roman.push("XXX");break;
      case 4:
      roman.push("XL");break;
      case 5:
      roman.push("L");break;
      case 6:
      roman.push("LX");break;
      case 7:
      roman.push("LXX");break;
      case 8:
      roman.push("LXXX");break;
      case 9:
      roman.push("XC");break;
  }
   switch(d[0]){
      case 1:
      roman.push("I");break;
      case 2:
      roman.push("II");break; 
      case 3:
      roman.push("III");break;
      case 4:
      roman.push("IV");break;
      case 5:
      roman.push("V");break;
      case 6:
      roman.push("VI");break;
      case 7:
      roman.push("VII");break;
      case 8:
      roman.push("VIII");break;
      case 9:
      roman.push("IX");break;
  }

  roman=roman.join('');
 
 return roman;
}

convertToRoman(163);
Console.log("efe");