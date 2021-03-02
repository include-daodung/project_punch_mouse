var diem=parseInt(localStorage.getItem('datadiem'))
if (diem=='NaN') {
	diem = 0
} else {document.getElementById('diem').innerHTML='Điểm : '+diem;}
function themdiem() {
	diem++
		document.getElementById('diem').innerHTML='Điểm : '+diem;
		localStorage.setItem('datadiem',diem)
}
function kill(x) {
	themdiem()
	var chuotA=document.getElementById(x);
	chuotA.innerHTML='<img width="170" src="image/die.png">'
	setTimeout(() => { 
		chuotA.innerHTML='<img width="170" src="image/rip.png">';}, 300);

	chuotA.disabled=true
	 	
	setTimeout(() => {revival(x);}, parseInt(Math.random()*3000+700));
}
function revival(x) {

	var chuotB=document.getElementById(x);

				chuotB.disabled=false
					chuotB.innerHTML='<img width="170" src="image/mouse.png">'
}