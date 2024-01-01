import React, { useState } from 'react';

export default function WhyButton({ reason, why, setWhy }) {
  const [isSelected, setIsSelected] = useState(true)


  const handleClick = () => {
    setWhy(reason)
    setIsSelected(true)
  }

  return (
    <button className={`whyButton ${isSelected && why === reason ? 'selected' : ''}`} onClick={handleClick} value={reason} type='button'>
      {reason}
    </button>
  )
}