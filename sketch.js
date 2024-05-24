function setup() {
    createCanvas(400, 400);
    let palavras=["Respeito","obediência","educação"];
   palavra= random (palavras);
    
  
  }
  
  function inicializaCores(){
  background("white");
    textSize(64)
    fill("black")
    textAlign(CENTER, CENTER)
  
  
  }  
    
    function draw() {
  inicializaCores();
   
  let máximo=width;    
      
      
      
    let maximo= width;
    let minimo= 0;
    let quantidade= map (mouseX,0,width,1,palavra.length);
    let parcial = palavra.substring(0,quantidade);
    text (parcial,200,200);
    
    
    
    //if (mouseX<50) {
     // let palavra= "R";
     // text (palavra,200,200);
      
    //}else{
     // let palavra= "respeito"
     // text (palavra,200,200);
      
    //}
    
  }