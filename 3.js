import * as readline from 'readline';

const rl = readline.createInterface(process.stdin, process.stdout);

rl.question('Input size: ', (size) => {
    size = parseInt(size);
    for (let i=1; i<=size; i++) {
        let line = "";
        for (let j=size; j>=0; j--) {
            line += (j < i ) ? '*' : ' ';
        }
        console.log(line);
    }
    rl.close();
});