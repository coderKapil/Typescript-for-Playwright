//break statement

//Ex when i value becomes 5 i want to exit from the loop

// for(let i=1; i<=10; i++){
//     if(i==5){
//      break;
//     }
//     console.log(i);
    
// }


//continue statement will skips the current iteration

// for(let i=1; i<=10; i++){
//     if(i==5){
//      continue;
//     }
//     console.log(i);
    
// }

//skip 3 5 and 7
for(let i=1; i<=10; i++){
    if(i==3 || i==5 || i==7){
        continue;
    }
    console.log(i);
    
}