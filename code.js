if (!(parseInt(localStorage.getItem('datadiem'))>=0)) {localStorage.setItem('datadiem',0)}
function themdiem() {
	diem++
		document.getElementById('diem').innerHTML='Điểm : '+diem;
		localStorage.setItem('datadiem',diem)
}
function kill(x) {
	themdiem()
	var chuotA=document.getElementById(x);
	chuotA.innerHTML='<img width="170" src="die.png">'
	setTimeout(() => { 
		chuotA.innerHTML='<img width="170" src="rip.png">';}, 300);

	chuotA.disabled=true
	 	
	setTimeout(() => {revival(x);}, parseInt(Math.random()*3000+700));
}
function revival(x) {

	var chuotB=document.getElementById(x);

				chuotB.disabled=false
					chuotB.innerHTML='<img width="170" src="mouse.png">'
}
