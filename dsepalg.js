let all_Example_Graphs_Undirected = [];
let all_Example_Graphs_Directed = [];
let all_Practice_Graphs_Undirected = [];
let all_Practice_Graphs_Directed = [];

class DGraph {
  constructor(num_nodes) {
    this.num__of_nodes = num_nodes;
    this.list_of_nodes = [];
    this.adjacency_dict = {};
  }

  addNode(node) {
    (this.adjacency_dict)[node] = [];
    (this.list_of_nodes).push(node);
  }

  addEdge(src_node, dst_node) {
    (this.adjacency_dict[src_node]).push(dst_node);
  }

  checkDirectlyConnected(src_node, dst_node) {
    var src_list = this.adjacency_dict[src_node];
    var dst_list = this.adjacency_dict[dst_node];
    if (src_list.includes(dst_node)) {
      return 'r';
    }
    else if (dst_list.includes(src_node)) {
      return 'l';
    }
    else {
      return false;
    }
  }
}

class UGraph {
  constructor(num_nodes) {
    this.num__of_nodes = num_nodes;
    this.list_of_nodes = [];
    this.adjacency_dict = {};
  }

  addNode(node) {
    (this.adjacency_dict)[node] = [];
    (this.list_of_nodes).push(node);
  }

  addEdge(src_node, dst_node) {
    (this.adjacency_dict[src_node]).push(dst_node);
    (this.adjacency_dict[dst_node]).push(src_node);
  }

  checkDirectlyConnected(src_node, dst_node) {
    var connectedNodes = this.adjacency_dict[src_node];
    if (connectedNodes.includes(dst_node)) {
      return true;
    }
    else {
      return false;
    }
  }
}

//Initialize test graph
let d_graph = new DGraph(8);
let u_graph = new UGraph(8);
let d_graph1 = new DGraph(4);
let u_graph1 = new UGraph(4);
let d_graph2 = new DGraph(6);
let u_graph2 = new UGraph(6);
let d_graph3 = new DGraph(9);
let u_graph3 = new UGraph(9);
let d_graph4 = new DGraph(7);
let u_graph4 = new UGraph(7);
let d_graph5 = new DGraph(6);
let u_graph5 = new UGraph(6);

// all_Example_Graphs_Undirected.push(u_graph);
all_Example_Graphs_Undirected.push(u_graph1);
all_Example_Graphs_Undirected.push(u_graph2);
all_Example_Graphs_Undirected.push(u_graph3);
all_Example_Graphs_Directed.push(d_graph);
all_Example_Graphs_Directed.push(d_graph1);
all_Example_Graphs_Directed.push(d_graph2);
all_Example_Graphs_Directed.push(d_graph3);

all_Practice_Graphs_Undirected.push(u_graph4);
all_Practice_Graphs_Undirected.push(u_graph5);
all_Practice_Graphs_Directed.push(d_graph4);
all_Practice_Graphs_Directed.push(d_graph5);

let nodes = ['A','B', 'C', 'D', 'E', 'F', 'G', 'H']
for (var i = 0; i < nodes.length; i++) {
  d_graph.addNode(nodes[i]);
  u_graph.addNode(nodes[i]);
}
d_graph.addEdge('A', 'D');
d_graph.addEdge('A', 'E');
d_graph.addEdge('B', 'E');
d_graph.addEdge('B', 'F');
d_graph.addEdge('E', 'G');
d_graph.addEdge('C', 'F');
d_graph.addEdge('C', 'H');

u_graph.addEdge('A', 'D');
u_graph.addEdge('A', 'E');
u_graph.addEdge('B', 'E');
u_graph.addEdge('B', 'F');
u_graph.addEdge('E', 'G');
u_graph.addEdge('C', 'F');
u_graph.addEdge('C', 'H');

nodes = ['A','B', 'C', 'D'];
for (var i = 0; i < nodes.length; i++) {
  d_graph1.addNode(nodes[i]);
  u_graph1.addNode(nodes[i]);
}

d_graph1.addEdge('A', 'B');
d_graph1.addEdge('B', 'C');
d_graph1.addEdge('B', 'D');

