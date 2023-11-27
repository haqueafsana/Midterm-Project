$(".blow").hide();
$(".try").hide();
$(".zombie").hide();
$(".ruin").hide();
$(".chest").hide();
$(".sword").hide();
 $(".move").hide();
 $(".day").hide();
 $(".play").hide();
$(".hit").click(function(){
  $(".blow").show();
   $(".creeper1").text("Oh No! You attacked the creeper without a weapon and died! Try Again! ");
   $(".creeper").hide();
   $(".hit").hide();
   $(".run").hide();
   $(".try").show();
     $(".move").hide();
});

$(".try").click(function(){
    $(".creeper1").text("Welcome to minecraft! A game where you have to build and survive. Oh No! Looks like you got a creeper heading torwards you. Either try and hit it or run away!");
    $(".creeper1").show();
    $(".creeper").show();
    $(".hit").show();
    $(".run").show();
    $(".blow").hide();
    $(".try").hide();
});

$(".run").click(function(){
    $(".ruin1").hide();
   $(".hit").hide();
   $(".try").hide();
   $(".run").hide();
    $(".ruin").show();

    $(".creeper").hide();
    $(".creeper1").text("You stumbled upon a ruined portal and found a chest open it. There could be some items used to survive. Hover over the ruins and see. ");
    });

$(".ruin").hover(function(){
 $(".hit").hide();
   $(".try").hide();
   $(".run").hide();
    $(".ruin").hide();
    $(".sword").show();
    $(".creeper1").text("Looks like you got a weapon now. Great job defending yourself will be much easier now! Let's keep moving forward");
    $(".move").show();
       });

$(".move").click(function(){
    $(".sword").hide();
    $(".zombie").show();
      $(".move").hide();
     $(".creeper1").text("Uh oh looks like you got a heard of zombies heading torward you. Good thing you have an iron sword. Double Click on the zombies to kill them! ");
     });

$(".zombie").dblclick(function(){
     $(".day").show();
    $(".zombie").hide();
    $(".creeper1").text("Good job, you killed all the zombies and made it through the night! Hope you had a fun time surviving!");
     $(".play").show();
   
     });

$(".play").click(function(){
    $(".creeper1").text("Welcome to minecraft! A game where you have to build and survive. Oh No! Looks like you got a creeper heading torwards you. Either try and hit it or run away!");
    $(".creeper1").show();
    $(".creeper").show();
    $(".hit").show();
    $(".run").show();
    $(".blow").hide();
    $(".try").hide();
     $(".day").hide();
     $(".play").hide();
});