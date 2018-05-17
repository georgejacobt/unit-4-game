
    $(document).ready(function() {

    $("#charimg1").on("click", function() {
        var newimg = $("<img>")

        newimg.attr("src", "../unit-4-game/assets/images/Obi_Wan-1.jpg");
        newimg.attr("id", "charimg1");
        newimg.attr("style", "margin-left: 10px");
        $("#pic1").append(newimg);
        $( "#figures" ).remove();

        var newimg1 = $("<img>")

        newimg1.attr("src", "../unit-4-game/assets/images/luke.jpg");
        newimg1.attr("id", "charimg2");
        newimg1.attr("style", "margin-left: 10px");
        $("#pic2").append(newimg1);

        var newimg2 = $("<img>")

        newimg2.attr("src", "../unit-4-game/assets/images/Darth_Sidious.jpg");
        newimg2.attr("id", "charimg3");
        newimg2.attr("style", "margin-left: 10px");
        $("#pic2").append(newimg2);


        var newimg3 = $("<img>")

        newimg3.attr("src", "../unit-4-game/assets/images/darthmaul.jpg");
        newimg3.attr("id", "charimg4");
        newimg3.attr("style", "margin-left: 10px");
        $("#pic2").append(newimg3);
      });

     // $("#charimg2").on("click", function() {
       // alert("mee too!");
      //});


      $(document).on("click","#charimg2", function() {

      $( "#charimg2" ).remove();
      //$( "#charimg4" ).remove();

      //alert("this works");

      var newimg2 = $("<img>")

        newimg2.attr("src", "../unit-4-game/assets/images/luke.jpg");
        newimg2.attr("id", "lukefinal");
        newimg2.attr("style", "margin-left: 10px");
        $("#pic3").append(newimg2);

       
      });

      let hpObi = 100;
      let hpLuke = 80;
      let attackObi = 25;
      let attackLuke = 10;
      let roundComplete = false;

      $(document).on("click","#attackbtn", function() {

        //alert("this works");
        if(roundComplete === false){

        hpObi = hpObi - attackLuke;
        hpObi = hpObi + 10;
        console.log("Obi's HP:"+hpObi);
        hpLuke = hpLuke - attackObi;
        hpLuke = hpLuke + 5;
        console.log("Luke's HP:"+hpLuke);

        }
       

        if (hpObi < 0 || hpLuke < 0){
          console.log("Game Over");
        if (hpObi < 0) {
            console.log("Luke Win!");
         //$( "#charimg3" ).remove();
         }
        else if (hpLuke <0) console.log("Obi Wins");
        $( "#lukefinal" ).remove();
        roundComplete = true;  
        }
        

    });

    });
