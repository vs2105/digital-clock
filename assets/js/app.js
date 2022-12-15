let cl=console.log;


	
	
	 function dclock(){
		 let digitalclock= document.getElementById("digitalclock");

  let date = new Date();
    cl(date);
	
	let hr=date.getHours();
	let sec=date.getSeconds();
	let min=date.getMinutes();
	let session="am";
	
	if(hr>=12){
		session="pm"
	}
	if(hr>=12){
		hr=hr-12
	}
   //  if (hr<10){
	//	hr='0' + hr
  //	}
  
	//if (min<10){
	//	min='0' + min
//	}

	//if (sec<10){
		//sec='0'+ sec
    //	}    insted of this we use ternary operator
	
	//hr=(hr < 10) ? ('0' + hr) : hr; //ternary operator
	//min=(min < 10) ? ('0' + min):min;
	//sec=(sec<10) ? ('0' + sec):sec;
	
	hr= setzero(hr);
	min=setzero(min);
	sec= setzero(sec);

	
	
	let result=`${hr} : ${min} : ${sec} ${session}`;
		cl(hr,min,sec);
	
	digitalclock.innerHTML=result;
	setTimeout(dclock,1000)
	 }
	 
	 dclock();
	
	
	function setzero(num){
		return(num<10)?('0'+ num): num;
	}