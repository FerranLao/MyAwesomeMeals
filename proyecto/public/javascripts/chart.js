const nodes=document.querySelectorAll(".chart")
console.log(nodes)
for(let i = 0;i<nodes.length;i++){
    var coincidence = 1;
    for(let y = i+1;y<nodes.length;y++){
            if(nodes[i].querySelector("p").innerText==nodes[y].querySelector("p").innerText){
            coincidence++;
            nodes[y].innerHTML=""
            nodes[i].querySelector("span").innerText= coincidence+" x "
        }
    }
}