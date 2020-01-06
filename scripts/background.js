var customerName;
var customerEmail;
var orderDate;
var needByDate;
var orderId;
var projectName;
var projectCode;

chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {

var defaultChessTitle, defaultChessTabID;

chrome.tabs.onActivated.addListener(function() {
    chrome.tabs.getSelected(null, function(tab) {
	
	if(tab.url.toString().toLowerCase() == 'https://jeffco.shop.grabcad.com/shops/192' ){
		defaultChessTitle = tab.title;
		defaultChessTabID = tab.id;
		console.log('>> Switched to Grab CAD! <<');
		chrome.tabs.executeScript(tab.id,{code:"document.title = 'GrabCAD Shop MOD'"});
		chrome.tabs.executeScript(tab.id,{
          file: 'scripts/contentScript.js'
        });

	}

    if(tab.url.toString() == "https://docs.google.com/forms/d/e/1FAIpQLSeodLhcI0S8sOZ6ukoxLuvpDH-BVGlvI_D3XTz7F01_SpB8eg/formResponse"){
        console.log('var orderInfo = [\"' + customerName + '\", \"' + customerEmail + '\", \"' + orderDate + '\", \"' + needByDate + '\", \"' + orderId + '\", \"' + projectName + '\", \"' + projectCode + '\"];');
        chrome.tabs.executeScript(tab.id, {
            code: 'var orderInfo = [\"' + customerName + '\", \"' + customerEmail + '\", \"' + orderDate + '\", \"' + needByDate + '\", \"' + orderId + '\", \"' + projectName + '\", \"' + projectCode + '\"];'
            }, function() {
                chrome.tabs.executeScript(tab.id, {file: 'scripts/googleFourmsScript.js'});   
            });
    }
    });
});
});

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse){
  if(request.greeting == "StTab"){
    chrome.tabs.create({ url : "https://docs.google.com/forms/d/e/1FAIpQLSeodLhcI0S8sOZ6ukoxLuvpDH-BVGlvI_D3XTz7F01_SpB8eg/viewform"});
  }
  else{
    var parts = request.greeting.split("?@?");
    if(parts[0] == "projectCode"){
        customerName = parts[1];
        customerEmail = parts[2];
        orderDate = parts[3];
        needByDate = parts[4];
        orderId = parts[5];
        projectName = parts[6];
        projectCode = parts[7];
    }
  }
  }  
);

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab){
    if(tab.url.toString().toLowerCase() == 'https://jeffco.shop.grabcad.com/shops/192'){
		defaultChessTitle = tab.title;
		defaultChessTabID = tab.id;
		console.log('>> Switched to chess! <<');
		chrome.tabs.executeScript(tab.id,{code:"document.title = 'GrabCAD Shop MOD'"});
		chrome.tabs.executeScript(tab.id,{
          file: 'scripts/contentScript.js'
        });

	}
    if(tab.url.toString().toLowerCase().startsWith('https://jeffco.shop.grabcad.com/shops/192/orders/'))
        if(tab.url.toString().toLowerCase().split("/orders/").length == 2){
            chrome.tabs.executeScript(tab.id,{
              file: 'scripts/orderPageScript.js'
            });
        }
    if(tab.url.toString() == "https://docs.google.com/forms/d/e/1FAIpQLSeodLhcI0S8sOZ6ukoxLuvpDH-BVGlvI_D3XTz7F01_SpB8eg/formResponse"){
        console.log('var orderInfo = [\"' + customerName + '\", \"' + customerEmail + '\", \"' + orderDate + '\", \"' + needByDate + '\", \"' + orderId + '\", \"' + projectName + '\", \"' + projectCode + '\"];');
        chrome.tabs.executeScript(tab.id, {
            code: 'var orderInfo = [\"' + customerName + '\", \"' + customerEmail + '\", \"' + orderDate + '\", \"' + needByDate + '\", \"' + orderId + '\", \"' + projectName + '\", \"' + projectCode + '\"];'
            }, function() {
                chrome.tabs.executeScript(tab.id, {file: 'scripts/googleFourmsScript.js'});   
            });
    }
});