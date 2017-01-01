

var blockElem = document.createElement('div');
var btn = document.createElement('button');
var img = document.createElement('img');
var span = document.createElement('span');
var br = document.createElement('br');


blockElem.className = "container";
btn.innerHTML = 'flip coin';
btn.id = 'flipCoin';
span.id = 'side';


var heads = 2;
var tails = 1;
var Status = 'heads';

document.getElementsByTagName('body')[0].appendChild(blockElem).appendChild(img);
document.getElementsByTagName('body')[0].appendChild(blockElem).appendChild(br);
document.getElementsByTagName('body')[0].appendChild(blockElem).appendChild(btn);
document.getElementsByTagName('body')[0].appendChild(blockElem).appendChild(br);
document.getElementsByTagName('body')[0].appendChild(blockElem).appendChild(span);




btn.addEventListener('click', function(){
  var sideText = document.getElementById('side');
	var randomNum = Math.ceil(Math.random()*2);
  if(randomNum === heads){
    sideText.innerHTML = 'heads';
    img.src = 'assets/heads.png';
    // alert('heads');
  }else{
    sideText.innerHTML = 'tails';
    img.src = 'assets/tails.png';
    // alert('tails');
  }

	console.log(randomNum);
	return randomNum
})






