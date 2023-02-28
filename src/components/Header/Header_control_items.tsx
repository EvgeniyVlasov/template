import React, { ReactElement } from "react";

function ControlItems(props: { svgItems: ReactElement<SVGElement>[] }) {
  return (
    <>
      {
        props.svgItems.map(item => {
          return <li key={item.props.id} className="controls_item">
            <button className="controls_item_button">
              {item}
            </button>
          </li>
        })
      }
    </>
  );
}

export default ControlItems;