import './Visa.css'; // optional: for additional styling
const WellsFargo = () => {
  return (
    <>
     <div className='cont'>
    <div className="problem-container">
        <h1>Problem Statement: Maximum Value Frequency in Segment</h1>
        <p>
            For a given array of integers, determine the maximum value in the segment from each index to the highest index element (inclusive). After that, calculate the number of times this highest value occurs in the segment. For each query, return the count of occurrences of the maximum value in the respective segment.
        </p>
        <h3>Function Signature:</h3>
        <pre>def frequencyOfMaxValue(numbers: List[int], q: List[int]) tends to List[int]:</pre>

        <h3>Input Format:</h3>
        <ul>
            <li><code>numbers</code>: An integer array of size <code>n</code> representing the elements in the list.</li>
            <li><code>q</code>: An integer array of size <code>m</code> representing the indices of segments to query (1-based indexing).</li>
        </ul>

        <h3>Output Format:</h3>
        <ul>
            <li>Return an array of size <code>m</code> where each value corresponds to the count of occurrences of the maximum value in the respective segment.</li>
        </ul>

        <h3>Constraints:</h3>
        <ul>
            <li><code>1 ≤ n ≤ 10^5</code></li>
            <li><code>1 ≤ numbers[i] ≤ 10^6</code></li>
            <li><code>1 ≤ q[i] ≤ n</code></li>
        </ul>

        <h3>Examples:</h3>
        <h4>Example 1:</h4>
        <div className="example">
            <p><strong>Input:</strong></p>
            <pre>numbers = [5, 4, 5, 3, 2]
q = [1, 2, 3, 4, 5]</pre>
            <p><strong>Output:</strong></p>
            <pre>[2, 1, 1, 1, 1]</pre>
            <p><strong>Explanation:</strong></p>
            <ul>
                <li>For query <code>q[0]</code> (index 1): The segment is <code>[5, 4, 5, 3, 2]</code>. Max value is <code>5</code>, and it appears <code>2</code> times.</li>
                <li>For query <code>q[1]</code> (index 2): The segment is <code>[4, 5, 3, 2]</code>. Max value is <code>5</code>, and it appears <code>1</code> time.</li>
                <li>Subsequent queries have segments where the max value occurs <code>1</code> time.</li>
            </ul>
        </div>

        <h4>Example 2:</h4>
        <div className="example">
            <p><strong>Input:</strong></p>
            <pre>numbers = [2, 1, 2]
q = [1, 2, 3]</pre>
            <p><strong>Output:</strong></p>
            <pre>[2, 1, 1]</pre>
            <p><strong>Explanation:</strong></p>
            <ul>
                <li>For query <code>q[0]</code> (index 1): The segment is <code>[2, 1, 2]</code>. Max value is <code>2</code>, and it appears <code>2</code> times.</li>
                <li>For query <code>q[1]</code> (index 2): The segment is <code>[1, 2]</code>. Max value is <code>2</code>, and it appears <code>1</code> time.</li>
                <li>For query <code>q[2]</code> (index 3): The segment is <code>[2]</code>. Max value is <code>2</code>, and it appears <code>1</code> time.</li>
            </ul>
        </div>

        <h3>Notes:</h3>
        <ul>
            <li>Optimize for large inputs using pre-computation.</li>
            <li>Maintain a suffix array to track the maximum value and its frequency from each index to the end.</li>
            <li>For each query, directly retrieve the result using the precomputed suffix data in O(1) time.</li>
        </ul>

        <h3>Approach:</h3>
        <ol>
            <li>Precompute the maximum value and its frequency for each suffix of the array:</li>
            <ul>
                <li>Start from the last index and maintain the maximum value and its count while traversing the array backward.</li>
            </ul>
            <li>For each query, return the precomputed result for the corresponding index.</li>
            <li>Time complexity: <code>O(n + m)</code> where <code>n</code> is the size of <code>numbers</code> and <code>m</code> is the size of <code>q</code>.</li>
        </ol>
    </div>
</div>

<div className='cont'>
    <div className="problem-container">
        <h1>Problem Statement: Number of Islands in a Matrix</h1>
        <p>
            You are given a 2-dimensional matrix of size <code>N x M</code>, filled with <code>1</code>s and <code>0</code>s, where:
        </p>
        <ul>
            <li><code>1</code> represents land.</li>
            <li><code>0</code> represents water.</li>
        </ul>
        <p>
            Two cells are considered connected if one cell lies adjacent to the other in one of the eight possible directions:
            <b>vertical, horizontal, or diagonal</b>.
        </p>
        <p>
            A connected group of <code>1</code>s is called an <b>island</b>. Your task is to determine the number of such islands in the matrix.
        </p>

        <h3>Function Signature:</h3>
        <pre>def numIslands(grid: List[List[int]]) tends to int:</pre>

        <h3>Input Format:</h3>
        <ul>
            <li><code>grid</code>: A 2D list of size <code>N x M</code>, where <code>grid[i][j]</code> is either <code>0</code> or <code>1</code>.</li>
        </ul>

        <h3>Output Format:</h3>
        <ul>
            <li>An integer representing the number of islands in the given matrix.</li>
        </ul>

        <h3>Constraints:</h3>
        <ul>
            <li><code>1 ≤ N, M ≤ 10^3</code></li>
            <li><code>0 ≤ grid[i][j] ≤ 1</code></li>
        </ul>

        <h3>Examples:</h3>
        <h4>Example 1:</h4>
        <div className="example">
            <p><strong>Input:</strong></p>
            <pre>4 5
0 1 1 0 0
1 0 0 1 0
0 0 1 0 0
1 0 0 0 1</pre>
            <p><strong>Output:</strong></p>
            <pre>3</pre>
            <p><strong>Explanation:</strong></p>
            <ul>
                <li>The first island consists of the cells: <code>[(0,1), (0,2), (1,0), (1,3), (2,2)]</code>.</li>
                <li>The second island consists of the cell: <code>{(3,0)}</code>.</li>
                <li>The third island consists of the cell: <code>{(3,4)}</code>.</li>
                <li>Total number of islands: <code>3</code>.</li>
            </ul>
        </div>

        <h4>Example 2:</h4>
        <div className="example">
            <p><strong>Input:</strong></p>
            <pre>4 4
1 0 0 1
0 1 1 0
0 1 1 0
1 0 0 1</pre>
            <p><strong>Output:</strong></p>
            <pre>1</pre>
            <p><strong>Explanation:</strong></p>
            <ul>
                <li>All the <code>1</code>s in the grid are connected directly or indirectly, forming a single island.</li>
            </ul>
        </div>

        <h3>Notes:</h3>
        <ul>
            <li>To determine connectivity, traverse the grid using DFS (Depth-First Search) or BFS (Breadth-First Search).</li>
            <li>Keep track of visited cells to ensure each cell is processed only once.</li>
        </ul>

        <h3>Approach:</h3>
        <ol>
            <li>Initialize a <code>visited</code> matrix of the same size as the grid to keep track of already processed cells.</li>
            <li>Iterate over all cells of the grid:</li>
            <ul>
                <li>When a cell containing <code>1</code> is found and has not been visited, start a DFS or BFS from that cell to mark all connected <code>1</code>s as visited.</li>
                <li>Increment the island count.</li>
            </ul>
            <li>Return the total count of islands.</li>
        </ol>
        <p><b>Time Complexity:</b> <code>O(N * M)</code>, as each cell is visited at most once.</p>
        <p><b>Space Complexity:</b> <code>O(N * M)</code>, for the <code>visited</code> matrix and the stack/queue used in DFS/BFS.</p>
    </div>
</div>

    </>
  )
  }
  export default WellsFargo;
