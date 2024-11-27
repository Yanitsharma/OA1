import './Visa.css'; // optional: for additional styling
const Jlr = () => {
  return (
    <>
    <div className='cont'>
  <div className="problem-container">
    <h1>Problem Statement: Ugly Numbers</h1>
    <p>Ugly numbers are numbers whose only prime factors are <code>2</code>, <code>3</code>, or <code>5</code>. By convention, <code>1</code> is included as an ugly number.</p>
    <p>The sequence of ugly numbers is: <br/> 1, 2, 3, 5, 6, 8, 9, 10, 12, 15, ...</p>
    
    <h3>Input:</h3>
    <p>An integer <code>n</code>, the position of the ugly number to be found.</p>
    
    <h3>Output:</h3>
    <p>The <code>n</code>-th ugly number.</p>
    
    <h3>Constraints:</h3>
    <ul>
      <li><code>1 ≤ n ≤ 10^6</code></li>
    </ul>

    <h3>Example 1:</h3>
    <div className="example">
      <p><strong>Input:</strong></p>
      <pre>
n = 7
      </pre>
      <p><strong>Output:</strong> 8</p>
      <p><strong>Explanation:</strong></p>
      <p>The first 7 ugly numbers are: <code>1, 2, 3, 5, 6, 8, 9</code>.</p>
      <p>The 7th number is 8.</p>
    </div>

    <h3>Example 2:</h3>
    <div className="example">
      <p><strong>Input:</strong></p>
      <pre>
n = 10
      </pre>
      <p><strong>Output:</strong> 12</p>
      <p><strong>Explanation:</strong></p>
      <p>The first 10 ugly numbers are: <code>1, 2, 3, 5, 6, 8, 9, 10, 12, 15</code>.</p>
      <p>The 10th number is 12.</p>
    </div>

    <h3>Example 3:</h3>
    <div className="example">
      <p><strong>Input:</strong></p>
      <pre>
n = 15
      </pre>
      <p><strong>Output:</strong> 24</p>
      <p><strong>Explanation:</strong></p>
      <p>The first 15 ugly numbers are: <code>1, 2, 3, 5, 6, 8, 9, 10, 12, 15, 16, 18, 20, 24, 25</code>.</p>
      <p>The 15th number is 24.</p>
    </div>

    <h3>Example 4:</h3>
    <div className="example">
      <p><strong>Input:</strong></p>
      <pre>
n = 150
      </pre>
      <p><strong>Output:</strong> 5832</p>
      <p><strong>Explanation:</strong></p>
      <p>The 150th ugly number is 5832.</p>
    </div>
  </div>
</div>

<div className='cont'>
  <div className="problem-container">
    <h1>Problem Statement: String Divisibility</h1>
    <p>A string <code>s</code> is divisible by another string <code>t</code> if repeating <code>t</code> some constant number of times results in <code>s</code>.</p>
    <p>For example: If <code>s = "atanatanatan"</code> and <code>t = "atan"</code>, then <code>s</code> is divisible by <code>t</code> because:</p>
    <p><code>t + t + t = "atan" + "atan" + "atan" = "atanatanatan"</code>.</p>

    <h3>Task:</h3>
    <ol>
      <li>Given two strings <code>s</code> and <code>t</code>, determine if <code>s</code> is divisible by <code>t</code>.</li>
      <li>If <code>s</code> is not divisible by <code>t</code>, return <code>-1</code>.</li>
      <li>If divisible, find the shortest string <code>u</code> (the least common divisor) that divides both <code>s</code> and <code>t</code>.</li>
    </ol>

    <h3>Input Format:</h3>
    <ul>
      <li><code>s</code>: The string to be checked.</li>
      <li><code>t</code>: The string by which divisibility is to be checked.</li>
    </ul>

    <h3>Output Format:</h3>
    <p>If <code>s</code> is not divisible by <code>t</code>, return <code>-1</code>.</p>
    <p>Otherwise, return the shortest string <code>u</code> that divides both <code>s</code> and <code>t</code>.</p>

    <h3>Examples:</h3>

    <h4>Example 1:</h4>
    <div className="example">
      <p><strong>Input:</strong></p>
      <pre>
s = "ababab"
t = "abab"
      </pre>
      <p><strong>Output:</strong> -1</p>
      <p><strong>Explanation:</strong></p>
      <p><code>"ababab"</code> is not divisible by <code>"abab"</code>, as repeating <code>"abab"</code> does not result in <code>"ababab"</code>.</p>
    </div>

    <h4>Example 2:</h4>
    <div className="example">
      <p><strong>Input:</strong></p>
      <pre>
s = "ababababababababab"
t = "ababab"
      </pre>
      <p><strong>Output:</strong> "ab"</p>
      <p><strong>Explanation:</strong></p>
      <p>Both <code>"ababababababababab"</code> and <code>"ababab"</code> are divisible by <code>"ab"</code>. <code>"ab"</code> is the shortest string that divides both.</p>
    </div>

    <h4>Example 3:</h4>
    <div className="example">
      <p><strong>Input:</strong></p>
      <pre>
s = "xyzxyzxyz"
t = "xyz"
      </pre>
      <p><strong>Output:</strong> "xyz"</p>
      <p><strong>Explanation:</strong></p>
      <p><code>"xyzxyzxyz"</code> is divisible by <code>"xyz"</code>, and <code>"xyz"</code> is the shortest string that divides both.</p>
    </div>

    <h4>Example 4:</h4>
    <div className="example">
      <p><strong>Input:</strong></p>
      <pre>
s = "aaaaaa"
t = "aaa"
      </pre>
      <p><strong>Output:</strong> "a"</p>
      <p><strong>Explanation:</strong></p>
      <p><code>"aaaaaa"</code> is divisible by <code>"aaa"</code>, and <code>"a"</code> is the shortest string that divides both.</p>
    </div>
  </div>
</div>

    
    
    </>
  )
}
export default Jlr;