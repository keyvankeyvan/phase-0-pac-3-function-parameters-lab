function introduction(name){
    let phrase = `Hi, my name is ${name}.`;
    return(phrase);
}

function introductionWithLanguage(name, language){
    let phrase = `Hi, my name is ${name} and I am learning to program in ${language}.`;
    return (phrase);
}

function introductionWithLanguageOptional(name, language = 'JavaScript'){
    let phrase = `Hi, my name is ${name} and I am learning to program in ${language}.`;
    return (phrase);
}
