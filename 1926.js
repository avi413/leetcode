/**
 * @param {character[][]} maze
 * @param {number[]} entrance
 * @return {number}
 * You are given an m x n matrix maze (0-indexed) 
 * with empty cells (represented as '.') and walls (represented as '+'). 
 * You are also given the entrance of the maze, 
 * where entrance = [entrancerow, entrancecol] 
 * denotes the row and column of the cell you are initially standing at.
 * In one step, you can move one cell up, down, left, or right. 
 * You cannot step into a cell with a wall, and you cannot step outside the maze. 
 * Your goal is to find the nearest exit from the entrance. 
 * An exit is defined as an empty cell that is at the border of the maze. 
 * The entrance does not count as an exit.
 * Return the number of steps in the shortest path from the entrance to the nearest exit, 
 * or -1 if no such path exists.
 * time - O(n)
 * space - O(n)
 */
 var nearestExit = function(maze, entrance) {

    for(let i = 0; i < maze[0].length; i++) {
        //top row
        markBorders(0, i , maze, entrance);
        //buttom row;
        markBorders(maze.length - 1, i , maze, entrance);
    }
    
    for(let i = 0; i < maze.length; i++) {
        //left coll
       markBorders(i, 0 , maze, entrance);
        //right coll
       markBorders(i, maze[0].length - 1 , maze, entrance);
    }
    
    const queue = [[...entrance,0]];
    const directions = [[0,-1],[-1,0],[1,0],[0,1]];
    
    while(queue.length > 0) {
        let [curRow,CurrCell, d] = queue.shift(); 
        d++;
        
        for(let [x,y] of directions){
            let newRow = curRow+x;
            let newColl = CurrCell+y;
            if(isOutOfBoard(newRow, newColl, maze)) continue;
            if(isExit(newRow, newColl, maze)) return d;
            if(maze[newRow][newColl] == "+" || maze[newRow][newColl] == "V") continue;
            if(maze[newRow][newColl] == ".") {
                maze[newRow][newColl] = "V"
                queue.push([newRow,newColl, d]);
            }
        }
    }
    return -1

};

function markBorders(r,c,matrix, entrance) {
    if(r == entrance[0] && c == entrance[1]) return

    if(matrix[r][c] == "." ) matrix[r][c] = "E"
}


function isExit(r, c, matrix) {
    if(matrix[r][c] == "E") return true
    return false
}

function isOutOfBoard(r, c, matrix) {
    if(r < 0 || c < 0 || r > matrix.length -1  || c > matrix[r].length -1 ) return true
    return false
}