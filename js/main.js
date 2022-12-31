function sumaPromise(a,b){
	return new Promise((resolve, reject) => {
  
	resolve(
		new Typed(a, {
			strings: [
				`<i class="mascota">${b}</i>`
			],
			typeSpeed: 200, 
			startDelay: 300, 	
			cursorChar: '',
			contentType: 'html', 
		})
	)
  
})
}

function final(a,b){
	return new Promise((resolve, reject) => {
  
	resolve(
		new Typed(a, {
			strings: [
				b
			],
			typeSpeed: 200, 
			startDelay: 300,	
			cursorChar: '', 
			contentType: 'html', 
		})
	)
  
})
}


sumaPromise(".typed","Xensacional").then(
	()=>{
		setTimeout(()=>{
			sumaPromise(".typed1","Insana");
		},3500) 
	}).then(
		()=>{
		setTimeout(()=>{
			sumaPromise(".typed2","Maravillosa");
		},5500)
	}).then(
	()=>{
		setTimeout(()=>{
			sumaPromise(".typed3","Empeñosa");
		},9000)
	}).then(
	()=>{
		setTimeout(()=>{
			sumaPromise(".typed4","Noble");
		},11500)
	}).then(
	()=>{
		setTimeout(()=>{
			sumaPromise(".typed5","Amable");
		},13500)
	}).then(
		()=>{
		setTimeout(()=>{
			final(".final","Ahora lee las iniciales");
		},13500)
	})

	





