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

  $('#practicebutton').click(function() {
    currProb++;

    $('input:radio').prop('checked', false);
    document.getElementById('practiceresults').innerHTML = 'Try a problem! Your feedback will be here.';
    document.getElementById('hint').innerHTML = '';

    if (currProb < practiceProblems.length) {
      $('#practiceGraph').attr("src", practiceProblems[currProb].graph);
      document.getElementById('practiceprob').innerHTML = '';
      $('#practiceprob').append(practiceProblems[currProb].problem);
    } else {
      currProb = 0;
      $('#practiceGraph').attr("src", practiceProblems[currProb].graph);
      document.getElementById('practiceprob').innerHTML = '';
      $('#practiceprob').append(practiceProblems[currProb].problem);
    }

  });

  $('#checkpracticebutton').click(function() {
    let trueChecked = $('#true').is(':checked');
    let falseChecked = $('#false').is(':checked');
    if (!trueChecked && !falseChecked) {
      alert("Please select True or False.");
      return;
    }
    if (trueChecked) {
      if (practiceProblems[currProb].answer == true) {
        document.getElementById('practiceresults').innerHTML = '';
        $('#practiceresults').append("Correct!");
        // TODO: More reasons
      } else {
        document.getElementById('practiceresults').innerHTML = '';
        $('#practiceresults').append("Incorrect.");
        // TODO: More reasons
      }
    } else {
      if (practiceProblems[currProb].answer == false) {
        document.getElementById('practiceresults').innerHTML = '';
        $('#practiceresults').append("Correct!");
        // TODO: More reasons
      } else {
        document.getElementById('practiceresults').innerHTML = '';
        $('#practiceresults').append("Incorrect.");
        // TODO: More reasons
      }
    }

  });

  $('#hintlink').click(function() {
    document.getElementById('hint').innerHTML = '';
    $('#hint').append(practiceProblems[currProb].hint);
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

// TODO: Create check that Heero's algorithm works
