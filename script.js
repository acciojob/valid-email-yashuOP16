function validEmail(str) {
	if(!str){
		return false;
	}
	const regex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/;

	if(regex.test(str)){
		return true
	}else{
		return false;
	}
}

// Do not change the code below.
const str = prompt("Enter an email address.");
alert(validEmail(str));
