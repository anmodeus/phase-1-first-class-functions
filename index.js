function receivesAFunction(callback){
    return callback();
}

function returnsANamedFunction(){
 return x = () => 'I did something.'
}

function returnsAnAnonymousFunction(){
    return () => "I just did something."
}    