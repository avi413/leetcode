/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * 
 * Given two strings s and t, 
 * return true if t is an anagram of s, and false otherwise.
 * An Anagram is a word or phrase formed by rearranging 
 * the letters of a different word or phrase, 
 * typically using all the original letters exactly once.
 * time O(n)
 * space O(m+n)
 */

 var isAnagram = function(s, t) {
    //space O(m + n)
    const sSet =  {}
    const tSet=  {}

    if(s.length != t.length) return false
    //time O(n)
    for( let i = 0 ; i < s.length ; i ++) {
        s[i] in sSet ? sSet[s[i]] += 1 : sSet[s[i]]= 1
    }
    //time O(m)
    for( let i = 0 ; i < s.length ; i ++) {
        t[i] in tSet ? tSet[t[i]] += 1 : tSet[t[i]] = 1
    }
   //time O(max(m || n )) => //time O(n  || m)
    if(_.isEqual(sSet, tSet)) return true
    return false
};