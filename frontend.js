let exampleGraphs = [
  { numNodes: 4, nodes: ['A', 'B', 'C', 'D'] },
  { numNodes: 6, nodes: ['A', 'B', 'C', 'D', 'E', 'F'] },
  { numNodes: 9, nodes: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H',' I']}
];
let currentGraph = 0;

$(document).ready(function() {
  $('#simplebutton').click(function() {
    $("#exploreGraph").attr("src","images/simplegraph.png");
    currentGraph = 0;
    var i;
    document.getElementById('setX').innerHTML = '';
    for (i = 0; i < exampleGraphs[0].numNodes; i++) {
      let curr = exampleGraphs[0];
      let newHTML = '<div class="form-check"><input class="form-check-input" type="checkbox"'
        + 'name="x' + (i+1) + '\" id="x' + (i+1) + '" value="' + curr.nodes[i] + '\\">'
        + '<label class="form-check-label" for="x' + (i+1) +'">' + curr.nodes[i] + '<\/label><\/div>';
      $('#setX').append(newHTML);
    }
    document.getElementById('setY').innerHTML = '';
    for (i = 0; i < exampleGraphs[0].numNodes; i++) {
      let curr = exampleGraphs[0];
      let newHTML = '<div class="form-check"><input class="form-check-input" type="checkbox"'
        + 'name="y' + (i+1) + '\" id="y' + (i+1) + '" value="' + curr.nodes[i] + '\\">'
        + '<label class="form-check-label" for="y' + (i+1) +'">' + curr.nodes[i] + '<\/label><\/div>';
      $('#setY').append(newHTML);
    }
    document.getElementById('setE').innerHTML = '';
    for (i = 0; i < exampleGraphs[0].numNodes; i++) {
      let curr = exampleGraphs[0];
      let newHTML = '<div class="form-check"><input class="form-check-input" type="checkbox"'
        + 'name="e' + (i+1) + '\" id="e' + (i+1) + '" value="' + curr.nodes[i] + '\\">'
        + '<label class="form-check-label" for="e' + (i+1) +'">' + curr.nodes[i] + '<\/label><\/div>';
      $('#setE').append(newHTML);
    }
  });

  $('#complexbutton').click(function() {
    $('#exploreGraph').attr("src", "images/complexgraph.png");
    currentGraph = 1;
    var i;
    document.getElementById('setX').innerHTML = '';
    for (i = 0; i < exampleGraphs[1].numNodes; i++) {
      let curr = exampleGraphs[1];
      let newHTML = '<div class="form-check"><input class="form-check-input" type="checkbox"'
        + 'name="x' + (i+1) + '\" id="x' + (i+1) + '" value="' + curr.nodes[i] + '\\">'
        + '<label class="form-check-label" for="x' + (i+1) +'">' + curr.nodes[i] + '<\/label><\/div>';
      $('#setX').append(newHTML);
    }
    document.getElementById('setY').innerHTML = '';
    for (i = 0; i < exampleGraphs[1].numNodes; i++) {
      let curr = exampleGraphs[1];
      let newHTML = '<div class="form-check"><input class="form-check-input" type="checkbox"'
        + 'name="y' + (i+1) + '\" id="y' + (i+1) + '" value="' + curr.nodes[i] + '\\">'
        + '<label class="form-check-label" for="y' + (i+1) +'">' + curr.nodes[i] + '<\/label><\/div>';
      $('#setY').append(newHTML);
    }
    document.getElementById('setE').innerHTML = '';
    for (i = 0; i < exampleGraphs[1].numNodes; i++) {
      let curr = exampleGraphs[1];
      let newHTML = '<div class="form-check"><input class="form-check-input" type="checkbox"'
        + 'name="e' + (i+1) + '\" id="e' + (i+1) + '" value="' + curr.nodes[i] + '\\">'
        + '<label class="form-check-label" for="e' + (i+1) +'">' + curr.nodes[i] + '<\/label><\/div>';
      $('#setE').append(newHTML);
    }
  });

  $('#challengebutton').click(function() {
    $('#exploreGraph').attr("src", "images/challengegraph.png");
    currentGraph = 2;
    var i;
    document.getElementById('setX').innerHTML = '';
    for (i = 0; i < exampleGraphs[2].numNodes; i++) {
      let curr = exampleGraphs[2];
      let newHTML = '<div class="form-check"><input class="form-check-input" type="checkbox"'
        + 'name="x' + (i+1) + '\" id="x' + (i+1) + '" value="' + curr.nodes[i] + '\\">'
        + '<label class="form-check-label" for="x' + (i+1) +'">' + curr.nodes[i] + '<\/label><\/div>';
      $('#setX').append(newHTML);
    }
    document.getElementById('setY').innerHTML = '';
    for (i = 0; i < exampleGraphs[2].numNodes; i++) {
      let curr = exampleGraphs[2];
      let newHTML = '<div class="form-check"><input class="form-check-input" type="checkbox"'
        + 'name="y' + (i+1) + '\" id="y' + (i+1) + '" value="' + curr.nodes[i] + '\\">'
        + '<label class="form-check-label" for="y' + (i+1) +'">' + curr.nodes[i] + '<\/label><\/div>';
      $('#setY').append(newHTML);
    }
    document.getElementById('setE').innerHTML = '';
    for (i = 0; i < exampleGraphs[2].numNodes; i++) {
      let curr = exampleGraphs[2];
      let newHTML = '<div class="form-check"><input class="form-check-input" type="checkbox"'
        + 'name="e' + (i+1) + '\" id="e' + (i+1) + '" value="' + curr.nodes[i] + '\\">'
        + '<label class="form-check-label" for="e' + (i+1) +'">' + curr.nodes[i] + '<\/label><\/div>';
      $('#setE').append(newHTML);
    }
  });

  let currProb = 1;
  $('#practicebutton').click(function() {
    currProb++;
    if (currProb === 1) {
      $('#practiceGraph').attr("src", "images/practicegraph1.png");
    } else if (currProb === 2) {
      $('#practiceGraph').attr("src", "images/practicegraph2.png");
    } else if (currProb === 3) {
      $('#practiceGraph').attr("src", "images/practicegraph1.png");
    } else if (currProb === 4) {
      $('#practiceGraph').attr("src", "images/practicegraph1.png");
    } else if (currProb === 5) {
      $('#practiceGraph').attr("src", "images/practicegraph1.png");
    } else if (currProb === 6) {
      $('#practiceGraph').attr("src", "images/practicegraph1.png");
    } else if (currProb === 7) {
      $('#practiceGraph').attr("src", "images/practicegraph1.png");
    } else if (currProb === 8) {
      $('#practiceGraph').attr("src", "images/practicegraph1.png");
    } else if (currProb === 9) {
      $('#practiceGraph').attr("src", "images/practicegraph1.png");
    } else if (currProb === 10) {
      $('#practiceGraph').attr("src", "images/practicegraph2.png");
    } else if (currProb === 11) {
      $('#practiceGraph').attr("src", "images/practicegraph2.png");
    } else if (currProb === 12) {
      $('#practiceGraph').attr("src", "images/practicegraph2.png");
    } else if (currProb === 13) {
      $('#practiceGraph').attr("src", "images/practicegraph2.png");
    } else if (currProb === 14) {
      $('#practiceGraph').attr("src", "images/practicegraph2.png");
    } else if (currProb === 15) {
      $('#practiceGraph').attr("src", "images/practicegraph2.png");
    } else {
      $('#practiceGraph').attr("src", "images/practicegraph2.png");
      currProb = 0
    }

  });

  $('#examplebutton').click(function() {
    var i;
    let curr = exampleGraphs[currentGraph];
    for (i = 0; i < curr.numNodes; i++) {

      // make sure they don't try to put X's with the Y's and the E's
      let xChecked = $('#x' + (i+1)).is(":checked");
      let yChecked = $('#y' + (i+1)).is(":checked");
      let eChecked = $('#e' + (i+1)).is(":checked");
      let numChecked = 0;
      if (xChecked) {
        numChecked++;
      }
      if (yChecked) {
        numChecked++;
      }
      if (eChecked) {
        numChecked++;
      }
      if (numChecked > 1) {
        alert("Node " + curr.nodes[i] + " cannot be in more than one set.\n"
          + "It must be in either set X, set Y, or set E.");
          return;
      }
    }
    // Validation is done, now submit to the algorithm to see if they're right
    // TODO: Get result from the algorithm

    // TODO: Display the result on the page
  });
});