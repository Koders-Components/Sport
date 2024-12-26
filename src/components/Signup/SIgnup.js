import React, {useState}from 'react'
import './Signup.css';

function SIgnup() {
      const [email, setEmail] = useState('');
  return (
    <div>
        <div className='Signup_container'>
        <form>
            <div className='form-group'>
                <label>Frist Name:</label>
                <input
                    type='text'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
                <label>Middle Name:</label>
                <input
                    type='text'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </form>
        </div>
    </div>
  )
}

export default SIgnup
