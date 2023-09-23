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

// myPromise.then(res => console.log(res)).catch(err => console.log(err))

const getData = async() => {
    const res = await myPromise;
    console.log(res)    
}

getData();


// promise is hundred time better than call back and async await is thousand time better than promis