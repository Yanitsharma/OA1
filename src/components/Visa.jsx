import './Visa.css'; // optional: for additional styling
const Visa = () => {
  return (
    <>
    <div className='cont'>
    <div className="problem-container">
      <h1>Problem Statement: Count Valid Triplets</h1>
      <p>You are given an array of <code>n</code> distinct integers, <code>d = [d[0], d[1], ..., d[n-1]]</code>, and an integer threshold <code>t</code>.</p>
      <p>Your task is to determine the number of index triplets <code>(a, b, c)</code> such that the following two conditions are satisfied:</p>
      <ul>
        <li><strong>Strictly Increasing Condition:</strong> <code>d[a] &lt; d[b] &lt; d[c]</code></li>
        <li><strong>Sum Condition:</strong> <code>d[a] + d[b] + d[c] &lt;= t</code></li>
      </ul>
      
      <h3>Input:</h3>
      <p>An integer array <code>d</code> of size <code>n</code>, where all integers are distinct.</p>
      <p>An integer <code>t</code>, representing the threshold value.</p>

      <h3>Output:</h3>
      <p>An integer representing the number of triplets <code>(a, b, c)</code> that satisfy the two conditions mentioned above.</p>

      <h3>Constraints:</h3>
      <ul>
        <li><code>1 &lt;= n &lt;= 100</code></li>
        <li><code>1 &lt;= d[i] &lt;= 10^4</code> (all elements in <code>d</code> are distinct)</li>
        <li><code>1 &lt;= t &lt;= 10^5</code></li>
      </ul>

      <h3>Example 1:</h3>
      <div className="example">
        <p><strong>Input:</strong></p>
        <pre>
d = [1, 2, 3, 4, 5]
t = 8
        </pre>
        <p><strong>Output:</strong> 4</p>
        <p><strong>Explanation:</strong></p>
        <p>The following 4 triplets satisfy the constraints:</p>
        <ul>
          <li>(1, 2, 3) → 1 + 2 + 3 = 6 (≤ 8)</li>
          <li>(1, 2, 4) → 1 + 2 + 4 = 7 (≤ 8)</li>
          <li>(1, 2, 5) → 1 + 2 + 5 = 8 (≤ 8)</li>
          <li>(1, 3, 4) → 1 + 3 + 4 = 8 (≤ 8)</li>
        </ul>
      </div>

      <h3>Example 2:</h3>
      <div className="example">
        <p><strong>Input:</strong></p>
        <pre>
d = [5, 3, 7, 9, 2]
t = 10
        </pre>
        <p><strong>Output:</strong> 0</p>
        <p><strong>Explanation:</strong></p>
        <p>There are no triplets (a, b, c) such that d[a] &lt; d[b] &lt; d[c] and their sum is less than or equal to 10.</p>
      </div>
    </div>
    <div className="problem-container">
      <h1>Problem Statement: Minimum Time to Collect Points</h1>
      <p>There are <code>n</code> players and <code>m</code> points, all positioned on a 1-D number line. The initial positions of the players are given in the array <code>players[]</code>, where <code>player[i]</code> denotes the location of the <code>i</code>th player.</p>
      <p>The positions of the points are given in the array <code>points[]</code>, where <code>point[i]</code> denotes the location of the <code>i</code>th point.</p>
      <p>A player can move left, right, or stay at their current position, and in one second, a player can move exactly one unit distance. A point is considered collected if any player reaches that point. The players can move simultaneously and independently of each other in each second.</p>
      <p>The task is to find the minimum time (in seconds) required for the players to collect all the points, assuming they act optimally.</p>
      
      <h3>Input:</h3>
      <p>An integer <code>n</code>, representing the number of players.</p>
      <p>An array <code>players[]</code> of size <code>n</code>, where <code>players[i]</code> is the initial position of the <code>i</code>th player.</p>
      <p>An integer <code>m</code>, representing the number of points.</p>
      <p>An array <code>points[]</code> of size <code>m</code>, where <code>points[i]</code> is the location of the <code>i</code>th point.</p>

      <h3>Output:</h3>
      <p>Return the minimum number of seconds required for all players to collect all the points.</p>

      <h3>Constraints:</h3>
      <ul>
        <li><code>1 &lt;= n, m &lt;= 1000</code></li>
        <li><code>-10^9 &lt;= players[i], points[i] &lt;= 10^9</code></li>
      </ul>

      <h3>Example 1:</h3>
      <div className="example">
        <p><strong>Input:</strong></p>
        <pre>
n = 3
players = [3, 6, 7]
m = 4
points = [2, 4, 7, 9]
        </pre>
        <p><strong>Output:</strong> 2</p>
        <p><strong>Explanation:</strong></p>
        <p>The first player can collect the point at location 2 in 1 second. The second player can collect the point at location 4 in 2 seconds. The third player can collect the points at locations 7 and 9 in 2 seconds. First, they collect the point at 7 (which is already at their location) and then move to 9. Hence, all the points are collected in a minimum of 2 seconds.</p>
      </div>
    </div>
    </div>


    <div className="problem-container">
      <h1>Problem Statement: Number of Valid Configurations</h1>
      <p>You are given <code>n</code> image filters, where the processing duration of the <code>i</code>th filter is represented by <code>time[i]</code>. The goal is to apply these filters to <code>m</code> images in such a way that the total processing time for all filters remains less than or equal to a given maximum time <code>maxTime</code>.</p>
      <p>The task is to determine how many distinct configurations of image assignments are possible, such that the sum of images assigned to each filter is exactly <code>m</code> and the total processing time does not exceed <code>maxTime</code>. Return the number of such configurations modulo <code>10^9 + 7</code>.</p>
      
      <h3>Input:</h3>
      <p>An integer <code>n</code>, representing the number of filters.</p>
      <p>An integer <code>m</code>, representing the number of images.</p>
      <p>An integer <code>maxTime</code>, representing the time constraint.</p>
      <p>An array <code>time[]</code> of size <code>n</code> where <code>time[i]</code> represents the processing time for the <code>i</code>th filter.</p>

      <h3>Output:</h3>
      <p>Return the number of distinct valid configurations of image assignments, where the total processing time does not exceed <code>maxTime</code>, modulo <code>10^9 + 7</code>.</p>

      <h3>Constraints:</h3>
      <ul>
        <li><code>1 &lt;= n, m &lt;= 100</code></li>
        <li><code>1 &lt;= time[i] &lt;= 100</code></li>
        <li><code>1 &lt;= maxTime &lt;= 10^4</code></li>
      </ul>

      <h3>Example 1:</h3>
      <div className="example">
        <p><strong>Input:</strong></p>
        <pre>
n = 3
m = 3
maxTime = 3
time = [1, 1, 1]
        </pre>
        <p><strong>Output:</strong> 10</p>
        <p><strong>Explanation:</strong></p>
        <p>The valid configurations of images assigned to each filter are:</p>
        <ul>
          <li>[1, 1, 1] → Time: 1*1 + 1*1 + 1*1 = 3</li>
          <li>[2, 1, 0] → Time: 2*1 + 1*1 + 0*1 = 3</li>
          <li>[2, 0, 1] → Time: 2*1 + 0*1 + 1*1 = 3</li>
          <li>[0, 2, 1] → Time: 0*1 + 2*1 + 1*1 = 3</li>
          <li>[1, 2, 0] → Time: 1*1 + 2*1 + 0*1 = 3</li>
          <li>[1, 0, 2] → Time: 1*1 + 0*1 + 2*1 = 3</li>
          <li>[0, 1, 2] → Time: 0*1 + 1*1 + 2*1 = 3</li>
          <li>[3, 0, 0] → Time: 3*1 + 0*1 + 0*1 = 3</li>
          <li>[0, 3, 0] → Time: 0*1 + 3*1 + 0*1 = 3</li>
          <li>[0, 0, 3] → Time: 0*1 + 0*1 + 3*1 = 3</li>
        </ul>
        <p>Therefore, there are 10 valid configurations.</p>
      </div>
    </div>

    
    <div className="problem-container">
      <h1>Problem Statement: Maximum Text Score Substring</h1>
      <p>You are given three strings: <code>text</code>, <code>prefixString</code>, and <code>suffixString</code>. Your task is to determine the <strong>textScore</strong> of a substring of <code>text</code> by finding the longest possible matches with the given <code>prefixString</code> and <code>suffixString</code>.</p>
      
      <h3>PrefixScore:</h3>
      <p>The longest substring of <code>text</code> that matches the ending portion of <code>prefixString</code>.</p>
      
      <h3>SuffixScore:</h3>
      <p>The longest substring of <code>text</code> that matches the beginning portion of <code>suffixString</code>.</p>
      
      <p>The overall <strong>textScore</strong> is calculated as the sum of the lengths of the <strong>PrefixScore</strong> and <strong>SuffixScore</strong>.</p>

      <h3>Objective:</h3>
      <p>Identify the substring in <code>text</code> that:</p>
      <ul>
        <li>Starts with the PrefixScore match.</li>
        <li>Ends with the SuffixScore match.</li>
        <li>Has the highest textScore.</li>
      </ul>
      <p>If multiple substrings have the same textScore, return the lexicographically smallest one.</p>

      <h3>Constraints:</h3>
      <ul>
        <li>If the prefix and suffix overlap, only return the non-overlapping substring.</li>
        <li>If no matches exist, the result will be an empty string.</li>
      </ul>

      <h3>Example:</h3>
      <div className="example">
        <p><strong>Input:</strong></p>
        <pre>
text = "banana"
prefixString = "bana"
suffixString = "nana"
        </pre>
        <p><strong>Output:</strong> "banana"</p>
        <p><strong>Explanation:</strong></p>
        <p>The longest match for <code>prefixString</code> is "bana" (PrefixScore = 4).</p>
        <p>The longest match for <code>suffixString</code> is "nana" (SuffixScore = 4).</p>
        <p>The total textScore is 4 (PrefixScore) + 4 (SuffixScore) = 8.</p>
        <p>Thus, the substring "banana" has the highest textScore.</p>
      </div>
    </div>


    </>
  );
};
export default Visa;
