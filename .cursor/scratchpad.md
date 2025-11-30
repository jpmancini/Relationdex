# Project Scratchpad

## Background and Motivation

This document serves as the central planning and coordination hub for the Relationdex project. The project is currently a fresh React + TypeScript + Vite application with default template code.

**Project Goal:** Build a personal web application for managing social relationships. The app will help track contacts, monitor interaction frequency, and alert when it's time to reconnect with people.

**Core Requirements:**
1. **Contact Management**: Store and manage information about personal contacts
2. **Interaction Tracking**: Record the last time talked to or seen each person in person
3. **Frequency Management**: Set desired frequency of contact for each person
4. **Alert System**: Notify when past the desired contact frequency

**Current Project State:**
- React 19.2.0 with TypeScript
- Vite 7.2.4 as build tool
- ESLint configured
- Default Vite + React template (counter app)
- No data persistence layer yet
- No UI components for contact management yet

---

## Key Challenges and Analysis

**Data Persistence:**
- Use localStorage for simplicity (no backend required for personal app)
- Need to handle data migration if schema changes
- Consider data export/import functionality for backup

**Date/Time Handling:**
- Track two types of interactions: "talked" and "seen in person"
- Calculate time differences accurately
- Handle timezone considerations (likely use local time)
- Support flexible frequency units (days, weeks, months)

**Alert Logic:**
- Compare last interaction date + desired frequency vs current date
- Display alerts prominently but non-intrusively
- Consider visual indicators (badges, colors) for urgency

**UI/UX Considerations:**
- Simple, clean interface for personal use
- Easy to add/edit contacts quickly
- Quick update of last interaction timestamp
- Clear visual feedback for alerts
- Responsive design for mobile use

**Technical Decisions:**
- No routing library needed initially (single page app)
- Use React Context or simple state management (no Redux needed)
- Date library: Consider date-fns or native Date API
- Form validation: Built-in HTML5 + custom validation

---

## High-level Task Breakdown

### Phase 1: Data Model & Core Types
**Task 1.1: Define TypeScript types and interfaces**
- Create `src/types/contact.ts` with Contact interface
- Fields: id, name, notes, lastTalkedDate, lastSeenDate, desiredTalkFrequency (days), desiredSeeFrequency (days)
- Success Criteria: TypeScript types compile without errors, all required fields defined

**Task 1.2: Create data persistence utilities**
- Create `src/utils/storage.ts` with functions to save/load contacts from localStorage
- Functions: `loadContacts()`, `saveContacts(contacts)`, `generateId()`
- Success Criteria: Can save and load contacts from localStorage, handles empty state gracefully

### Phase 2: Core Utilities
**Task 2.1: Create date calculation utilities**
- Create `src/utils/dateUtils.ts` with functions to calculate days since last interaction
- Functions: `daysSince(date)`, `isOverdue(lastDate, frequencyDays)`
- Success Criteria: Correctly calculates days between dates, handles null/undefined dates

**Task 2.2: Create contact management utilities**
- Create `src/utils/contactUtils.ts` with helper functions
- Functions: `getContactsNeedingAttention(contacts)` - returns contacts that are overdue
- Success Criteria: Correctly identifies overdue contacts based on both talk and see frequencies

### Phase 3: UI Components - Contact List
**Task 3.1: Create ContactList component**
- Create `src/components/ContactList.tsx`
- Display list of all contacts with name and last interaction info
- Show visual indicators for overdue contacts
- Success Criteria: Renders list of contacts, shows overdue status visually

**Task 3.2: Create ContactCard component**
- Create `src/components/ContactCard.tsx` for individual contact display
- Show: name, last talked date, last seen date, desired frequencies, overdue status
- Success Criteria: Displays all contact information clearly, shows alert badges when overdue

### Phase 4: UI Components - Contact Forms
**Task 4.1: Create ContactForm component**
- Create `src/components/ContactForm.tsx` for adding/editing contacts
- Form fields: name (required), notes, desiredTalkFrequency, desiredSeeFrequency
- Support both "add new" and "edit existing" modes
- Success Criteria: Form validates input, can create and edit contacts, handles errors gracefully

**Task 4.2: Create QuickUpdate component**
- Create `src/components/QuickUpdate.tsx` for quickly updating last interaction dates
- Buttons: "Talked Today", "Seen Today", "Talked [X] days ago", "Seen [X] days ago"
- Success Criteria: Can update interaction dates with one click, updates persist to storage

