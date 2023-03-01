import React, { useEffect, useState } from 'react'

function Form({ addContacts, contacts }) {
    const initialValues = { fullname: "", phone_number: "" }
    const [form, setForm] = useState(initialValues)

    const onChangeInput = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }
    useEffect(() => {
        setForm(initialValues)
    }, [contacts])

    const onSubmit = (e) => {
        e.preventDefault()
        if (form.fullname === "" || form.phone_number === "") {
            return false;
        }

        addContacts([...contacts, form])

    }

    return (

        <form onSubmit={onSubmit}>
            <div>
                <input
                    name='fullname'
                    value={form.fullname}
                    placeholder='Full Name '
                    onChange={onChangeInput} />
            </div>

            <div>
                <input
                    name='phone_number'
                    placeholder='Phone Number'
                    value={form.phone_number}
                    onChange={onChangeInput} />
            </div>

            <div className='btn'>
                <button>
                    Add
                </button>
            </div>
        </form>

    )
}

export default Form
