let coins = 10;
let blips = 0;
let blops = 0;

const on_coins = document.querySelector("#vcoins");
const on_blips = document.querySelector("#vblips");
const on_blops = document.querySelector("#vblops");
const on_btns = document.querySelectorAll(".btn"); 
const on_blip_container = document.querySelector(".blip_container")

// console.log(btns)
// console.log(coins)
// var html = ""
var blip_html = ""
var blop_html = ""


on_btns.forEach(function (btn){
	btn.addEventListener('click', function(e){
		const btnClasses = e.currentTarget.classList //gets classes of clicked button
		
		// pop-ups
		if(btnClasses.contains('blip_decrease')&& blips ==0) {
			window.alert("You've got no Blips!")
		}
		if(btnClasses.contains('blop_decrease')&& blops ==0) {
			window.alert("You've got no Blops!")
		}
		if(btnClasses.contains('blip_increase')&& coins <2) {
			window.alert("Not enough coins :(")
		}
		if(btnClasses.contains('blop_increase')&& coins ==0) {
			window.alert("Not enough coins :(")
		}


		

		if(btnClasses.contains('blip_increase') && coins>=2) {
			blips++;
			coins=coins-2;
			blip_html += "<span><img src='images/blip.png' width='60' height='60'></span>"
			on_blip_container.innerHTML = blip_html+blop_html
		}
		
		else if(btnClasses.contains('blop_increase') && coins>0) {
			blops++;
			coins--;
			blop_html += "<span><img src='images/blop.png' width='60' height='60'></span>"
			on_blip_container.innerHTML = blip_html + blop_html
		}
		else if(btnClasses.contains('blip_decrease')&& blips >0) {
			blips--;
			coins= coins+2
			// html=""
			blip_html = ""
			for (let i = 1; i <=blips; i++) {
				blip_html += "<span><img src='images/blip.png' width='60' height='60'></span>"
			};
			on_blip_container.innerHTML = blip_html + blop_html
		}
		else if(btnClasses.contains('blop_decrease')&& blops >0) {
			blops--;
			coins++
			blop_html = ""
			for (let i = 1; i <=blops; i++) {
				blop_html += "<span><img src='images/blop.png' width='60' height='60'></span>"
			};
			on_blip_container.innerHTML = blip_html +blop_html
		}
		else if(btnClasses.contains('reset')) {
			blops = 0;
			blips = 0;
			coins = 10;
			// html=""
			blip_html = ""
			blop_html = ""
			on_blip_container.innerHTML = ""
		};

		// if (count>0) { value.style.color = 'green'};
		// if (count<0) { value.style.color = 'red'};
		// if (count==0) {value.style.color = 'black'};
		

		
		on_blips.textContent = blips;
		on_blops.textContent = blops;
		on_coins.textContent = coins;
	});
});