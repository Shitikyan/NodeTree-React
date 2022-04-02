import { useMemo, useState } from "react";
import NodeProps from "../../types/NodeProps";
import Rotator from "../../types/Styles";

import arrowIcon from "../../images/chevron.png";

import "./index.scss";

const Node = (props: NodeProps) => {
  const [toggle, setToggle] = useState<boolean>(false);

  const chevronRotator = (degree: number): Rotator => {
    return { transform: `rotate(${degree}deg)` };
  };

  const chevronPosition: Rotator = useMemo<Rotator>(
    () => chevronRotator(Number(toggle) * 90),
    [toggle]
  );

  return (
    <div className="node-container">
      <span
        className="node"
        onClick={() => {
          console.log(props.title);
          setToggle(!toggle);
        }}
      >
        <p className="title">{props.title}</p>
        <img src={arrowIcon} className="arrow" style={chevronPosition} alt="" />
      </span>
      <span className="childrens">
        {toggle &&
          props.nodes.map((elem: NodeProps, iter: number) => (
            <Node title={elem.title} nodes={elem.nodes} key={iter} />
          ))}
      </span>
    </div>
  );
};

export default Node;
