let button = document.querySelector("button");
button.onclick = function calculate()

{  

   let num1 = document.getElementById("num1").valueAsNumber;
   let num2 = document.getElementById("num2").valueAsNumber;
   let selector = document.getElementById("operator");
   let result = 0
   if (selector.value == "+")
      {
      result = num1 + num2
      document.getElementById("result").innerHTML = result;
      }
   else if (selector.value == "-")
      {
      result = num1 - num2
      document.getElementById("result").innerHTML = result;
      }
   else if (selector.value == "*")
      {
      result = num1 * num2
      document.getElementById("result").innerHTML = result;
      }
   else if (selector.value == "/")
      {
      result = num1 / num2
      document.getElementById("result").innerHTML = result;
      }
}
