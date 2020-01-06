const basicOrderClassTag = "ui segment sc-dVhcbM sc-cMhqgX iQRTMv";

setTimeout(() => {    
    if(!document.getElementById('IcyYaoiButtonA')){
    
    var contentPane = document.getElementsByClassName("main-content")[0];
    var button = document.createElement("button");
    button.id = 'IcyYaoiButtonA';
    button.innerHTML = "Collect order information";
    button.className = "ui small primary button sc-bZQynM fbmvzh";
    contentPane.insertBefore(button, contentPane.firstChild);
    
    button.onclick = function(){
    var basicCustomerInfo = document.getElementsByClassName("column sc-fBuWsC eeihxG")[1].innerHTML.split("<br>");    
    window.customerName = basicCustomerInfo[0];
    console.log(customerName);
    
    window.customerEmail = basicCustomerInfo[1];
    console.log(customerEmail);
    
    
    var basicOrderDate = document.getElementsByClassName("sc-TOsTZ kjYrri order-date")[0].innerHTML.split("/");
    window.orderDate = basicOrderDate[2] + "-" + basicOrderDate[0] + "-" + basicOrderDate[1];
    console.log(orderDate);

    var basicNeedByDate = document.getElementsByClassName("sc-TOsTZ kjYrri need-by-date")[0].innerHTML.split("/");
    window.needByDate = basicNeedByDate[2] + "-" + basicNeedByDate[0] + "-" + basicNeedByDate[1];
    console.log(needByDate);
    
    var basicOrderInfo = document.getElementsByClassName(basicOrderClassTag)[0];
    window.orderId = basicOrderInfo.getElementsByClassName("id")[0].innerHTML.replace("ID: ", "");
    console.log(orderId);
    window.projectName = basicOrderInfo.getElementsByClassName("name")[0].innerHTML.replace("Project Name: ", "");
    console.log(projectName);
    window.projectCode = basicOrderInfo.getElementsByClassName("code")[0].innerHTML.replace("Project Code: ", "");
    console.log(projectCode);
    
    
    chrome.runtime.sendMessage({greeting: "projectCode?@?" + customerName + "?@?" + customerEmail + "?@?" + orderDate + "?@?" + needByDate + "?@?" + orderId + "?@?" + projectName + "?@?" + projectCode});
    
    

    chrome.runtime.sendMessage({greeting: "StTab"});
    };
    }
    
}, 1000);