u_graph1.addEdge('A', 'B');
u_graph1.addEdge('B', 'C');
u_graph1.addEdge('B', 'D');


nodes = ['A','B', 'C', 'D', 'E', 'F']
for (var i = 0; i < nodes.length; i++) {
  d_graph2.addNode(nodes[i]);
  u_graph2.addNode(nodes[i]);
}

d_graph2.addEdge('A', 'B');
d_graph2.addEdge('A', 'C');
d_graph2.addEdge('B', 'D');
d_graph2.addEdge('B', 'E');
d_graph2.addEdge('C', 'E');
d_graph2.addEdge('C', 'F');

u_graph2.addEdge('A', 'B');
u_graph2.addEdge('A', 'C');
u_graph2.addEdge('B', 'D');
u_graph2.addEdge('B', 'E');
u_graph2.addEdge('C', 'E');
u_graph2.addEdge('C', 'F');

nodes = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']
for(let i = 0; i < nodes.length; i++) {
  d_graph3.addNode(nodes[i]);
  u_graph3.addNode(nodes[i]);
}

d_graph3.addEdge('A', 'C');
d_graph3.addEdge('A', 'D');
d_graph3.addEdge('B', 'D');
d_graph3.addEdge('B', 'E');
d_graph3.addEdge('C', 'F');
d_graph3.addEdge('D', 'F');
d_graph3.addEdge('E', 'G');
d_graph3.addEdge('F', 'H');
d_graph3.addEdge('F', 'I');
d_graph3.addEdge('G', 'I');

u_graph3.addEdge('A', 'C');
u_graph3.addEdge('A', 'D');
u_graph3.addEdge('B', 'D');
u_graph3.addEdge('B', 'E');
u_graph3.addEdge('C', 'F');
u_graph3.addEdge('D', 'F');
u_graph3.addEdge('E', 'G');
u_graph3.addEdge('F', 'H');
u_graph3.addEdge('F', 'I');
u_graph3.addEdge('G', 'I');

