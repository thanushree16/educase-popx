import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const isValid = email.trim() !== '' && password.trim() !== ''

  const handleLogin = () => {
    if (isValid) navigate('/profile')
  }

  return (
    <div className="phone-container">
      <div className="auth-page">
        <h1 className="auth-title">
          Signin to your<br />PopX account
        </h1>
        <p className="auth-subtitle">
          Lorem ipsum dolor sit amet,<br />
          consectetur adipiscing elit,
        </p>

        <div className="input-group">
          <label>Email Address</label>
          <input
            type="email"
            placeholder="Enter email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {isValid ? (
          <button className="btn-primary" onClick={handleLogin}>
            Login
          </button>
        ) : (
          <button className="btn-disabled" disabled>
            Login
          </button>
        )}
      </div>
    </div>
  )
}
