/*for(let x =2; x<10; x++){
	if(x%2==1) continue;//zuyg tver
	alert(x)
}*/


/*if(y<100){
	alert('noric')
}else if (y>100) {
	alert('apres')
}*/



/*string_to_array = function (str) {
     return str.trim().split(" ");
};
console.log(string_to_array("Robin Singh barev"));*/


/*let y = prompt();  // ?
let x= (y<10)? 'barev':
        (y<30)? "hajox":
        (y<100)? 'harur':
        (y<300)? 'havasar':
        'vochmek@';
        alert(x)*/

/*let x = 2*3;
switch (x) {          //break ev aranc
	case 5:
	alert('depq1');
	break;
	case 12:
	alert('depq 2');
	break;
	case 6:
	alert('esa');
	case 13:
	alert('esa ic heto');

}        */
/*let x = 12;  //gumar, stacvume gumarel
let b = 7;
switch(x){
	case b+5:
	alert('gumar');
	break;
	default:
	alert('urish')
}*/


/*let a =6;      //depq 3,4,5
switch (a){
	case 4:
	alert('depq 1');
	break;
	case 5:
	alert('depq2');
	break;
	case 6:
	alert('depq3'); //kam case ic heto aranc alerti
    case 78:
    alert('depq4');
    case 55:
    alert('depq5');
    break;
    default:
    alert('chka');
}*/

/*let arg = prompt("Enter a value?");
switch (arg) {
  case 0:
  case '1':
    alert( 'One or zero' );
    break;
                      // 3 i depqum chi gorcum;
  case '2':
    alert( 'Two' );
    break;

  case 3:
    alert( 'Never executes!' );
    break;
  default:
    alert( 'An unknown value' );
} */


// das 15;


/*function showMessage() {
  alert( 'Hello everyone!' );
}
showMessage();
showMessage();*/

/*let = "harut"
function showMessage(){
	userName='bob';
	let message = 'hello'+ userName;
	alert(message);
}
alert(userName);
showMessage();    
alert(userName);  //ashxatum e Bob showMessage ic heto;
*/
/*let userName = 'barev';
function showMessage(){
  userName ='hajox';
  let y = 'harut'+ userName;
  alert(y);	      //ete funkciai mej popoxakanic araj grvuma
                   // let uremn naxord arjeq@, ete voch uremn showMessage ic heto nor arjeq@

}      
alert(userName);
showMessage();
alert(userName);
*/
/*function showMessage(x, y){
	alert(x+':'+y);
}
showMessage('ann','barev');
showMessage('har','hajox');
showMessage('suren','ber');
*/
/*function showMessage(from='cik',text="oi"){
	alert(from+':'+text);
 }             // bac toxnelu depqum ogtagorcvum e kanxamtacvac arjeq@;   
showMessage() */

/*	if(text===undefined){
		text='chka';
	}
	alert(text);
}
showMessage()*/

	/*function toSplit(a){
		let z= '';
		let y= '';
		let g='';
		for(let i=0;a[i]!=='';i++){
			z=z+a[i];
		}
		for(let j=a.length-1; a[j]!=='';j--){
			y=y+a[j]
		}
        for(let k =y.length-1; k>=0; k--){
        	g=g+y[k]
        }
        return z

	}*/

/*function har(a,b,c){
	return (a+b+c)/c;
}
let result =har(1,2,3);
alert(result)*/
/*function checkAge(age){
	if(age>=18){
		return true;
	}else{
		return confirm('yuftyfyf')
	}
}
let age=prompt();
if (checkAge(age)) {
	alert('hihi');
}else{
	alert('nono')
}*/
/*function a(b){
	z='';
	for(let i=0; i<=b.length-1; i++){
		if(b[i]!==' '){
			z=z+b[i]
		}else{
			z=z+','+'  '
		}
	}
	return z
}
let c=a('iufh0pnupeogi grejpergupregurepuo')
console.log(c)*/



/* 5
function a(b){
	z='';
	for(let i =0;i<=b.length-1; i++){
		
		if(b[i]!==' '){
			z=z+b[i]
		}else{
			z=z+' '+b[i+1]	
		} 
		if(b[i]==' ') break;	
	}		
	return z
}
let y =a('Haxverdyan Harutyun');
console.log(y)*/
/*6

function a(x){
	let part1 = '';
	let part2 = '';
	let part3 = '';
  for(let i =0;x[i]!=='_'; i++){
  	part1=part1+x[i]
  }
  for(let j=x.length-1;x[j]!=='@';j--){
  	part2=part2+x[j]
  }
  for(let k=part2.length-1;k>=0;k--){
  	part3=part3+part2[k]
  }	
  return `${part1}`+`...@`+`${part3}`
}
let
result=a('harutyu_haxverd@mail.ru')
 console.log(result)*/
