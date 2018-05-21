$(document).ready(function() {

    function GameChar (name, image,healthPoints,attackPower,counterAttack){
      this.name = name;
      this.image = image;
      this.healthPoints = healthPoints;
      this.attackPower = attackPower;
      this.counterAttack = counterAttack;
    
    }

    var obi = new GameChar("obi","../unit-4-game/assets/images/Obi_Wan-1.jpg",100,10,5);
    var luke = new GameChar("luke", "../unit-4-game/assets/images/luke.jpg",200,20,10);
    var darth = new GameChar("darth", "../unit-4-game/assets/images/Darth_Sidious.jpg",50,5,10);
    var maul = new GameChar("maul", "../unit-4-game/assets/images/darthmaul.jpg",100,10,10);

  

    //console.log(obi.name);
    //console.log(obi.image);
    //console.log(typeof(obi));

    let characterArray = ["obi","luke","darth","maul"];
    let character ="";

    


    $(".characters").on("click", function(){

        
        character = $(this).attr("id");

     
        let characterImg = $(this).attr("src");
        
        
        let index = characterArray.indexOf(character);

        characterArray.splice(index,1);

        //console.log(character, characterImg );
        //console.log(characterArray);

        yourCharacter(character, characterImg);
        enemyCharacters();

    });

    function yourCharacter(character, characterImg){

        var newImg = $("<img>");

        newImg.attr("src", characterImg);
        newImg.attr("id", character);
        newImg.attr("class", "charStyle");
        $("#yourCharArea").append(newImg);
        $(".allChars").remove();


    }

        let charHealthPoints = 0;
        let charAttackPower = 0;
        let defHealthPoints = 0;
        let defCounterAttack = 0;
        let attackStart = false;
        let wins = 0;


    function enemyCharacters(){

       if (character === "obi"){
        var newImg = $("<img>");

        newImg.attr("src", luke.image);
        newImg.attr("id", luke.name);
        newImg.attr("class", "charStyle enemyChar");
        //newImg.attr("class", "enemyChar");
        $("#enemyAvailArea").append(newImg);

        var newImg1 = $("<img>");

        newImg1.attr("src", darth.image);
        newImg1.attr("id", darth.name);
        newImg1.attr("class", "charStyle enemyChar");
       //newImg.attr("class", "enemyChar");
        $("#enemyAvailArea").append(newImg1);

        var newImg2 = $("<img>");

        newImg2.attr("src", maul.image);
        newImg2.attr("id", maul.name);
        newImg2.attr("class", "charStyle enemyChar");
        //newImg.attr("class", "enemyChar");
        $("#enemyAvailArea").append(newImg2);


       } else if (character === "luke"){

        var newImg = $("<img>");

        newImg.attr("src", obi.image);
        newImg.attr("id", obi.name);
        newImg.attr("class", "charStyle enemyChar");
        //newImg.attr("class", "enemyChar");
        $("#enemyAvailArea").append(newImg);

        var newImg1 = $("<img>");

        newImg1.attr("src", darth.image);
        newImg1.attr("id", darth.name);
        newImg1.attr("class", "charStyle enemyChar");
        //newImg.attr("class", "enemyChar");
        $("#enemyAvailArea").append(newImg1);

        var newImg2 = $("<img>");

        newImg2.attr("src", maul.image);
        newImg2.attr("id", maul.name);
        newImg2.attr("class", "charStyle enemyChar");
        //newImg.attr("class", "enemyChar");
        $("#enemyAvailArea").append(newImg2);

       } else if (character === "darth"){
        var newImg = $("<img>");

        newImg.attr("src", obi.image);
        newImg.attr("id", obi.name);
        newImg.attr("class", "charStyle enemyChar");
        //newImg.attr("class", "enemyChar");
        $("#enemyAvailArea").append(newImg);

        var newImg1 = $("<img>");

        newImg1.attr("src", luke.image);
        newImg1.attr("id", luke.name);
        newImg1.attr("class", "charStyle enemyChar");
        //newImg.attr("class", "enemyChar");
        $("#enemyAvailArea").append(newImg1);

        var newImg2 = $("<img>");

        newImg2.attr("src", maul.image);
        newImg2.attr("id", maul.name);
        newImg2.attr("class", "charStyle enemyChar");
        //newImg.attr("class", "enemyChar");
        $("#enemyAvailArea").append(newImg2);


       } else if (character === "maul"){

        var newImg = $("<img>");

        newImg.attr("src", obi.image);
        newImg.attr("id", obi.name);
        newImg.attr("class", "charStyle enemyChar");
        //newImg.attr("class", "enemyChar");
        $("#enemyAvailArea").append(newImg);

        var newImg1 = $("<img>");

        newImg1.attr("src", luke.image);
        newImg1.attr("id", luke.name);
        newImg1.attr("class", "charStyle enemyChar");
        //newImg.attr("class", "enemyChar");
        $("#enemyAvailArea").append(newImg1);

        var newImg2 = $("<img>");

        newImg2.attr("src", darth.image);
        newImg2.attr("id", darth.name);
        newImg2.attr("class", "charStyle enemyChar");
        //newImg.attr("class", "enemyChar");
        $("#enemyAvailArea").append(newImg2);


       }
     
       
    }

    let defenderSelect = false;
    let defender ="";

    $(document).on("click",".enemyChar", function() {
        defender = ($(this).attr("id"));
       
        if (defenderSelect === false){
           if (defender === "obi"){
             $( "#obi" ).remove();
             defenderSelect = true; 

             var newImg = $("<img>");

        newImg.attr("src", obi.image);
        newImg.attr("id", obi.name);
        newImg.attr("class", "charStyle defender");
        $("#defenderArea").append(newImg);

           }
        
        else if (defender === "luke"){
           $("#luke").remove(); 
           defenderSelect = true; 
           
           var newImg = $("<img>");

        newImg.attr("src", luke.image);
        newImg.attr("id", luke.name);
        newImg.attr("class", "charStyle defender");
        $("#defenderArea").append(newImg);
        }
        
        else if (defender === "darth"){
           $("#darth").remove();
           defenderSelect = true;

           var newImg = $("<img>");

        newImg.attr("src", darth.image);
        newImg.attr("id", darth.name);
        newImg.attr("class", "charStyle defender");
        $("#defenderArea").append(newImg);
        }
        
        else if (defender === "maul"){
           $("#maul").remove();
           defenderSelect = true;

           var newImg = $("<img>");

        newImg.attr("src", maul.image);
        newImg.attr("id", maul.name);
        newImg.attr("class", "charStyle defender");
        $("#defenderArea").append(newImg);
        }
             
        }
        

    });

    $(document).on("click","#attackbtn", function() {

        attack();

 
    });

    function attack (){

      if (attackStart === false) {
       if (character === "obi"){
             charHealthPoints = obi.healthPoints;
             charAttackPower = obi.attackPower;
             attackStart = true;
        } else if (character === "luke") {
             charHealthPoints = luke.healthPoints;
             charAttackPower = luke.attackPower;
             attackStart = true;
        } else if (character === "darth"){
             charHealthPoints = darth.healthPoints;
             charAttackPower = darth.attackPower;
             attackStart = true;
        } else if (character === "maul"){
             charHealthPoints = maul.healthPoints;
             charAttackPower = maul.attackPower;
             attackStart = true;
        }

        if (defender === "obi"){
             defHealthPoints = obi.healthPoints;
             defCounterAttack = obi.counterAttack;
             attackStart = true;
        } else if (defender === "luke") {
             defHealthPoints = luke.healthPoints;
             defCounterAttack = luke.counterAttack;
             attackStart = true;
        } else if (defender === "darth"){
             defHealthPoints = darth.healthPoints;
             defCounterAttack = darth.counterAttack;
             attackStart = true;
        } else if (defender === "maul"){
             defHealthPoints = maul.healthPoints;
             defCounterAttack = darth.counterAttack;
             attackStart = true;
        }

   }
        

      if (charHealthPoints > 0 && defHealthPoints > 0){
       charHealthPoints = charHealthPoints - defCounterAttack;
        defHealthPoints = defHealthPoints - charAttackPower;
        charAttackPower += charAttackPower;
        console.log(character+"--> "+"Health Points:"+" "+charHealthPoints);
        console.log(defender+"--> "+"Health Points:"+" "+defHealthPoints);
     }  else if (charHealthPoints <= 0){
       console.log(defender+" "+"has won");
       alert("GAME OVER");
     }

     if (defHealthPoints < 0) {
         console.log(character+" "+"has won");
         defenderSelect = false;
         attackStart = false;
         wins += 1;
         
             if (defender === "obi")
             $("#obi").remove();
             else if(defender === "luke")
             $("#luke").remove();
             else if(defender === "darth")
             $("#darth").remove();
             else if (defender === "maul")
             $("#maul").remove();
     }

     if (wins === 3){
         alert("AWESOME! YOU HAVE CONQURED ALL!!")
     }


     }

});


