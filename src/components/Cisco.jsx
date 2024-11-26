import './Visa.css'; // optional: for additional styling
const Cisco = () => {
  return (
    <>
    <div className='cont'>
    <div className="problem-container">
        <h1>Problem Statement: How Many Words</h1>
        <p>A sentence is made up of a group of words. Each word is a sequence of letters (<code>'a'-'z'</code>, <code>'A'-'Z'</code>) that may contain one or more hyphens and may end in a punctuation mark: period (<code>.</code>), comma (<code>,</code>), question mark (<code>?</code>), or exclamation point (<code>!</code>). Words will be separated by one or more white space characters. Hyphens join two words into one and should be retained while the other punctuation marks should be stripped.</p>
        <p>You are required to determine the number of words in a given sentence.</p>

        <h3>Function Description:</h3>
        <p>Write a function that takes a single sentence as input and returns the number of valid words in the sentence.</p>

        <h3>Constraints:</h3>
        <ul>
            <li><code>1 ≤ length of sentence ≤ 10^5</code></li>
        </ul>

        <h3>Requirements:</h3>
        <ul>
            <li>Hyphens should be retained within words, but punctuation marks (<code>., ? !</code>) should be removed.</li>
            <li>Words should only consist of alphabetic characters (<code>a-z</code>, <code>A-Z</code>), including hyphenated words.</li>
        </ul>

        <h3>Examples:</h3>
        <h4>Example 1:</h4>
        <div className="example">
            <p><strong>Input:</strong></p>
            <pre>'How many eggs are in a half-dozen, 13?'</pre>
            <p><strong>Output:</strong> 7</p>
            <p><strong>Explanation:</strong></p>
            <p>The sentence contains 7 valid words: <code>('How', 'many', 'eggs', 'are', 'in', 'a', 'half-dozen')</code>.</p>
            <p>The word <code>"13"</code> is not considered valid as it contains digits and doesn't match the allowed character set.</p>
        </div>

        <h4>Example 2:</h4>
        <div className="example">
            <p><strong>Input:</strong></p>
            <pre>'he is a good programmer, he won 865 competitions, but sometimes he dont. What do you think? All test-cases should pass. Done-done?'</pre>
            <p><strong>Output:</strong> 21</p>
            <p><strong>Explanation:</strong></p>
            <p>The sentence contains 21 valid words, with punctuation removed and hyphens retained where appropriate.</p>
        </div>
    </div>
</div>
<div className='cont'>
    <div className="problem-container">
        <h1>Problem Statement: Double Base Palindromes</h1>
        <p>A decimal number is considered a <strong>"double base palindrome"</strong> if it is palindromic in both its decimal representation and its binary representation.</p>
        <p>Your task is to write a program to find the sum of all double base palindrome numbers that are less than or equal to a given number. The input number will always be a positive integer greater than or equal to 1.</p>

        <h3>Function Description:</h3>
        <p>Write a function that takes an integer <code>n</code> as input and returns the sum of all double base palindromes less than or equal to <code>n</code>.</p>

        <h3>Constraints:</h3>
        <ul>
            <li><code>1 ≤ n ≤ 10^6</code></li>
        </ul>

        <h3>Additional Information:</h3>
        <ul>
            <li>A number is a palindrome if it reads the same forward and backward in its respective base (decimal or binary).</li>
            <li>Binary numbers should not include leading zeros.</li>
            <li>Use efficient methods to check for palindromes in both bases due to the constraint of <code>n ≤ 10^6</code>.</li>
        </ul>

        <h3>Examples:</h3>
        <h4>Example 1:</h4>
        <div className="example">
            <p><strong>Input:</strong></p>
            <pre>5</pre>
            <p><strong>Output:</strong> 9</p>
            <p><strong>Explanation:</strong></p>
            <p>The double base palindromes less than or equal to 5 are:</p>
            <ul>
                <li><code>1</code> (binary: <code>1</code>)</li>
                <li><code>3</code> (binary: <code>11</code>)</li>
                <li><code>5</code> (binary: <code>101</code>)</li>
            </ul>
            <p>Their sum is <code>1 + 3 + 5 = 9</code>.</p>
        </div>

        <h4>Example 2:</h4>
        <div className="example">
            <p><strong>Input:</strong></p>
            <pre>10</pre>
            <p><strong>Output:</strong> 25</p>
            <p><strong>Explanation:</strong></p>
            <p>The double base palindromes less than or equal to 10 are:</p>
            <ul>
                <li><code>1</code> (binary: <code>1</code>)</li>
                <li><code>3</code> (binary: <code>11</code>)</li>
                <li><code>5</code> (binary: <code>101</code>)</li>
                <li><code>7</code> (binary: <code>111</code>)</li>
                <li><code>9</code> (binary: <code>1001</code>)</li>
            </ul>
            <p>Their sum is <code>1 + 3 + 5 + 7 + 9 = 25</code>.</p>
        </div>
    </div>
</div>

<div className='cont'>
    <div className="problem-container">
        <h1>Problem Statement: Perfect Substring</h1>
        <p>A string <code>s</code> comprised of digits from <code>0</code> to <code>9</code> contains a <strong>perfect substring</strong> if all the elements within a substring occur exactly <code>k</code> times.</p>
        <p>Your task is to write a program to calculate the number of perfect substrings in the given string <code>s</code>.</p>

        <h3>Function Description:</h3>
        <p>Write a function with the following signature:</p>
        <pre><code>def perfectSubstring(s: str, k: int) tends to int:</code></pre>

        <h4>Parameters:</h4>
        <ul>
            <li><code>s</code>: A string where each character represents a digit (0-9).</li>
            <li><code>k</code>: An integer that denotes the required frequency of each digit in the substring.</li>
        </ul>

        <h4>Returns:</h4>
        <p>An integer representing the number of perfect substrings in the given string.</p>

        <h3>Constraints:</h3>
        <ul>
            <li><code>1 ≤ sizeof(s) ≤ 10^5</code></li>
            <li><code>0 ≤ s[i] ≤ 9</code> (where <code>0 ≤ i less than n</code>)</li>
            <li><code>1 ≤ k ≤ 10^5</code></li>
        </ul>

        <h3>Examples:</h3>
        <h4>Example 1:</h4>
        <div className="example">
            <p><strong>Input:</strong></p>
            <pre>s = "1102021222"
k = 2</pre>
            <p><strong>Output:</strong> 6</p>
            <p><strong>Explanation:</strong></p>
            <p>The 6 perfect substrings are:</p>
            <ul>
                <li><code>s[0:1] = "11"</code></li>
                <li><code>s[0:5] = "110202"</code></li>
                <li><code>s[1:6] = "102021"</code></li>
                <li><code>s[2:5] = "0202"</code></li>
                <li><code>s[7:8] = "22"</code></li>
                <li><code>s[8:9] = "22"</code></li>
            </ul>
        </div>

        <h4>Example 2:</h4>
        <div className="example">
            <p><strong>Input:</strong></p>
            <pre>s = "22233"
k = 3</pre>
            <p><strong>Output:</strong> 1</p>
            <p><strong>Explanation:</strong></p>
            <p>The single perfect substring is:</p>
            <ul>
                <li><code>s[0:2] = "222"</code></li>
            </ul>
        </div>

        <h4>Example 3:</h4>
        <div className="example">
            <p><strong>Input:</strong></p>
            <pre>s = "12345"
k = 1</pre>
            <p><strong>Output:</strong> 5</p>
            <p><strong>Explanation:</strong></p>
            <p>All characters are distinct and occur exactly once, so each character is a perfect substring.</p>
        </div>
    </div>
</div>




    </>
  )
}
export default Cisco;
