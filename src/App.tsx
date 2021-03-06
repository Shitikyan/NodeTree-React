import { useEffect, useState } from "react";

import Tree from "./components/tree";
import NodeProps from "./types/NodeProps";

function App() {
  const [tree, setTree] = useState<NodeProps[]>([]);

  useEffect(() => {
    fetch("./json/data.json")
      .then((res) => res.json())
      .then(setTree);
  }, []);

  return (
    <div className="App">
      <Tree tree={tree} />
    </div>
  );
}

export default App;
