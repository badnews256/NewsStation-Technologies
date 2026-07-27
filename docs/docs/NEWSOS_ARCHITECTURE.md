# NewsOS Architecture

## Vision

NewsOS is a desktop-style entertainment operating system designed for Second Life.

Its architecture is built around modular applications, centralized services, and a professional administrative experience.

The platform is designed to remain scalable while maintaining a consistent user experience.

---

# Core Principles

## Single Source of Truth

Every major system owns its own data.

Other modules may display summarized information but should never duplicate ownership.

---

## Modular Design

Every major feature exists as an independent module.

Examples include:

- Passport System
- Badge Engine
- Audit Log
- Cinema
- Radio
- News

Modules communicate through shared platform services.

---

## Single Window Philosophy

NewsOS Studio operates inside a permanent framework.

Managers never create additional Studio windows.

Every manager loads inside the existing Studio workspace.

---

# Platform Services

Platform Services operate behind the scenes and support the entire NewsOS platform.

---

## Passport System

### Purpose

Provides every NewsOS user with a persistent identity.

### Stores

- Unique Passport ID
- Display Name
- Activation Date
- Member Since
- Favorite Movies
- Earned Badges

---

## Badge Engine

### Purpose

Automatically evaluates Passport data and awards badges.

Supports:

- Automatic badges
- Manual administrator badges

The Badge Manager defines badge rules.

The Badge Engine evaluates those rules.

---

## Audit Log Engine

### Purpose

Maintains the complete history of meaningful platform events.

The Audit Log is the single source of truth for activity throughout NewsOS.

Dashboard displays:

Recent Activity

Activity Manager displays:

Complete Audit History

Events may include:

- Passport changes
- Badge assignments
- Movie updates
- Radio updates
- News publishing
- System configuration
- Administrator actions

---

## Watch Together

### Purpose

Synchronizes media playback between NewsOS users.

Version 1 Goals

- Shared movie playback
- Shared playback controls
- Viewer synchronization

Future versions may expand synchronization capabilities.

---

# Identity System

Every NewsOS installation represents a unique Passport.

Identity is based on the Passport rather than News Station membership.

Optional administrator badges may identify News Station members.

---

# Role System

Studio supports role-based permissions.

Planned roles include:

- Super Admin
- Administrator
- Moderator
- Content Manager
- Media Manager

Permissions determine which Studio managers and actions are available.

---

# Data Ownership

Passport System owns:

- Passport data

Badge Engine owns:

- Badge assignments

Badge Manager owns:

- Badge definitions

Cinema Manager owns:

- Movie library

Radio Manager owns:

- DJ mix library

News Manager owns:

- News articles

Community Manager owns:

- Community content

Audit Log Engine owns:

- Audit history

System Manager owns:

- Platform configuration

---

# Module Relationships

Dashboard

↓

Displays summaries from multiple platform services.

Passport Manager

↓

Passport System

Badge Manager

↓

Badge Engine

Activity Manager

↓

Audit Log Engine

Cinema Manager

↓

Movie Library

Radio Manager

↓

Radio Library

News Manager

↓

News Library

Community Manager

↓

Community Library

System Manager

↓

Platform Configuration

---

# Future Platform Features

## NewsOS Word Game

Purpose

Create an original NewsOS word-guessing game with its own branding and identity.

The game will integrate naturally into the NewsOS ecosystem while remaining distinct from Wordle.

---

## Expanded Passport Features

Potential additions include:

- Achievement collections
- Additional profile customization
- Statistics
- Collectibles

---

## Future Badge Features

- Seasonal badges
- Event badges
- Community badges
- Platform milestone badges

---

# Version Roadmap

## Version 1

- Studio
- Passport System
- Badge Engine
- Audit Log
- Watch Together
- Radio
- Cinema
- News
- Community

---

## Future Versions

- Word Game
- Expanded Passport
- Additional Studio tools
- Theme customization
- Platform analytics

# Studio Management Layer

The NewsOS Studio serves as the administrative layer for NewsOS applications.

Studio managers configure and manage applications.

Applications provide the end-user experience.

Managers do not replace applications.

Managers administer applications.

## Manager Relationships

Dashboard
→ Platform Overview

Content Manager
→ Shared Platform Content

Cinema Manager
→ Cinema Application

Radio Manager
→ Radio Application

News Manager
→ News Application

Community Manager
→ Community Features

Activity Manager
→ Audit Log

System Manager
→ Platform Configuration

Passport Manager
→ Passport System

Badge Manager
→ Badge Engine