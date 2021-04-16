class Game {
    constructor(){}

    getState(){ //read the data
        var gameStateRef = database.ref('gameState')
        gameStateRef.on("value",function(data){
            gameState = data.val();
        })
    }

    update(state){ // updateing the gameState
        database.ref('/').update({
            gameState:state
        })
    }

    start(){ //call player class when there is a new player
        if(gameState === 0){
            player = new Player();
            player.getCount();
            form = new Form();
            form.display();
        } 


    }
}