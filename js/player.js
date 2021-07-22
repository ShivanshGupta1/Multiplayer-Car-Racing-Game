class Player {
    constructor() {
        this.index = null;
        this.name = null;
        this.distance = 0;
        this.rank = 0
    }
    getCount(){
        database.ref("playerCount").on("value",(data)=>{
            playerCount = data.val();
        })
    }
    getPlayerInfo(){
        database.ref("players").on("value",(data)=>{
            allPlayers = data.val()
        })
        
  
    }
    updateCount(count){
        database.ref("/").update({"playerCount":count})
    }
    update(){
        database.ref("players/player"+player.index).set({"name":this.name,"distance":this.distance})
    }
    updateRank(){
       this.rank+=1
        database.ref("/").update({"carsAtEnd":this.rank})
    }
    readRank(){
        database.ref("carsAtEnd").on("value",(value)=>{
            this.rank = value.val();
        })
    }
}