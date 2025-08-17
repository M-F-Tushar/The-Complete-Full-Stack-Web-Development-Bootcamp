// Place beepers diagonally from bottom-left to top-right.

function diagonalMoveAndBeeper() {
    move();
    turnLeft();
    move();
    putBeeper();
    turnRight(); // Note: turnRight() might need to be implemented as turnLeft() three times
}

function main() {
    putBeeper(); // First beeper at starting position
    diagonalMoveAndBeeper();
    diagonalMoveAndBeeper();
    diagonalMoveAndBeeper();
    diagonalMoveAndBeeper();
}