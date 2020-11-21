const inputValue = document.querySelector('.account')
const resultValue = document.querySelector('.result')


const input = value => {
    inputValue.value = inputValue.value + value
}

const result = () => {
    if (eval(inputValue.value) == undefined || eval(inputValue.value) == Infinity){
        resultValue.value = '0.00'
        inputValue.value = '0.00'
    }

    resultValue.value = eval(inputValue.value)
    inputValue.value = eval(inputValue.value)
}

const remove = () => {
    inputValue.value = inputValue.value.substring(0, inputValue.value.length - 1)
}

const reset = () => {
    resultValue.value = ''
    inputValue.value = ''
}