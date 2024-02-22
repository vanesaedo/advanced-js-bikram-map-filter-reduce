//RESUELVE LOS EJERCICIOS AQUI

//-:european_castle: :crossed_swords: Bikram
//--Iteraciones :crossed_swords: Pair Programming :crossed_swords:

//---Map: 1,2,3.

let numbers = [4,5,6,7,8,9,10];
const elevados = () => numbers.map(num => num**num);

/*

const foodList = ['Pizza', 'Ramen', 'Paella', 'Entrecot'];
let country = ['Italia', 'Japón', 'Valencia'];

let fraseFood = foodList.map(itemFood => ", amo comer " + itemFood);
let fraseCountry = country.map(itemCountry => "Como soy de " + itemCountry);

let i=0;
let result2=[];
while (i < 2){
result2[i] = fraseCountry[i] + fraseFood[i];
result2.push(result2[i]);
i++;
} 
result2.push("Aunque no como carne, el " + foodList[3] + " es sabroso");
*/
//

let foodList = ['Pizza', 'Ramen', 'Paella', 'Entrecot']; //arr
let country = ['Italia', 'Japón', 'Valencia'];//arr2

let result2 = country.map(( item, i)=>{return "Como soy de " + item + ", amo comer " + foodList[i]})

result2.push("Aunque no como carne, el " + foodList[3] + " es sabroso")

return result2;

