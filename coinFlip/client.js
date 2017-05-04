

var blockNode = document.createElement('div'),
    blockChild1 = document.createElement('div'),
    blockChild2 = document.createElement('div'),
    btn = document.createElement('button'),
    img = document.createElement('img'),
    textBlock = document.createElement('p');


blockNode.id = "holder";
btn.innerHTML = 'flip coin';
btn.id = 'flipCoin';
textBlock.id = 'side';


var HEADS = 1,
    TAILS = 0,
    Status = 'heads';


document.body.insertBefore(blockNode, document.body.firstChild);
document.body.firstChild.appendChild(blockChild1);
document.body.firstChild.appendChild(blockChild2);
blockChild1.appendChild(img);
blockChild2.appendChild(textBlock);
blockChild2.appendChild(btn);





btn.addEventListener('click', function(){
  var sideText = document.getElementById('side');
	var randomNum = Math.floor(Math.random()*2);
  if(randomNum === HEADS){
    textBlock.innerHTML = 'heads';
    img.src = 'assets/heads.png';
    // alert('heads');
  }else{
    textBlock.innerHTML = 'tails';
    img.src = 'assets/tails.png';
    // alert('tails');
  }

	console.log(randomNum);
	return randomNum
})






