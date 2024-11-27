import './Visa.css'; // optional: for additional styling
import shiv from "../../public/st.png"
const UiPath = () => {
  return (
    <>
    <div className='cont'>
  <div className="problem-container">
    <h1>Problem Statement: Product Dependency Triplets</h1>
    <p>You are given a network of product dependencies represented as a tree. The tree consists of <code>treeNodes</code> vertices, and the relationships between products are defined by two arrays: <code>treeFrom</code> and <code>treeTo</code>, both of size <code>treeNodes - 1</code>. These arrays specify connections, where <code>treeFrom[i]</code> is connected to <code>treeTo[i]</code>.</p>

    <h3>Task:</h3>
    <p>For this product dependency tree, determine the number of triplets of vertices <code>(i, j, k)</code> that meet the following conditions:</p>
    <ol>
      <li><code>0 less than= i &lt; j &lt; k &lt; treeNodes</code></li>
      <li>There should be no simple path connecting vertices <code>i</code>, <code>j</code>, and <code>k</code>.</li>
    </ol>
    <p>Due to the potentially large number of triplets, return the answer modulo <code>(10^9 + 7)</code>.</p>

    <h3>Notes:</h3>
    <ul>
      <li>A path in this context refers to a sequence of vertices where each vertex is connected to the next one, representing a product dependency relationship.</li>
      <li>A path that does not include repeated vertices is termed a simple path.</li>
    </ul>

    <h3>Example:</h3>
    
    <h4>Example 1:</h4>
    <div className="example">
      <p><strong>Input:</strong></p>
      <pre>
treeNodes = 5
treeFrom = [1, 1, 0, 0]
treeTo = [0, 2, 3, 4]
      </pre>
      <img src={shiv}></img>
      <p><strong>Output:</strong> 2</p>
      <p><strong>Explanation:</strong></p>
      <p>The following triplets of vertices lack a simple path connecting them:</p>
      <ul>
        <li>(1, 3, 4)</li>
        <li>(2, 3, 4)</li>
      </ul>
      <p>The answer is <code>2 modulo (10^9 + 7)</code>, so the output is <code>2</code>.</p>
    </div>

  </div>
</div>

<div className='cont'>
  <div className="problem-container">
    <h1>Problem Statement: Maximum Goods Produced with Power Constraint</h1>
    <p>In a manufacturing unit, there are <code>n</code> machines, where the <code>i-th</code> machine consumes <code>power[i]</code> amount of power and produces <code>quantity[i]</code> number of goods. Find the maximum total quantity of goods that can be produced such that the total power consumed does not exceed <code>maxPower</code> if the machines used are chosen optimally.</p>

    <h3>Input Format:</h3>
    <ul>
      <li><code>n</code>: Number of machines</li>
      <li><code>power</code>: Array of size <code>n</code> representing the power consumed by each machine.</li>
      <li><code>quantity</code>: Array of size <code>n</code> representing the quantity of goods produced by each machine.</li>
      <li><code>maxPower</code>: Maximum power allowed to be consumed.</li>
    </ul>

    <h3>Output:</h3>
    <p>Print the maximum total quantity of goods that can be produced without exceeding <code>maxPower</code>.</p>

    <h3>Example:</h3>
    
    <h4>Example 1:</h4>
    <div className="example">
      <p><strong>Input:</strong></p>
      <pre>
n = 3  
power = [2, 2, 2]  
quantity = [1, 2, 3]  
maxPower = 4
      </pre>
      <p><strong>Output:</strong> 5</p>
      <p><strong>Explanation:</strong></p>
      <p>Use machines 2 and 3:</p>
      <ul>
        <li>Total power used = 2 + 2 = 4 (does not exceed maxPower).</li>
        <li>Total quantity produced = 2 + 3 = 5.</li>
      </ul>
    </div>
  </div>
</div>

    
    
    </>
  )
}
export default UiPath;