const x = parseInt(process.argv[2]);
for (let i=1; i<=12; i++) {
    let line = '';
    for (let j=2; j<=x; j++) {
        line = `${line} \t ${i * j}`
    }
    console.log(line);
}