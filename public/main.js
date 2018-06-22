console.log("Starting main script...");
console.log("Rendering the graph");
// sigma.parsers.json('https://raw.githubusercontent.com/sroj/graphy/develop/public/data.json', {
//     container: 'container',
//     settings: {
//         defaultNodeColor: '#ec5148'
//     }
// });

sigma.parsers.gexf('https://raw.githubusercontent.com/sroj/graphy/develop/src/les-miserables.gexf', {
        container: 'container',
        settings: {
            defaultNodeColor: '#ec5148'
        }
    },
    function (s) {
        // This function will be executed when the
        // graph is displayed, with "s" the related
        // sigma instance.
    }
);
console.log("Done, bye...");