/*7
function a(b){
	let z='';
	for(let i=0;i<=b.length-1;i++){
		if(b[i]!==' '){
           z=z+b[i]
		}else{
			z=z+'-'
		}
	} return z
}
let result=a('Barev Hajox heto KAM');
let p=result.toLowerCase()
console.log(p)*/
/*8
function a(b){
	let z='';
	let k='';
	for(let i=1;i<=b.length-1;i++){
		z=z+b[i];
		k=b[0].toUpperCase()+z
	}return k	
}
let c=a('js string exercises');
console.log(c)*/
/*9
function a(b){
	z='';
	k='';
	for (var i = 0; i < b.length-1; i++) {
		if(b[i]!==' '){
			z=z+b[i+1]
		}else{
			z=z+b[i+1].toUpperCase();
		}
		k=b[0].toUpperCase()+z
	}
	return k
}
let result=a('js string exercises');

/*
let x = 'abcdefghijklmnopqrstuvwxyz';
let y = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let z ='BaBabababHbbjjK';

for(i=0;i<=z.length-1; i++){
for (t = 0; t<= x.length-1; t++) {
 
		if(z[i]==x[t]){
		
	k=y[t]
	}	
}
for (r = 0; r<= x.length-1; r++) {
 
		if(z[i]==y[r]){
		
	k=x[r]
	}	
}
p+=k
}
console.log(p)*/
/* 11
let x = 'abcdefghijklmnopqrstuvwxyz';
let y = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let v
function a(b){
let k=''                                     //toUpperCase()
let p=''
let t=''
let c=''
	for(let i=0;i<=b.length-1;i++){
		if(b[i]==' '){
		for(let j=0;j<=x.length-1;j++){
			if(b[i+1]==x[j]){
				k=y[j]
			}
		}
	for(let l=0;l<=y.length-1;l++){
		if(b[i+1]==y[l]){
			k=y[l]
		}
	}
}
       if(b[i]!==' '){
      	c+=b[i]
      } 
       if(b[i]==' '){
        for(let n=0;n<=(i-1);n++){
        	p=p+b[n] 
        } 
        for(let m=(i+2); m<=b.length-1; m++){
            t=t+b[m]
        } 
        p=p+k+t; 
      }  
	} return p||c
}
let result2= a('JavaScriptexercises') ;    
let result1 = a("JavaScript exercises");
let result3 = a("JavaScript Exercises");
console.log(result1);
console.log(result2);
console.log(result3);
 */
/* 12
let x = 'abcdefghijklmnopqrstuvwxyz';
let y = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let v
function a(b,d){
let k=''                                     //toUpperCase()
let p=''
let t=''
let c=''

	for(let i=0;i<=b.length-1;i++){
		
		for(let j=0;j<=x.length-1;j++){
			if(b[i]!==x[j]){
				k=b[i]
			}	
			}
		
	for(let l=0;l<=y.length-1;l++){

		if(b[i]==y[l]){
			if(d==undefined){
				k=' '
			}else{
				k=d
			}
		}
	

       
       if(b[i]==y[l]){
        for(let n=0;n<=(i-1);n++){
        	p=p+b[n] 
        } 
        for(let m=i; m<=b.length-1; m++){
            t=t+b[m]
        } 
        p=p+k+t; 
      }

  } 
   
	} return p
 alert(p)  
}

let result1 =a('helloWorld');
let result2 =a('helloWorld','-');
let result3 =a('helloWorld','_');
console.log(result1)
console.log(result2)
console.log(result3)

*/


/*let arr=[12,34,35,23,78,90];
function a(arr){
	let j=
}*/
/*
let b1=[234,32,31,12,33,61,7653,43,54,];

let b2=[]

function a(b){
	let max =b[0]
	let x=''
	let n=''
	let i
	let k
	let p

	
   	 	
      
   	 for(let i=0; i<=b1.length-1;i++){
   	 	
   	 	if(b1[i]<b1[0]){
          max=b1[i]
           
          
       }     
       
      
   	 x+=max
       b2.push(max) 
   
	} 
	
 return x
}

console.log(a(b1));

console.log(b2)*/


/*let x=7;
let y=6;


let d= y;
y=x;
x=d;
console.log(y,x);
*/
/* 13
function creatForm(y,x){
	let z = ''
	let j
	  if(x==undefined){
	  	x=1
	  }
	for(let i=0;i<=(x-1); i++){
		for( j =0; j<=y.length-1; j++){
            z=z+y[j]
          
		}
	}
        return z  
}
let result1 = creatForm('Ha!');
let result2 = creatForm('Ha!',2);
let result3 = creatForm('Ha!',3);
console.log(result1);
console.log(result2);
console.log(result3); */
/* 14
function str(a,b,c){
	let x = b;
	let y = c;
	let z = ''
	let t =''
	let v=''
	let p=''
   for(let i = 0; i<=a.length-1; i++){
   	if(b==undefined && c==undefined){
   		z=z+a[i]
   	}
   	if(b!==undefined && c==undefined){
   		z=z+a[i];
   		t=x+z
   	 }	
   	}
   	if(b!==undefined && c!==undefined){
   	   for(let j=a.length-1; j>=0;j--){
   			if(a[j]==' '){
   				for(let m =0; m<=j; m++ ){
                   p=p+a[m]
   				}
   				for(let n=j;n<=a.length-1; n++ ){
                    v=v+a[n]
   				}
   				p=p+x+v
   				return p 
   			}
   		}
   	}
    return  t||z
}
let result1 = str('We are doing some exercises.');
let result2 = str('We are doing some exercises.','JavaScript ');
let result3 = str('We are doing some exercises.','JavaScript ',18);
console.log(result1);
console.log(result2);
console.log(result3); */

/*16
let y = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
function str(a,b,c){
	let z=''
	let t=''
	if(b==undefined && c==undefined){
	     for(let i=0;i<=a.length-1; i++){
          z=z+a[i];
        }
    } 
      for(j=0;j<=y.length-1;j++){
        for(let l=a.length-1; l>=0;l--){
         		if(a[l]==y[j]){
    if(b!==undefined && c==undefined){	
         for(let m=0;m<=(l+1); m++){
                        z=z+a[m]
                    } 
         		}
    if (b!==undefined && c!==undefined){
         for(let n=0;n<=(l-1);n++){
         				z=z+a[n];
                      }
                      z=z+c
         		}	
         		
         			return z
         		}
           }
	  }           
}
let result1 =str('We are doing JS string exercises.')
let result2 =str('We are doing JS string exercises.',19)
let result3 =str('We are doing JS string exercises.',15,'!!')
console.log(result1);
console.log(result2);
console.log(result3);
*/

