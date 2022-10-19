document.querySelector('#btnSave').addEventListener('click', saveFriend);
drawFriendsTable();


function saveFriend(){
    var sId = document.querySelector('#txtId').value,
    sNi = document.querySelector('#txtni').value,
    sName = document.querySelector('#txtName').value,
    sCountry = document.querySelector('#txtCountry').value,
    sModel = document.querySelector('#txtMol').value,
    sYear = document.querySelector('#yeart').value,
    sColor = document.querySelector('#colors').value,
    sPlaca = document.querySelector('#placas').value,
    sBirthday = document.querySelector('#txtBirthday').value,
    sEmail = document.querySelector('#txtEmail').value;

    addFriend(sId, sNi, sName, sCountry, sModel, sYear, sColor, sPlaca, sBirthday, sEmail);
    drawFriendsTable();
}


function drawFriendsTable(){
    var list = getFriendList(),
    tbody = document.querySelector('#friendstable tbody');

    tbody.innerHTML = '';

for(var i = 0 ; i < list.length; i++){

var row = tbody.insertRow(i),
idCell = row.insertCell(0),
nitCell =row.insertCell(1),
nameCell =row.insertCell(2),
countryCell =row.insertCell(3),
modelCell =row.insertCell(4),
yearCell =row.insertCell(5),
colorCell =row.insertCell(6),
placaCell =row.insertCell(7),
birthdayCell =row.insertCell(8),
emailCell =row.insertCell(9),

selctCell = row.insertCell(10);


idCell.innerHTML = list[i].id;
nitCell.innerHTML = list[i].nit;
nameCell.innerHTML = list[i].name;
countryCell.innerHTML = list[i].country;
modelCell.innerHTML = list[i].model;
yearCell.innerHTML = list[i].year;
colorCell.innerHTML = list[i].color;
placaCell.innerHTML = list[i].placa;
birthdayCell.innerHTML = list[i].birthday;
emailCell.innerHTML = list[i].email;


var inputSelect = document.createElement('input');
inputSelect.type = 'radio';
inputSelect.value = list[i].id
selctCell.appendChild(inputSelect);


tbody.appendChild(row);

    }

}