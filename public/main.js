console.log("Starting main script...");
console.log("Rendering the graph");

// var i,
//     s,
//     N = 100,
//     E = 500,
//     g = {
//         nodes: [],
//         edges: []
//     };
//
// // Generate a random graph:
// for (i = 0; i < N; i++)
//     g.nodes.push({
//         id: 'n' + i,
//         label: 'Node ' + i,
//         x: Math.random(),
//         y: Math.random(),
//         size: Math.random(),
//         color: '#666'
//     });
//
// for (i = 0; i < E; i++)
//     g.edges.push({
//         id: 'e' + i,
//         source: 'n' + (Math.random() * N | 0),
//         target: 'n' + (Math.random() * N | 0),
//         size: Math.random(),
//         color: '#ccc'
//     });
//
// // Instantiate sigma:
// s = new sigma({
//         graph: g,
//         container: 'container'
//     }
// );
//
//
// // This function will be executed when the
// // graph is displayed, with "s" the related
// // sigma instance.
//
//
// // We first need to save the original colors of our
// // nodes and edges, like this:
// s.graph.nodes().forEach(function (n) {
//     n.originalColor = n.color;
// });
// s.graph.edges().forEach(function (e) {
//     e.originalColor = e.color;
// });
//
// // When a node is clicked, we check for each node
// // if it is a neighbor of the clicked one. If not,
// // we set its color as grey, and else, it takes its
// // original color.
// // We do the same for the edges, and we only keep
// // edges that have both extremities colored.
// s.bind('clickNode', function (e) {
//     var nodeId = e.data.node.id,
//         toKeep = s.graph.neighbors(nodeId);
//     toKeep[nodeId] = e.data.node;
//
//     s.graph.nodes().forEach(function (n) {
//         if (toKeep[n.id])
//             n.color = n.originalColor;
//         else
//             n.color = '#eee';
//     });
//
//     s.graph.edges().forEach(function (e) {
//         if (toKeep[e.source] && toKeep[e.target])
//             e.color = e.originalColor;
//         else
//             e.color = '#eee';
//     });
//
//     // Since the data has been modified, we need to
//     // call the refresh method to make the colors
//     // update effective.
//     s.refresh();
// });
//
// // When the stage is clicked, we just color each
// // node and edge with its original color.
// s.bind('clickStage', function (e) {
//     s.graph.nodes().forEach(function (n) {
//         n.color = n.originalColor;
//     });
//
//     s.graph.edges().forEach(function (e) {
//         e.color = e.originalColor;
//     });
//
//     // Same as in the previous event:
//     s.refresh();
// });


function loadJSON(callback) {

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'my_data.json', true); // Replace 'my_data' with the path to your file
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            callback(xobj.responseText);
        }
    };
    xobj.send(null);
}


// function init() {
//     loadJSON(function (response) {
//         // Parse JSON string into object
//         var g = JSON.parse(response);
//
//         console.log(g)
//
//         // Instantiate sigma:
//         var s = new sigma({
//                 graph: g,
//                 container: 'container',
//                 settings: {
//                     defaultNodeColor: '#ec5148'
//                 }
//             },
//         );
//
//         console.log("Done rendering...")
//     });
// }

sigma.classes.graph.addMethod('neighbors', function (nodeId) {
    var k,
        neighbors = {},
        index = this.allNeighborsIndex[nodeId] || {};

    for (k in index)
        neighbors[k] = this.nodesIndex[k];

    return neighbors;
});

sigma.parsers.json('https://raw.githubusercontent.com/sroj/graphy/develop/public/arctic.json', {
        container: 'container',
        settings: {
            defaultNodeColor: '#ec5148'
        }
    },
    function (s) {
        // This function will be executed when the
        // graph is displayed, with "s" the related
        // sigma instance.


        // We first need to save the original colors of our
        // nodes and edges, like this:
        s.graph.nodes().forEach(function (n) {
            n.originalColor = n.color;
        });
        s.graph.edges().forEach(function (e) {
            e.originalColor = e.color;
        });

        // When a node is clicked, we check for each node
        // if it is a neighbor of the clicked one. If not,
        // we set its color as grey, and else, it takes its
        // original color.
        // We do the same for the edges, and we only keep
        // edges that have both extremities colored.
        s.bind('clickNode', function (e) {
            var nodeId = e.data.node.id,
                toKeep = s.graph.neighbors(nodeId);
            toKeep[nodeId] = e.data.node;

            s.graph.nodes().forEach(function (n) {
                if (toKeep[n.id])
                    n.color = n.originalColor;
                else
                    n.color = '#eee';
            });

            s.graph.edges().forEach(function (e) {
                if (toKeep[e.source] && toKeep[e.target])
                    e.color = e.originalColor;
                else
                    e.color = '#eee';
            });

            // Since the data has been modified, we need to
            // call the refresh method to make the colors
            // update effective.
            s.refresh();
        });

        // When the stage is clicked, we just color each
        // node and edge with its original color.
        s.bind('clickStage', function (e) {
            s.graph.nodes().forEach(function (n) {
                n.color = n.originalColor;
            });

            s.graph.edges().forEach(function (e) {
                e.color = e.originalColor;
            });

            // Same as in the previous event:
            s.refresh();
        });
    }
);

// init()
console.log("Done, bye...");