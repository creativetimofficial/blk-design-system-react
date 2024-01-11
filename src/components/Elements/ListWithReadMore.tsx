'use client'

import React, { useState } from 'react'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'

export const ListWithReadMore: React.FC<{
  more: string
  less: string
  list: string[]
}> = ({ more, less, list = [] }) => {
  const [open, setOpen] = useState(false)

  const HandleClick = () => {
    // function in case we need more logic
    setOpen(!open)
  }

  if (list.length <= 0) return <div className="d-none" />
  const openHeight = list.length * 42
  const closeHeight = 260
  const needsReadMore = openHeight > closeHeight
  return (
    <div className={`list-with-read-more ${needsReadMore && !open ? 'close-list' : ''}`}>
      <ul style={{ height: `${open ? openHeight : closeHeight}px` }}>
        {list.map(item => (
          <li key={item.replace(' ', '-')}>{item}</li>
        ))}
      </ul>
      {needsReadMore && (
        <button type="button" onClick={HandleClick}>
          {open ? less : more} {open ? <IoIosArrowUp size={20} /> : <IoIosArrowDown size={20} />}
        </button>
      )}
    </div>
  )
}
