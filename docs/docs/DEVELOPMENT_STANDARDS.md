# NewsOS Development Standards

Version: 1.0

Status: Active

Owner: News Station Technologies

---

# Purpose

This document defines the permanent development standards for the NewsOS project.

These standards exist to maintain consistency, reduce duplicate work, and ensure every feature follows the same development philosophy.

---

# Development Philosophy

NewsOS is developed using an architecture-first approach.

Every major feature should be:

- Designed
- Documented
- Reviewed
- Implemented

Documentation always comes before implementation.

---

# Project Workflow

Every major feature follows this order:

Blueprint

↓

Architecture

↓

Implementation

↓

Testing

↓

Review

---

# Core Rules

## One Project at a Time

Complete the current project before beginning another.

Avoid switching focus unless required to resolve a blocking issue.

---

## No Double Work

Never redesign or rebuild completed work without a clear technical reason.

Improve existing systems instead of replacing them unnecessarily.

---

## Live Code is the Source of Truth

After the current project state is established, the live code becomes the authoritative source.

ZIP archives are used only to identify the current sprint and should not be used for future implementation guidance.

---

## Framework Before Features

Framework improvements take priority over feature implementation.

Build the platform first.

Then build the modules that live inside it.

---

## Single Responsibility

Every manager owns one responsibility.

Every platform service owns one responsibility.

Avoid overlapping systems.

---

## Single Source of Truth

Every major system owns its own data.

Examples:

- Passport System owns Passport data.
- Badge Manager owns badge definitions.
- Badge Engine owns automatic badge evaluation.
- Audit Log owns activity history.

Other modules display data but do not own it.

---

## Single Window Philosophy

NewsOS Studio operates as one workspace.

Managers never open additional Studio windows.

Everything loads into the existing workspace.

---

# Coding Workflow

Every coding sprint follows the same format.

📄 File

📍 Current Code

📋 Replace With

✅ Finished Result

🧪 Test

💾 Save

📦 Commit

⬆️ Push

---

## Safe Phase Rule

Implement one small, reversible change at a time.

Test before moving to the next step.

---

## Complete Replacements

When replacing an entire function or file is simpler and safer than multiple edits, prefer the complete replacement.

Avoid unnecessary partial edits.

---

# Documentation Standards

Every document should clearly state:

Purpose

Responsibilities

Data Ownership

Version 1 Scope

Future Expansion

Maintain consistent structure across all documentation.

---

# Architecture Standards

Every major system should define:

Purpose

Responsibilities

Data Owned

Connected Systems

Future Expansion

---

# Version 1 Priorities

1. Complete documentation.

2. Complete Studio Framework.

3. Implement Studio managers.

4. Implement platform services.

5. Complete Version 1 polish.

---

# Final Principle

NewsOS should be developed as a professional software platform.

Every design decision should prioritize:

- Stability
- Simplicity
- Scalability
- Consistency
- Maintainability