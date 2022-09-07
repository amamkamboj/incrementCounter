const counters = document.querySelectorAll('.counter');

counters.forEach((counter)=>{
	counter.innerHTML='0';

	const updateCounter = ()=>{
		// uniary plus operator use before operand to convert string to number
		const targetCount = +counter.getAttribute('data-target');
		const startingCount = Number(counter.innerHTML); // Change string to number using Number method

		const incr = targetCount / 100;
		if(startingCount < targetCount){
			counter.innerHTML =`${Math.round(startingCount + incr)}`;
			setTimeout(updateCounter,10);
		}
		else{
			counter.innerHTML = targetCount;
		}
	}


	updateCounter();
})