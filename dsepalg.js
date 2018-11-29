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
