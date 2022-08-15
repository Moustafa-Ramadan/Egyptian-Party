let width =$(".nav").width();
$(".side-nav").css("left",-width)
$(".open-nav").click(function () {
    if($(".side-nav").css("left") == "0px"){
        $(".side-nav").animate({left: -width}, 1000) 
        $(".open-nav").html(` <span >☰ open</span> `);
        
    }
    else
    {
        $(".side-nav").animate({left: "0px"}, 1000)
        $(".open-nav").text(`close`);
    }
});

$(".close").click(function () {
    $(".side-nav").animate({left: -width}, 1000);
    $(".open-nav").html(` <span >☰ open</span> `);
    
});




$(".open-disc1").click(function () {
    $(".disc1").slideToggle(500);
   
});
$(".open-disc2").click(function () {
    $(".disc2").slideToggle(500);
   
});
$(".open-disc3").click(function () {
    $(".disc3").slideToggle(500);
   
});
$(".open-disc4").click(function () {
    $(".disc4").slideToggle(500);
   
});




let countDownDate = new Date("Jan 30, 2023 15:37:25").getTime();

let countTime=setInterval(function () {
    let timeNow=new Date().getTime();
  let distance=countDownDate-timeNow;
 
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = `<h3>-${days} D</h3>`
  document.getElementById("hours").innerHTML = `<h3>${hours} H</h3>`
  document.getElementById("minutes").innerHTML = `<h3>${minutes} M</h3>`
  document.getElementById("seconds").innerHTML = `<h3>${seconds} S</h3>`

  if (distance < 0) {
    clearInterval(countTime);
    
    document.getElementById("days").innerHTML = `<h3>EXPIRED</h3>`
    document.getElementById("hours").innerHTML = `<h3>EXPIRED</h3>`
    document.getElementById("minutes").innerHTML = `<h3>EXPIRED</h3>`
    document.getElementById("seconds").innerHTML = `<h3>EXPIRED</h3>`
  
  }
}, 1000);


let textArea=document.getElementById("textArea");
let char=document.getElementById("char");
const maxNumOfChars=100;

const countCharacters = () => {
    let numOfEnteredChars = textArea.value.length;
    let counter = maxNumOfChars - numOfEnteredChars;
    char.textContent = counter + "/100";
    if (counter <= 0) {
        char.textContent="your available character finished";
      
   }
};
textArea.addEventListener("input", countCharacters);




