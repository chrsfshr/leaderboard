Meteor.publish('thePlayers', function(){
    var currentUserId = this.userId;
    return playersList.find({createdBy: currentUserId});
  });

Meteor.methods({
  'insertPlayerData': function(playerNameVar){
      var currentUserId = Meteor.userId();
      playersList.insert({
        name: playerNameVar, 
        score: 0,
        createdBy: currentUserId
      });
  },
  'removePlayerData': function(selectedPlayer){
      playersList.remove(selectedPlayer);
  }, 
  'modifyPlayerScore': function(selectedPlayer, scoreValue){
      playersList.update(selectedPlayer, {$inc: {score: scoreValue} });
  }
});