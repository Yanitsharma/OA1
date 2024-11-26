import './Visa.css'; // optional: for additional styling
const BNY = () => {
  return (
    <>
    <div className="cont">
  <div className="problem-container">
    <h1>Problem Statement: Count Valid Triplets</h1>
    <p>
      You are given an array of <code>n</code> distinct integers,
      <code>d = [d[0], d[1], ..., d[n-1]]</code>, and an integer threshold
      <code>t</code>. Your task is to determine the number of index triplets
      <code>(a, b, c)</code> such that the following two conditions are
      satisfied:
    </p>
    <ul>
      <li>
        <strong>Strictly Increasing Condition:</strong>
        <code>d[a] &lt; d[b] &lt; d[c]</code>
      </li>
      <li>
        <strong>Sum Condition:</strong>
        <code>d[a] + d[b] + d[c] &lt;= t</code>
      </li>
    </ul>

    <h3>Input:</h3>
    <p>
      An integer array <code>d</code> of size <code>n</code>, where all integers
      are distinct.
    </p>
    <p>
      An integer <code>t</code>, representing the threshold value.
    </p>

    <h3>Output:</h3>
    <p>
      An integer representing the number of triplets <code>(a, b, c)</code> that
      satisfy the two conditions mentioned above.
    </p>

    <h3>Constraints:</h3>
    <ul>
      <li>
        <code>1 ≤ n ≤ 100</code>
      </li>
      <li>
        <code>1 ≤ d[i] ≤ 10^4</code> (all elements in <code>d</code> are
        distinct)
      </li>
      <li>
        <code>1 ≤ t ≤ 10^5</code>
      </li>
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
      <p>
        The following 4 triplets satisfy the constraints:
      </p>
      <ul>
        <li>
          <code>(1, 2, 3)</code> → <code>1 + 2 + 3 = 6</code> (≤ 8)
        </li>
        <li>
          <code>(1, 2, 4)</code> → <code>1 + 2 + 4 = 7</code> (≤ 8)
        </li>
        <li>
          <code>(1, 2, 5)</code> → <code>1 + 2 + 5 = 8</code> (≤ 8)
        </li>
        <li>
          <code>(1, 3, 4)</code> → <code>1 + 3 + 4 = 8</code> (≤ 8)
        </li>
      </ul>
      <p>
        Each of these triplets satisfies both the strictly increasing condition
        (<code>d[a] &lt; d[b] &lt; d[c]</code>) and the sum condition
        (<code>d[a] + d[b] + d[c] &lt;= t</code>).
      </p>
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
      <p>
        There are no triplets <code>(a, b, c)</code> such that
        <code>d[a] &lt; d[b] &lt; d[c]</code> and their sum is less than or
        equal to <code>10</code>.
      </p>
    </div>
  </div>
</div>
<div class="cont">
  <div class="problem-container">
    <h1>Problem Statement: Minimum Time to Collect Points</h1>
    <p>
      There are <code>n</code> players and <code>m</code> points, all positioned
      on a 1-D number line. The initial positions of the players are given in
      the array <code>players[]</code> where <code>player[i]</code> denotes the
      location of the <code>i<sup>th</sup></code> player. The positions of the
      points are given in the array <code>points[]</code> where
      <code>point[i]</code> denotes the location of the
      <code>i<sup>th</sup></code> point.
    </p>
    <p>
      A player can move left, right, or stay at their current position, and in
      one second, a player can move exactly one unit distance. A point is
      considered collected if any player reaches that point. The players can
      move simultaneously and independently of each other in each second.
    </p>
    <p>
      The task is to find the minimum time (in seconds) required for the players
      to collect all the points, assuming they act optimally.
    </p>

    <h3>Input:</h3>
    <ul>
      <li>
        An integer <code>n</code>, representing the number of players.
      </li>
      <li>
        An array <code>players[]</code> of size <code>n</code>, where
        <code>players[i]</code> is the initial position of the
        <code>i<sup>th</sup></code> player.
      </li>
      <li>
        An integer <code>m</code>, representing the number of points.
      </li>
      <li>
        An array <code>points[]</code> of size <code>m</code>, where
        <code>points[i]</code> is the location of the
        <code>i<sup>th</sup></code> point.
      </li>
    </ul>

    <h3>Output:</h3>
    <p>
      Return the minimum number of seconds required for all players to collect
      all the points.
    </p>

    <h3>Constraints:</h3>
    <ul>
      <li>
        <code>1 ≤ n, m ≤ 1000</code>
      </li>
      <li>
        <code>-10^9 ≤ players[i], points[i] ≤ 10^9</code>
      </li>
    </ul>

    <h3>Example 1:</h3>
    <div class="example">
      <p><strong>Input:</strong></p>
      <pre>
n = 3
players = [3, 6, 7]
m = 4
points = [2, 4, 7, 9]
      </pre>
      <p><strong>Output:</strong> 2</p>
      <p><strong>Explanation:</strong></p>
      <ul>
        <li>
          The first player can collect the point at location 2 in 1 second.
        </li>
        <li>
          The second player can collect the point at location 4 in 2 seconds.
        </li>
        <li>
          The third player can collect the points at locations 7 and 9 in 2
          seconds. First, they collect the point at 7 (which is already at their
          location) and then move to 9.
        </li>
      </ul>
      <p>
        Hence, all the points are collected in a minimum of <strong>2 seconds</strong>.
      </p>
    </div>
  </div>
</div>
<div class="cont">
  <div class="problem-container">
    <h1>Problem Statement: Image Filters Configuration</h1>
    <p>
      You are given <code>n</code> image filters, where the processing duration
      of the <code>i<sup>th</sup></code> filter is represented by
      <code>time[i]</code>. The goal is to apply these filters to
      <code>m</code> images in such a way that the total processing time for
      all filters remains less than or equal to a given maximum time
      <code>maxTime</code>.
    </p>
    <p>
      The task is to determine how many distinct configurations of image
      assignments are possible, such that the sum of images assigned to each
      filter is exactly <code>m</code> and the total processing time does not
      exceed <code>maxTime</code>. Return the number of such configurations
      modulo <code>10^9 + 7</code>.
    </p>

    <h3>Input Format:</h3>
    <ul>
      <li>
        An integer <code>n</code> representing the number of filters.
      </li>
      <li>
        An integer <code>m</code> representing the number of images.
      </li>
      <li>
        An integer <code>maxTime</code> representing the time constraint.
      </li>
      <li>
        An array <code>time[]</code> of size <code>n</code> where
        <code>time[i]</code> represents the processing time for the
        <code>i<sup>th</sup></code> filter.
      </li>
    </ul>

    <h3>Output Format:</h3>
    <p>
      Return the number of distinct valid configurations of image assignments,
      where the total processing time does not exceed <code>maxTime</code>,
      modulo <code>10^9 + 7</code>.
    </p>

    <h3>Constraints:</h3>
    <ul>
      <li><code>1 ≤ n, m ≤ 100</code></li>
      <li><code>1 ≤ time[i] ≤ 100</code></li>
      <li><code>1 ≤ maxTime ≤ 10^4</code></li>
    </ul>

    <h3>Example 1:</h3>
    <div class="example">
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
        <li><code>[1, 1, 1]</code> → Time: <code>1 * 1 + 1 * 1 + 1 * 1 = 3</code></li>
        <li><code>[2, 1, 0]</code> → Time: <code>2 * 1 + 1 * 1 + 0 * 1 = 3</code></li>
        <li><code>[2, 0, 1]</code> → Time: <code>2 * 1 + 0 * 1 + 1 * 1 = 3</code></li>
        <li><code>[0, 2, 1]</code> → Time: <code>0 * 1 + 2 * 1 + 1 * 1 = 3</code></li>
        <li><code>[1, 2, 0]</code> → Time: <code>1 * 1 + 2 * 1 + 0 * 1 = 3</code></li>
        <li><code>[1, 0, 2]</code> → Time: <code>1 * 1 + 0 * 1 + 2 * 1 = 3</code></li>
        <li><code>[0, 1, 2]</code> → Time: <code>0 * 1 + 1 * 1 + 2 * 1 = 3</code></li>
        <li><code>[3, 0, 0]</code> → Time: <code>3 * 1 + 0 * 1 + 0 * 1 = 3</code></li>
        <li><code>[0, 3, 0]</code> → Time: <code>0 * 1 + 3 * 1 + 0 * 1 = 3</code></li>
        <li><code>[0, 0, 3]</code> → Time: <code>0 * 1 + 0 * 1 + 3 * 1 = 3</code></li>
      </ul>
      <p>
        Thus, there are <strong>10 valid configurations</strong>.
      </p>
    </div>
  </div>
</div>
<div class="problem-container">
  <h1>Problem Statement: Maximize TextScore</h1>
  <p>
    You are given three strings: <code>text</code>, <code>prefixString</code>,
    and <code>suffixString</code>. Your task is to determine the
    <strong>textScore</strong> of a substring of <code>text</code> by finding
    the longest possible matches with the given <code>prefixString</code> and
    <code>suffixString</code>.
  </p>

  <h3>Definitions:</h3>
  <ul>
    <li>
      <strong>PrefixScore:</strong> The longest substring of <code>text</code>
      that matches the ending portion of <code>prefixString</code>.
    </li>
    <li>
      <strong>SuffixScore:</strong> The longest substring of <code>text</code>
      that matches the beginning portion of <code>suffixString</code>.
    </li>
    <li>
      The overall <strong>textScore</strong> is calculated as the sum of the
      lengths of the <code>PrefixScore</code> and <code>SuffixScore</code>.
    </li>
  </ul>

  <h3>Objective:</h3>
  <p>
    Identify the substring in <code>text</code> that:
  </p>
  <ul>
    <li>Starts with the <code>PrefixScore</code> match.</li>
    <li>Ends with the <code>SuffixScore</code> match.</li>
    <li>Has the highest <code>textScore</code>.</li>
  </ul>
  <p>
    If multiple substrings have the same <code>textScore</code>, return the
    lexicographically smallest one.
  </p>

  <h3>Constraints:</h3>
  <ul>
    <li>
      If the prefix and suffix overlap, only return the non-overlapping
      substring.
    </li>
    <li>If no matches exist, the result will be an empty string.</li>
  </ul>

  <h3>Example:</h3>
  <div class="example">
    <p><strong>Input:</strong></p>
    <pre>
text = "banana"
prefixString = "bana"
suffixString = "nana"
    </pre>
    <p><strong>Output:</strong> "banana"</p>
    <p><strong>Explanation:</strong></p>
    <ul>
      <li>
        The longest match for <code>prefixString</code> is <code>"bana"</code>
        (<strong>PrefixScore</strong> = 4).
      </li>
      <li>
        The longest match for <code>suffixString</code> is <code>"nana"</code>
        (<strong>SuffixScore</strong> = 4).
      </li>
      <li>
        The total <strong>textScore</strong> is
        <code>4 (PrefixScore) + 4 (SuffixScore) = 8</code>.
      </li>
    </ul>
    <p>
      Thus, the substring <code>"banana"</code> has the highest
      <strong>textScore</strong>.
    </p>
  </div>
</div>

    </>
  )
}
export default BNY;