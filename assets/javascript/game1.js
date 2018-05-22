$(document).ready(function() {

    function GameChar (name, image,healthPoints,attackPower,counterAttack){
      this.name = name;
      this.image = image;
      this.healthPoints = healthPoints;
      this.attackPower = attackPower;
      this.counterAttack = counterAttack;
    
    }

    var obi = new GameChar("obi","../unit-4-game/assets/images/Obi_Wan-1.jpg",100,3,25);
    var luke = new GameChar("luke", "../unit-4-game/assets/images/luke.jpg",250,3,33);
    var darth = new GameChar("darth", "../unit-4-game/assets/images/Darth_Sidious.jpg",100,5,10);
    var maul = new GameChar("maul", "../unit-4-game/assets/images/darthmaul.jpg",100,6,25);



    $("#obiHp").text(obi.healthPoints);
    $("#lukeHp").text(luke.healthPoints);
    $("#darthHp").text(darth.healthPoints);
    $("#maulHp").text(maul.healthPoints);


  

    //console.log(obi.name);
    //console.log(obi.image);
    //console.log(typeof(obi));

    let characterArray = ["obi","luke","darth","maul"];
    let character ="";
    let characterImg ="";
    let charHp ="";

    


    $("#obi").on("click", function(){

        
        character = obi.name;
        characterImg = obi.image;
        charHp = obi.healthPoints;
        yourCharacter(character, characterImg);
        enemyCharacters();

    });


    $("#luke").on("click", function(){

        
        character = luke.name;
        characterImg = luke.image;
        charHp = luke.healthPoints;
        yourCharacter(character, characterImg);
        enemyCharacters();

    });


    $("#darth").on("click", function(){

        
        character = darth.name;
        characterImg = darth.image;
        charHp = darth.healthPoints;
        yourCharacter(character, characterImg);
        enemyCharacters();

    });

    $("#maul").on("click", function(){

        
        character = maul.name;
        characterImg = maul.image;
        charHp = maul.healthPoints;
        yourCharacter(character, characterImg);
        enemyCharacters();

    });

    function yourCharacter(character, characterImg){

        var newImg = $("<img>");
        $(".yourCharacter").css("display", "block");
        $(".yourCharacter").css("display", "block");
        

        newImg.attr("src", characterImg);
        newImg.attr("id", character);
        newImg.attr("class", "rounded");
        newImg.attr("class", "float-left");
        newImg.attr("class", "img-thumbnail");
        newImg.attr("id", "yourCharacterBorder");

        $(".yourCharacter").append(newImg);
        $("#charName").text(character);
        $("#charHp").text(charHp);
        $(".allChars").remove();


    }

        let charHealthPoints = 0;
        let charAttackPower = 0;
        let charAttackPowerBase =0;
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
        $("#enemyAvailArea").append(newImg1)

        




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
        console.log(defender);
       
        if (defenderSelect === false){
           if (defender === "obi"){
             
             $( "#obi" ).remove();
             defenderSelect = true; 

             var newImg = $("<img>");

       
    
        $(".defChar").css("display", "block");
        $(".defChar").css("display", "block");
        
        newImg.attr("class", "rounded");
        newImg.attr("class", "float-left");
        newImg.attr("class", "img-thumbnail");
        newImg.attr("id", "defCharBorder");
        newImg.attr("src", obi.image);
        newImg.attr("id", obi.name);

        $(".defChar").append(newImg);
        $("#DefName").text(obi.name);
        $("#DefHp").text(obi.healthPoints);
    
           }
        
        else if (defender === "luke"){
            $( "#luke" ).remove();
            defenderSelect = true; 

            var newImg = $("<img>");

      
   
       $(".defChar").css("display", "block");
       $(".defChar").css("display", "block");
       
       newImg.attr("class", "rounded");
       newImg.attr("class", "float-left");
       newImg.attr("class", "img-thumbnail");
       newImg.attr("id", "defCharBorder");
        newImg.attr("src", luke.image);
       newImg.attr("id", luke.name);
       $(".defChar").append(newImg);
       $("#DefName").text(luke.name);
       $("#DefHp").text(luke.healthPoints);
        }
        
        else if (defender === "darth"){
            $( "#darth" ).remove();
            defenderSelect = true; 

            var newImg = $("<img>");

      
   
       $(".defChar").css("display", "block");
       $(".defChar").css("display", "block");
       
       newImg.attr("class", "rounded");
       newImg.attr("class", "float-left");
       newImg.attr("class", "img-thumbnail");
       newImg.attr("id", "defCharBorder");
        newImg.attr("src", darth.image);
       newImg.attr("id", darth.name);
       $(".defChar").append(newImg);
       $("#DefName").text(darth.name);
       $("#DefHp").text(darth.healthPoints);
        }
        
        else if (defender === "maul"){
            $( "#maul" ).remove();
            defenderSelect = true; 

            var newImg = $("<img>");

       
   
       $(".defChar").css("display", "block");
       $(".defChar").css("display", "block");
       
       newImg.attr("class", "rounded");
       newImg.attr("class", "float-left");
       newImg.attr("class", "img-thumbnail");
       newImg.attr("id", "defCharBorder");
       newImg.attr("src", maul.image);
       newImg.attr("id", maul.name);
       $(".defChar").append(newImg);
       $("#DefName").text(maul.name);
       $("#DefHp").text(maul.healthPoints);
        }
             
        }
        

    });

    $(document).on("click","#attackbtn", function() {

        attack();

        messages();

     

 
    });

 
    function messages (){
        $("#gameMessage").css("display", "block");
        $("#gameMessage2").css("display", "block");

        $("#charmessage").text(defender);
        $("#charHpMessage").text(charAttackPower);

        $("#defMessage").text(defender);
        $("#defHpMessage").text(defCounterAttack);
    }

    function attack (){

      if (attackStart === false) {
       if (character === "obi"){
             charHealthPoints = obi.healthPoints;
             charAttackPower = obi.attackPower;
             charAttackPowerBase = obi.attackPower;
             attackStart = true;
        } else if (character === "luke") {
             charHealthPoints = luke.healthPoints;
             charAttackPower = luke.attackPower;
             charAttackPowerBase = luke.attackPower;
             attackStart = true;
        } else if (character === "darth"){
             charHealthPoints = darth.healthPoints;
             charAttackPower = darth.attackPower;
             charAttackPowerBase = darth.attackPower;
             attackStart = true;
        } else if (character === "maul"){
             charHealthPoints = maul.healthPoints;
             charAttackPower = maul.attackPower;
             charAttackPowerBase = maul.attackPower;
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
        charAttackPower = charAttackPower + charAttackPowerBase;
        console.log("attack power -->"+" "+charAttackPower);
        $("#charHp").text(charHealthPoints);
        $("#DefHp").text(defHealthPoints);
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
         
             if (defender === "obi"){
               $("#obi").remove();
               $("#gameMessage").remove();
              $("#gameMessage2").remove();
             $("#DefName").text("");  
             $("#DefHp").text("");
             }
             else if(defender === "luke"){
             $("#luke").remove();
             $("#gameMessage").remove();
             $("#gameMessage2").remove();
             $("#DefName").text("");  
             $("#DefHp").text("");
             }
             
             else if(defender === "darth"){
              $("#darth").remove();   
              $("#gameMessage").remove();
              $("#gameMessage2").remove();
              $("#DefName").text("");  
             $("#DefHp").text("");
             }
             
             else if (defender === "maul"){
                 $("#maul").remove();
                 $("#gameMessage").remove();
                 $("#gameMessage2").remove();
                 $("#darth").remove();   
                 $("#DefName").text("");  
                $("#DefHp").text("");
     } 
             }
            

     if (wins === 3){
         alert("AWESOME! YOU HAVE CONQURED ALL!!")
     }


     }

});


