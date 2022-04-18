import React from "react";
import * as s from './DexBadge.Components'

interface IDexBadge {
  icon: any,
  text: string,
  className: string
}

function DexBadge({ icon, text, className }: IDexBadge) {
  return (
    <s.DexBadge className={className}>
      <img src={icon} width={26} height={26} alt="" />
      <p className="text-[13px] text-[#17263B]">{text}</p>
    </s.DexBadge>
  )
}

export default DexBadge;