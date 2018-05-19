BCCToken.deployed().then(instance => {bcctoken = instance})
BCCRoomBooking.deployed().then(instance => {roomBooking = instance})

var acct0 = web3.eth.accounts[0]
var acct1 = web3.eth.accounts[1]

bcctoken.balanceOf(acct0)
bcctoken.transfer(acct1, 1000)
bcctoken.balanceOf(acct1)

roomBooking.offerRoom("Seabook Room", "Seabook Room's Description", "Large", 99)
roomBooking.getRoomsForBooking()

roomBooking.bookRoom(1, 99, {from: acct1})

bcctoken.balanceOf(acct0)
bcctoken.balanceOf(acct1)


var offerRoomEvent = roomBooking.OfferRoomEvent({fromBlock: 0, toBlock: 'latest'});
offerRoomEvent.watch(function(error, result) {console.log(result.args);});

var bookRoomEvent = roomBooking.BookRoomEvent({fromBlock: 0, toBlock: 'latest'});
bookRoomEvent.watch(function(error, result) {console.log(result.args);});


503038655b377528c2b626dc10faa36c9339b8ea6d9923e325ae99f7b0931170
