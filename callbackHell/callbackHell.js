fs.readFile('/test1', 'utf-8', (err1, data1) => {
    if (err1) return handleError(err1);
    fs.readFile(data1, 'utf-8', (err2, data2) => {
        if (err2) return handleError(err2);
        fs.readFile(data2, 'utf-8', (err3, data3) => {
            if (err3) return handleError(err3);
            fs.readFile(data3, 'utf-8', (err4, data4) => {
                if (err4) return handleError(err4);
                return doSomething(data4);
            });
        });
    });
});