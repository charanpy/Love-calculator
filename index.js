
var count=0;
var sound=new Audio("crash.mp3");
$(".primary").on("click",function(){
    count++;
    if(count==3)
    {
        location.reload(true);
    }
    else{
        
    
    var x = document.forms["my"]["val"].value;
    var y = document.forms["my"]["valu"].value;
  if (x == "" || y== "") {
     $("small").css("visibility","visible");
    
}
    
   else if(x[0]=="c"){
       sound.play();
        var b=(Math.floor(Math.random()*11)+90)+"%";
      $(".pa").html(b);
      console.log( $("small").css("visibility","hidden"))
      $("input").css("background-color","white");
}

    else{
       sound.play();
	 
        var a=(Math.floor(Math.random()*41)+60)+"%";
        $(".pa").html(a);
        console.log( $("small").css("visibility","hidden"));
        $("input").css("background-color","white");

}}

       

});
$(".text").css("visibility","hidden");

var a;
if(typeof(a)=="undefined"){
    console.log("true");
}

function  d(){
	location.reload();
	}
    
