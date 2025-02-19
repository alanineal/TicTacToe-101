//       ***********************
//            INSTRUCTIONS
//       ***********************
// 1. Read the code below one block at a time.
// 2. Look for the @TODOs, and figure out how to fix them.
// next to each @TODO you will find tasks that need to be finished

let board = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

// The variable will change from X to O based on what player turn it is. We need to hold this so we can place an X or O on the board when they're clicked.

let currentMarker = "X";

// this "handleClick" function is called when a box is clicked. Here, "element" will hold the same value as "this" does in the HTML.
// "this" is a special word in JS but "element" could have been "thing" or "el" or whatever we wanted it to be as long as we use it again in the "console.log" statement
const handleClick = (element) => {
  console.log(`The element you clicked on has an id: ${element.id}`);

  // this next line prevents an X being changed to an O or an O being changed to an X by...
  //  checking to see if the square clicked has anything in it, if not continue

  if (!document.getElementById(element.id).innerHTML) {
    addMarker(element.id);
  }
};

// this function places the "currentMarker" inside the HTML element that was clicked and calls the "changeMarker" function.
const addMarker = (id) => {
  // @TODO-1: Open the console tab in your Chrome Inspector Tool and click on the top-left square to see what's logged to the console.
  console.log(`*** The current marker is:  ${currentMarker}. ***`);
  console.log(
    `Therefore, a  "${currentMarker}"  should be placed in the square with the id:  ${id}`
  );

  // @TODO-2: Build a line of code that will set the innerHTML property of the element that was clicked to the "currentMarker"

  // @TODO-2.5: MIX & MATCH, You will need the following pieces of code to build that line:
  // = currentMarker
  // .getElementById(id)
  // document
  // .innerHTML
  document.getElementById(id).innerHTML = currentMarker;

  const row = parseInt(id.charAt(0));
  const column = parseInt(id.charAt(2));

  board[row][column] = currentMarker;

  checkForWin();
};

  
// This "changeMarker" function changes "X" to "O" in the "currentMarker" variable or "O" to "X"
const changeMarker = () => {
  if (currentMarker === "X") {
    currentMarker = "O";
  } else {
    currentMarker = "X";
  }
};

const resetBoard = () => {
  const squares = document.getElementsByTagName("TD");

  for (i = 0; i < squares.length; i++) {
    console.log(squares[i].id);

    // sets the innerHTML to null to replace the "X" or "O"
    squares[i].innerHTML = null;
  }
  location.reload();
};

const checkForWin = () => {
  if (horizontalWin() || verticalWin() || diagonalWin()) {
    window.alert(`Player ${currentMarker} won!`);
  } else {
    changeMarker();
  }
};

const horizontalWin = () => {
  if (
    (board[0][0] == "X" && board[0][1] == "X" && board[0][2] == "X") ||
    (board[0][0] == "O" && board[0][1] == "O" && board[0][2] == "O")
  ) {
    return true;
  } else if (
    (board[1][0] == "X" && board[1][1] == "X" && board[1][2] == "X") ||
    (board[1][0] == "O" && board[1][1] == "O" && board[1][2] == "O")
  ) {
    return true;
  } else if (
    (board[2][0] == "X" && board[2][1] == "X" && board[2][2] == "X") ||
    (board[2][0] == "O" && board[2][1] == "O" && board[2][2] == "O")
  ) {
    return true;
  } else {
    return false;
  }
};

const verticalWin = () => {
  if (
    (board[0][0] == "X" && board[1][0] == "X" && board[2][0] == "X") ||
    (board[0][0] == "O" && board[1][0] == "O" && board[2][0] == "O")
  ) {
    return true;
  } else if (
    (board[0][1] == "X" && board[1][1] == "X" && board[2][1] == "X") ||
    (board[0][1] == "O" && board[1][1] == "O" && board[2][1] == "O")
  ) {
    return true;
  } else if (
    (board[0][2] == "X" && board[1][2] == "X" && board[2][2] == "X") ||
    (board[0][2] == "O" && board[1][2] == "O" && board[2][2] == "O")
  ) {
    return true;
  } else {
    return false;
  }
};

const diagonalWin = () => {
  if (
    (board[0][0] == "X" && board[1][1] == "X" && board[2][2] == "X") ||
    (board[0][0] == "O" && board[1][1] == "O" && board[2][2] == "O")
  ) {
    return true;
  } else if (
    (board[0][2] == "X" && board[1][1] == "X" && board[2][0] == "X") ||
    (board[0][2] == "O" && board[1][1] == "O" && board[2][0] == "O")
  ) {
    return true;
  } else {
    return false;
  }
};
