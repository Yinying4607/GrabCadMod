//var numberOfOrders = document.getElementsByClassName("sc-gisBJw kDlVKO")[0].children.length;
var orderStorage = [];

setTimeout(() => {  

var dropdown = document.getElementsByClassName("middle aligned ten wide column sc-fBuWsC eeihxG")[0];
if(dropdown.children.length == 1){
	var input = document.createElement("input");
	var div = document.createElement("div");
	div.className = "ui input sc-htpNat hJAiPw";
	input.type = "text";
	input.placeholder = "Text filter";
	input.addEventListener('input', function(){
		filterBasedOnText(this.value);
		setTimeout(filterBasedOnText(this.value), 20);
	});
	div.appendChild(input);
	dropdown.appendChild(div);
}

function filterBasedOnText(text){
	var orderBox = document.getElementsByClassName("sc-gisBJw kDlVKO")[0];
	var orders = orderBox.children;
		
	if(text == ""){
		while (orderBox.firstChild) {
			  myNode.removeChild(myNode.firstChild);
		}
		for(var j = 0; j < orderStorage.length; j++){
				orderBox.appendChild(orderStorage[j]);
				orderStorage.slice(orderStorage.indexOf(orderStorage[j]), 1);
		}
		
		
	}else{
	

	
		for(var i = 0; i < orders.length; i++){
			var name = orders[i].children[1].innerHTML;
			
			if(name.toLowerCase().includes(text.toLowerCase())){
			}else{
				orderBox.removeChild(orders[i]); 
				orderStorage.push(orders[i]);
	
			}
		}
		
		for(var j = 0; j < orderStorage.length; j++){
			var name1 = orderStorage[j].children[1].innerHTML;
			
			if(name1.toLowerCase().includes(text.toLowerCase())){
				orderBox.appendChild(orderStorage[j]);
				orderStorage.slice(orderStorage.indexOf(orderStorage[j]), 1);
			}
		}
	}
	
	for(var i = 0; i < orders.length; i++){
		console.log(orders[i].children[1].innerHTML + ": " + orders[i].children[1].innerHTML.toLowerCase().includes(text.toLowerCase()));
	}
	
	console.log("--------------------------------");

}
 }, 3000);