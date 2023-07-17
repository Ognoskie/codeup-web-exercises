// Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).
//
//
//
//     Example 1:
//
// Input:
//     n = 10
//         ["call","call","call"]
// Output: [10,11,12]
// Explanation:
//     counter() = 10 // The first time counter() is called, it returns n.
// counter() = 11 // Returns 1 more than the previous time.
// counter() = 12 // Returns 1 more than the previous time.
// Example 2:
//
// Input:
//     n = -2
//         ["call","call","call","call","call"]
// Output: [-2,-1,0,1,2]
// Explanation: counter() initially returns -2. Then increases after each sebsequent call.
//
//
//     Constraints:
//
// -1000 <= n <= 1000
// At most 1000 calls to counter() will be made


// let counter = 0
// let createCounter = function(n) {
//     counter++
//     console.log(counter)
// }









// problem 200 number of islands


// Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.
//
//     An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.
//
//
//
//     Example 1:
//
// Input: grid = [
//     ["1","1","1","1","0"],
//     ["1","1","0","1","0"],
//     ["1","1","0","0","0"],
//     ["0","0","0","0","0"]
// ]
// Output: 1
// Example 2:
//
// Input: grid = [
//     ["1","1","0","0","0"],
//     ["1","1","0","0","0"],
//     ["0","0","1","0","0"],
//     ["0","0","0","1","1"]
// ]
// Output: 3

//
// /**
//  * @param {character[][]} grid
//  * @return {number}
//  */


const getAdjNeighbors = (i, j, grid, visited) => {
    const adjNeighbors = [];

    if (i > 0 && !visited[i - 1][j]) adjNeighbors.push([i - 1, j]);
    if (i < grid.length - 1 && !visited[i + 1][j])adjNeighbors.push([i + 1, j]);

    if (j > 0 && !visited[i][j - 1]) adjNeighbors.push([i,j -1]);
    if (j < grid.length - 1 && !visited[i][j + 1])adjNeighbors.push([i, j + 1]);

    return adjNeighbors;
}

const dFS = (i, j, grid, visited) => {
    const stack = [[i, j]];
    let islandSize = 0;

    while(stack.length) {
        let curNode = stack.pop();

        let [i, j] = curNode;
        //check if visited at i and j;
        if (visited[i][j]) continue;
        visited[i][j] = true;

        // check if cell is part of an island
        if (grid[i][j] === "0") continue;
        islandSize++;

        let adjNeighbors = getAdjNeighbors(i, j, grid, visited);

        stack.push(...adjNeighbors);
    }
    // this means "if islandSize is greater than 0 then return true (then return true = ?) else (else = :) return false"
    return islandSize > 0 ? true : false;
};

const numIslands = function(grid) {
    const visited = grid.map(row => row.map(cell => false));
    let islandCount = 0;


    for(let i = 0; i < grid.length; i++) {
        for(let j = 0; j < grid[i].length; j++) {
            if (dFS(i, j, grid, visited)) islandCount++;
        }
    }


    return islandCount;

};























