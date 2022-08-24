/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 * -------------------------------------
 * Given the root of a binary tree, 
 * invert the tree, and return its root.
 * 
 * time  O(n)
 * space O(1)
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
 var invertTree = function(root) {
    //Stopping conditions of the recursion
    if(!root) return null

    //swapp nodes
    let temp = root.left
    root.left = root.right;
    root.right = temp;

    //Call recursion for each node
    invertTree(root.left)
    invertTree(root.right)
    
    return root;
};