const characters='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
let getNumber = document.getElementById("numberOfCharacters")
let getPassList1 = document.querySelector("#passList1")
let getPassList2 = document.querySelector("#passList2")
let getPassList3 = document.querySelector("#passList3")
let getPassList4 = document.querySelector("#passList4")
let getErrorPar = document.querySelector("#errorPar")

function generateRandomPassword(){
    let constructor =""

    for( let i = 0; i < parseInt(getNumber.value); i++ )
    {
         constructor+=characters.charAt(Math.floor(Math.random() * characters.length));
       
    }
    
    return constructor
}



function renderPassword(){
    
    {
        
        getErrorPar.innerText = " "
        let aux = [" "," "," "," "]
        
        for ( let i = 0 ; i < 4 ; i++){
            aux[i] = generateRandomPassword()
            
        }
        getPassList1.textContent = aux[0]
        getPassList2.textContent = aux[1]
        getPassList3.textContent = aux[2]
        getPassList4.textContent = aux[3]
        
}
}