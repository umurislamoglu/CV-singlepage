import React from "react";

const SkillBadge = (props) => {
  const { color, title , textColor } = props;
  return <span className={`badge bg-${color} rounded-pill mx-2 p-2 px-3 mt-2 fw-light text-${textColor}`}>{title}</span>;
};

export default SkillBadge;
