import inquirer from "inquirer";
const  counter =(text: string)=>text.replace(/\s/g,"").length;

async function WordCounter(counter:(text: string)=> number) {
    do {
        let res = await inquirer.prompt({
            type:"input",
            name:'text',
            message:`Enter your text .........`
        });
        console.log(counter(res.text));
        
    } while (true);
}
WordCounter(counter);