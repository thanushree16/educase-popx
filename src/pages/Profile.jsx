import { useLocation } from 'react-router-dom'

export default function Profile() {
  const location = useLocation()
  const name = location.state?.name || 'Marry Doe'
  const email = location.state?.email || 'Marry@Gmail.Com'

  // Get initials for avatar placeholder
  const initials = name
    .split(' ')
    .map((w) => w[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)

  return (
    <div className="phone-container">
      <div className="profile-page">
        <div className="profile-header">
          <p className="profile-title">Account Settings</p>

          <div className="profile-info">
            <div className="avatar-wrapper">
              <div className="avatar-placeholder">{initials}</div>
              <div className="avatar-edit-btn">
                {/* Camera icon */}
                <svg viewBox="0 0 24 24" width="12" height="12" fill="white" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 15.2a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4z"/>
                  <path d="M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"/>
                </svg>
              </div>
            </div>

            <div>
              <p className="profile-name">{name}</p>
              <p className="profile-email">{email}</p>
            </div>
          </div>
        </div>

        <p className="profile-bio">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
        </p>
      </div>
    </div>
  )
}