// list of graphs
let exampleGraphs = [
  { numNodes: 4, nodes: ['A', 'B', 'C', 'D'] },
  { numNodes: 6, nodes: ['A', 'B', 'C', 'D', 'E', 'F'] },
  { numNodes: 9, nodes: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H',' I'] }
];

let currentGraph = 0;
let currProb = 0;

// TODO: FIX THESE TO BE RELIANT ON THE ALGORITHM (answer and reason)
// NOTE: these are currently placeholder problems
let practiceProblems = [
  {
    graph: 'images/practicegraph1.png',
    problem: 'P(A|B,C) = P(A|B)',
    answer: false,
    hint: 'X={A}, Y={C}, E={B}',
    reason: 'X={A}, Y={C}, E={B} /nA and C are not d-separated on the path A->C'
  },
  {
    graph: 'images/practicegraph2.png',
    problem: 'P(A|C,D) = P(A|D)',
    answer: true,
    hint: 'X={A}, Y={C}, E={D}',
    reason: 'X={A}, Y={C}, E={D} /nAll paths from X to Y are d-separated.'
  },
  {
    graph: 'images/practicegraph1.png',
    problem: 'P(A|B,C) = P(A|C)',
    answer: true,
    hint: 'X={A}, Y={C}, E={B}',
    reason: 'X={A}, Y={C}, E={B} /nAll paths from X to Y are d-separated.'
  },
  {
    graph: 'images/practicegraph1.png',
    problem: 'P(A,B|C,D) = P(A|C,D)P(B|C,D)',
    answer: false,
    hint: 'X={A}, Y={B}, E={C,D}',
    reason: 'X={A}, Y={B}, E={C,D} /nA and B are not d-separated on the path A->D<-B'
  },
  {
    graph: 'images/practicegraph2.png',
    problem: 'P(F|A,B)=P(F)',
    answer: false,
    hint: 'X={F}, Y={A,B}, E={}',
    reason: 'X={F}, Y={A,B}, E={} /nA and F are not d-separated on the path A->D->F'
  },
  {
    graph: 'images/practicegraph2.png',
    problem: 'P(A|B)=P(A)',
    answer: true,
    hint: 'X={A}, Y={B}, E={}',
    reason: 'X={A}, Y={B}, E={} /nAll paths from X to Y are d-separated.'
  },
  {
    graph: 'images/practicegraph2.png',
    problem: 'P(F|A,B,C,D,E)=P(F|D,E)',
    answer: true,
    hint: 'X={F}, Y={A,B,C}, E={D,E}',
    reason: 'X={F}, Y={A,B,C}, E={E} /nAll paths from X to Y are d-separated.'
  },
  {
    graph: 'images/practicegraph1.png',
    problem: 'P(F,G|D) = P(F|D)P(G)',
    answer: false,
    hint: 'X={F}, Y={G}, E={D} and something else',
    reason: 'X={F}, Y={G}, E={D} to evaluate P(F,G|D) = P(F|D)P(G|D) which is true, and P(G) != P(G|D)'
  },
  {
    graph: 'images/practicegraph2.png',
    problem: 'P(D|A,B)=P(D|A,B,F)',
    answer: false,
    hint: 'X={D}, Y={F}, E={A,B}',
    reason: 'X={D}, Y={F}, E={A,B} /nD and F are not d-separated on the path D->F'
  },
  {
    graph: 'images/practicegraph2.png',
    problem: 'P(D|B,C,E)=P(D|E)',
    answer: false,
    hint: 'X={D}, Y={B,C}, E={E}',
    reason: 'X={D}, Y={B,C}, E={E} /nB and D are not d-separated on the path B->D'
  },
  {
    graph: 'images/practicegraph2.png',
    problem: 'P(D,E|A,B,C)=P(D|A,B,C)P(E|A,B,C)',
    answer: true,
    hint: 'X={D}, Y={E}, E={A,B,C}',
    reason: 'X={D}, Y={E}, E={A,B,C} /nAll paths from X to Y are d-separated.'
  },
  // {
  //   graph: 'images/practicegraph1.png',
  //   problem: 'P(A,B|D,F) = P(A|D)P(B|F)',
  //   answer: false,
  //   hint: 'X={A}, Y={C}, E={B}',
  //   reason: 'X={A}, Y={C}, E={B} /nAll paths from X to Y are d-separated.'
  // },
];
//
// $(document).ready(function() {
//   $('#simplebutton').click(function() {
//     $("#exploreGraph").attr("src","images/simplegraph.png");
//     currentGraph = 0;
//     var i;
//     document.getElementById('setX').innerHTML = '';
//     for (i = 0; i < exampleGraphs[0].numNodes; i++) {
//       let curr = exampleGraphs[0];
//       let newHTML = '<div class="form-check"><input class="form-check-input" type="checkbox"'
//         + 'name="x' + (i+1) + '\" id="x' + (i+1) + '" value="' + curr.nodes[i] + '\\">'
//         + '<label class="form-check-label" for="x' + (i+1) +'">' + curr.nodes[i] + '<\/label><\/div>';
//       $('#setX').append(newHTML);
//     }
//     document.getElementById('setY').innerHTML = '';
//     for (i = 0; i < exampleGraphs[0].numNodes; i++) {
//       let curr = exampleGraphs[0];
//       let newHTML = '<div class="form-check"><input class="form-check-input" type="checkbox"'
//         + 'name="y' + (i+1) + '\" id="y' + (i+1) + '" value="' + curr.nodes[i] + '\\">'
//         + '<label class="form-check-label" for="y' + (i+1) +'">' + curr.nodes[i] + '<\/label><\/div>';
//       $('#setY').append(newHTML);
//     }
//     document.getElementById('setE').innerHTML = '';
//     for (i = 0; i < exampleGraphs[0].numNodes; i++) {
//       let curr = exampleGraphs[0];
//       let newHTML = '<div class="form-check"><input class="form-check-input" type="checkbox"'
//         + 'name="e' + (i+1) + '\" id="e' + (i+1) + '" value="' + curr.nodes[i] + '\\">'
//         + '<label class="form-check-label" for="e' + (i+1) +'">' + curr.nodes[i] + '<\/label><\/div>';
//       $('#setE').append(newHTML);
//     }
//   });
//
//   $('#complexbutton').click(function() {
//     $('#exploreGraph').attr("src", "images/complexgraph.png");
//     currentGraph = 1;
//     var i;
//     document.getElementById('setX').innerHTML = '';
//     for (i = 0; i < exampleGraphs[1].numNodes; i++) {
//       let curr = exampleGraphs[1];
//       let newHTML = '<div class="form-check"><input class="form-check-input" type="checkbox"'
//         + 'name="x' + (i+1) + '\" id="x' + (i+1) + '" value="' + curr.nodes[i] + '\\">'
//         + '<label class="form-check-label" for="x' + (i+1) +'">' + curr.nodes[i] + '<\/label><\/div>';
//       $('#setX').append(newHTML);
//     }
//     document.getElementById('setY').innerHTML = '';
//     for (i = 0; i < exampleGraphs[1].numNodes; i++) {
//       let curr = exampleGraphs[1];
//       let newHTML = '<div class="form-check"><input class="form-check-input" type="checkbox"'
//         + 'name="y' + (i+1) + '\" id="y' + (i+1) + '" value="' + curr.nodes[i] + '\\">'
//         + '<label class="form-check-label" for="y' + (i+1) +'">' + curr.nodes[i] + '<\/label><\/div>';
//       $('#setY').append(newHTML);
//     }
//     document.getElementById('setE').innerHTML = '';
//     for (i = 0; i < exampleGraphs[1].numNodes; i++) {
//       let curr = exampleGraphs[1];
//       let newHTML = '<div class="form-check"><input class="form-check-input" type="checkbox"'
//         + 'name="e' + (i+1) + '\" id="e' + (i+1) + '" value="' + curr.nodes[i] + '\\">'
//         + '<label class="form-check-label" for="e' + (i+1) +'">' + curr.nodes[i] + '<\/label><\/div>';
//       $('#setE').append(newHTML);
//     }
//   });
//
//   $('#challengebutton').click(function() {
//     $('#exploreGraph').attr("src", "images/challengegraph.png");
//     currentGraph = 2;
//     var i;
//     document.getElementById('setX').innerHTML = '';
//     for (i = 0; i < exampleGraphs[2].numNodes; i++) {
//       let curr = exampleGraphs[2];
//       let newHTML = '<div class="form-check"><input class="form-check-input" type="checkbox"'
//         + 'name="x' + (i+1) + '\" id="x' + (i+1) + '" value="' + curr.nodes[i] + '\\">'
//         + '<label class="form-check-label" for="x' + (i+1) +'">' + curr.nodes[i] + '<\/label><\/div>';
//       $('#setX').append(newHTML);
//     }
//     document.getElementById('setY').innerHTML = '';
//     for (i = 0; i < exampleGraphs[2].numNodes; i++) {
//       let curr = exampleGraphs[2];
//       let newHTML = '<div class="form-check"><input class="form-check-input" type="checkbox"'
//         + 'name="y' + (i+1) + '\" id="y' + (i+1) + '" value="' + curr.nodes[i] + '\\">'
//         + '<label class="form-check-label" for="y' + (i+1) +'">' + curr.nodes[i] + '<\/label><\/div>';
//       $('#setY').append(newHTML);
//     }
//     document.getElementById('setE').innerHTML = '';
//     for (i = 0; i < exampleGraphs[2].numNodes; i++) {
//       let curr = exampleGraphs[2];
//       let newHTML = '<div class="form-check"><input class="form-check-input" type="checkbox"'
//         + 'name="e' + (i+1) + '\" id="e' + (i+1) + '" value="' + curr.nodes[i] + '\\">'
//         + '<label class="form-check-label" for="e' + (i+1) +'">' + curr.nodes[i] + '<\/label><\/div>';
//       $('#setE').append(newHTML);
//     }
//   });
//
//   $('#practicebutton').click(function() {
//     currProb++;
//
//     $('input:radio').prop('checked', false);
//     document.getElementById('practiceresults').innerHTML = 'Try a problem! Your feedback will be here.';
//     document.getElementById('hint').innerHTML = '';
//
//     if (currProb < practiceProblems.length) {
//       $('#practiceGraph').attr("src", practiceProblems[currProb].graph);
//       document.getElementById('practiceprob').innerHTML = '';
//       $('#practiceprob').append(practiceProblems[currProb].problem);
//     } else {
//       currProb = 0;
//       $('#practiceGraph').attr("src", practiceProblems[currProb].graph);
//       document.getElementById('practiceprob').innerHTML = '';
//       $('#practiceprob').append(practiceProblems[currProb].problem);
//     }
//
//   });
//
//   $('#checkpracticebutton').click(function() {
//     let trueChecked = $('#true').is(':checked');
//     let falseChecked = $('#false').is(':checked');
//     if (!trueChecked && !falseChecked) {
//       alert("Please select True or False.");
//       return;
//     }
//     if (trueChecked) {
//       if (practiceProblems[currProb].answer == true) {
//         document.getElementById('practiceresults').innerHTML = '';
//         $('#practiceresults').append("Correct!");
//         // TODO: More reasons
//       } else {
//         document.getElementById('practiceresults').innerHTML = '';
//         $('#practiceresults').append("Incorrect.");
//         // TODO: More reasons
//       }
//     } else {
//       if (practiceProblems[currProb].answer == false) {
//         document.getElementById('practiceresults').innerHTML = '';
//         $('#practiceresults').append("Correct!");
//         // TODO: More reasons
//       } else {
//         document.getElementById('practiceresults').innerHTML = '';
//         $('#practiceresults').append("Incorrect.");
//         // TODO: More reasons
//       }
//     }
//
//   });
//
//   $('#hintlink').click(function() {
//     document.getElementById('hint').innerHTML = '';
//     $('#hint').append(practiceProblems[currProb].hint);
//   });
//
//
//   $('#examplebutton').click(function() {
//     var i;
//     let curr = exampleGraphs[currentGraph];
//     for (i = 0; i < curr.numNodes; i++) {
//
//       // make sure they don't try to put X's with the Y's and the E's
//       let xChecked = $('#x' + (i+1)).is(":checked");
//       let yChecked = $('#y' + (i+1)).is(":checked");
//       let eChecked = $('#e' + (i+1)).is(":checked");
//       let numChecked = 0;
//       if (xChecked) {
//         numChecked++;
//       }
//       if (yChecked) {
//         numChecked++;
//       }
//       if (eChecked) {
//         numChecked++;
//       }
//       if (numChecked > 1) {
//         alert("Node " + curr.nodes[i] + " cannot be in more than one set.\n"
//           + "It must be in either set X, set Y, or set E.");
//           return;
//       }
//     }
//     // Validation is done, now submit to the algorithm to see if they're right
//     // TODO: Get result from the algorithm
//
//     // TODO: Display the result on the page
//   });
// });

// TODO: Create check that Heero's algorithm works



/*

list of nodes, map of edges or matrix
          (adjacency matrix or list)
          and the X, Y, and E (these are arrays)


true/false (CI), list of paths (probably adjacency list),
and the conditions

algorithm gives the frontend a data structure holding
holding the list of paths and their conditions (they need to
be linked together)

  path1 = [
    (node, isInEvidenceSet),
    dir,
    (node, isInEvidenceSet),
    dir,
    (node, isInEvidenceSet)
  ]

  return [(path1, condition), (path2, condition)]
*/

var r = 'r';
var l = 'l';
var c1 = 'condition1';
var c2 = 'condition2';
var c3 = 'condition3';

function tracePath(graph, path) {
  var result = [];

  result.push(path[0]);
  for (var n = 1; n < path.length; n++) {
    prev_list = graph.adjacency_dict[path[n-1]];
    if (prev_list.includes(path[n])) {
      result.push(r);
    }
    else {
      result.push(l);
    }
    result.push(path[n]);
  }
  return result;
}

function checkConditions(graph, path, index, Earray) {
  var result = [];
  var cond;

  var left_node = path[index - 1];
  var mid_node = path[index];
  var right_node = path[index + 1];

  left_list = graph.adjacency_dict[left_node];
  mid_list = graph.adjacency_dict[mid_node];
  right_list = graph.adjacency_dict[right_node];

  if (Earray.includes(mid_node)) {
    //condition1
    if ((left_list.includes(mid_node) && mid_list.includes(right_node)) ||
        (mid_list.includes(left_node) && right_list.includes(mid_node))) {
      cond = c1;
    }
    //condition2
    else if (mid_list.includes(left_node) && mid_list.includes(right_node)) {
      cond = c2;
    }
  }
  //condition3
  else if (left_list.includes(mid_node) && right_list.includes(mid_node)){
    cond = c3;
    for (var i = 0; i < mid_list.length; i++) {
      if (Earray.includes(mid_list[i])) {
        cond = false;
      }
    }
  }

  result = tracePath(graph, path);

  if (cond == c1 || cond == c2 || cond == c3) {
    result.push(cond);
    result.push(true);
  }
  else {
    result.push(c1);
    result.push(false);
  }
  console.log("Traced Path");
  console.log(result);
  return result;
}

X = ['B'];
Y = ['H', 'C'];
E = ['F'];

//Given: {A, B, C, D, E, F, G, H}
//TODO: hardcode the adjacency list
//User input X, Y, E (arrays)

function conditionalIndependence(d_graph, u_graph, Xarray, Yarray, Earray) {
  var result = [];
  var paths = [];
  var one_path = [];
  var src, dst;
  var connected;

  var queue = [];
  var path = [];
  var node;
  var cond;
  var adjacent = [];
  var pair = [];

  //if 2 nodes are directly connected, automatically not CI
  for (var x = 0; x < Xarray.length; x++) {
    for (var y = 0; y < Yarray.length; y++) {
      src = Xarray[x];
      dst = Yarray[y];
      connected = d_graph.checkDirectlyConnected(src, dst);
      if (connected) {
        one_path = [src, connected, dst];
        pair.push(one_path);

        paths.push(pair);
        result['CI'] = false;
        result['Pairs'] = paths;
        console.log("NO: Nodes are directly connected");
        console.log(pair);
        console.log(result);
        return result;
      }
    }
  }
  //perform bfs and store path as you go
  //if I run into a Y node then look back at path and see if it fulfills a condition
  for (var x = 0; x < Xarray.length; x++) {
    src = Xarray[x];
    queue.push([src]);
    while (queue.length > 0) {
      path = queue.shift();
      // console.log("path is = " + String(path));
      node = path[path.length - 1];
      // console.log("node is = " + String(node));

      if (Yarray.includes(node)) {
        match = false;
        //check if path fulfills any conditions
        for (var j = 1; j < path.length - 1; j++) {
          pair = [];
          one_path = checkConditions(d_graph, path, j, Earray);
          match = one_path.pop();
          condition = one_path.pop();
          if (match) {
            pair.push(one_path);
            pair.push(condition);
            paths.push(pair);
            result['CI'] = true;
            result['Pairs'] = paths;
            console.log("Pair = ");
            console.log(pair);
            break;
          }
        }
        if (match == false) {
            paths = [];
            pair = [];
            one_path = tracePath(d_graph, path);

            pair.push(one_path);
            paths.push(pair);
            result['CI'] = false;
            result['Pairs'] = paths;
            console.log("NO: No conditions matched");
            console.log(pair);
            console.log(result);
            return result;
        }
      }

      adjacent = u_graph.adjacency_dict[node];
      for (var a = 0; a < adjacent.length; a++) {
        new_path = path.slice();
        if (!path.includes(adjacent[a])) {
          new_path.push(adjacent[a]);
          queue.push(new_path);
        }
      }
    }
  }
  console.log("YES: Conditionally Independent");
  console.log(result);
  return result;
}

var answer = conditionalIndependence(d_graph3, u_graph3, X, Y, E);


/*
NOTES:
- only 1 element in Xarray and Yarray
- If not conditionally independent, need to check which condition fails
*/
