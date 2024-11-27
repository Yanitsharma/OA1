import './Visa.css'; // optional: for additional styling
const Intuit = () => {
  return (
    <>
    <div className="problem-container">
    <h1>Problem Statement: Letter Candles</h1>
    <p>
        Alice has a box containing <code>N</code> letter candles. The cost of the box is determined as follows:
    </p>
    <ol>
        <li>Count the number of occurrences of each letter in the box.</li>
        <li>Sum up the squares of these counts.</li>
    </ol>
    <p>
        Alice wants to reduce the cost of the box by removing some candles. However, she can remove at most <code>M</code> candles. Your task is to determine the <b>minimum possible cost</b> of the box after removing up to <code>M</code> candles.
    </p>

    <h3>Input Format:</h3>
    <ul>
        <li>The first line contains an integer <code>N</code>, the number of letter candles.</li>
        <li>The second line contains an integer <code>M</code>, the maximum number of candles Alice can remove.</li>
        <li>The third line contains a string <code>S</code> of length <code>N</code>, representing the letters of the candles.</li>
    </ul>

    <h3>Output Format:</h3>
    <ul>
        <li>A single integer, the <b>minimum cost</b> of the box.</li>
    </ul>

    <h3>Constraints:</h3>
    <ul>
        <li><code>1 ≤ N ≤ 10^5</code></li>
        <li><code>0 ≤ M ≤ N</code></li>
        <li><code>S</code> contains only lowercase English letters.</li>
    </ul>

    <h3>Examples:</h3>
    <h4>Example 1:</h4>
    <div className="example">
        <p><b>Input:</b></p>
        <pre>6
2
bacacc</pre>
        <p><b>Output:</b></p>
        <pre>6</pre>
        <p><b>Explanation:</b></p>
        <ul>
            <li>Letter counts: A = 2, B = 1, C = 3.</li>
            <li>Initial cost: <code>2^2 + 1^2 + 3^2 = 14</code>.</li>
            <li>Best strategy: Remove 2 'C' candles to reduce its count to 1.</li>
            <li>New cost: <code>2^2 + 1^2 + 1^2 = 6</code>.</li>
        </ul>
    </div>

    <h4>Example 2:</h4>
    <div className="example">
        <p><b>Input:</b></p>
        <pre>15
3
xxxxxxxxxxxxxxx</pre>
        <p><b>Output:</b></p>
        <pre>144</pre>
        <p><b>Explanation:</b></p>
        <ul>
            <li>Letter counts: X = 15.</li>
            <li>Initial cost: <code>15^2 = 225</code>.</li>
            <li>Best strategy: Remove 3 'X' candles to reduce its count to 12.</li>
            <li>New cost: <code>12^2 = 144</code>.</li>
        </ul>
    </div>

    <h3>Approach:</h3>
    <ol>
        <li><b>Count Frequencies:</b> Calculate the frequency of each character in <code>S</code>.</li>
        <li><b>Use a Max-Heap:</b> 
            <ul>
                <li>Store the frequencies in a max-heap (or sort them in descending order).</li>
                <li>At each step, reduce the largest frequency by 1 and decrement <code>M</code>.</li>
            </ul>
        </li>
        <li><b>Recalculate Cost:</b> 
            <ul>
                <li>Once <code>M</code> reaches 0 or all reductions are exhausted, calculate the total cost.</li>
                <li>The cost is the sum of squares of the remaining frequencies.</li>
            </ul>
        </li>
    </ol>

    <p><b>Time Complexity:</b> <code>O(N + M log(26))</code>, where <code>N</code> is the length of the string and <code>M</code> is the number of allowed removals. The max-heap operations are bounded by the size of the alphabet (26).</p>
    <p><b>Space Complexity:</b> <code>O(26)</code>, for storing character frequencies.</p>
</div>

<div className="problem-container">
    <h1>Problem Statement: Minimum Time for Infection Spread</h1>
    <p>
        You are given a Petri dish represented as an <code>N × M</code> grid. Each cell in the grid can have one of the following values:
    </p>
    <ul>
        <li><code>0</code>: Empty cell.</li>
        <li><code>1</code>: Healthy cell.</li>
        <li><code>2</code>: Virus-infected cell.</li>
    </ul>
    <p>
        The virus spreads to its neighboring healthy cells (up, down, left, and right) in one second. Your task is to determine the <b>minimum time</b> required for all healthy cells to become infected. If it is impossible to infect all healthy cells, return <code>-1</code>.
    </p>

    <h3>Input Format:</h3>
    <ul>
        <li>The first line contains an integer <code>N</code>, the number of rows in the grid.</li>
        <li>The second line contains an integer <code>M</code>, the number of columns in the grid.</li>
        <li>The next <code>N</code> lines each contain <code>M</code> space-separated integers representing the grid.</li>
    </ul>

    <h3>Output Format:</h3>
    <ul>
        <li>A single integer, the minimum time required to infect all healthy cells, or <code>-1</code> if it is impossible.</li>
    </ul>

    <h3>Constraints:</h3>
    <ul>
        <li><code>1 ≤ N ≤ 100</code></li>
        <li><code>1 ≤ M ≤ 100</code></li>
        <li><code>0 ≤ grid[i][j] ≤ 2</code></li>
    </ul>

    <h3>Examples:</h3>
    <h4>Example 1:</h4>
    <div className="example">
        <p><b>Input:</b></p>
        <pre>2
3
2 0 0
1 1 1</pre>
        <p><b>Output:</b></p>
        <pre>3</pre>
        <p><b>Explanation:</b></p>
        <ul>
            <li>Initial grid: <code>[[2, 0, 0], [1, 1, 1]]</code>.</li>
            <li>In the first second, the virus infects <code>[1, 0]</code>.</li>
            <li>In the second second, it infects <code>[1, 1]</code>.</li>
            <li>In the third second, it infects <code>[1, 2]</code>.</li>
            <li>All healthy cells are now infected in 3 seconds.</li>
        </ul>
    </div>

    <h4>Example 2:</h4>
    <div className="example">
        <p><b>Input:</b></p>
        <pre>3
3
2 1 0
0 1 0
0 1 2</pre>
        <p><b>Output:</b></p>
        <pre>2</pre>
        <p><b>Explanation:</b></p>
        <ul>
            <li>Initial grid: <code>[[2, 1, 0], [0, 1, 0], [0, 1, 2]]</code>.</li>
            <li>In the first second, both viruses infect their adjacent cells: <code>[0, 1]</code> and <code>[2, 1]</code>.</li>
            <li>In the second second, the virus spreads to <code>[1, 1]</code>.</li>
            <li>All healthy cells are infected in 2 seconds.</li>
        </ul>
    </div>

    <h4>Example 3:</h4>
    <div className="example">
        <p><b>Input:</b></p>
        <pre>2
2
2 0
1 1</pre>
        <p><b>Output:</b></p>
        <pre>-1</pre>
        <p><b>Explanation:</b></p>
        <ul>
            <li>The healthy cells at <code>[1, 0]</code> and <code>[1, 1]</code> cannot be infected because the virus cannot reach them.</li>
            <li>The output is <code>-1</code>.</li>
        </ul>
    </div>

    <h3>Approach:</h3>
    <ol>
        <li><b>Breadth-First Search (BFS):</b> 
            <ul>
                <li>Start with all initially infected cells (<code>2</code>) as the source nodes.</li>
                <li>Use a queue to simulate the spread of the virus, processing the infection level by level.</li>
            </ul>
        </li>
        <li><b>Track Time:</b> 
            <ul>
                <li>Keep a variable to track the time taken to infect all reachable cells.</li>
                <li>Mark cells as visited by setting their value to <code>2</code>.</li>
            </ul>
        </li>
        <li><b>Check for Remaining Healthy Cells:</b> 
            <ul>
                <li>After the BFS completes, scan the grid for any remaining <code>1</code>s. If any exist, return <code>-1</code>.</li>
            </ul>
        </li>
    </ol>

    <h3>Time Complexity:</h3>
    <p><code>O(N × M)</code>, as each cell is processed at most once.</p>

    <h3>Space Complexity:</h3>
    <p><code>O(N × M)</code>, for the queue in the BFS.</p>
</div>

<div className='cont'>
  <div className="problem-container">
    <h1>Problem Statement: Largest Number in K Swaps</h1>
    <p>Given a number <code>K</code> and a string <code>str</code> of digits denoting a positive integer, build the largest number possible by performing swap operations on the digits of <code>str</code> at most <code>K</code> times.</p>
    
    <h3>Input:</h3>
    <p>An integer <code>K</code> representing the number of swaps allowed, and a string <code>str</code> of digits denoting the positive integer.</p>
    
    <h3>Output:</h3>
    <p>A string representing the largest number that can be formed by performing at most <code>K</code> swaps on the digits of <code>str</code>.</p>
    
    <h3>Constraints:</h3>
    <ul>
      <li><code>1 ≤ |str| ≤ 30</code>, where <code>|str|</code> is the length of the string.</li>
      <li><code>1 ≤ K ≤ 10</code></li>
    </ul>

    <h3>Example 1:</h3>
    <div className="example">
      <p><strong>Input:</strong></p>
      <pre>
K = 4
str = "1234567"
      </pre>
      <p><strong>Output:</strong> 7654321</p>
      <p><strong>Explanation:</strong></p>
      <p>Three swaps can make the input <code>1234567</code> to <code>7654321</code>, swapping 1 with 7, 2 with 6, and finally 3 with 5.</p>
    </div>

    <h3>Example 2:</h3>
    <div className="example">
      <p><strong>Input:</strong></p>
      <pre>
K = 3
str = "3435335"
      </pre>
      <p><strong>Output:</strong> 5543333</p>
      <p><strong>Explanation:</strong></p>
      <p>Three swaps can make the input <code>3435335</code> to <code>5543333</code>, swapping 3 with 5, 4 with 5, and finally 3 with 4.</p>
    </div>
  </div>
</div>


    
    </>
  )
}
export default Intuit;
