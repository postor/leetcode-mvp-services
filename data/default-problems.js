module.exports = [
	{
		id: 1,
		title: "Two Sum",
		key: "two-sum",
		difficulty: "easy",
		codes: `/**
* @param {number[]} nums
* @param {number} target
* @return {number[]}
*/
var twoSum = function(nums, target) {
};`,
		description: `Given an array of integers, return **indices** of the two numbers such that they add up to a specific target.

You may assume that each input would have **exactly** one solution, and you may not use the same element twice.
    
**Example:**

\`\`\`
Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
\`\`\``
	},
	{
		id: 2,
		title: "Add Two Numbers",
		key: "add-two-numbers",
		difficulty: "Medium",
		codes: `/**
* Definition for singly-linked list.
* function ListNode(val) {
*     this.val = val;
*     this.next = null;
* }
*/
/**
* @param {ListNode} l1
* @param {ListNode} l2
* @return {ListNode}
*/
var addTwoNumbers = function(l1, l2) {
};`,
		description: `You are given two **non-empty** linked lists representing two non-negative integers. The digits are stored in **reverse order** and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

**Example:**

\`\`\`
Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.
\`\`\``
	}
];