/* 17
function a(b,c){
	let y =c;
	let k=c-1
	let z=''
	let t='';
	for(let i = 0; i<=b.length-1; i++){
		z=z+b[i]
          if(i%y!==k){
          	t=z+b[i]
          }else{
          	t=','
          	z=z+t
          	
          }
	}return z
}
let result1 = a('w3resource',);
let result2 = a('w3resource',2);
let result3 = a('w3resource',3);
console.log(result1);
console.log(result2);
console.log(result3); */
/* 21
function c(a,b){
	let z='';
	let k="Error in string or count."
	for(let i=1;  i<=b;i++ ){
		z=z+a		
		}
	
  if(b==undefined){
			z=k
			
  }return z
 }
let result1 =c('a',4);
let result2 =c('a');
console.log(result1);
console.log(result2) */
/*
function a(b){
let z=''
let y=0
let t=[
s=[],h=[]
]
let k=0;
let m='';
let n=''
let i

 for(let i =0; i<(b.length);i++ ){
 	
 	if(b[i-1]<=b[i]){
 		z=z+b[i];
 		y+=1 
       m=m+b[i]
 		s.push(b[i])
    } 
 	if(b[i]>b[i+1]){
 		for( j=i+1;j<b.length; j++){
 			if(b[j]<=b[j+1]||b[j-1]<=b[j]){
              n+=b[j];
              k+=1;
              h.push(b[j])
 			}
         }

           if(y>k){   
 		     return s
 	       }else{
 		     return h
 	       } 
         } 
     }
  }   
let result=a([1,2,3,6,5,4,3,6,7,8,3,3,12,13,14,15]);
console.log(result) */

/*
function a(b){
	
	let x=[]
	let y=[]
	let t
	for(let i=0; i<=b.length-1;i++){
		if(b[i]<=b[i+1]){
			x.push(b[i]);
			if(i+1===b.length-1||b[i+1]>b[i+2]){
				x.push(b[i+1])
			}

		}else{
		if(x.length){
			y.push(x)
		}
     for(let j=0;j<y.length; j++){
     	var max = (y[0]).length;

     	if((y[j]).length>=max){

     		max=(y[j]).length;
     		t=y[j]
     	  }
       }   
		x=[]
	 } 	
   }
   return t
}
let result=a([1,2,3,4,5,6,7,3,1,2,5,7,9,10,20,30]);
console.log(result) */
/*
function printArr(arr,startIndex,count){
	let i =startIndex;
	while(i-startIndex<count){
		console.log(arr[i]);
		i++
	}
}
function ISubSArr(arr){
	let count=0;
	let startIndex=0;
	let subCount=0;
	let subStartIndex=0;
	for(let i =0; i<arr.length;i++){
		const key = arr[i];
		const accelerator=arr[i+1];
		if(key<=accelerator){
			subCount++
		}else{
			if(subCount>count){
				count=subCount;
				startIndex=subStartIndex
			}
			subStartIndex=i+1;
			subCount = 1;

		}
	}
	return [startIndex,count]
}		
const col= [1,2,3,4,5,6,1,1,3,4,5,6,7,8,7,1,2,3,4,5,6,7,8,9,];
const result=ISubSArr(col);
printArr(col,result[0],result[1]) */

/*
function a(x,y,z){
	let i=y
	while(i-y<=z){
		console.log(x[i])
		i++
	}
}
function b(x){
	let z=0;
	let y=0;
	let t=0;
	let k=0;
	for(let i=0; i<x.length;i++){
		let e=x[i];
		let f=x[i+1]
		if(e<f){
			t++
		}else {
			if(t>z){
			z=t;
			y=k
		}
		
	k=i+1;
	t=0
	}
}

	return [y,z]
}
let tiv= [1,2,1,2,3];
let result=b(tiv);
a(tiv,result[0],result[1])*/
/*
function a(x,y){
	y=prompt()
	let z;
	let t
	let k
	let i
	let p=[]
	let m=0
   for(i = 0; i<x.length; i++){
         m=m+x[i]
   	 for(let j=0; j<x.length;j++){
   	 	if(y==x[i]+x[j]){
   	 		t=i;
   	 		k=j;
   	 		if( k!==t){
   	 		z=[k,t];
   	 		p.push(z)
   	 		}
   	 	}else{
   	 		z='chka'
   	 	}	
   	 } 
   }
   return p
}
let x=[1,2,3,4,5,6,7,8,9,12,14];
let result=a(x);
console.log(result)*/
/*
function a(x,y){
	let z=x
	let k=y;
	let i
	let j
	let h;
	let m
	let n=1
	let g=1
   for( i=0; i<=(x/2+1);++i){
   	if(z%i==0){
   	   z=z/i;
   	   m=i
   	   if(x>=y){
   	   	if(h!==m){
   	   		g*=m
   	   		n=g*y	
   	   	}
   	   } 
     i=1
   	}
   }
   	for(j=0; j<=(y/2+1);++j){
   	if(k%j==0){
   	   k=k/j;
   	   h=j
   	   if(x<=y){
   	   	if(h!==m){
   	   		g*=h
   	   		n=x*g
   	   	}else{
   	   		n=y
   	   	}
   	   } 
     j=1
   	}
   }
  return n
}
let x=prompt()
let y=prompt()
let result=a(x,y);
console.log(result) */

