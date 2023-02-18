import Link from 'next/link'
import React from 'react'

function MenuItem({title, address, Icon}) {
  return (
    <div>
        <Link href={address}>
            <Icon />
            <p>{title}</p>
        </Link>
    </div>
  )
}

export default MenuItem