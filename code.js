import inquirer from "inquirer";
const counter = (text) => text.replace(/\s/g, "").length;
async function WordCounter(counter) {
    do {
        let res = await inquirer.prompt({
            type: "input",
            name: 'text',
            message: `Enter your text .........`
        });
        console.log(counter(res.text));
    } while (true);
}
WordCounter(counter);
