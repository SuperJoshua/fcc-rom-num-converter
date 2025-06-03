"use strict"

// I admit that this is quite ugly. The solution given by FCC is much more concise and more pleasant to look at. This, however, "works".

const input_area = document.getElementById("number")
const convert_button = document.getElementById("convert-btn")
const output_area = document.getElementById("output")

const to_roman = function(decimal) {
   let roman = ''
   let m = ''
   let c = ''
   let x = ''
   let i = ''

   if (decimal >= 1000) {
      m = 'M'.repeat(decimal / 1000)
      decimal %= 1000
   }
   roman += m

   if (decimal >= 100) {
      c = 'C'.repeat(decimal / 100)
      decimal %= 100
   }
   if (c.length == 9) {
      c = 'CM'
   } else if (c.length > 4) {
      c = 'D' + c.slice(5)
   } else if (c.length == 4) {
      c = 'CD'
   }
   roman += c
   
   if (decimal >= 10) {
      x = 'X'.repeat(decimal / 10)
      decimal %= 10
   }
   if (x.length == 9) {
      x = 'XC'
   } else if (x.length > 4) {
      x = 'L' + x.slice(5)
   } else if (x.length == 4) {
      x = 'XL'
   }
   roman += x

   if (decimal > 0) {
      i = 'I'.repeat(decimal)
   }
   if (i.length == 9) {
      i = 'IX'
   } else if (i.length > 4) {
      i = 'V' + i.slice(5)
   } else if (i.length == 4) {
      i = 'IV'
   }
   roman += i

   return roman
}

const convert = function() {
   const decimal = parseInt(input_area.value)
   if (!decimal) {
      output_area.innerText = "Please enter a valid number"
   } else if (decimal < 0) {
      output_area.innerText = "Please enter a number greater than or equal to 1"
   } else if (decimal >= 4000) {
      output_area.innerText = "Please enter a number less than or equal to 3999"
   } else {
      output_area.innerText = to_roman(decimal)
   }
}

convert_button.addEventListener('click', convert)