/*

function Kendani(shun,hav,or){
	let z=0;
	let k=0;
	let p=0;
	if(or%5==0){
		p=or/5
	}
	
let	shanKer={
		hac:1,
		mis:0.1
	};
let	havKer={
		coren:0.05,
		gari:0.05
	}
let xanut={
	hac:200,
	mis:2000,
	coren:200,
	gari:150
};
let buc={
	shun:(((shun-(shun%2))/2)*p+shun),
	hav:(((hav-(hav%10))/10)*p+hav)
}
	for(let i=0;i<or;i++){
		for(let j=0;j<buc.shun;j++){
		z=z+shanKer.hac*xanut.hac+shanKer.mis*xanut.mis;	    
		}
		for(let l=0;l<buc.hav;l++){
		k+=havKer.coren*xanut.coren+havKer.gari*xanut.gari;		
		}
	}
  return k+z
}
let gumar=Kendani(1,20,10);
alert(gumar+'dram')
*/
/*
let car1 ={
smoothkm:0.08,  //vareliqi caxs km-um hart canaparhum
bumpykm:0.15,  // caxs@ xordubort chanaparhum
smoothTimekm:1, // 1km i jamanak@ hart chanaparhum
bumpyTimekm:2   //  1km i jamanak@ xordubort chanaparhum
};
let car2 = { 
	smoothkm:0.1,
	bumpykm:0.12,         // nun@ erkrord meqenai hamar
	smoothTimekm:1.2,
	bumpyTimekm:1.8 
};
let filling={
	fuel1:500,           // dizeli u benzni gner@
	fuel2:500
}
let coprsion={
   aug(smooth,bumpy){
   	let rezult=''
   	let time1=0;
   	let time2=0;
   	let sum1=0;
   	let sum2=0;
   	sum1=(smooth*car1.smoothkm+bumpy*car1.bumpykm)*filling.fuel1;
   	sum2=(smooth*car2.smoothkm+bumpy*car2.bumpykm)*filling.fuel2;
   	time1=smooth*car1.smoothTimekm+bumpy*car1.bumpyTimekm;
   	time2=smooth*car2.smoothTimekm+bumpy*car2.bumpyTimekm;
   	if(sum1<sum2){
   		result='car1-'+sum1+'AMD'+'  '+'time-'+time1+'minute'
   	}else{
   		result='car2-'+sum2+'AMD'+'  '+'time-'+time2+'minute'
   	}
   	return result
   }
}
let road=coprsion.aug(100,100);
alert(road)
*/
/*
let user={
	calHac:12,   // 1gram snndi kaloriaknutyun@
	calPanir:18,
	calMis:22,
	vazzel:1000,  //1 jam tvyal gorcneutyan pahanjvov kalorian
	loxal:2000,
	sovorel:1600,
	utel(hac,panir,mis){
		let cal=hac*this.calHac;
		cal+=panir*this.calPanir;
		cal+=mis*this.calMis;
		return cal
	},
	ashx(){
		let time1=ker/this.vazzel;
		let time2=ker/this.loxal;
		let taim3=ker/this.sovorel;
		return{
			vaz:time1,
			lox:time2,
			sov:taim3
		}
		
	}
	
};
let x=prompt('',100);
let y=prompt('',100);
let z=prompt('',200);
let ker=user.utel(x,y,z);

let result='vazzel'+user.ashx().vaz+'jam, '+'loxal'+user.ashx().lox+'jam, '+'sovorel'+user.ashx().sov+'jam';
	alert(result)
	*/
