let button = document.getElementById("submit_bt")
let resetBt = document.getElementById('reset_bt')
let textField = document.getElementById('text_bar')
let resList = document.getElementById('task_list')
button.addEventListener('click', clickFun)
resetBt.addEventListener('click', () => {
    resList.innerHTML = ''
})

function clickFun(){
    let tfVal = textField.value
    if (tfVal) {
        let li = document.createElement('li')
        li.innerHTML = tfVal;
        resList.appendChild(li)
        console.log(textField.value)
        textField.value = ''
    }
}
