// promise ekta constractor jake object a convert korte samnse ekta new keywoed bosate hoy tarpor eta .then.catch dite pare

// ekta promise er 3 ta step thakbe. Ta holo pending, resolve and reject

const myPromise = new Promise((resolve, reject) => {
    const user = []
    if (!user) {
        reject('Something went wrong')
    }
    else {
        setTimeout(() => {
            resolve("Succesfuly Get user")
        }, 1000);
    }

})

myPromise.then(res => console.log(res)).catch(err => console.log(err))