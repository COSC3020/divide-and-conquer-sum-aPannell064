# Divide and Conquer Sum

In the lectures, we've covered merge sort, which uses a divide-and-conquer
approach to sort an array of values. There are many more algorithms that take
such an approach. Implement a function that computes the sum of an array of
integers using divide and conquer, using the template in `code.js`. Test your
new function; I've provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`.

The recursive calls sum up the numbers in the base case, and "merges" the sums
of the recursive calls otherwise. For example, the return value for the array `a
= [1,5,-1,4]` is `9`.

To make it a bit more interesting, instead of splitting into two sub-arrays like
in merge sort, I want you to split into *three* sub-arrays at each divide step.

Hint: Like in the implementation of merge sort, you may need a helper function
that does the actual recursion.

## Runtime Analysis

What is the runtime of the algorithm that you implemented? Provide a recurrence
relation for $T(n)$ as we did for merge sort (you can ignore constant factors)
and solve it as we did in the lectures. Give the final $\Theta$ complexity.

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.

##### Recurrence Relation

If n is less than or equal to one, that function call takes just one step as it 
just immediately returns a value. Otherwise, it makes three recursive calls, splitting
the array into three roughly equal parts. All other actions are caried out in constant
time. Therefore the recurrence relation is as follows:

$T(1) = 1$ if $n \le 1$

$T(n) = 3T(\frac{n}{3}) + 1$ if $n > 1$

The 1 at the end of the recurrence relation represents the operations done in constant
time as any extra constants won't mattter asypmtotically. 

##### Solution

Observing just the recurrence piece:

$T(n) = 3T(\frac{n}{3}) + 1 = 3(3T(\frac{n}{3*3}) + 1) + 1 = 9T(\frac{n}{9}) + 3 + 1$

$T(n) = 3(9T(\frac{n}{9*3}) + 3 + 1) + 1 = 27T(\frac{n}{27}) + 9 + 3 + 1$

With this, we can deduce that:

$T(n) = 3^i * T(\frac{n}{3^i}) + \displaystyle\sum_{k=0} ^{i} {3^k}$ 

We can substitute $log_3 (n)$ for i to get:

$3^{log_3(n)} * T(\frac{n}{3^{log_3(n)}}) + \displaystyle\sum_{k=0} ^{log_3(n)} {3^k} = log_3(n) * T(1) + \displaystyle\sum_{k=0} ^{log_3 (n)} {3^k}$
