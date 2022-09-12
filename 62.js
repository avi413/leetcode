/**
 * @param {number} m
 * @param {number} n
 * @return {number}
*/
var uniquePaths = function(m, n) {
    const table = Array(m).fill().map(()=>Array(n).fill());
    for(let i = 0; i < table.length ; i++ ) table[i][0] = 1;
    for(let i = 0; i < table[0].length ; i++ ) table[0][i] = 1;
    
     for(let i = 1; i < table.length ; i++ ){
        for(let j = 1; j < table[i].length ; j++ ) {
            table[i][j] = table[i-1][j] + table[i][j-1]
        }
     }
    
    return table[m-1][n-1]
};
/*
O(n*m)



var uniquePaths = function(m, n, memo={}) {
    let key = m+","+n

    if(key in memo) return memo[key]

   if(m==1 && n==1) return 1;
   if(m==0 || n==0) return 0;
  memo[key] = uniquePaths(m-1,n,memo) +  uniquePaths(m,n-1,memo)

    return uniquePaths(m-1,n,memo) +  uniquePaths(m,n-1,memo)
};

*/