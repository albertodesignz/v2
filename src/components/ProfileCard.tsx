import React from "react"

interface Social {
  icon: string
  url: string
}

interface ProfileCardProps {
  name: string
  title: string
  avatar: string
  description: string
  socials: Social[]
}

export function ProfileCard({ name, title, avatar, description, socials }: ProfileCardProps) {
  return (
    <div className="profile-card">
      <div className="profile-header">
        <img src={avatar} alt={name} className="profile-avatar" />
        <div className="profile-info">
          <h2 className="profile-name">{name}</h2>
          <p className="profile-title">{title}</p>
        </div>
      </div>
      <p className="profile-description">{description}</p>
      <div className="profile-socials">
        {socials.map((social, index) => (
          <a
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            {social.icon}
          </a>
        ))}
      </div>
    </div>
  )
} 