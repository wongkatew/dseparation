$(document).ready(function() {
  $('#simplebutton').click(function() {
    $("#exploreGraph").attr("src","images/simplegraph.png");
  });

  $('#complexbutton').click(function() {
    $('#exploreGraph').attr("src", "images/complexgraph.png");
  });

  $('#challengebutton').click(function() {
    $('#exploreGraph').attr("src", "images/challengegraph.png");
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

});
