import './Visa.css'; // optional: for additional styling
const Microsoft = () => {
  return (
    <>
    <div className="cont">
  <div className="problem-container">
    <h1>Problem Statement: Number of Suitable Locations for a Store</h1>
    <p>
      A retail store chain wants to expand into a new neighborhood. To maximize
      the number of clients, the new branch must be at a distance of no more
      than <code>K</code> from all the houses in the neighborhood.
    </p>
    <p>
      You are given a matrix <code>A</code> of size <code>N x M</code>, where:
    </p>
    <ul>
      <li>
        <code>A[i][j] = 0</code> represents an empty plot.
      </li>
      <li>
        <code>A[i][j] = 1</code> represents a house.
      </li>
    </ul>
    <p>
      The distance between two cells is defined as the minimum number of cell
      borders that need to be crossed to move from the source cell to the target
      cell. <strong>Diagonal movement is not allowed.</strong> A store can only
      be built on an empty plot (<code>0</code>).
    </p>
    <p>
      Your task is to find the <strong>number of suitable empty plots</strong>
      such that the distance from the plot to <strong>all houses</strong> is
      less than or equal to <code>K</code>.
    </p>

    <h3>Input:</h3>
    <p>
      An integer <code>K</code>, the maximum distance.
    </p>
    <p>
      A 2D list <code>A</code> of size <code>N x M</code>, representing the
      neighborhood.
    </p>

    <h3>Output:</h3>
    <p>
      A single integer representing the <strong>number of suitable empty
      plots</strong>.
    </p>

    <h3>Constraints:</h3>
    <ul>
      <li>
        <code>1 ≤ N, M ≤ 100</code>
      </li>
      <li>
        <code>0 ≤ A[i][j] ≤ 1</code>
      </li>
    </ul>

    <h3>Example 1:</h3>
    <div className="example">
      <p><strong>Input:</strong></p>
      <pre>
K = 2
A = [[0, 0, 0, 0],
     [0, 0, 1, 0],
     [1, 0, 0, 1]]
      </pre>
      <p><strong>Output:</strong> 2</p>
      <p><strong>Explanation:</strong></p>
      <p>
        Houses are located at <code>(2,3)</code>, <code>(3,1)</code>, and
        <code>(3,4)</code>. Two suitable empty plots are:
      </p>
      <ul>
        <li>
          <code>(3,2)</code>: Distances to houses are <code>[2, 1, 2]</code>.
        </li>
        <li>
          <code>(3,3)</code>: Distances to houses are <code>[1, 2, 1]</code>.
        </li>
      </ul>
      <p>Both are within the given distance <code>K = 2</code>.</p>
    </div>

    <h3>Example 2:</h3>
    <div className="example">
      <p><strong>Input:</strong></p>
      <pre>
K = 1
A = [[0, 1],
     [1, 0]]
      </pre>
      <p><strong>Output:</strong> 0</p>
      <p><strong>Explanation:</strong></p>
      <p>
        Houses are located at positions <code>(1,2)</code> and
        <code>(2,1)</code>. No empty plot satisfies the condition that it is at
        a distance ≤ <code>K = 1</code> from all houses.
      </p>
    </div>
  </div>
</div>
<div className="cont">
  <div className="problem-container">
    <h1>Problem Statement: Path from Vertex 1 to N Through All Vertices</h1>
    <p>
      You are given an undirected graph consisting of <code>N</code> vertices,
      numbered from <code>1</code> to <code>N</code>, and <code>M</code> edges.
      The graph is described by two arrays, <code>A</code> and <code>B</code>,
      both of length <code>M</code>. Each pair <code>(A[K], B[K])</code> for
      <code>K</code> from <code>0</code> to <code>M-1</code> describes an edge
      between vertex <code>A[K]</code> and vertex <code>B[K]</code>.
    </p>
    <p>
      Your task is to check whether there exists a path in the graph starting at
      vertex <code>1</code> and ending at vertex <code>N</code>, visiting all
      vertices in strictly increasing order of their numbers. All connections
      on the path must be direct (i.e., there should be an edge between
      consecutive vertices on the path).
    </p>

    <h3>Input:</h3>
    <p>
      An integer <code>N</code>, the number of vertices.
    </p>
    <p>
      Two lists <code>A</code> and <code>B</code> of length <code>M</code>,
      representing the edges.
    </p>

    <h3>Output:</h3>
    <p>
      A boolean value (<code>True</code> or <code>False</code>) indicating
      whether such a path exists.
    </p>

    <h3>Constraints:</h3>
    <ul>
      <li>
        <code>2 ≤ N ≤ 10^5</code>
      </li>
      <li>
        <code>1 ≤ M ≤ 10^5</code>
      </li>
    </ul>

    <h3>Example 1:</h3>
    <div className="example">
      <p><strong>Input:</strong></p>
      <pre>
N = 4
A = [1, 2, 4, 4, 3]
B = [2, 3, 1, 3, 1]
      </pre>
      <p><strong>Output:</strong> True</p>
      <p><strong>Explanation:</strong></p>
      <p>
        There exists a path <code>1 → 2 → 3 → 4</code> using the edges:
        <code>(1,2)</code>, <code>(2,3)</code>, and <code>(3,4)</code>.
      </p>
      <p>
        This path satisfies the condition of visiting all vertices in strictly
        increasing order of their numbers.
      </p>
    </div>

    <h3>Example 2:</h3>
    <div className="example">
      <p><strong>Input:</strong></p>
      <pre>
N = 3
A = [1, 1]
B = [2, 3]
      </pre>
      <p><strong>Output:</strong> False</p>
      <p><strong>Explanation:</strong></p>
      <p>
        There is no valid path from <code>1</code> to <code>3</code> that visits
        all vertices in strictly increasing order of their numbers. The given
        edges <code>(1,2)</code> and <code>(1,3)</code> do not connect
        <code>2</code> and <code>3</code>.
      </p>
    </div>
  </div>
</div>

    </>
  )
}
export default Microsoft;