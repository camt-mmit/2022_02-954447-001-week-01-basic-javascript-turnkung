import * as readline from 'readline';

const rl = readline.createInterface(process.stdin, process.stdout);

rl.question('Input size: ', (size) => {
    size = parseInt(size);
    for (let j=0; j<size; j++) {
        let line = "";
        for (let i=0; i<size; i++) {
            line += (
                i == 0 || j == 0 ||
                i == (size-1) || j == (size-1)
            ) ? '*' : ' ';
        }
        console.log(line);
    }
    rl.close();
});