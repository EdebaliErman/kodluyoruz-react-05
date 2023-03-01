import React, { useEffect, useState } from 'react'
import './style.css'
import List from './List'
import Form from './Form'

function Contacts() {

  const [contacts, setContacts] = useState([
    { fullname: "Mehmet", phone_number: "1231" },
    { fullname: "Hakkı", phone_number: "234" },
    { fullname: "Harun", phone_number: "23423" }
  ])

  useEffect(() => {
    console.log(contacts)
  }, [contacts])

  return (
    <div id='container'>
      <h1>Contacts</h1>
      <List contacts={contacts} />
      <Form addContacts={setContacts} contacts={contacts}></Form>
    </div>
  )
}

export default Contacts;