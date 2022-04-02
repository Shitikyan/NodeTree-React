import Node from "../node";

import TreeProps from "../../types/TreeProps";

import "./index.scss";

const Tree = ({ tree }: TreeProps) => {
  return (
    <div className="tree-container">
      {tree.map((elem, iter) => (
        <Node title={elem.title} nodes={elem.nodes} key={iter} />
      ))}
    </div>
  );
};

export default Tree;
