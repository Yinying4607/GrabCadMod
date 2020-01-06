setTimeout(() => {
    if(!document.getElementById('IcyYaoiButtonB')){
        var contentPane = document.getElementsByClassName("freebirdFormviewerViewItemList")[0];
        var button = document.createElement("button");
        button.id = 'IcyYaoiButtonB';
        button.innerHTML = "Insert order information";
        button.className = "quantumWizButtonEl quantumWizButtonPaperbuttonEl quantumWizButtonPaperbuttonFlat quantumWizButtonPaperbuttonDark quantumWizButtonPaperbutton2El2 freebirdFormviewerViewNavigationSubmitButton isUndragged";
        contentPane.insertBefore(button, contentPane.firstChild);
    
    console.log(orderInfo[0]);
    button.onclick = function(){
    var nameInput = document.getElementsByClassName("quantumWizTextinputPaperinputInputArea")[0];
    nameInput.children[0].value = orderInfo[0];
    nameInput.removeChild(nameInput.children[1]);
    
    var emailInput = document.getElementsByClassName("quantumWizTextinputPaperinputInputArea")[1];
    emailInput.children[0].value = orderInfo[1];
    emailInput.removeChild(emailInput.children[1]);
    
    var orderDateInput = document.getElementsByClassName("quantumWizTextinputPaperinputInputArea")[2];
    orderDateInput.children[0].value = orderInfo[2];
    
    var needByDate = document.getElementsByClassName("quantumWizTextinputPaperinputInputArea")[3];
    needByDate.children[0].value = orderInfo[3];
    
    var orderIdInput = document.getElementsByClassName("quantumWizTextinputPaperinputInputArea")[5];
    orderIdInput.children[0].value = orderInfo[4];
    orderIdInput.removeChild(orderIdInput.children[1]);
    
    var projectNameInput = document.getElementsByClassName("quantumWizTextinputPaperinputInputArea")[6];
    projectNameInput.children[0].value = orderInfo[5];
    projectNameInput.removeChild(projectNameInput.children[1]);
    
    var projectCode = document.getElementsByClassName("quantumWizTextinputPaperinputInputArea")[7];
    projectCode.children[0].value = orderInfo[6];
    projectCode.removeChild(projectCode.children[1]);
    };
    }

    
}, 500);