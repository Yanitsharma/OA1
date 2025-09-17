import './Visa.css'; // optional: for additional styling
const Salesforce = () => {
  return (
    <>
    <div className='cont'>
    <div className="problem-container">
        <h1>Problem Statement: Check Sequence in String C</h1>
        <p>You are given three strings, <code>A</code>, <code>B</code>, and <code>C</code>. Determine if string <code>C</code> contains all the characters of both <code>A</code> and <code>B</code> in the same sequence as they appear in <code>A</code> and <code>B</code>, respectively.</p>

        <h3>Input:</h3>
        <p>Three strings:</p>
        <ul>
            <li><code>A</code>: A string of length <code>1 ≤ len(A) ≤ 10^5</code>.</li>
            <li><code>B</code>: A string of length <code>1 ≤ len(B) ≤ 10^5</code>.</li>
            <li><code>C</code>: A string of length <code>1 ≤ len(C) ≤ 10^5</code>, containing only lowercase English letters.</li>
        </ul>

        <h3>Output:</h3>
        <p>A single string: <code>"Yes"</code> if <code>C</code> contains all characters of <code>A</code> and <code>B</code> in the same sequence as they appear in <code>A</code> and <code>B</code>. Otherwise, output <code>"No"</code>.</p>

        <h3>Constraints:</h3>
        <ul>
            <li><code>1 ≤ len(A), len(B), len(C) ≤ 10^5</code></li>
            <li><code>C</code> contains only lowercase English letters.</li>
        </ul>

        <h3>Examples:</h3>
        <h4>Example 1:</h4>
        <div className="example">
            <p><strong>Input:</strong></p>
            <pre>
A = "abc"
B = "def"
C = "adbcef"
            </pre>
            <p><strong>Output:</strong> Yes</p>
            <p><strong>Explanation:</strong></p>
            <p>All characters of <code>A</code> ("abc") appear in <code>C</code> in the same order. Similarly, all characters of <code>B</code> ("def") appear in <code>C</code> in the same order. Thus, the answer is <code>"Yes"</code>.</p>
        </div>

        <h4>Example 2:</h4>
        <div className="example">
            <p><strong>Input:</strong></p>
            <pre>
A = "abc"
B = "def"
C = "abdecf"
            </pre>
            <p><strong>Output:</strong> No</p>
            <p><strong>Explanation:</strong></p>
            <p>The sequence of characters in <code>B</code> ("def") is not maintained in <code>C</code>. Thus, the answer is <code>"No"</code>.</p>
        </div>
    </div>
</div>
<div className='cont'>
    <div className="problem-container">
        <h1>Problem Statement: Maximum Path in 2D Matrix</h1>
        <p>You are given a 2D matrix of integers. A person starts at the top-left cell <code>(0, 0)</code> and can move only to the right or down. A move is valid if the value in the next cell is either one more or one less than the current cell’s value. Determine the maximum length of the path the person can travel.</p>

        <h3>Input:</h3>
        <p>A 2D matrix:</p>
        <ul>
            <li><code>matrix</code>: A 2D list of integers with dimensions <code>rows × cols</code>.</li>
        </ul>

        <h3>Output:</h3>
        <p>An integer representing the maximum length of the path the person can travel.</p>

        <h3>Constraints:</h3>
        <ul>
            <li><code>1 ≤ rows, cols ≤ 100</code></li>
            <li><code>-10^9 ≤ matrix[i][j] ≤ 10^9</code></li>
        </ul>

        <h3>Examples:</h3>
        <h4>Example 1:</h4>
        <div className="example">
            <p><strong>Input:</strong></p>
            <pre>
matrix =
[[1, 2, 3],
 [2, 3, 4],
 [3, 2, 1]]
            </pre>
            <p><strong>Output:</strong> 5</p>
            <p><strong>Explanation:</strong></p>
            <p>The path is <code>1 to 2 to 3 to 2 to 3</code>.</p>
        </div>

        <h4>Example 2:</h4>
        <div className="example">
            <p><strong>Input:</strong></p>
            <pre>
matrix =
[[1, 3, 5],
 [2, 4, 6],
 [3, 5, 7]]
            </pre>
            <p><strong>Output:</strong> 1</p>
            <p><strong>Explanation:</strong></p>
            <p>No valid path longer than 1 exists.</p>
        </div>
    </div>
</div>

    </>
  )
}
export default Salesforce;