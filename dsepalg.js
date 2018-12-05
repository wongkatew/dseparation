// list of graphs

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
      return 'l'
    }
    else {
      return false
    }
  }
  //TODO: check for cycles
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
      return true
    }
    else {
      return false
    }
  }
}

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
  console.log(path);
  console.log("index = " + index);
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

var all_Graphs = [];

//Initialize test graph
var d_graph = new DGraph(8);
var u_graph = new UGraph(8);
var d_graph1 = new DGraph(4);
var u_graph1 = new UGraph(4);

var nodes = ['A','B', 'C', 'D', 'E', 'F', 'G', 'H']
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

all_Graphs[d_graph] = u_graph;
all_Graphs[d_graph1] = u_graph1;

X = ['D'];
Y = ['C'];
E = ['A'];

//Given: {A, B, C, D, E, F, G, H}
//TODO: hardcode the adjacency list
//User input X, Y, E (arrays)

function conditionalIndependence(d_graph, u_graph, Xarray, Yarray, Earray) {
  var result = [];
  var paths = []
  var one_path = [];
  var src, dst;
  var connected;

  var visited_paths = [];
  var queue = [];
  var path = [];
  var node;
  var cond = [];
  var adjacent = [];
  var found = false;

  //if 2 nodes are directly connected, automatically not CI
  for (var x = 0; x < Xarray.length; x++) {
    for (var y = 0; y < Yarray.length; y++) {
      src = Xarray[x];
      dst = Yarray[y];

      connected = d_graph.checkDirectlyConnected(src, dst);
      if (connected) {
        one_path = [src, connected, dst, c1];
        paths.push(one_path);
        result['CI'] = false;
        result['Pairs'] = paths;
        console.log("NO: Nodes are directly connected");
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
    while (queue.length > 0 && Yarray.length > 0) {
      path = queue.shift();
      console.log("path is = " + String(path));
      node = path[path.length - 1];
      console.log("node is = " + String(node));

      if (Yarray.includes(node)) {
        //check if path fulfills any conditions
        var j = 1;
        while (!found && j < (path.length - 1)) {
          one_path = checkConditions(d_graph, path, j, Earray);
          cond = one_path.pop();
          if (cond) {
            paths.push(one_path);
            result['CI'] = true;
            result['Pairs'] = paths;
            found = true;

            //remove dst_node from Yarray
            dst = Yarray.indexOf(node);
            Yarray.splice(dst, 1);
            // console.log("Yarray");
            // console.log(Yarray);
          }
          j++;
        }
        if (result['CI'] != true) {
          one_path = tracePath(d_graph, path);
          paths.push(one_path);
          result['CI'] = false;
          result['Pairs'] = paths;
          console.log("NO: No conditions matched");
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

answer = conditionalIndependence(d_graph1, u_graph1, X, Y, E);


/*
NOTES:
- for now assuming all of our graphs do not have cycles
- only 1 element in Xarray and Yarray
- If not conditionally independent, need to check which condition fails first
- condition 3 need to check for children
*/