### Phase 5: Main App Integration
**Task 5.1: Create App state management**
- Update `src/App.tsx` to manage contacts state
- Use React Context or useState to manage contacts
- Load contacts from storage on mount, save on changes
- Success Criteria: App loads contacts on startup, saves changes automatically

**Task 5.2: Integrate all components in App**
- Wire up ContactList, ContactForm, QuickUpdate in main App
- Add "Add Contact" button and form modal/drawer
- Add edit functionality (click contact to edit)
- Success Criteria: Can add, view, edit, and update contacts through UI

**Task 5.3: Implement alert/notification system**
- Add alert banner or section showing overdue contacts
- Display count of overdue contacts prominently
- Success Criteria: Alerts display when contacts are overdue, updates in real-time

### Phase 6: Styling & Polish
**Task 6.1: Basic styling and layout**
- Update `src/App.css` and `src/index.css` for clean, modern UI
- Ensure responsive design works on mobile
- Success Criteria: App looks polished, works on mobile and desktop

**Task 6.2: Add empty state handling**
- Show helpful message when no contacts exist
- Add sample data option for testing (optional)
- Success Criteria: App handles empty state gracefully with helpful UI

### Phase 7: Testing & Refinement
**Task 7.1: Manual testing and bug fixes**
- Test all CRUD operations
- Test date calculations and alerts
- Test edge cases (very old dates, zero frequency, etc.)
- Success Criteria: All functionality works correctly, no critical bugs

**Task 7.2: Code cleanup and documentation**
- Remove default Vite template code
- Add code comments where needed
- Ensure TypeScript strict mode compliance
- Success Criteria: Code is clean, well-typed, ready for use

---

## Project Status Board

**Phase 1: Data Model & Core Types**
- [x] Task 1.1: Define TypeScript types and interfaces
- [ ] Task 1.2: Create data persistence utilities

**Phase 2: Core Utilities**
- [ ] Task 2.1: Create date calculation utilities
- [ ] Task 2.2: Create contact management utilities

**Phase 3: UI Components - Contact List**
- [ ] Task 3.1: Create ContactList component
- [ ] Task 3.2: Create ContactCard component

**Phase 4: UI Components - Contact Forms**
- [ ] Task 4.1: Create ContactForm component
- [ ] Task 4.2: Create QuickUpdate component

**Phase 5: Main App Integration**
- [ ] Task 5.1: Create App state management
- [ ] Task 5.2: Integrate all components in App
- [ ] Task 5.3: Implement alert/notification system

**Phase 6: Styling & Polish**
- [ ] Task 6.1: Basic styling and layout
- [ ] Task 6.2: Add empty state handling

**Phase 7: Testing & Refinement**
- [ ] Task 7.1: Manual testing and bug fixes
- [ ] Task 7.2: Code cleanup and documentation

---

## Current Status / Progress Tracking

**Current Phase:** Phase 1 - Data Model & Core Types (In Progress)

**Last Updated:** Task 1.1 completed - TypeScript types defined

**Plan Summary:**
- 7 phases with 13 total tasks
- Focus on simplicity: localStorage for persistence, no external dependencies beyond React
- Clear success criteria for each task
- Incremental development approach

**Executor Instructions:**
- Executor prompt created at `.cursor/executor-prompt.md`
- Executor should start with Phase 1, Task 1.1 (Define TypeScript types)
- Execute one task at a time, reporting progress after each milestone

---

## Executor's Feedback or Assistance Requests

_This section will be used by the Executor to report progress, raise blockers, or request assistance._

**Task 1.1 Completed:**
- Created `src/types/contact.ts` with Contact interface
- All required fields defined: id, name, notes, lastTalkedDate, lastSeenDate, desiredTalkFrequency, desiredSeeFrequency
- TypeScript compilation verified: no errors
- Success criteria met: types compile without errors, all required fields defined
- Ready for user verification before proceeding to Task 1.2

---

## Lessons

_This section documents reusable knowledge, fixes, and important notes discovered during development._

- Include info useful for debugging in the program output.
- Read the file before you try to edit it.
- If there are vulnerabilities that appear in the terminal, run npm audit before proceeding
- Always ask before using the -force git command

---

## Notes

**Design Decisions:**
- Using localStorage instead of a backend for simplicity (personal app)
- No routing library needed initially (single page app)
- Will use native Date API or date-fns if needed (to be decided during implementation)
- Alert system will be visual indicators (badges, colors) rather than browser notifications initially

**Future Enhancements (Out of Scope for Initial Version):**
- Data export/import
- Multiple interaction types beyond "talk" and "see"
- Contact groups/categories
- Search and filtering
- Statistics/analytics
- Browser notifications

