const search= ()=>{
    const searchbox = document.getElementById("searchbox").value.toUpperCase();
    const product= document.querySelectorAll(".product");
    
    for(var i=0; i<product.length; i++){
        let box= product[i].getElementsByTagName("h2")[0];

        if(box){
            let match= box.innerHTML || box.textContent

            if(match.toUpperCase().indexOf(searchbox)> -1){
                product[i].style.display = "";
            }else{
                product[i].style.display= "none";
            }
        }
        
    }
}