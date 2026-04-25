function outer(){
    let x=10;
    function inner(){
        x++;
        console.log(x)
    }
    return inner;
}
// closure
outer()
// const print=outer();
// print()


