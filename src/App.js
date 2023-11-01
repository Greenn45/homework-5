import React, {useState} from 'react';

const App = () => {
    const PrototypeForm = {
        firstName: 'Barbara',
        lastName: 'Hepworth',
        email: 'bhepworth@react.com',
        hobby: 'love cats'
    }

    const [form, setForm] = useState(PrototypeForm);

    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        width: '250px',
        margin: 'auto',
        marginTop: '50px',
        background: '#ccc',
        padding: '0 5px',
    };

    const inputStyle = {
        borderRadius: '5px',
        marginBottom: '5px',
    };

    const textStyle = {
        margin: '5px'
    }


    return (
        <>
            <div className="app" style={containerStyle}>
                <label htmlFor='fname'>First Name:</label>
                <input type="text"
                       style={inputStyle}
                       id='fname'
                       placeholder='Enter name'
                       value={form.firstName}
                       onChange={e => {setForm({...form,
                           firstName: e.target.value})}}/>
                <label htmlFor="lname">Last Name: </label>
                <input type="text"
                       id='lname'
                       style={inputStyle}
                       placeholder='Enter last name'
                       value={form.lastName}
                       onChange={e => {setForm({...form,
                           lastName: e.target.value})}}/>
                <label htmlFor="email">Email: </label>
                <input type="text"
                       id='email'
                       style={inputStyle}
                       value={form.email}
                       placeholder='Enter email'
                       onChange={e => {setForm({...form,
                           email: e.target.value})}}/>
                <label htmlFor="hobby">Telephone: </label>
                <input type="text"
                       id='hobby'
                       style={inputStyle}
                       value={form.hobby}
                       placeholder='Enter your hobby'
                       onChange={e => {setForm({...form,
                           hobby: e.target.value})}}/>
                <hr/>

                <p style={textStyle}>First name:{form.firstName}</p>
                <p style={textStyle}>Last name:{form.lastName}</p>
                <p style={textStyle}>Email: {form.email}</p>
                <p style={textStyle}>Hobby: {form.hobby}</p>
            </div>
        </>

    );
};

export default App;