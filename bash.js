process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
    const cmd = data.toString().trim();
    const pwd = process.cwd()
    if (cmd === 'pwd'){
        process.stdout.write(pwd);
    }
    process.stdout.write('You typed: ' + cmd);
    process.stdout.write('\nprompt > ');
})