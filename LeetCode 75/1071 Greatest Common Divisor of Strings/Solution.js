var gcdOfStrings = function(str1, str2) {

    const short = str1.length < str2.length ? str1 : str2;

    for(let i = short.length; i > 0; i--) {

        if(str1.length % i || str2.length % i) continue;
        let factor1  = str1.length / i;
        let factor2 = str2.length / i;

        let rebuild1 = str1.slice(0, i).repeat(factor1);
        let rebuild2 = str1.slice(0, i).repeat(factor2);

        if(rebuild1 === str1 && rebuild2 === str2) return str1.slice(0, i);
        
    }

    return "";
};