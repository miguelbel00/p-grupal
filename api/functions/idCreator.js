

 function idCreator (change = false){
    let code = ""
    const leterCode = ["A","B","C","D","E","F","G","H","I","J","K","X","Y","Z","W","R"]
            
    for (let x = 0; x < 4; x++){
      for(let i =0; i < 4; i++){
      if(change){
        code += Math.round(Math.random()* 9)
      }else{code += leterCode[Math.round(Math.random()* (leterCode.length-1))]}
        }
      change = !change 
      code.length == 19 ? code : code+= "-"   
    }
   
    return code
}

module.exports = idCreator