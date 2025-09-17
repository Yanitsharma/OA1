import yanitSharma from "../../public/yt.png"
import yanit from "../../public/ty.png"
import './Visa.css'; // optional: for additional styling
const Amazon = () => {
  return (
    <>
    <div className='cont'>
    <div className="problem-container">
        <h1>Problem Statement: Smallest Positive Integer K</h1>
        <p>
            You are given a positive integer <code>N</code>. Your task is to find the smallest positive integer <code>K</code> such that 
            <code>(K XOR (K-1))</code> equals <code>N</code>.
        </p>
        <p>
            If no such <code>K</code> exists, return <code>-1</code>.
        </p>
        <p>Here, <code>XOR</code> denotes the bitwise XOR operator, represented by <code>^</code>.</p>

        <h3>Input Format:</h3>
        <ul>
            <li>The first line contains an integer <code>T</code>, the number of test cases.</li>
            <li>Each of the next <code>T</code> lines contains a single integer <code>N</code>.</li>
        </ul>

        <h3>Output Format:</h3>
        <ul>
            <li>For each test case, output the smallest positive integer <code>K</code>, or <code>-1</code> if no such <code>K</code> exists.</li>
        </ul>

        <h3>Constraints:</h3>
        <ul>
            <li><code>1 ≤ T ≤ 100</code></li>
            <li><code>1 ≤ N ≤ 10^9</code></li>
        </ul>

        <h3>Examples:</h3>
        <h4>Example 1:</h4>
        <div className="example">
            <p><strong>Input:</strong></p>
            <pre>2
1
2</pre>
            <p><strong>Output:</strong></p>
            <pre>1
-1</pre>
            <p><strong>Explanation:</strong></p>
            <ul>
                <li>For the first test case, <code>N = 1</code>:</li>
                <ul>
                    <li>Try <code>K = 1</code>: <code>K XOR (K-1) = 1 XOR 0 = 1</code>.</li>
                    <li>Hence, the smallest positive integer is <code>K = 1</code>.</li>
                </ul>
                <li>For the second test case, <code>N = 2</code>:</li>
                <ul>
                    <li>Try all possible values of <code>K</code> but none satisfy <code>K XOR (K-1) = 2</code>.</li>
                    <li>Thus, the output is <code>-1</code>.</li>
                </ul>
            </ul>
        </div>

        <h4>Example 2:</h4>
        <div className="example">
            <p><strong>Input:</strong></p>
            <pre>2
3
7</pre>
            <p><strong>Output:</strong></p>
            <pre>2
4</pre>
            <p><strong>Explanation:</strong></p>
            <ul>
                <li>For the first test case, <code>N = 3</code>:</li>
                <ul>
                    <li>Try <code>K = 2</code>: <code>K XOR (K-1) = 2 XOR 1 = 3</code>.</li>
                    <li>Hence, the smallest positive integer is <code>K = 2</code>.</li>
                </ul>
                <li>For the second test case, <code>N = 7</code>:</li>
                <ul>
                    <li>Try <code>K = 4</code>: <code>K XOR (K-1) = 4 XOR 3 = 7</code>.</li>
                    <li>Hence, the smallest positive integer is <code>K = 4</code>.</li>
                </ul>
            </ul>
        </div>

        <h3>Notes:</h3>
        <ul>
            <li>The XOR operation works on the binary representation of numbers.</li>
            <li>If no valid <code>K</code> exists for a given <code>N</code>, output <code>-1</code>.</li>
        </ul>
    </div>
</div>

<div className='cont'>
    <div className="problem-container">
        <h1>Problem Statement: Cousins of a Given Node in Binary Tree</h1>
        <p>
            Given a binary tree with <code>N</code> nodes and a node value from this tree, return a list containing the values of the cousins of the given node, sorted in non-decreasing order.
        </p>
        <p>
            <strong>Note:</strong> Two nodes are considered cousins if they have the same depth or level in the binary tree but have different parents.
        </p>
        <p>
            <strong>Additional Notes:</strong>
            <ul>
                <li>No two nodes in the binary tree will have the same value.</li>
                <li>If no cousins exist, return <code>-1</code>.</li>
            </ul>
        </p>

        <h3>Input Format:</h3>
        <ul>
            <li>The first line contains an integer <code>T</code>, the number of test cases.</li>
            <li>Each test case includes:</li>
            <ul>
                <li>A representation of a binary tree in level order (use <code>-1</code> to denote null nodes).</li>
                <li>An integer value <code>nodeVal</code>, representing the node for which you need to find cousins.</li>
            </ul>
        </ul>

        <h3>Output Format:</h3>
        <ul>
            <li>For each test case, output a list of integers representing the cousins of the given node, sorted in non-decreasing order. If no cousins exist, output <code>-1</code>.</li>
        </ul>

        <h3>Constraints:</h3>
        <ul>
            <li><code>1 ≤ T ≤ 100</code></li>
            <li><code>1 ≤ N ≤ 3000</code></li>
            <li><code>1 ≤ nodeVal ≤ 10^9</code></li>
        </ul>

        <div className="nt">
        <img src={yanitSharma} className="tt"></img>
        <img src={yanit} className="tt"></img>
        </div>
        <ul>
            <li>Use a breadth-first search (BFS) approach to traverse the binary tree and identify nodes at the same level.</li>
            <li>Exclude nodes with the same parent as the given node while calculating cousins.</li>
            <li>Sort the resulting list of cousin values in non-decreasing order.</li>
        </ul>
    </div>
</div>

    </>
  )
}
export default Amazon;
