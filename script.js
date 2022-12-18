let buyList = document.getElementById('buyList')
let btnCreate = document.getElementById('btnCreate')
let inputItem = document.getElementById('inputItem')

let flag = true

let btnClick = () => {
    let newBuy = inputItem.value
    if(newBuy.length != 0){
        if(flag){
            let backgroundblock = "grey"
        } else {
            let backgroundblock = "black"

        }
        buyList.innerHTML += `<li>${newBuy}</li>`
        inputItem.value = ""
        flag = !flag
}
        else{
            alert('Напиши що купити!!!')
        }
    }        

btnCreate.onclick = btnClick

let str = "Hello"
let key = "lo"

console.log(str.startsWith(key))
console.log(str.endsWith(key))