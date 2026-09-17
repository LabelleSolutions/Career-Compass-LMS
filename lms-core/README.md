# Career Compass Junior LMS Core

This directory contains the reusable LMS backend/core services integrated from the Career Compass LMS package.

## What is included
- Neon/Postgres data access
- student credential authentication for minors without email
- staff session resolution and role-based access control
- student/class/organization reporting queries
- provider-agnostic integration contract and runtime
- generic webhook and configurable REST connectors
- SQL migrations for integrations, reporting views, and provider catalog

## Integration strategy
The existing `index.html` application remains intact. `lms-core/` is an additive subsystem so the LMS services can be wired into the current frontend without overwriting the current UI.

## Important
The SQL migrations depend on the LMS base schema (`organizations`, `profiles`, `classes`, `books`, enrollments, etc.). They are intentionally preserved as integration migrations and should be applied only after the base LMS schema is present in the target Neon database.
