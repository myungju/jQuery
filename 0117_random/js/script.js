function random_fn(min,max){
    return Math.floor(Math.random()*(max-min))+min;
}

console.log(random_fn(10,30));
console.log(random_fn(-10,20));
console.log(random_fn(20,40));
