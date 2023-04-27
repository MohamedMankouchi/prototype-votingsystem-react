import React from "react";
import { useMotionValue, Reorder } from "framer-motion";

export const Card = ({ data }) => {
  console.log(data);
  const y = useMotionValue(0);

  return (
    <Reorder.Item as="div" value={data} id={data.id} style={{ y }}>
      <div className="card">
        <h2>{data.name}</h2>
        <p>{data.desc}</p>
      </div>
    </Reorder.Item>
  );
};
