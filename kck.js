// CHALLENGE 1

/* 
let count = 0
let s = '*'
function kick(){
for (i=0; i<7; i++) {

    count = (count + 1)
    console.log(s.repeat(count))

}

}
kick() */


// CHALLENGE 2

let se = ' '
let s = '#'

const arr = ''


for(i=0; i<9; i++){


    for(j=0; j<5; j++){


        if(j%2==0){

            arr.push(s)

        }else{

            arr.push(se)

        }
        
    }
    

}
console.log(arr)
