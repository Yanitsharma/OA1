import './Visa.css'; // optional: for additional styling
const Deutsche = () => {
  return (
    <>
    <div className='cont'> <div className="problem-container"> <h1>Problem Statement: Minimum Cost to Cross the Array</h1> <p>Given an array <code>costs</code> of size <code>n</code>, you need to determine the minimum cost required to cross the array or move out of its bounds. You can move using the following rules:</p> <ul> <li><strong>Jump two steps forward:</strong> Move from index <code>i</code> to <code>i+2</code>.</li> <li><strong>Jump one step backward:</strong> Move from index <code>i</code> to <code>i-1</code>, but only if <code>i greater than 0</code>.</li> </ul> <p>When you land on an index, you must add the value at that index to your total cost. Your goal is to find the minimum cost required to move out of the array (beyond index <code>n-1</code>).</p>
    <h3>Input:</h3>
  <ul>
    <li>An integer <code>n</code>, the number of elements in the array.</li>
    <li>An array <code>costs</code> of size <code>n</code> representing the cost at each index.</li>
  </ul>

  <h3>Output:</h3>
  <p>A single integer representing the minimum cost to move out of the array.</p>

  <h3>Constraints:</h3>
  <ul>
    <li><code>1 ≤ n ≤ 10^5</code></li>
    <li><code>1 ≤ costs[i] ≤ 10^4</code></li>
  </ul>

  <h3>Example 1:</h3>
  <div className="example">
    <p><strong>Input:</strong></p>
    <pre>
    
    5 1 2 3 4 100 </pre> <p><strong>Output:</strong> 10</p> <p><strong>Explanation:</strong></p> <p>The optimal path is:</p> <ul> <li>Start at index <code>0</code> → jump to <code>2</code> → jump back to <code>1</code> → jump to <code>3</code> → move out of the array.</li> <li>The total cost is <code>1 + 3 + 2 + 4 = 10</code>.</li> </ul> </div> </div>

</div>
<div className='cont'> <div className="problem-container"> <h1>Problem Statement: Maximum Value with Increasing Triplet</h1> <p>Given an array <code>a</code> of size <code>n</code>, find the maximum value of the expression:</p> <div ><code>value = a[i] + (a[j] * a[k])</code></div> <p>such that the following conditions are satisfied:</p> <ul> <li><code>i &lt; j &lt; k</code></li> <li><code>a[i] &lt; a[j] &lt; a[k]</code></li> </ul>
<h3>Input:</h3>
  <ul>
    <li>An integer <code>n</code>, the size of the array.</li>
    <li>An array <code>a</code> of size <code>n</code>.</li>
  </ul>

  <h3>Output:</h3>
  <p>A single integer representing the maximum value of the given expression under the specified conditions.</p>

  <h3>Constraints:</h3>
  <ul>
    <li><code>3 ≤ n ≤ 10^5</code></li>
    <li><code>1 ≤ a[i] ≤ 10^4</code></li>
  </ul>

  <h3>Example:</h3>
  <div className="example">
    <p><strong>Input:</strong></p>
    <pre>
    6 2 4 1 5 3 6 </pre> <p><strong>Output:</strong> 27</p> <p><strong>Explanation:</strong></p> <p>The optimal triplet is <code>(i=1, j=3, k=6)</code>, where:</p> <ul> <li><code>a[1] = 2</code>, <code>a[3] = 5</code>, <code>a[6] = 6</code></li> </ul> <p>The maximum value is:</p> <div ><code>2 + (5 * 6) = 27</code></div> </div> </div>

</div>
<div className='cont'>
    <div className="problem-container">
      <h1>Problem Statement: Cost to Remember Integers</h1>
      <p>You are given an array of <code>n</code> integers, <code>arr = [arr[0], arr[1], ..., arr[n-1]]</code>, and an integer <code>k</code> representing the maximum number of distinct integers you can remember for free.</p>
      <p>Your task is to determine the total cost to remember all integers in the array, where you can remember at most <code>k</code> distinct integers for free, and each additional distinct integer beyond <code>k</code> incurs a cost <code>X</code>.</p>
      
      <h3>Input:</h3>
      <p>Three integers <code>n</code>, <code>k</code>, and <code>X</code>, followed by an array <code>arr</code> of <code>n</code> integers.</p>

      <h3>Output:</h3>
      <p>An integer representing the total cost to remember all integers in the array, considering the constraints mentioned.</p>

      <h3>Constraints:</h3>
      <ul>
        <li><code>1 &lt;= n, k &lt;= 10^5</code></li>
        <li><code>1 &lt;= X &lt;= 10^4</code></li>
        <li><code>1 &lt;= arr[i] &lt;= 10^9</code> (all elements in <code>arr</code> are distinct)</li>
      </ul>

      <h3>Example 1:</h3>
      <div className="example">
        <p><strong>Input:</strong></p>
        <pre>
8 3 5
1 2 3 4 2 1 5 6
        </pre>
        <p><strong>Output:</strong> 15</p>
        <p><strong>Explanation:</strong></p>
        <p>Distinct integers: 1,2,3,4,5,6 (6 in total).</p>
        <p>You can remember up to k=3 integers for free. The additional integers = 6 - 3 = 3.</p>
        <p>Cost = 3 * 5 = 15.</p>
      </div>

      <h3>Example 2:</h3>
      <div className="example">
        <p><strong>Input:</strong></p>
        <pre>
5 2 10
3 3 3 3 3
        </pre>
        <p><strong>Output:</strong> 0</p>
        <p><strong>Explanation:</strong></p>
        <p>All integers in the array are the same, so no additional cost is incurred.</p>
      </div>
    </div>
</div>

    </>
  )
}
export default Deutsche;
