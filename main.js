let hill = document.querySelector('.hill');
let sky = document.querySelector('#screen');
let sunrise = document.querySelector('.sunrise');
let button = document.querySelector('#button');

button.addEventListener('click', function (event) {

	sunrise.style.top = '50%';
	sunrise.style.left = '35%';
	sunrise.style.background = '#fac657';
	sunrise.style.boxShadow = '0 0 60px 30px #fac657, 0 0 100px 60px #ffcc99, 0 0 140px 90px rgb(235, 110, 21)';
	sky.style.backgroundColor = 'rgb(177,63,35)';

});