import './Visa.css'; // optional: for additional styling
const Google = () => {
  return (
    <>
    <div className='cont'>
    <div className="problem-container">
        <h1>Problem Statement: Partition String into K Substrings</h1>
        <p>
            You are given a string <code>S</code> of length <code>N</code> consisting of digits from <code>'0'</code> to <code>'9'</code>. Your task is to partition the string into <code>K</code> substrings such that:
        </p>
        <ul>
            <li>Each substring starts with an even digit and ends with an odd digit.</li>
            <li>Each substring must have a length of at least <code>M</code>.</li>
        </ul>
        <p>
            Determine the total number of ways to partition the string into <code>K</code> substrings. Return the result modulo <code>10^9 + 7</code>.
        </p>

        <h3>Input Format:</h3>
        <ul>
            <li>The first line contains three integers: <code>N</code> (length of the string), <code>M</code> (minimum length of each substring), and <code>K</code> (number of required substrings).</li>
            <li>The second line contains the string <code>S</code>, consisting of digits from <code>'0'</code> to <code>'9'</code>.</li>
        </ul>

        <h3>Output Format:</h3>
        <ul>
            <li>A single integer: the total number of ways to partition the string, modulo <code>10^9 + 7</code>.</li>
        </ul>

        <h3>Constraints:</h3>
        <ul>
            <li><code>1 ≤ N ≤ 10^5</code></li>
            <li><code>1 ≤ M ≤ N</code></li>
            <li><code>1 ≤ K ≤ N</code></li>
            <li><code>S</code> consists of digits from <code>'0'</code> to <code>'9'</code>.</li>
        </ul>

        <h3>Examples:</h3>
        <h4>Example 1:</h4>
        <div className="example">
            <p><strong>Input:</strong></p>
            <pre>9 2 3
454569421</pre>
            <p><strong>Output:</strong></p>
            <pre>3</pre>
            <p><strong>Explanation:</strong></p>
            <ul>
                <li>The string <code>"454569421"</code> can be partitioned into 3 substrings such that each substring starts with an even digit and ends with an odd digit, with each substring having a length of at least 2:</li>
                <ul>
                    <li><code>45 | 45 | 69421</code></li>
                    <li><code>4545 | 69 | 421</code></li>
                    <li><code>45 | 4569 | 421</code></li>
                </ul>
                <li>Total valid partitions: <code>3</code>.</li>
            </ul>
        </div>

        <h4>Example 2:</h4>
        <div className="example">
            <p><strong>Input:</strong></p>
            <pre>8 3 2
20468375</pre>
            <p><strong>Output:</strong></p>
            <pre>4</pre>
            <p><strong>Explanation:</strong></p>
            <ul>
                <li>Valid partitions for <code>"20468375"</code> include:</li>
                <ul>
                    <li><code>204 | 68375</code></li>
                    <li><code>2046 | 8375</code></li>
                    <li><code>204683 | 75</code></li>
                    <li><code>2046837 | 5</code></li>
                </ul>
                <li>Total valid partitions: <code>4</code>.</li>
            </ul>
        </div>

        <h3>Notes:</h3>
        <ul>
            <li>Digits are classified as:
                <ul>
                    <li><code>Even:</code> <code>0, 2, 4, 6, 8</code></li>
                    <li><code>Odd:</code> <code>1, 3, 5, 7, 9</code></li>
                </ul>
            </li>
            <li>Use dynamic programming to efficiently calculate partitions.</li>
            <li>All results must be computed modulo <code>10^9 + 7</code>.</li>
        </ul>

        <h3>Approach:</h3>
        <ol>
            <li><strong>Define states:</strong> Let <code>dp[i][j]</code> represent the number of ways to partition the first <code>i</code> characters of the string into <code>j</code> substrings.</li>
            <li><strong>Base case:</strong> <code>dp[0][0] = 1</code>, as there is one way to partition an empty string into 0 substrings.</li>
            <li><strong>Transition:</strong> For every <code>i</code> and <code>j</code>, consider each valid substring ending at <code>i</code> that starts with an even digit and ends with an odd digit:
                <ul>
                    <li>If a valid substring is found, update <code>dp[i][j]</code> using the values of previous states.</li>
                </ul>
            </li>
            <li><strong>Optimization:</strong> Use prefix sums to reduce the complexity of summing over previous states.</li>
        </ol>

        <p><b>Time Complexity:</b> <code>O(N * K)</code>, where <code>N</code> is the length of the string and <code>K</code> is the number of substrings.</p>
        <p><b>Space Complexity:</b> <code>O(N * K)</code>, for storing the dynamic programming table.</p>
    </div>
</div>
<div className="problem-container">
    <h1>Problem Statement: Count Special Paths in a Tree</h1>
    <p>
        Given an undirected tree with <code>N</code> nodes, where each node has an associated value, a path is called <b>special</b> if it satisfies the following conditions:
    </p>
    <ul>
        <li>All nodes in the path are traversed exactly once.</li>
        <li>The value of the starting node equals the value of the ending node.</li>
        <li>The starting node is not equal to the ending node (no single-node cycles).</li>
        <li>The values of all nodes in the path are not greater than the value of the starting node.</li>
    </ul>
    <p>
        Your task is to count the total number of special paths in the tree. Two paths are considered different if they include at least one distinct node.
    </p>

    <h3>Input Format:</h3>
    <ul>
        <li>The first line contains an integer <code>N</code>, the number of nodes in the tree.</li>
        <li>The second line contains <code>N</code> space-separated integers, where the <code>i</code>-th integer represents the value of the <code>i</code>-th node.</li>
        <li>The third line contains an integer <code>P</code>, the number of edges in the tree (always <code>P = N - 1</code>).</li>
        <li>The next <code>P</code> lines contain two integers <code>u</code> and <code>v</code>, denoting an edge between nodes <code>u</code> and <code>v</code>.</li>
    </ul>

    <h3>Output Format:</h3>
    <ul>
        <li>A single integer: the total number of special paths in the tree.</li>
    </ul>

    <h3>Constraints:</h3>
    <ul>
        <li><code>1 ≤ N ≤ 10^5</code></li>
        <li><code>1 ≤ Value of each node ≤ 10^6</code></li>
        <li>The tree is connected and undirected.</li>
    </ul>

    <h3>Examples:</h3>
    <h4>Example 1:</h4>
    <div className="example">
        <p><b>Input:</b></p>
        <pre>5
4 2 3 4 2
4
1 2
1 3
3 4
4 5</pre>
        <p><b>Output:</b></p>
        <pre>1</pre>
        <p><b>Explanation:</b></p>
        <ul>
            <li>The tree has 5 nodes with values [4, 2, 3, 4, 2].</li>
            <li>The only special path is from node 1 to node 4:
                <ul>
                    <li>Both nodes have the value 4 (start and end values match).</li>
                    <li>All nodes in the path have values ≤ 4.</li>
                </ul>
            </li>
            <li>No other special paths satisfy the conditions.</li>
        </ul>
    </div>

    <h4>Example 2:</h4>
    <div className="example">
        <p><b>Input:</b></p>
        <pre>6
1 1 1 2 2 1
5
1 2
2 3
3 4
3 5
5 6</pre>
        <p><b>Output:</b></p>
        <pre>4</pre>
        <p><b>Explanation:</b></p>
        <ul>
            <li>Special paths include paths between nodes with value 1: (1 ↔ 3), (1 ↔ 6), (3 ↔ 6), and (2 ↔ 5).</li>
        </ul>
    </div>

    <h3>Notes:</h3>
    <ul>
        <li>Each node value serves as a constraint for valid paths.</li>
        <li>The tree's structure ensures connectivity, so paths can always be formed.</li>
        <li>The solution must account for efficiency due to the constraints.</li>
    </ul>

    <h3>Approach:</h3>
    <ol>
        <li><b>Group Nodes by Value:</b> Create a mapping from values to the list of nodes with those values.</li>
        <li><b>DFS for Path Validation:</b> Use Depth First Search (DFS) to explore paths starting from each node within the same value group.
            <ul>
                <li>Ensure all nodes in the path have values ≤ the starting node's value.</li>
                <li>Track visited nodes to avoid revisiting.</li>
            </ul>
        </li>
        <li><b>Count Paths:</b> For each group of nodes with the same value:
            <ul>
                <li>Start DFS from each node and count all valid paths.</li>
                <li>Avoid double-counting paths by ensuring start and end nodes are distinct.</li>
            </ul>
        </li>
        <li><b>Optimize Traversal:</b> Use adjacency lists for efficient tree traversal.</li>
    </ol>

    <p><b>Time Complexity:</b> <code>O(N)</code>, as each edge and node is visited at most once.</p>
    <p><b>Space Complexity:</b> <code>O(N)</code>, for storing the adjacency list and visited nodes.</p>
</div>

    </>
  )
}
export default Google;
