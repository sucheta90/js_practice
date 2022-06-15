// const power = (base, exponent) => {
//     let result = 1;
//     for (let count = 0; count < exponent; count++) {
//       result *= base;
//     }
//     return result;
//   };
// const greet = (name) => `hello ${name}`;
// console.log(power(2,10))
// console.log(greet('Sucheta'))
  

// const hummus = function(factor) {
//     const ingredient = function(amount, unit, name) {
//       let ingredientAmount = amount * factor;
//       if (ingredientAmount > 1) {
//         unit += "s";
//       }
//       console.log(`${ingredientAmount} ${unit} ${name}`);
//     };
//     ingredient(1, "can", "chickpeas");
//     ingredient(0.25, "cup", "tahini");
//     ingredient(0.25, "cup", "lemon juice");
//     ingredient(1, "clove", "garlic");
//     ingredient(2, "tablespoon", "olive oil");
//     ingredient(0.5, "teaspoon", "cumin");
//   };
  
//   hummus(5);
//   console.log(hummus)

//   const closure_example = function(parameter) {
//       return function(){
//           console.log(`hello ${parameter}`)
//       }
//   }
  
//   let innerfunc_1 = closure_example('sucheta')
//   console.log(innerfunc_1)
//   innerfunc_1()

//   innerfunc_1 = closure_example('pritam')
//   innerfunc_1()

  function test(x, y){
      x = x+1;
      y.a = y.a+1;
      console.log(`inside test x= ${x} y= ${y.a}`)
  }

  m = 1;
  w = {
      'a': 20
  }
  test(m, w);
  console.log(`outside m= ${m} y= ${w.a}`);