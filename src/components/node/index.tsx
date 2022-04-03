import { useMemo, useState } from "react";
import NodeProps from "../../types/NodeProps";
import Rotator from "../../types/Styles";

import arrowIcon from "../../images/chevron.png";

import "./index.scss";

const Node = ({ nodes, title }: NodeProps) => {
  const [toggle, setToggle] = useState<boolean>(false);

  const chevronPosition: Rotator = useMemo(
    () => ({ transform: `rotate(${toggle ? 90 : 0}deg)` }),
    [toggle]
  );

  return (
    <div className="node-container">
      <span
        className="node"
        onClick={() => {
          console.log(title);
          if (nodes.length > 0) {
            setToggle(!toggle);
          }
        }}
      >
        <p className="title">{title}</p>
        {nodes.length > 0 && (
          <img
            src={arrowIcon}
            className="arrow"
            style={chevronPosition}
            alt="chevron"
          />
        )}
      </span>
      <span className="childrens">
        {toggle &&
          nodes.map((elem: NodeProps, index: number) => (
            <Node title={elem.title} nodes={elem.nodes} key={index} />
          ))}
      </span>
    </div>
  );
};

export default Node;
