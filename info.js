var friendList = [];

function addFriend(pid, pnit, pname, pcountry, pmodel, peart, pcolor, pplaca, pbirthday, pemail){

var newfriend ={
id : pid,
nit : pnit, 
name : pname,
country : pcountry,
model: pmodel,
año: peart,
color: pcolor,
placa: pplaca,
birthday : pbirthday,
email : pemail 
    };

    console.log(newfriend);
    friendList.push(newfriend);
    localStorageFriendList(friendList);
}

function getFriendList(){
    var StoredList = localStorage.getItem('localFriendList');
    if (StoredList == null){
        friendList= [];
}else{
        friendList = JSON.parse(StoredList);
    }
    return friendList;
}

function localStorageFriendList(plist){

    localStorage.setItem('localFriendList', JSON.stringify(plist));



}

