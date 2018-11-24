
document.addEventListener("DOMContentLoaded", function(event) {
    function textNodesUnder(el){
  var n, a = [], walk = document.createTreeWalker(el,NodeFilter.SHOW_TEXT,null,false);
  while(n = walk.nextNode()) a.push(n);
  return a;
}

textNodesUnder(document).map(x=>{
  if(!x.childNodes.length && x.textContent.match(/Erna/)){
    x.textContent = "Feit purkehore"
  }
});
});
document.addEventListener(
