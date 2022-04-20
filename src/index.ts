//Calcular el Promedio de 10 Notas

let nota: number;
let suma: number = 0;
let promedio: number;

for (let i: number = 1; i <= 10; i++) {
  nota = Number(prompt("Ingresar las 10 notas", ""));
  suma = suma + nota;
}

promedio = suma / 10;
console.log(`El promedio es ${promedio}`);
