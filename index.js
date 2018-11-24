
document.addEventListener("DOMContentLoaded", function (event) {
  function textNodesUnder (el) {
    let n;
    const a = [];
    const walk = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, null, false);
    whil e(n = walk.nextNode()) {
        a.push(n);
    }
    return a;
  }

  textNodesUnder(document).map(x => {
    if(!x.childNodes.length && x.textContent.match(/Erna/)){
      x.textContent = "Fjerna"
    }
  });
});
