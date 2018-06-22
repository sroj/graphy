console.log("Starting main script...");
console.log("Rendering")
sigma.parsers.json('https://raw.githubusercontent.com/sroj/graphy/develop/public/data.json', {
    container: 'container',
    settings: {
        defaultNodeColor: '#ec5148'
    }
});
console.log("Done, bye...");