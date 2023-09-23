// amra jkhn fetch use kortam tkhn ta promise return korto and amder response dito error soho.

// fetch("")   /*node direct fetch support kore na */
//     .then(res => res.json9)
//     .then(data => console.log(data))
//     .catch(err => console.log(err))

// try-catch use korle server crush kore na. ora error dey but server running thake

async function getUser() {
    // undefined.find();
}
// getUser()
async function getUser2() {
    try {
        undefined.find();
    } catch (error) {
        console.log(error)
    }
}
getUser2()

// but async await a amra kivabe err handle korbo. r etar jnnoi ace try_catch

const getData = async () => {
    try {
        const res = await fetch("");
        const dat = await res.json();
        const data = console.log(data)
    } catch (error) {
        console.log(error)
    }
}



// type of error, Refference error, TypeError, SyntaxError, internalError