function outer(){
    let x=10;
    function inner(){
        x++;
        console.log(x)
    }
    return inner;
}

outer()
// const print=outer();
// print()


