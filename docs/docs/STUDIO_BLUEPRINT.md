## Purpose

The Content Manager is the central hub for managing all content displayed throughout NewsOS.

It provides one place to organize and maintain platform content while allowing specialized managers (Cinema, Radio, News, etc.) to focus on their own areas.

---

## Design Philosophy

The Content Manager does not replace specialized managers.

Instead, it provides a centralized overview and quick access to all NewsOS content.

---

## Responsibilities

The Content Manager will provide access to:

- Cinema Content
- Radio Content
- News Content
- Community Content
- Passport Management
- Badge Management

---

## Version 1 Goals

- Central navigation for all NewsOS content.
- Quick links to specialized managers.
- Overview of available content.
- Future support for global search.

---

## Future Expansion

Potential future features include:

- Global content search
- Content approval workflow
- Recently edited content
- Draft management
- Bulk editing tools

## Purpose

The Dashboard is the home screen of NewsOS Studio.

It provides administrators with a live overview of the NewsOS platform without requiring them to open individual managers.

The Dashboard serves as the command center for NewsOS Studio.

---

## Design Philosophy

The Dashboard is for monitoring, not editing.

Content is managed in its respective manager.
The Dashboard simply summarizes important information from across NewsOS.

---

## Information Displayed

### System Status

Displays the current operational status of NewsOS.

Examples:

- Online
- Maintenance
- Offline

---

### Current Time

Displays the current NewsOS Studio time.

---

### Recent Activity

Displays the latest actions performed within NewsOS Studio.

Examples:

- Movie Added
- Badge Assigned
- News Published

---

### Quick Actions

Provides shortcuts to commonly used Studio tools.

Examples:

- Open Content Manager
- Open Passport Manager
- Open Badge Manager

---

### Platform Summary

Displays a high-level overview of NewsOS.

Examples:

- Registered Passports
- Movies
- DJ Mixes
- News Articles

---

## Data Sources

The Dashboard does not own data.

It displays summarized information provided by other Studio modules.

---

## Version 1 Goals

- Professional control center layout.
- Live platform overview.
- Fast access to commonly used tools.
- Consistent workspace design.

---

## Future Expansion

Potential future additions include:

- System notifications
- Update availability
- Platform analytics
- Storage information
- Performance monitoring

## Purpose

The Passport Manager is responsible for managing all NewsOS Passports.

It provides administrators with a centralized location for viewing, searching, and managing registered NewsOS users.

---

## Design Philosophy

The Passport Manager is responsible for user identity.

It does not manage content.

Instead, it manages the people who use NewsOS.

---

## Responsibilities

The Passport Manager allows administrators to:

- View registered Passports
- Search Passports
- View Passport details
- View assigned badges
- View assigned roles
- View Member Since date

---

## Passport Information

Each Passport contains:

- Display Name
- Passport ID
- Member Since
- Assigned Role
- Badges & Achievements
- Favorite Movies

---

## Version 1 Goals

- View all registered Passports.
- Search by Display Name or Passport ID.
- View Passport information.
- Display assigned badges.
- Display assigned role.

---

## Future Expansion

Potential future features include:

- Passport activation management
- Account suspension
- Passport history
- Login activity
- User preferences

### Passport Administration

Super Admins can manage NewsOS Passports from a centralized interface.

Planned administrative actions include:

- Activate Passport
- Deactivate Passport
- Assign Role
- Launch Badge Manager for selected Passport
- View Passport Details

Notes

The Passport Manager serves as the central identity management system for NewsOS.

It does not manage content.

Its responsibility is managing users and their identities within the NewsOS ecosystem.

## Purpose

The Badge Manager is responsible for creating, editing, assigning, and managing badges throughout the NewsOS ecosystem.

It serves as the centralized badge administration system for NewsOS.

---

## Design Philosophy

The Badge Manager does not manage users.

It manages badges.

Badge assignments are performed in conjunction with the Passport Manager.

---

## Responsibilities

The Badge Manager allows Super Admins to:

- Create new badges
- Edit existing badges
- Delete badges
- View all available badges
- Define badge type
- Configure badge rules (future)
- Launch badge assignment for a selected Passport

---

## Badge Types

### Automatic

Awarded automatically by NewsOS when predefined conditions are met.

Requirements are evaluated by the NewsOS Badge Engine.

---

### Manual

Assigned by authorized administrators.

Examples

- ⭐ News Station Member
- 👑 VIP
- 🛠 Staff

---

## Version 1 Goals

- Create badges
- Edit badges
- Delete badges
- View badge details
- Assign manual badges through Passport Manager

---

## Future Expansion

Potential future additions include:

- Badge categories
- Badge artwork
- Badge rarity
- Badge rule editor
- Badge expiration
- Badge statistics
- Automatic badge engine configuration

---

## Workspace Behavior

The Badge Manager follows the NewsOS Studio single-window philosophy.

Selecting a badge updates the current workspace.

Badge creation and editing occur within the existing workspace.

Badge assignment is launched from the Passport Manager.

## Purpose

The System Manager is responsible for configuring and maintaining the NewsOS platform.

It provides Super Admins with centralized access to global NewsOS settings.

---

## Design Philosophy

The System Manager controls platform behavior.

It does not manage content.

It does not manage users.

Its responsibility is configuring NewsOS itself.

---

## Responsibilities

The System Manager allows Super Admins to manage:

- Platform Settings
- Version Information
- Maintenance Mode
- System Status
- Feature Toggles
- Future Global Configuration

---

## Version 1 Goals

- View current NewsOS version.
- Display system status.
- Enable or disable maintenance mode.
- Display platform information.

---

## Workspace Behavior

The System Manager follows the NewsOS Studio single-window philosophy.

Selecting System updates the existing Studio workspace.

No additional Studio windows are opened.

---

## Future Expansion

Potential future additions include:

- Theme management
- Boot screen settings
- Default startup application
- Media settings
- Platform diagnostics
- Backup and restore
- Developer options

## Purpose

The Radio Manager is responsible for managing all DJ mixes and radio content available within NewsOS.

It provides administrators with a centralized location for organizing, publishing, and maintaining audio content.

---

## Design Philosophy

The Radio Manager manages audio content only.

It does not manage users, badges, or system settings.

Its responsibility is organizing and maintaining the NewsOS radio library.

---

## Responsibilities

The Radio Manager allows authorized administrators to:

- Add DJ mixes
- Edit DJ mixes
- Remove DJ mixes
- Manage mix artwork
- Manage mix descriptions
- Organize mixes into categories
- Feature selected mixes

---

## Information Managed

Each mix may contain:

- Mix Title
- DJ Name
- Cover Artwork
- Description
- Category
- Duration
- Audio Source
- Publish Date
- Featured Status

---

## Version 1 Goals

- Add new mixes
- Edit existing mixes
- Remove mixes
- Upload artwork
- Feature a mix
- Organize by category

---

## Workspace Behavior

The Radio Manager follows the NewsOS Studio single-window philosophy.

Selecting Radio updates the existing workspace.

No additional Studio windows are opened.

---

## Data Source

The Radio Manager is responsible for maintaining the NewsOS radio library.

Other Studio modules may display summarized information from the Radio Manager but do not manage its content.

---

## Future Expansion

Potential future additions include:

- Playlist management
- Scheduled releases
- Recently added mixes
- Play statistics
- Search and filtering
- Bulk import tools