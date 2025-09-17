import './Visa.css'; // optional: for additional styling
const Media = () => {
  return (
    <>
    <div className='cont'> <div className="problem-container"> <h1>Problem Statement: City Travel Rewards</h1> <p>Jack lives in a city with <code>A</code> tourist places and <code>M</code> roads connecting them. The roads are one-way (directed), and two tourist places may have multiple direct roads connecting them.</p> <p>The city has launched a loyalty program where Jack can accumulate rewards when traveling through roads. Each road has a fixed base reward point <code>Z</code>.</p> <p>When Jack travels through a road for the <code>j-th</code> time, the reward is calculated as:</p> <p><strong>Reward Formula:</strong> <code>max(Z - (j * (j - 1) / 2), 0)</code></p> <p>Jack wants to know the maximum reward points he can accumulate while traveling. You are asked to compute this value.</p>
    <h3>Input:</h3>
  <ul>
    <li>An integer <code>A</code>, representing the number of tourist places.</li>
    <li>An integer <code>B</code>, representing Jack's starting place.</li>
    <li>A 2D integer array <code>C</code> of size <code>M x 3</code>:
      <ul>
        <li><code>C[i][0]</code>: Starting tourist place of the <code>i-th</code> road.</li>
        <li><code>C[i][1]</code>: Ending tourist place of the <code>i-th</code> road.</li>
        <li><code>C[i][2]</code>: Base reward point of the <code>i-th</code> road.</li>
      </ul>
    </li>
  </ul>

  <h3>Output:</h3>
  <p>An integer representing the maximum reward points Jack can accumulate.</p>

  <h3>Constraints:</h3>
  <ul>
    <li><code>1 ≤ A ≤ 10<sup>5</sup></code></li>
    <li><code>0 ≤ M ≤ 10<sup>5</sup></code></li>
    <li><code>1 ≤ B ≤ A</code></li>
    <li><code>1 ≤ C[i][0], C[i][1] ≤ A</code></li>
    <li><code>0 ≤ C[i][2] ≤ 10<sup>8</sup></code></li>
  </ul>

  <h3>Example 1:</h3>
  <div className="example">
    <p><strong>Input:</strong></p>
    <pre>
    A = 3 B = 1 C = [[1, 2, 1], [2, 3, 4], [3, 1, 0]] </pre> <p><strong>Output:</strong> 9</p> <p><strong>Explanation:</strong></p> <p>Jack travels through the following paths:</p> <ul> <li>1 → 2: 1 reward point (1st time)</li> <li>2 → 3: 4 reward points (1st time)</li> <li>3 → 1: 0 reward points (1st time)</li> <li>1 → 2: 0 reward points (2nd time)</li> <li>2 → 3: 3 reward points (2nd time)</li> <li>3 → 1: 0 reward points (2nd time)</li> <li>1 → 2: 0 reward points (3rd time)</li> <li>2 → 3: 1 reward point (3rd time)</li> <li>3 → 1: 0 reward points (3rd time)</li> </ul> <p>Total rewards: <code>9</code>.</p> </div>
    <h3>Example 2:</h3>
  <div className="example">
    <p><strong>Input:</strong></p>
    <pre>
    A = 3 B = 1 C = [[1, 2, 1], [2, 3, 4]] </pre> <p><strong>Output:</strong> 5</p> <p><strong>Explanation:</strong></p> <p>Jack travels through the following paths:</p> <ul> <li>1 → 2: 1 reward point</li> <li>2 → 3: 4 reward points</li> </ul> <p>Total rewards: <code>5</code>.</p> </div> </div>

</div>
<div className='cont'> <div className="problem-container"> <h1>Problem Statement: Reads Books</h1> <p>In the library, there are <code>N</code> chapters. The <code>i-th</code> chapter provides <code>A[i]</code> knowledge points. You must follow these rules:</p> <ul> <li>You can only read the <code>i-th</code> chapter after completing the <code>(i-1)-th</code> chapter.</li> <li>After finishing the last chapter, you can start again from the first chapter in a cyclic manner.</li> </ul> <p>Your task is to determine how many chapters you need to read to gain <code>B[i]</code> knowledge for every index <code>i</code> in <code>B</code>. If it is impossible to accumulate the required knowledge, return <code>-1</code>.</p>
<h3>Input:</h3>
  <ul>
    <li>An array <code>A</code> of size <code>N</code>, where <code>A[i]</code> denotes the knowledge gained from the <code>i-th</code> chapter.</li>
    <li>An array <code>B</code>, where <code>B[i]</code> is the required knowledge for the <code>i-th</code> query.</li>
  </ul>

  <h3>Output:</h3>
  <p>An array of integers, where the <code>i-th</code> element represents the number of chapters needed to gain <code>B[i]</code> knowledge. If it is impossible, return <code>-1</code> for that query.</p>

  <h3>Constraints:</h3>
  <ul>
    <li><code>1 ≤ N ≤ 10^5</code></li>
    <li><code>|A[i]| ≤ 10^9</code></li>
    <li><code>1 ≤ |B[i]| ≤ 10^9</code></li>
  </ul>

  <h3>Example 1:</h3>
  <div className="example">
    <p><strong>Input:</strong></p>
    <pre>
    A = [1, 2, 1] B = [10, 1, 2] </pre> <p><strong>Output:</strong> [8, 1, 2]</p> <p><strong>Explanation:</strong></p> <ul> <li>For <code>B[0] = 10</code>: You read the whole book twice (1+2+1 + 1+2+1 = 8 knowledge), and then you read the first 2 chapters again (1+2 = 2). A total of <code>8</code> chapters are required.</li> <li>For <code>B[1] = 1</code>: You only need the first chapter.</li> <li>For <code>B[2] = 2</code>: You only need the first 2 chapters.</li> </ul> </div>
    <h3>Example 2:</h3>
  <div className="example">
    <p><strong>Input:</strong></p>
    <pre>
    A = [1] B = [100] </pre> <p><strong>Output:</strong> [100]</p> <p><strong>Explanation:</strong></p> <p>For <code>B[0] = 100</code>: Since there is only 1 chapter, you need to read it <code>100</code> times to accumulate <code>100</code> knowledge points.</p> </div> </div>

</div>
<div className='cont'> <div className="problem-container"> <h1>Problem Statement: Concatenation of Words</h1> <p>You are given a string <code>A</code> and an array of words <code>B</code>, where all words have the same length. Your task is to find all starting indices of substring(s) in <code>A</code> that meet the following conditions:</p> <ul> <li>The substring is a concatenation of each word in <code>B</code> exactly once.</li> <li>The concatenation must not have any intervening characters.</li> </ul>
<h3>Input:</h3>
  <ul>
    <li>A string <code>A</code>.</li>
    <li>An array <code>B</code> of strings, where all strings have the same length.</li>
  </ul>

  <h3>Output:</h3>
  <p>A list of integers representing the starting indices of substrings in <code>A</code> that satisfy the criteria.</p>

  <h3>Constraints:</h3>
  <ul>
    <li><code>1 ≤ |A| ≤ 10^4</code></li>
    <li><code>1 ≤ |B| ≤ 10^3</code></li>
    <li>All strings in <code>B</code> have the same length.</li>
  </ul>

  <h3>Example 1:</h3>
  <div className="example">
    <p><strong>Input:</strong></p>
    <pre>
    A = "barfoothefoobarman" B = ["foo", "bar"] </pre> <p><strong>Output:</strong> [0, 9]</p> <p><strong>Explanation:</strong></p> <ul> <li>The substring starting at index <code>0</code> is <code>"barfoo"</code>, which is a concatenation of <code>"bar"</code> and <code>"foo"</code>.</li> <li>The substring starting at index <code>9</code> is <code>"foobar"</code>, which is also a concatenation of <code>"foo"</code> and <code>"bar"</code>.</li> </ul> </div>
    <h3>Example 2:</h3>
  <div className="example">
    <p><strong>Input:</strong></p>
    <pre>
    A = "wordgoodgoodgoodbestword" B = ["word", "good", "best", "word"] </pre> <p><strong>Output:</strong> []</p> <p><strong>Explanation:</strong></p> <p>No valid concatenation of all words in <code>B</code> exists in <code>A</code>.</p> </div> </div>

</div>

      </>
  )
}
export default Media;