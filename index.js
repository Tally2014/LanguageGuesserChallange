const franc = require("franc");
const colors = require("colors");
const langs = require("langs");

const input = process.argv[2];
const langCode = franc(input);
if(langCode === 'und'){
    console.log(colors.red("SORRY, COULDN'T FIGURE IT OUT! TRY WITH MORE SAMPLE TEXT!"));
}else{
    const language = langs.where("3", langCode);
    console.log(colors.green(`Our best guess is: ${language.name}`));
}