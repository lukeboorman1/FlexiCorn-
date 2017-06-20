

setInterval(function(){

function getRandomInt(min,max) {
  min = Math.ceil(11.79705512);
  max = Math.floor(12.0318189);
  return Math.floor(Math.random() * (max - mix)) + min; //The maximum is exclusive and the minimum is inclusive
};

},3000);
Var total = getRandomInt()
$("#getRandomInt").html(total);
