/**
 * @param {string} s
 * @return {boolean}
 *
 * Given a string s containing just the characters
 * '(', ')', '{', '}', '[' and ']', 
 * determine if the input string is valid.
 * An input string is valid if:
 * Open brackets must be closed by the same type of brackets.
 * Open brackets must be closed in the correct order.
 * Every close bracket has a corresponding open bracket of the same type.
 * time - O(n)
 * space O(n)
 */
 var isValid = function(s) {
    if(s.lenght === 0) return true;
    const stack = [];
    
    for(let char of s) {
        if(isOpen(char)) stack.push(char);   
        else if(isClose(char) && 
                getType(char) === getType(stack[stack.length -1]) && 
                isOpen(stack[stack.length -1])
               ){
          stack.pop();
        }
        else {
            stack.push(char);
        }  
         console.log(stack,isClose(char), getType(stack[stack.length - 1]))
    }   
    return stack.length == 0 ? true : false
};


function isOpen(char) {
    if(char == "{" || char == "(" || char == "[") return true
    return false
}

function isClose(char) {
    if(char == "}" || char == ")" || char == "]") return true
    return false
}

function getType(char) {
    if(char == "{"  || char == "}") return "curly"
    if(char == ")" || char == "(") return "round"
    if(char == "[" || char == "]") return "cube"
}