const celciusInput=document.querySelector("#celcius>input");
const fahrenheitInput=document.querySelector("#fahrenheit>input");
const kelvintInput=document.querySelector("#kelvin>input");

console.log(celciusInput);

function celciusToFandK(){
  console.log(celciusInput.value);
  const cTemp=parseFloat(celciusInput.value);
  const fTemp=(cTemp*(9/5)+32).toFixed(2);
  const kTemp=cTemp+273.15;
  fahrenheitInput.value=fTemp;
  kelvintInput.value=kTemp;
}

function fahrenheitToCandK(){
  const fTemp=parseFloat(fahrenheitInput.value);
  const cTemp=(fTemp-32)*(5/9).toFixed(2);
  const kTemp=(fTemp+459.67)*(5/9).toFixed(2);
  celciusInput.value=cTemp;
  kelvintInput.value=kTemp;
}

function kelvinToCandF(){
  const kTemp=parseFloat(kelvintInput.value);
  const cTemp=(kTemp-273.15).toFixed(2);
  const fTemp=(9/5)*(kTemp-273)+32;
  celciusInput.value=cTemp;
  fahrenheitInput.value=fTemp;
}

celciusInput.addEventListener("input",celciusToFandK);
fahrenheitInput.addEventListener("input",fahrenheitToCandK);
kelvintInput.addEventListener("input",kelvinToCandF);
