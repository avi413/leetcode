/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 *
 * Given the roots of two binary trees p and q,
 * write a function to check if they are the same or not.
 * Two binary trees are considered the same if they are structurally identical, 
 * and the nodes have the same value.
 * time o(n)
 * space O(1)
 */
 var isSameTree = function(p, q) {
    if(!q && !p) return true;
     
    if(!q || !p) return false;
     
    if(p.val !== q.val) return false;
     
     return isSameTree(p.right, q.right) && isSameTree(p.left, q.left)
 };