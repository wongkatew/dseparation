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

function performBfs(graph, src_node) {
  var visited = [];
  for (var i = 0; i < graph.num__of_nodes; i++) {
    all_nodes = graph.list_of_nodes;
    visited[all_nodes[i]] = false;
  }

  var queue = new Queue();
  visited[src_node] = true;
  queue.enqueue(src_node);

  while(!queue.isEmpty()) {
    var element = queue.dequeue();
    var list = graph.adjacency_dict[element];

    for (var j in list) {
      var n = list[j];

      if (!visited[n]) {
        visited[n] = true;
        queue.enqueue(n);
      }
    }
  }
  return visited;
}

//Initialize test graph
var d_graph = new DGraph(8);
var u_graph = new UGraph(8);

var nodes = ['A','B', 'C', 'D', 'E', 'F', 'G', 'H']
for (i = 0; i < nodes.length; i++) {
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

var r = 'r';
var l = 'l';
var c1 = 'condition1';
var c2 = 'condition2';
var c3 = 'condition3';

X = ['A'];
Y = ['G'];
E = ['D', 'B'];

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
      console.log(path);

      node = path.pop();
      console.log("node is " + node);

      if (Yarray.includes(node)) {
        //check if path fulfills any conditions
      }
    }
  }
}

answer = conditionalIndependence(d_graph, u_graph, X, Y, E);
// console.log(answer);
// conn = performBfs(u_graph, X[0]);
// console.log(conn);

/*

list_to_return
for each src_node x
  for each dst_node y
    if x and y are directly connected
      return [(path, all 3 conditions]; not CI
    else
      while not done?
        look for a path between x and y
        if (path fulfills condition1)
          add (path, condition1) to list_to_return
          break
        else if (path fulfills condition2)
          add (path, condition1) to list_to_return
          break
        else if (path fulfills condition3)
          add (path, condition3) to list_to_return
          break
        else
          return [(path, condition1)]; not CI

NOTES:
- for now assuming all of our graphs do not have cycles
- only 1 element in Xarray and Yarray
- Need to figure out how to structure return to Kate
*/
