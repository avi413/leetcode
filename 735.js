/**
 * @param {number[]} asteroids
 * @return {number[]}
 *
 * We are given an array asteroids of integers representing asteroids in a row.
 * For each asteroid, the absolute value represents its size, 
 * and the sign represents its direction (positive meaning right, negative meaning left). 
 * Each asteroid moves at the same speed.
 * Find out the state of the asteroids after all collisions. 
 * If two asteroids meet, the smaller one will explode. If both are the same size, 
 * both will explode. Two asteroids moving in the same direction will never meet.
 *
 *
 * time - O(n);
 * space - O(n)
 *
 */
 var asteroidCollision = function(asteroids) {
    const stack = [];
    
    for(let a of asteroids) {
        while(stack.length > 0 && a < 0 && stack[stack.length-1] > 0) {
            let diff = a + stack[stack.length-1]
            if(diff< 0){
               stack.pop();
            } else if (diff > 0) {
             a = 0
           } else {
           stack.pop();
            a = 0
           }
        }
        if(a !=  0)   stack.push(a)
    }
    return stack
};