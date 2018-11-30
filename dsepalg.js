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
class Graph {

  constructor(num_nodes) {
    this.num__of_nodes = num_nodes;
    this.adjacency_list = {};
  }

  addNode(node) {
    this.adjacency_list.set(node, []);
  }

  addEdge(src_node, dst_node) {
    this.adjacency_list.get(src_node).push(dst_node);
  }

  checkCycle() {
    //check for cycles -- avoid infinite loops
  }
}

//Given: {A, B, C, D, E, F, G, H}
//TODO: hardcode the adjacency list
//User input X, Y, E

/*
TODO: figure out how


list_to_return
for each src_node x
  for each dst_node y
    if x and y are directly connected
      return [(string "x, direction, y", all 3 conditions]; not CI
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







*/
