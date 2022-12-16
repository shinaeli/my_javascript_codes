let promise = new Promise(function(resolve, reject) {
    let output = prompt('Provide a valid name: ');
    if (output !== '') {
        setTimeout(function() {
            resolve(output);
        }, 5000);
    }
    else {
        reject(new Error('No name provided.'));
    }
});

const userConsumer = () => {
    promise.then(
        function(result) {
            console.log(`You are welcome. ${result}.`);
        },
        function(error) {
            console.log(error.message);
        }
    )
}

userConsumer();