// Define three example functions
function first() {
    console.log(1)
  }
  
  function second() {
    console.log(2)
  }
  
  function third() {
    console.log(3)
  }

  // Define three example functions
function first() {
    console.log(1)
  }
  
  function second() {
    console.log(2)
  }
  
  function third() {
    console.log(3)
  }

  // Execute the functions
first()
second()
third()

// Define three example functions, but one of them contains asynchronous code
function first() {
    console.log(1)
  }
  
  function second() {
    setTimeout(() => {
      console.log(2)
    }, 0)
  }
  
  function third() {
    console.log(3)
  }

  // Execute the functions
first()
second()
third()

// A function
function fn() {
    console.log('Just a function')
  }
  
  // A function that takes another function as an argument
  function higherOrderFunction(callback) {
    // When you call a function that is passed as an argument, it is referred to as a callback
    callback()
  }
  
  // Passing a function
  higherOrderFunction(fn)

  function first() {
    console.log(1)
  }
  
  function second() {
    setTimeout(() => {
      console.log(2)
    }, 0)
  }
  
  function third() {
    console.log(3)
  }

  // Define three functions
function first() {
    console.log(1)
  }
  
  function second(callback) {
    setTimeout(() => {
      console.log(2)
  
      // Execute the callback function
      callback()
    }, 0)
  }
  
  function third() {
    console.log(3)
  }

  first()
second(third)

function pyramidOfDoom() {
    setTimeout(() => {
      console.log(1)
      setTimeout(() => {
        console.log(2)
        setTimeout(() => {
          console.log(3)
        }, 500)
      }, 2000)
    }, 1000)
  }

  // Example asynchronous function
function asynchronousRequest(args, callback) {
    // Throw an error if no arguments are passed
    if (!args) {
      return callback(new Error('Whoa! Something went wrong.'))
    } else {
      return setTimeout(
        // Just adding in a random number so it seems like the contrived asynchronous function
        // returned different data
        () => callback(null, {body: args + ' ' + Math.floor(Math.random() * 10)}),
        500,
      )
    }
  }
  
  // Nested asynchronous requests
  function callbackHell() {
    asynchronousRequest('First', function first(error, response) {
      if (error) {
        console.log(error)
        return
      }
      console.log(response.body)
      asynchronousRequest('Second', function second(error, response) {
        if (error) {
          console.log(error)
          return
        }
        console.log(response.body)
        asynchronousRequest(null, function third(error, response) {
          if (error) {
            console.log(error)
            return
          }
          console.log(response.body)
        })
      })
    })
  }
  
  // Execute 
  callbackHell()

  // Initialize a promise
const promise = new Promise((resolve, reject) => {})

const promise = new Promise((resolve, reject) => {
    resolve('We did it!')
  })

  promise.then((response) => {
    console.log(response)
  })

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Resolving an asynchronous request!'), 2000)
  })
  
  // Log the result
  promise.then((response) => {
    console.log(response)
  })

  // Chain a promise
promise
.then((firstResponse) => {
  // Return a new value for the next then
  return firstResponse + ' And chaining!'
})
.then((secondResponse) => {
  console.log(secondResponse)
})

function getUsers(onSuccess) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Handle resolve and reject in the asynchronous API
      }, 1000)
    })
  }

  function getUsers(onSuccess) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Handle resolve and reject in the asynchronous API
        if (onSuccess) {
          resolve([
            {id: 1, name: 'Jerry'},
            {id: 2, name: 'Elaine'},
            {id: 3, name: 'George'},
          ])
        } else {
          reject('Failed to fetch data!')
        }
      }, 1000)
    })
  }

  // Run the getUsers function with the false flag to trigger an error
getUsers(false)
.then((response) => {
  console.log(response)
})
.catch((error) => {
  console.error(error)
})

// Run the getUsers function with the true flag to resolve successfully
getUsers(true)
  .then((response) => {
    console.log(response)
  })
  .catch((error) => {
    console.error(error)
  })

  // Fetch a user from the GitHub API
fetch('https://api.github.com/users/octocat')
.then((response) => {
  return response.json()
})
.then((data) => {
  console.log(data)
})
.catch((error) => {
  console.error(error)
})

// Create an async function
async function getUser() {
    return {}
  }

  console.log(getUser())

  getUser().then((response) => console.log(response))

  // Handle fetch with async/await
async function getUser() {
    const response = await fetch('https://api.github.com/users/octocat')
    const data = await response.json()
  
    console.log(data)
  }
  
  // Execute async function
  getUser()

  // Handling success and errors with async/await
async function getUser() {
    try {
      // Handle success in try
      const response = await fetch('https://api.github.com/users/octocat')
      const data = await response.json()
  
      console.log(data)
    } catch (error) {
      // Handle error in catch
      console.error(error)
    }
  }