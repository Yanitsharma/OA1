import './Visa.css'; // optional: for additional styling
const MasterCard = () => {
  return (
    <>
    
    <div className='cont'>
  <div className="problem-container">
    <h1>Problem Statement: Easy String</h1>
    <p>You are given the string <code>S</code>. Compress the string when lower and upper cases are the same. In the compressed string, characters should be in lowercase.</p>
    
    <h3>Input:</h3>
    <p>A string <code>S</code> consisting of only lowercase and uppercase characters.</p>
    
    <h3>Output:</h3>
    <p>A string representing the compressed version where characters are in lowercase.</p>
    
    <h3>Constraints:</h3>
    <ul>
      <li><code>1 ≤ |S| ≤ 2 * 10^5</code></li>
      <li><code>S</code> contains only lowercase and uppercase characters.</li>
    </ul>

    <h3>Example 1:</h3>
    <div className="example">
      <p><strong>Input:</strong></p>
      <pre>
S = "aaABBb"
      </pre>
      <p><strong>Output:</strong> "3a3b"</p>
      <p><strong>Explanation:</strong></p>
      <p>As 'a' appears 3 times consecutively and 'b' also 3 times, and 'b' and 'B' are considered the same.</p>
    </div>

    <h3>Example 2:</h3>
    <div className="example">
      <p><strong>Input:</strong></p>
      <pre>
S = "aaacca"
      </pre>
      <p><strong>Output:</strong> "3a2c1a"</p>
      <p><strong>Explanation:</strong></p>
      <p>As 'a' appears 3 times consecutively and 'c' also 2 times, and then 'a' 1 time.</p>
    </div>
  </div>
</div>

<div className='cont'>
  <div className="problem-container">
    <h1>Problem Statement: Longest Palindromic Subsequence</h1>
    <p>You have been given a string <code>A</code> consisting of lowercase English letters. Your task is to find the length of the longest palindromic subsequence in <code>A</code>.</p>
    
    <h3>Input:</h3>
    <p>An integer <code>T</code>, representing the number of test cases. Then <code>T</code> strings follow, each representing a test case.</p>
    
    <h3>Output:</h3>
    <p>For each test case, print the length of the longest palindromic subsequence.</p>
    
    <h3>Constraints:</h3>
    <ul>
      <li><code>1 ≤ T ≤ 10</code></li>
      <li><code>1 ≤ N ≤ 10^2</code>, where <code>N</code> is the length of the string.</li>
    </ul>
    <p>Time limit: 1 sec.</p>

    <h3>Example 1:</h3>
    <div className="example">
      <p><strong>Input:</strong></p>
      <pre>
2
bbabcbcab
bbbab
      </pre>
      <p><strong>Output:</strong> 7</p>
      <p><strong>Explanation:</strong></p>
      <p>For the first test case, the longest palindromic subsequence is "babcbab", which has a length of 7. "bbbbb" and "bbcbb" are also palindromic subsequences of the given string, but not the longest one.</p>
      <p>For the second test case, the longest palindromic subsequence is "bbbb", which has a length of 4.</p>
    </div>

    <h3>Example 2:</h3>
    <div className="example">
      <p><strong>Input:</strong></p>
      <pre>
3
cbbd
bebeeed
abcd
      </pre>
      <p><strong>Output:</strong> 2</p>
      <p><strong>Explanation:</strong></p>
      <p>For the first test case, the longest palindromic subsequence is "bb", which has a length of 2.</p>
      <p>For the second test case, the longest palindromic subsequence is "beebee", which has a length of 4.</p>
      <p>For the third test case, the longest palindromic subsequence is "a", which has a length of 1.</p>
    </div>
  </div>
</div>

    
    </>
  )
}
export default MasterCard;