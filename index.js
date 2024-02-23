//RESUELVE LOS EJERCICIOS AQUI

//-:european_castle: :crossed_swords: Bikram
//--Iteraciones :crossed_swords: Pair Programming :crossed_swords:

//---Map: 1,2,3.
//----1

let numbers = [4,5,6,7,8,9,10];
const elevados = () => numbers.map(num => num**num);

//---2

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

let result2 = foodList.map(( item, i)=>{return "Como soy de " + country[i] + ", amo comer " + item});

let elminarUltimo = result2.pop();

result2.push("Aunque no como carne, el " + foodList[3] + " es sabroso");


//---3

const staff = [
    {
      name: 'Pepe',
      role: 'The Boss',
      hobbies: ['leer', 'ver pelis']
    },
    {
      name: 'Ana',
      role: 'becaria',
      hobbies: ['nadar', 'bailar']
    },
    {
      name: 'Luis',
      role: 'programador',
      hobbies: ['dormir', 'comprar']
    },
    {
      name: 'Carlos',
      role: 'secretario',
      hobbies: ['futbol', 'queso']
    }
  ];
  
  // Resultado esperado
  /*
    [
      'Pepe es The Boss y le gusta leer y ver pelis',
      'Ana es becaria y le gusta nadar y bailar',
      'Luis es programador y le gusta dormir y comprar',
      'Ana es becaria y le gusta nadar y bailar',
      'Carlos es secretario y le gusta futbol y queso'
    ]
    */

    let result3 = staff.map(item => item.name + " es " + item.role + " y le gusta " + item.hobbies[0] + " y " + item.hobbies[1]);
        
    console.log(result3);

    //---Filter

//4

const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let result4 = numbers2.filter(item => item%2 != 0);

//5
//genera un segundo array result5 que filtre los platos veganos y saque una sentencia como la del ejemplo

const foodList2 =[
    {
      name: 'Tempeh',
      isVeggie: true
    },
    {
      name: 'Cheesbacon burguer',
      isVeggie: false
    },
    {
      name: 'Tofu burguer',
      isVeggie: true
    },
    {
      name: 'Entrecot',
      isVeggie: false
    }];


let result5 = foodList2.filter((item, i) => {
    if (item.isVeggie) { 
        result5[i] = "Qué rico " + item.name + " me voy a comer!"
    
    }});
