function sumar() {
  var number1 = document.getElementById('number1').value
  var number2 = document.getElementById('number2').value

  var sum = parseInt(number1) + parseInt(number2)

  var result = document.getElementById('result')

  result.innerHTML = sum
}

function resta() {
  var number1 = document.getElementById('number1').value
  var number2 = document.getElementById('number2').value

  var resta = parseInt(number1) - parseInt(number2)

  var result = document.getElementById('result')

  result.innerHTML = resta
}

function multiplica() {
  var number1 = document.getElementById('number1').value
  var number2 = document.getElementById('number2').value

  var multiplica = parseInt(number1) * parseInt(number2)

  var result = document.getElementById('result')

  result.innerHTML = multiplica
}


function divide() {
  var number1 = document.getElementById('number1').value
  var number2 = document.getElementById('number2').value

  var divide = parseInt(number1) / parseInt(number2)

  var result = document.getElementById('result')

  result.innerHTML = divide
}




 
