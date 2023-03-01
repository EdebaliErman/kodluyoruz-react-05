import React, { useState } from 'react'

function List({ contacts }) {
  const [fillterText, setFillterText] = useState("")

  const filltred = contacts.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key]
        .toString()
        .toLowerCase()
        .includes(fillterText.toLowerCase())

    )
  })

  console.log(filltred)

  return (
    <div>
      <input
        placeholder='Fillter Contacts'
        value={fillterText}
        onChange={(e) => setFillterText(e.target.value)}
      />
      <ul className='list'>
        {filltred.map((contact, i) => <li key={i}>
        <span>{contact.fullname}</span>
        <span>{contact.phone_number}</span>
        </li>
        )}
      </ul>
      <p>
        Total People ({filltred.length})
      </p>
    </div>
  )
}

export default List