/*
function Covid(name,hand,hospit,varak,mah,buj){
    this.name=name;
	this.handipum=hand;
	this.hospital=hospit;  // hivandutyan @ntacq@
	this.varak=varak;
	this.mah=mah;
	this.buj=buj;
};
const hay=new Covid('erevan',4,0.4,0.7,0.3,0.7);
const rus=new Covid('rastov',6,0.6,0.8,0.1,0.9);
function klinika(x,or){
	let varakakvac=0;
	let hospiacvac=0;
	let mahacac=0;
	let bujvac=0;
  let skizb=x;
 for(let i=0;i<or;i++){
  let depqOrum=skizb*this.handipum;
  let pacientOrum=depqOrum*this.varak;
  let hospitalOrum=pacientOrum*this.hospital;
  let mahacacOr=hospitalOrum*this.mah;
  let bujvacOr=hospitalOrum-mahacacOr;
  skizb=pacientOrum-hospitalOrum
  varakakvac+=pacientOrum;
  hospiacvac+=hospitalOrum;
  mahacac+=mahacacOr;
  bujvac+=bujvacOr;
 }
 alert(this.name+'='+"varakvel en--"+varakakvac+'hosptalacvel en--'+hospiacvac+'mahacel en--'+mahacac+'bujvel en'+bujvac)
};
klinika.call(hay,2,2); // skzbic ev qani or e heto
klinika.call(rus,23,3)
*/
/*

let office={
	applic:{
		category1:10,
		category2:20,
		category3:30,
	},
	value:{
		category1:300,
		category2:200,
		category3:100,
		mass:1000
	}	
}
function Plane(name,x,y,z,t){
	this.name=name
	this.seat={
		category1:x,
		category2:y,
		category3:z
	};
	this.mass=t;

 }
const plane1=new Plane('plane1',30,50,120,20);
const plane2=new Plane('plane2',20,35,145,25)
function fligth(day){
	let l=0;
	let m=0;
	let n=0;
	let z=0;
	let sum=''
	if(office.applic.category1*day>=this.seat.category1){
         l=(office.applic.category1*day-office.applic.category1*day%this.seat.category1)/this.seat.category1
	};
	if (office.applic.category2*day>=this.seat.category2) {
		m=(office.applic.category2*day-office.applic.category2*day%this.seat.category1)/this.seat.category2
	};
	if (office.applic.category3*day>=this.seat.category3) {
		n=(office.applic.category3*day-office.applic.category3*day%this.seat.category3)/this.seat.category3
	};
	if(l<=m){
		z=l
	}else{z=m};
	if(z<=n){
		z=z
	}else{z=n}
		
sum=z*(this.seat.category1*office.value.category1+this.seat.category2*office.value.category2+this.seat.category3*office.value.category3+this.mass*office.value.mass)
alert(this.name+' '+'Flight '+z+' sum '+sum+'$')
};
let t=prompt()
fligth.call(plane1,t);
fligth.apply(plane2,[t]);
*/
/*
function Ticket(nameTeatre, value, currency, number, buyers){ 
  this.nameTeatre=nameTeatre; 
  this.currency=currency; 
  this.value=value; 
  this.number=number; 
  }; 
function Teatre(name, budget, chairs, tickets, buyer){ 
  this.name=name; 
  this.budget=budget; 
  this.chairs=chairs; 
  this.tickets=tickets; 
  this.buyer=buyer; 
  this.sell=function(a){ 
    this.budget=this.budget+a*this.tickets.value 
    this.chairs=this.chairs-a 
  } 
} 
function Person(name, amount, currency, chooseTicket, goTeatre){ 
  this.name=name; 
  this.chooseTicket=chooseTicket; 
  this.goTeatre=goTeatre; 
  this.money={ 
    amount:amount, 
    currency:currency, 
  } 
  
  this.buy=function(x){ 
    if(this.money.currency!==this.chooseTicket.currency){ 
      if(this.maney.currency=="USD"){ 
        this.money.amount=this.money.amount/500 
      } 
      else if(this.chooseTicket.currency=="AMD"){ 
        this.money.amount=this.money.amount*500 
      } 
    } 
    let y=1; 
    let z=0; 
 
    while(this.money.amount>=this.chooseTicket.value && x>0){ 
      this.money.amount=this.money.amount-chooseTicket.value*y 
      x-- 
      z++ 
    } 
    this.chooseTicket.number=z 
    teatre.sell(z) 
     
  } 
} 
 
let ticket= new Ticket("Sundukyan", 20, "USD", 100) 
 
let person=new Person("John", 1000, "USD", ticket) 
 
let teatre=new Teatre("Sundukyan", 200, 30, ticket, person) 
person.buy(3) 
console.log(teatre.chairs)
*/
 /*
 class Kendani {
 	constructor(name){
 		this._name=name
 	}
 	toString(){
 		return this._name
 	}
 }
 class Dog extends Kendani {
 	gorcel(){
 		alert(this._name+"a shon")
 	}
 	toString(){
 		return 'barev'+super.toString() 
 	}
 	
 }
 class Cat extends Kendani {
 	gorcel(){
 		alert(this._name+'pist ari')
 	}
 }
 const dog1 =new Dog('chalo')
 const cat1 =new Cat('caku');
 dog1.gorcel();
 cat1.gorcel()
 alert(dog1.age);
 alert(cat1)
 */
 /*
 class Car{
 	constructor(name,age,color,initSpeed,acceleration,time){
 		this._name=name;
 		this._color=color;
 		this._initSpeed=initSpeed;
 		this._acceleration=acceleration;
 		this._age=age;
 		this._time=time;
 	}
 	toString(){
 		return this._name
 	}
 }
 class VAZ extends Car {
   sport(){
   	return 2.3
   } 
   spid(){
  	let V=(this._initSpeed*this._time+this._acceleration*this._time**2/2)*this.sport()
  	return V
  }
  show(){
  	alert('name '+this._name+" color "+this._color+' age ' +this._age)
  }
  
 }
 class BMW extends Car{
   sport(){
   	return 2
   }
  spid(){
  	let V=(this._initSpeed*this._time+this._acceleration*this._time**2/2)*this.sport()
  	return V
  }
  show(){
  	alert('name '+this._name+" color "+this._color+' age ' +this._age)
  }
 }
 const car1 = new VAZ('GLE',2,'red',20,2,10);
 const car2 = new BMW('x5',5,'blue',20,4,10);
const car3=Object.create(car1);
car3._name='CLS'
if(car1.spid()>car2.spid()){
	car3.show()
}else{
	car2.show()
}s
*/
//for(let i in document.body.childNodes){
//	alert(i)
//};
/*
let n =prompt();
let count=0
let result
for(let i =2;count!=n;i++){
	let k=1
	for(let j =2; j<i/2+1;j++){
		k*=i%j
	}
	if(k){
		result=i
		count++
	}
}
console.log(result)
*/
/*
function is(arr){
	let newArr=[];
	for(let i =0; i<arr.length;i++){
		let k =1;
		for(let j=0;j<=newArr.length;j++){
			if(newArr[j]==arr[i]){
				k=0
			}
		}
		if(k){
			newArr.push(arr[i])
		}
	}
	return newArr
}
let result = is([1,2,2,3,3,5,4,7,4,58,9]);
console.log(result)
*/
/*//1. Given an array․ Compute the length of the array. (without using .length)
let arr1 = [1,2,3,4,5,7,,,undefined,,,74,75];
let length1=0
for(let key in arr1){
	alert(key)
	length1=+key+1
};
// ete  zangvacum bollor tarrer@ dasavorvac en hajordakan ev tarr@ undefind@ chi
let arr2 = [1,2,3,4,'Hello',65,76,87];
let length2=0
for(let i = 0;arr2[i]!=undefined; i++ ){
	length2++
};
console.log(`arr1-${length1}, arr2-${length2}`) 
//2 Given an array of numbers. Print the sum of the elements in array.
let arr = [1,8,9,12]
let sum=0
for(let i = 0;arr[i]!=undefined; i++ ){
	sum += arr[i]
};
console.log(sum)
//3. Given two numbers. Print powers of 2 between that numbers. (without using
//Math.pow)
let num1 = +prompt();
let num2 = +prompt();
for(let i = 0; 2**i<num2; i++ ){
	if (2**i>num1) {
	console.log(2**i)
 }
}
let num = prompt()
let num1=''
for(let i = 0; i<num.length; i++){
	if(!(num[i]%2==0&&num[i+1]%2==0)){
       num1+=num[i]
	} else {
		num1+=num[i]+'-'
	}
}
console.log(num1)
//5.Insert a n positive number. Print the n-st prime number.
let num = +prompt()
let count = 0
let result
for(let num1 = 2 ;count!==num; num1++){
let x=1
for(let i =2; i<=num1/2+1;i++){
   x*=num1%i
}
if(x||num1==2){
	result=num1
	++count
 }
}
console.log(result)*/

