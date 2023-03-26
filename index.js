function receivesAFunction(callback){
    return callback();
}

function returnsANamedFunction(){
 return x = () => 'I did something.'
}

function returnsAnAnonymousFunction(){
    return function(){
         console.log('I just did something.')
    }
}    