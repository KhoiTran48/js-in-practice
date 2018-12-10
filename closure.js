var debug= (name) => {
    return a= (str) => {
        console.log(`[${name}] ${str}`);
    }
}

var log= debug('Error');
log('Error happened');

//[Error] Error happened


// higher order function
var waitAndRun = (ms, func)=>{
    setInterval( func, ms);
}
var run = () => console.log('Run');

waitAndRun( 2000, run);