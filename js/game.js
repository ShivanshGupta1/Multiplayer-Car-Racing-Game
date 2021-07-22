class Game{
    constructor(){

    }
    getState(){
        database.ref("gameState").on("value",(data)=>{
            gameState = data.val();
        })
    }
    update(state){
        database.ref("/").update({"gameState":state});
    }
    start(){
        if(gameState==0){
            player = new Player();
            player.getCount();
            form = new Form();
            form.display();
            
        }
        car1 = createSprite(100,200);
        car1.addImage(carimg1);
        car2 = createSprite(300,200);
        car2.addImage(carimg2);
        car3 = createSprite(500,200);
        car3.addImage(carimg3);
        car4 = createSprite(700,200);
        car4.addImage(carimg4);
        cars = [car1,car2,car3,car4]
    }
    play(){
     background(0);
      player.readRank();
        form.hide();
        player.getPlayerInfo();
        if (width > 767 && width < 907){
            image(trackimg,0,(-windowHeight)*3.95,width,height*4.8);
        }
        else if (width>907){
            image(trackimg,0,(-windowHeight)*3.35,width,height*4.8);
        }
       

        if (allPlayers!=null){
            var index = 0;
            var y = 0; 
            if (width > 767 && width < 907){
                var x = (20/100)*width;
                var fixedX = x
            }
            else if (width>907){
                var x = (25/100)*width;
                var fixedX = x
            }
          
            for (var i in allPlayers){ 
                index+=1;
              
                y = windowHeight-allPlayers[i].distance;
                cars[index-1].y = y;
                cars[index-1].x = x;
                x = (0.7*fixedX) + x;
                
                if ("player"+player.index===i){
            
                    camera.position.x = width/2;
                    if  (width < 907){
                   
                        camera.position.y = (cars[index-1].y)-800;
                    }
                    else if (width>907){
                        camera.position.y = (cars[index-1].y)-200;
                    
                    }
                  
                    cars[index-1].shapeColor = "blue";
                    fill("red")
                    carEllipse = ellipse(cars[player.index-1].x,cars[player.index-1].y+100,70,70)

                }


            }

            
        }
        if (keyIsDown(UP_ARROW)){
            
            player.distance+=10
            player.update()
     
            
        }
   
        if (player.distance>=4600){

            gameState = 2
            player.updateRank();
            player.distance = 0
            cars[player.index-1].destroy()
            clear()
            
        }
        // }
  
        drawSprites();

    }
    end()
    {

       form.hide();
        console.log(gameState)
       var rank = createElement("h1")
       rank.html("Game Over: Your rank was "+player.rank)
       rank.position(width/2 - 100,height/2)
 
} 

}