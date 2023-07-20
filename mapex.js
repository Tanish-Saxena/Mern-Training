const r =[3,4,5,6]

    function circumference(r){
     circumference= 2*Math.PI*r;
        console.log(circumference);
    }
    function area(r){
         area= MATH.PI*r*r;
        console.log(area);

    }
    function diameter(r){
        diam= 2*r;
        console.log(diam);

    }
    console.log('circumference')
    r.map(circumference);
    
    console.log('area');
    r.map(area);

    console.log('diameter')
    r.map(diameter);
    


// const numbers = [65, 44, 12, 4];
// const newArr = numbers.map(myFunction);
// console.log(newArr);

// function myFunction(num) {
//   return num * 10;
// }
