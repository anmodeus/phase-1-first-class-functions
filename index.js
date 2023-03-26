function receivesAFunction(callback){
    return callback();
}

function returnsANamedFunction(){
 return x = () => 'I did something.'
}

function returnsAnAnonymousFunction(){
    return () => "does something";
}