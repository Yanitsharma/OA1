import './Visa.css'; // optional: for additional styling
const UnifyApps = () => {
  return (
    <>
    <div className='cont'>
    <div className="problem-container">
      <h1>Problem Statement: Find a Peak Element</h1>
      <p>You are given an unsorted array <code>arr = [arr[0], arr[1], ..., arr[n-1]]</code> of size <code>n</code>. Your task is to find a peak element in the array. An element is considered a peak if it is greater than or equal to its neighbors (if they exist).</p>
      <p>There can be multiple peak elements in an array. You can return any one of them.</p>
      <p><strong>Note:</strong> If the array is strictly increasing, return the last element, as it will be the maximum value.</p>

      <h3>Input:</h3>
      <p>An integer array <code>arr</code> of size <code>n</code>, where <code>1 ≤ n ≤ 10^5</code>.</p>

      <h3>Output:</h3>
      <p>An integer representing any one of the peak elements.</p>

      <h3>Constraints:</h3>
      <ul>
        <li><code>1 ≤ n ≤ 10^5</code></li>
        <li><code>1 ≤ arr[i] ≤ 10^9</code></li>
      </ul>

      <h3>Example 1:</h3>
      <div className="example">
        <p><strong>Input:</strong></p>
        <pre>
arr[] = 5, 10, 20, 15
        </pre>
        <p><strong>Output:</strong> 20</p>
        <p><strong>Explanation:</strong></p>
        <p>The element 20 has neighbors 10 and 15, both of which are less than 20.</p>
      </div>

      <h3>Example 2:</h3>
      <div className="example">
        <p><strong>Input:</strong></p>
        <pre>
arr[] = 10, 20, 15, 2, 23, 90, 90
        </pre>
        <p><strong>Output:</strong> 20 or 90</p>
        <p><strong>Explanation:</strong></p>
        <p>The element 20 has neighbors 10 and 15, both of which are less than 20. Similarly, 90 has neighbors 23 and 90, and both are valid peak elements.</p>
      </div>

      <h3>Example 3:</h3>
      <div className="example">
        <p><strong>Input:</strong></p>
        <pre>
arr[] = [1, 1, 1]
        </pre>
        <p><strong>Output:</strong> 1</p>
        <p><strong>Explanation:</strong></p>
        <p>All elements are peak elements in this case, as each element is equal to its neighbors. You can return any of them.</p>
      </div>
    </div>
</div>
 
<div className='cont'>
    <div className="problem-container">
      <h1>Problem Statement: Rotting Oranges</h1>
      <p>You are given an <code>m x n</code> grid where each cell can have one of three values:</p>
      <ul>
        <li><code>0</code>: representing an empty cell.</li>
        <li><code>1</code>: representing a fresh orange.</li>
        <li><code>2</code>: representing a rotten orange.</li>
      </ul>
      <p>Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten. Your task is to return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return <code>-1</code>.</p>

      <h3>Input:</h3>
      <p>A 2D grid <code>grid</code> of size <code>m x n</code>, where <code>1 ≤ m, n ≤ 10</code>.</p>

      <h3>Output:</h3>
      <p>An integer representing the minimum number of minutes required for all fresh oranges to rot, or <code>-1</code> if it is impossible.</p>

      <h3>Constraints:</h3>
      <ul>
        <li><code>1 ≤ m, n ≤ 10</code></li>
        <li><code>grid[i][j]</code> is <code>0</code>, <code>1</code>, or <code>2</code>.</li>
      </ul>

      <h3>Example 1:</h3>
      <div className="example">
        <p><strong>Input:</strong></p>
        <pre>
grid = [[2,1,1],
        [1,1,0],
        [0,1,1]]
        </pre>
        <p><strong>Output:</strong> 4</p>
      </div>

      <h3>Example 2:</h3>
      <div className="example">
        <p><strong>Input:</strong></p>
        <pre>
grid = [[2,1,1],
        [0,1,1],
        [1,0,1]]
        </pre>
        <p><strong>Output:</strong> -1</p>
        <p><strong>Explanation:</strong></p>
        <p>The orange in the bottom-left corner (row 2, column 0) is never rotten because rotting only happens 4-directionally.</p>
      </div>

      <h3>Example 3:</h3>
      <div className="example">
        <p><strong>Input:</strong></p>
        <pre>
grid = [[0,2]]
        </pre>
        <p><strong>Output:</strong> 0</p>
        <p><strong>Explanation:</strong></p>
        <p>Since there are already no fresh oranges at minute 0, the answer is just <code>0</code>.</p>
      </div>
    </div>
</div>

    </>
  )
}
export default UnifyApps;