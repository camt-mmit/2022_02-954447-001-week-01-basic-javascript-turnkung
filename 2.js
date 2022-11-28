import * as readline from 'readline';

const rl = readline.createInterface(process.stdin, process.stdout);

rl.question('Input size: ', (size) => {
    size = parseInt(size);
    let line = "";
    for (let i=1; i<=size; i++) {
        line += "*";
        console.log(line);
    }
    rl.close();
});