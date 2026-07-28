# Cinema Manager Blueprint

**Version:** 1.0  
**Status:** Approved Design Blueprint

---

# Purpose

Cinema Manager is the administrative application responsible for managing the complete NewsOS movie library.

All movie management functions are performed from this manager.

This blueprint defines the approved layout before implementation begins.

---

# Manager Goals

- Manage large movie libraries efficiently.
- Maintain one source of truth for all movie data.
- Scale to hundreds or thousands of movies.
- Minimize scrolling.
- Maintain consistency with all NewsOS Studio managers.

---

# Standard Layout

Cinema Manager follows the official NewsOS Studio Design Standards.

Layout sections:

1. Header
2. Manager Toolbar
3. Search & Filter Toolbar
4. Movie Management Table
5. Sticky Right Sidebar
6. Pagination Footer

---

# Header

Displays:

- Cinema Manager
- Version
- Description
- Primary Action Button

Primary Action:

+ Add Movie

---

# Manager Toolbar

Displays operational information.

Examples:

- Breadcrumb
- Library Status
- Last Updated
- Selected Records

---

# Search & Filters

Standard controls:

- Search
- Genre
- Rating
- Status
- Sort
- Bulk Actions

---

# Movie Management Table

Default View:

Table View

Columns:

- Poster
- Title
- Genre
- Runtime
- Rating
- Status
- Actions

Features:

- Alphabetical sorting
- Searchable
- Sortable
- Column resizing
- Bulk selection

Future Enhancement:

Grid View

---

# Sticky Right Sidebar

Always visible.

Contains:

## Statistics

- Total Movies
- Featured Movies
- Genres
- Ratings

---

## Featured Movie

Displays:

- Poster
- Title
- Change Featured

---

## Quick Information

Displays status badge legend.

Examples:

- Active
- Featured
- Draft
- Archived

---

# Pagination

Standard controls:

Previous

Next

Current Page

Total Pages

Page Size

Total Records

Example:

Showing 1–25 of 248 Movies

---

# Default Page Sizes

25

50

100

---

# Sorting Rules

Movies automatically sort alphabetically after creation.

Search results temporarily override alphabetical sorting.

---

# Empty State

Display:

No Movies Found

Add your first movie to begin building your NewsOS library.

---

# Movie Form

Fields:

Movie Title

Description

Genre

Runtime

Rating

Poster

Media URL

Featured

Save

Cancel

---

# Edit Movie

Uses the same form as Add Movie.

---

# Delete Movie

Requires confirmation before deleting.

---

# Audit Log

Every movie action records an Audit Log entry.

Examples:

Movie Added

Movie Updated

Movie Deleted

Featured Movie Changed

---

# Future Enhancements

Grid View

Advanced Filters

Import Library

Export Library

Movie Collections (if ever adopted)

Advanced Statistics

---

# Completion Checklist

☐ Movie Library

☐ Add Movie

☐ Edit Movie

☐ Delete Movie

☐ Search

☐ Featured Movie

☐ Statistics

☐ Permissions

☐ Audit Log

Cinema Manager is not considered complete until every checklist item is finished.