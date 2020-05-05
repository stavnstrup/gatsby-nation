import React from "react"
import Element from "../components/element"
import Taxonomytree from "../components/taxonomytree"

const node = () => {
  return (
    <Element type="Taxonomy Nodes">
      <p>
        The taxonomy below consists of a subset of nodes from the C3 Taxonomy
        version 3.1 released on Jul 4, 2019. The tree have been extended with a
        User defined subtree describing nodes which have not yet been added to
        the C3 Taxonomy.
      </p>
      <p>
        Each node in the tree is prefixed with a number describing the level of
        the node in the tree (i.e. the distance from the root node).
      </p>
      <p>
        Each node may also be postfixed with a tuple with three values,
        indicating:
      </p>

      <ul>
        <li>
          The number of times a mandatory standard references a node in the
          taxonomy
        </li>
        <li>
          The number of times a candidate standard references a node in the
          taxonomy
        </li>
        <li>
          The number of times a taxonomy node is referenced from a service
          profile
        </li>
      </ul>

      <Taxonomytree />
    </Element>
  )
}

export default node
