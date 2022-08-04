// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    cats.push(name);
    return cats;
}
destructivelyAppendCat('Ralph');

function destructivelyPrependCat(name){
    cats.unshift(name);
    return cats;
}
destructivelyPrependCat("Bob");

function destructivelyRemoveLastCat(){
    cats.pop();
    return cats;
}
destructivelyRemoveLastCat();

function destructivelyRemoveFirstCat(){
    cats.shift();
    return cats;
}
destructivelyRemoveFirstCat();

function appendCat(name){
    const newCats = [...cats, name];
    return newCats;
}
appendCat('Broom');

function prependCat(name){
    const newCats = [name, ...cats];
    return newCats;
}
prependCat('Broom');

function removeLastCat(){
    const copyCats = cats.slice(0, -1);
    return copyCats;
}
removeLastCat();

function removeFirstCat(){
    const copyCats = cats.slice(1);
    return copyCats;
}
removeFirstCat();