/*
function hh(name) {
    name=name+name
	alert(name)
};
let  name = 'har';
alert(name)
hh();
alert(name)
name=5


function showMessage(from, text = "no text given") {
  alert( from + ": " + text );
}

showMessage("Ann",);
showMessage() // Ann: no text given
*/
/*
function arr(arr1,arr2){
	arr3=[];
	for(let i =0;i<arr1.length;i++){
         arr3.push(arr1[i])
     }
     for(let j=0;j<arr2.length;j++){
     	let k=1;
     	for(let i =0;i<arr1.length;i++){
     		if(arr1[i]!=arr2[j]){
     			k=k*j
     		}else{
     			k*=0
     		} 
     	}
     	if(k){
     		arr3.push(arr2[j])
     	}
     }
    return arr3
}
let result=arr([1,3,4,8],[1,2,3,4,5,6,7,8]);
console.log(result);*/
/*
let result=[]
function arr(arr1){
    for(let i =0;i<arr1.length;i++){
        let x=1
        for(let j =0;j<arr1.length;j++){
             if(arr1[i] ==arr1[j]){
                 x=0
             }
         
          }
          if(x){
            result.push(arr1[i])
          }
    }
}
console.log(arr([1,1,2,2,3,3,4,4]))
*/
/*
let chapter = document.getElementsByTagName('span');

chapter.style.background='red'*/
/*
function diag(matr){
	let matDiag=[]
	let elem=document.getElementById('divid');
	 	elem.innerHTML+='<div id="ss"></div>'
	 	let r=document.getElementById('ss')
	 	
	 for(let i=0;i<matr.length;i++){
	 	let z=0
	 	matDiag.push(matr[i][i])
	 	let r=document.getElementById('ss')
	 	r.innerHTML+=`<div id="ss2">${matr[z][i]}</div>`

	}
	let k =elem.innerHTML
	for(let j=0;j<5;j++){
	 		elem.innerHTML+=k
	 	}
	return matDiag
};
let matrix=[ 
    [1, 2, 3, 4, 5], 
    [6, 7, 8, 9, 10], 
    [11, 12, 13, 14, 15], 
    [16, 17, 18, 19, 20], 
    [21, 22, 23, 24, 25], 
]
let result=diag(matrix)
let elem=document.getElementById('divid');

  function createparagraph() {
            let x = document.createElement("p");
            let t = 
                document.createTextNode(result);
            x.appendChild(t);
            document.getElementById("divid").appendChild(x);
        }

*/
//7. Print the following number pattern:
/*
function printNum(num){
    let arr=[]
    let k=2*num-2
    let num1=''
    for(let i = 1; i<=num; i++){
        num1 += i;
        arr[i-1]=num1
        arr[k--]=num1
    }
    let print =''
    //return arr
    for(let i = arr.length; i>0; i--){
        print+=arr.pop()+'\n'
    }
  return print
}
let result = printNum(9)
console.log(result)
*/
/*
function kent(num){
	let ken=''
	for(let i =2;i<num;i++){
		let k=1
		for(let j=2;j<i/2+1;j++){
			if(i%j==0){
				k=0
			}
		}
			if(k||i==2){
				ken+=i+','
			
		}
	}
	return ken
}
let x=+prompt()
let result=kent(x);
console.log(result)*/
/*
function Covid(name,hand,hospit,varak,mah,buj){
    this.name=name;
	this.handipum=hand;
	this.hospital=hospit;  // hivandutyan @ntacq@
	this.varak=varak;
	this.mah=mah;
	this.buj=buj;
};
const hay=new Covid('erevan',4,0.4,0.7,0.3,0.7);
const rus=new Covid('rastov',6,0.6,0.8,0.1,0.9);
function klinika(x,or){
	let varakakvac=0;
	let hospiacvac=0;
	let mahacac=0;
	let bujvac=0;
  let skizb=x;
 for(let i=0;i<or;i++){
  let depqOrum=skizb*this.handipum;
  let pacientOrum=depqOrum*this.varak;
  let hospitalOrum=pacientOrum*this.hospital;
  let mahacacOr=hospitalOrum*this.mah;
  let bujvacOr=hospitalOrum-mahacacOr;
  skizb=pacientOrum-hospitalOrum
  varakakvac+=pacientOrum;
  hospiacvac+=hospitalOrum;
  mahacac+=mahacacOr;
  bujvac+=bujvacOr;
 }
 alert(this.name+'='+"varakvel en--"+varakakvac+'hosptalacvel en--'+hospiacvac+'mahacel en--'+mahacac+'bujvel en'+bujvac)
};
klinika.call(hay,4,7); // skzbic ev qani or e heto
klinika.call(rus,23,3)*/
/*
let elem = document.querySelectorAll('#hh1')[0]
elem.closest('.hh').style.background='red'
alert(elem.matches('#hh1'))*/
/*
let user1 = {
	name:'har',
	age:23
};
let user2 = {
	name:'john',
	age:32
};
let clon ={};
 clon=Object.assign(clon,user1,user2);
console.log(clon)*/
/*
function func(){
	
	let result=' i am '+this.name+' '+this.surname+this.age
	for(let i=0; i<this.hobbies.length;i++){
			result+=this.hobbies[i]
	}
		return result
	};
	function addHobby(hobby){
		this.hobbies.push(hobby)
	}
let har= {
	name:'Harut',
	surname:"Hakhverdyan",
	age:29,
	hobbies:['sport','pictures',],
	func,
	addHobby,
	
};
let gar = {
	name:'garik',
	surname:'Azatyan',
	age:23,
	hobbies:['football','tenis'],
	func,
}
har.addHobby('bareb')
console.log(har.func())*/
/*
let gar = {
	name:'Garik',
	surname:'Azatyan',
	age:23,
	hobbies:['football','tenis'],
}
let garCopy = {};
for(let key in gar){
	garCopy[key]=gar[key]
}
garCopy.name='Suren';
garCopy.hobbies.push(voleibol)
*/
/*
function Car(name,model,v0,a,){ //v0-skzbnakan aragutyun
	this.name=name;				//a aragacum
	this.model=model;
	this.v0=v0;
	this.a=a;
	
}
const car1 = new Car('BMW','x5',10,2)
const car2 = new Car('Mercedes','GLE',11,1.5);
function comparison(t){
	let s1=car1.v0*t+car1.a*t**2/2    //s1 car1 ancac chanaparh
	let s2=car2.v0*t+car2.a*t**2/2    //s2 car2 chanaparh
	let result=""
	if(s1>s2){
		result=car1.name+' '+car1.model+"--"+s1+'m'
		console.log(result)
	}else if(s2>s1){
	    result=car2.name+' '+car2.model+"--"+s2+'m'
		console.log(result)
	}else{
		console.log("car1 & car2"+'--'+s1+'m')
	}	
}
let t =+prompt()                    //t--jam
comparison(t)
*/
/*
function Cons(name){
	this.name=name;
	zoo()
}
function zoo(){
	alert(this.name)
}

let person = {
	name:'har'
}
let person1 = {
	name:'gar'
}
person.a=zoo;
person1.b=zoo;

new Cons('pavel').b=zoo
alert(new Cons('pavel'))
*/
/*
function Phone(model,foto,memory,color){
	this.model = model;
	this.foto = foto;
	this.memory = memory;
	this.color = color;
	this.hist=[];
	this.description = function(){
		 let result = this.model +this.color+this.memory+this.foto;
         console.log(result)
	}
	this.kont={
		John:'055445566',
		name2:'055665544'
		}
	this.call=function(){
		let num=prompt()
		let nameKont=''
		for(let key in this.kont){
		if(num==this.kont[key]){
		    nameKont=key
		}
	  }
	  if(nameKont){
	  	alert(nameKont)
	  }	else {
	  	alert(num)
	  }
	    
		this.hist.push(nameKont||num)
		
	}
	this.addKont=function(newName,newNum){
		let x=1
		for(let k in this.kont){
		if(k==newName){
           x=0
		}
	}
	if(x){
		this.kont[newName]=newNum
	}else{
		this.kont[newName]=newNum
	 }
	};
}
let phon1 = new Phone('IP 12 ',' 12mp ',128,' gold ')
phon1.description()
phon1.addKont('har','666')
phon1.addKont('garik','777')
phon1.addKont('garik','888')
phon1.addKont('garik','656')
phon1.call()
phon1.call()
phon1.addKont('garik','888')
console.log(phon1.kont)*/
/*
function Car(model,color,k,gasSeat){
	this.model=model;
	this.color=color;
	this.engine=engine;
	this.gearBox=gearBox;
	this.gasStove=gasStove;
	this.speed=speed;
	this.k=k;
	this.gasSeat=gasSeat
	
     
};
function engine(startStop){
	if(startStop=='start'){
		console.log(this.model+' engine is runing')
		return true
	}else if (startStop=='stop'){
		console.log(this.model+' engine is not runing')
		return false
	}
}
function gearBox(seat){
    if(seat=='+'){
    	this.k+=1
    	console.log(this.k)
    }else if(this.seat=='-'){
    	this.k-=1
    	console.log(this.k)
    }
    return this.k
}
function gasStove(seatGas){
      if(this.egine){
      	if(seatGas=='+'){
      		this.gasSeat+=5
      	}else if(seatGas=='-'&&this.gasSeat-5>=0){
      		this.gasSeat-=5
      	}

      }else{
      	console.log(' engine is not runing')
      }
      return this.gasSeat
}
function speed(){

}
let car1=new Car('06','blue',0,0)
car1.engine('start')
console.log(car1.engine());
*/
/*
function Car(color,){
	this.color=color;
	this.name=name;
	this.gg=function(){
		return 5
	}
}
let car1=new Car('kapuytt',) 
function name(a){
	if(a){
		return true
	}else{
		return false
	}
}
function model(){
	return 7
}
car1.gg()
console.log(car1.gg)*/
/*
function Covid(name,hand,hospit,varak,mah,buj){
    this.name=name;
	this.handipum=hand;
	this.hospital=hospit;  // hivandutyan @ntacq@
	this.varak=varak;
	this.mah=mah;
	this.buj=buj;
};
const hay=new Covid('erevan',4,0.4,0.7,0.3,0.7);
const rus=new Covid('rastov',6,0.6,0.8,0.1,0.9);
function klinika(x,or){
	let varakakvac=0;
	let hospiacvac=0;
	let mahacac=0;
	let bujvac=0;
  let skizb=x;
 for(let i=0;i<or;i++){
  let depqOrum=skizb*this.handipum;
  let pacientOrum=depqOrum*this.varak;
  let hospitalOrum=pacientOrum*this.hospital;
  let mahacacOr=hospitalOrum*this.mah;
  let bujvacOr=hospitalOrum-mahacacOr;
  skizb=pacientOrum-hospitalOrum
  varakakvac+=pacientOrum;
  hospiacvac+=hospitalOrum;
  mahacac+=mahacacOr;
  bujvac+=bujvacOr;
 }
 alert(this.name+'='+"varakvel en--"+varakakvac+'hosptalacvel en--'+hospiacvac+'mahacel en--'+mahacac+'bujvel en'+bujvac)
};
klinika.call(hay,2,2); // skzbic ev qani or e heto
klinika.call(rus,23,3)
*/
/*
function Konstructr(name){
	this.name=function (){
		return name
	}
};
function name1(){
	console.log(this.name())
}
let obj=new Konstructr('gar')
obj.name1=name1;
obj.name1()*/
/*
function Car(model,color,gear,gasSeat){
	this.model=model;
	this.color=color;
	this.engine=engine;
	this.gearBox=gearBox;
	this.gasStove=gasStove;
	this.speed=speed;
	this.gear=gear;
	this.gasSeat=gasSeat
	this.eng=true
	
     
};
function engine(startStop){
	if(startStop=='start'){
		console.log(this.model+' engine is runing')
		return this.eng=true
	}else if (startStop=='stop'){
		console.log(this.model+' engine is not runing')
		return this.eng=false
	}
}
function gearBox(seat){
    if(seat=='+'){
    	this.gear+=1
    	console.log(this.gear)
    }else if(this.seat=='-'){
    	this.gear-=1
    	console.log(this.gear)
    }
    return this.gear
}
function gasStove(seatGas){
      if(this.eng){
      	if(seatGas=='+'){
      		return this.gasSeat+=5
      	}else if(seatGas=='-'&&this.gasSeat-5>=0){
      	   	this.gasSeat-=5
      	}

      }else{
      	console.log(' engine is not runing')
      }
      return this.gasSeat
}
function speed(){
	let vMax =0
  if(this.eng){
  	if(this.gear>0&&this.gear<=5){
  		if(this.gasSeat>0&&this.gasSeat<=10)
  		vMax=this.gear**(3/2)*this.gasSeat**(3/2)
  	}
  }
   console.log(vMax)
}
let car1=new Car('06','blue',0,0)
car1.engine('start')
car1.gearBox('+')
car1.gearBox('+')
car1.gearBox('-')
console.log(car1.gasStove('+'));
car1.gasStove('+')
car1.speed()*/
/*
let arr=[11,22,33,44,55,66,77,88,99]
arr['func']=func
function func(start,number,elem){
	let arr1 =[]
	let k=0
	let t=0
	debugger

    for(let i =0; i<this.length;i++){
       
        if(i>=start&&i<start+number){
       	 arr1.push(this[i])
       }
       
    }
    let p=this.length
    
    for(let i =0;i<p;i++){
    	if(i=!start){
    		this[i]=this[i]
    	}else if(i>=start+number){
    		this[start++]='barev'
    	}
    }
    return arr1
}
console.log(arr)
console.log(arr.func(2,3))*/
/*
let arr5=[11,222,33,44,555,66,777,888,999];
arr5[fakeSplice]=fakeSplice
function fakeSplice(start, deletecount, element1) {
    let deletedElements = [];
    for(let i = start; i < start + deletecount; i++){
        deletedElements.push(this[i]);
    }
    for (let i = start; i < this.length; i++) {
        if(i === start){
            this[i] = element1;
            i++
        }
        this[i] = this[i + deletecount - 1];
    }
    for (let j = 0; j < deletecount - 1; j++) {
        this.pop();
    }
    return deletedElements;
}

console.log(arr5.fakeSplice(2,4))
console.log(arr5)*/
/*
function newObj(obj) {
    debugger
    let lastObj={};
    let arr=[]
    for(let firstKey1 in obj){
        let event1=1
        let event2=0
        for(let firstKey2 in obj){
            if(obj[firstKey1]===obj[firstKey2]){
            if(firstKey1!=firstKey2){
           event1=0
           event2=1
           arr.push(firstKey2);  
          }else if(event2){
            arr.push(firstKey1);
          }
        }
    }
    lastObj[obj[firstKey1]]=arr
        arr=[]
        if(event1){
            lastObj[obj[firstKey1]]=firstKey1
        }
    }
    return lastObj
}
let firstObj={
    g:'55',
    p:'6',
    t:'4',
    a:'2',
    c:'2',
    d:'2',
    f:'3',
    h:'98',
    b:'3',
    e:'3',
    k:'4'

};
let result = newObj(firstObj);
console.log(result)
*/ 
/*
function newObj(obj){
	debugger
	let obj2={};
    for(let key1 in obj){
    	let a=1
    	let b=1
    	if(!obj2[obj[key1]]){
    		obj2[obj[key1]]=[]
    	}
    	for(let i=0;i<obj2[obj[key1]].length;i++){
    		if(obj2[obj[key1]][i]==key1){
    			a=0
    		}
            
    	}
    	if(a){
    		obj2[obj[key1]].push(key1)
    	}
    	
    	for(let key2 in obj){
    		if(key2!=key1){
    			if(obj[key1]==obj[key2]){
                  a=0;
           for(let j=0;j<obj2[obj[key1]].length;j++){
    		   if(obj2[obj[key1]][j]==key2){
    			b=0
    		}
            
    	}
			    	if(b){
			    		obj2[obj[key1]].push(key2)
			    	}
    			}
    		}
    	}
    	if(a){
    		obj2[obj[key1]]=key1
    	}
    }
	return obj2
};
let obj1={
	a:1,
	b:2,
	c:2,
	d:3,
	e:3
}
let result=newObj(obj1);
console.log(result)

*/
let newStr=prompt();
function a(str){
	
let obj={}
 for(let i=0;i<str.length;i++){
 	
 	let reg=new RegExp(str[i],'g')
 	
 	let  arr=str.match(reg);
 	obj[arr[0]]=arr.length
 }

 for(let key in obj){
 	alert(`${key}:${obj[key]}`)
 }
}
let result = a(newStr)