# NewsOS Studio Manager Template

**Version:** 1.0  
**Status:** Active  
**Purpose:** Official reusable template for every NewsOS Studio manager.

---

# Overview

The Studio Manager Template provides the standard layout used by every NewsOS Studio manager.

Every manager begins with this template before manager-specific functionality is added.

This eliminates duplicate work and ensures a consistent administrator experience throughout NewsOS Studio.

---

# Manager Structure

Every manager follows the same structure.

1. Header
2. Manager Toolbar
3. Search & Filter Toolbar
4. Main Management Area
5. Sticky Right Sidebar
6. Pagination Footer

No manager should change this structure without updating the NewsOS Studio Design Standards.

---

# Header

Purpose:

Identify the manager and provide the primary action.

Contains:

• Manager Title

• Version

• Manager Description

• Primary Action Button

Examples:

+ Add Movie

+ Create Badge

+ Add Radio Station

+ Publish Article

+ Add Member

---

# Manager Toolbar

Purpose:

Display operational information.

Standard Components:

• Breadcrumb Navigation

• Module Status

• Last Updated

• Selected Records

Future additions may include workspace indicators or synchronization status.

---

# Search & Filter Toolbar

Purpose:

Quickly locate and organize records.

Standard Controls:

Search

Sort

Filters

Bulk Actions

View Mode (optional)

Manager-specific filters may be added when necessary.

---

# Main Management Area

Purpose:

Display and manage records.

Default View:

Table View

Future View:

Grid View

Management tables should support:

• Alphabetical sorting

• Search

• Sorting

• Column resizing

• Multi-selection

• Quick Information badges

Managers should scale efficiently to thousands of records.

---

# Sticky Right Sidebar

Purpose:

Provide contextual information while records are managed.

Standard Sections:

## Statistics

Displays manager statistics.

Examples:

Movies

Articles

Members

Stations

Badges

---

## Context Panel

Displays information relevant to the selected record.

Examples:

Featured Movie

Featured Station

Featured Badge

Selected Member

---

## Quick Information

Displays status legends and important indicators.

Examples:

Active

Inactive

Featured

Draft

Published

Archived

---

# Pagination

Purpose:

Efficient navigation of large datasets.

Standard Controls:

Previous

Next

Current Page

Total Pages

Page Size Selector

Total Record Count

Example:

Showing 1–25 of 248 Records

---

# Default Page Sizes

25

50

100

The user's preferred page size should be remembered whenever possible.

---

# Sorting

Default sorting is alphabetical.

Search temporarily overrides sorting.

Managers may provide additional sorting methods.

---

# Bulk Actions

Bulk Actions become available after selecting one or more records.

Examples:

Delete

Enable

Disable

Export

Assign

Update

Managers may define additional bulk actions.

---

# Quick Information Badges

Every manager should support lightweight status indicators.

Examples:

Active

Inactive

Featured

Draft

Published

Archived

Badges should provide immediate visual understanding without opening records.

---

# Empty State

Every manager should display a friendly empty state.

Example:

No records found.

Use the primary action button to create your first record.

---

# Forms

All manager forms should remain consistent.

Recommended order:

Title

Description

Category

Media

Options

Save

Cancel

Required fields should be clearly identified.

---

# Confirmation Dialogs

Destructive actions require confirmation.

Examples:

Delete

Archive

Reset

Remove

Dialogs should explain the action before continuing.

---

# Notifications

Managers should provide immediate feedback.

Examples:

Created

Updated

Deleted

Saved

Published

Errors should clearly explain how to resolve the issue whenever possible.

---

# Audit Log

Every manager integrates with the NewsOS Audit Log.

Managers must never maintain independent activity logs.

Examples:

Record Created

Record Updated

Record Deleted

Status Changed

Permission Changed

---

# Accessibility

Managers should be easy to use.

Requirements:

• Consistent spacing

• Readable typography

• Keyboard accessibility (future)

• Responsive layout

• Clear visual hierarchy

---

# Future Enhancements

Grid View

Advanced Filtering

Import

Export

Saved Filters

Custom Views

Role-Based Layouts

---

# Template Lifecycle

Every manager follows this lifecycle.

Studio Manager Template

↓

Manager Blueprint

↓

Manager HTML Layout

↓

Manager JavaScript

↓

Testing

↓

Completed Manager

No manager should skip a lifecycle stage.

---

# Applies To

This template is the required starting point for:

Cinema Manager

Badge Manager

Radio Manager

News Manager

Community Manager

Passport Manager

Activity Manager

System Manager

All future NewsOS Studio managers.

---

This document is the official reusable manager template for NewsOS Studio.