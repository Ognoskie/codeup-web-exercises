

const isNegative = (number) => {
    return number < 0;
};



const isTen = (number) => {
    return number === 10
};


const double = (number) => {
    return number * 2;
};


const remove9s = (arr) => {
    let output = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != 9) {
            output.push(arr[i]);
        }
    }
    return output
};


const average = () => {
    let output = 0;

    for (let i = 0; i < arr.length; i++) {
        output += arr[i];


    }
    const avg = output / arr.length;

    return avg;
}


const countOdd = (arr) => {
    let output = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 1) {
            output++
        }
    }
    return output;
}






const averageSales = (arr) => {
    let output = 0;

    for (let i = 0; i < arr.length; i++) {
        output += arr[i].sales;
    }
    const avg = output / arr.length;

    return avg;
};






const convertNameToObject = (string) => {
    const splitName = string.split(" ");
    const firstName = splitName[0];
    const lastName = splitName[1];

    const nameObj = {
        firstName,
        lastName,
    }

    return nameObj;
}




const countVowels = (string) => {
    let count = 0;
    const vowels = ["a", "e", "i", "o", "u"];

    for (let i = 0; i < string.length; i++) {
        if (vowels.includes(string[i])) {
            count++;
        }
    }
    return count;
}





const analyzeWorld = (string) => {
    const output = {
        word: string,
        numberOfLetters: string.length,
        numberOfVowels: countVowels(string),
    }
    return output;
}


























