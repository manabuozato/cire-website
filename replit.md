# Overview

This is a full-stack web application built with React and Express.js, featuring a modern component-based frontend using shadcn/ui and a PostgreSQL database with Drizzle ORM. The application appears to be a Japanese restaurant/chef showcase website based on the UI content, with sections for missions, awards, and news. The project uses TypeScript throughout and follows a clean monorepo structure with shared types and schemas.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite as the build tool
- **UI Components**: shadcn/ui component library with Radix UI primitives
- **Styling**: Tailwind CSS with custom design tokens and CSS variables
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack React Query for server state management
- **Form Handling**: React Hook Form with Zod validation

## Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Design**: RESTful API with /api prefix routing
- **Development**: Hot reload with tsx in development, esbuild for production builds
- **Error Handling**: Centralized error middleware with structured error responses

## Data Storage
- **Database**: PostgreSQL using Neon serverless
- **ORM**: Drizzle ORM with type-safe queries and migrations
- **Schema**: Shared schema definitions between client and server
- **Validation**: Zod schemas for runtime type validation
- **Storage Interface**: Abstracted storage layer with in-memory implementation for development

## Authentication & Authorization
- **Session Management**: PostgreSQL-backed sessions using connect-pg-simple
- **User Model**: Simple username/password authentication ready for implementation
- **Security**: Placeholder authentication system with user creation and retrieval methods

## Development Environment
- **Build System**: Vite for frontend, esbuild for backend
- **Type Safety**: Strict TypeScript configuration with path aliases
- **Code Quality**: Consistent imports with absolute paths using @ aliases
- **Hot Reload**: Development server with automatic restart and error overlay

## Deployment Configuration
- **Build Output**: Vite builds to `dist/public/` but deployment expects files in `dist/`
- **Solution**: Post-build step copies files from `dist/public/*` to `dist/` to match `.replit` publicDir setting
- **Static Assets**: Both `@assets` imports and `/figmaAssets/` direct references work correctly after build reorganization

# External Dependencies

## UI Libraries
- **shadcn/ui**: Complete component library with Radix UI primitives
- **Tailwind CSS**: Utility-first CSS framework with custom configuration
- **Lucide React**: Icon library for consistent iconography

## Backend Services
- **Neon Database**: Serverless PostgreSQL hosting
- **Drizzle Kit**: Database migrations and schema management
- **Express.js**: Web application framework with middleware support

## Development Tools
- **Vite**: Frontend build tool with React plugin and error handling
- **Replit Integration**: Development environment with cartographer and error modal plugins
- **TypeScript**: Type checking and compilation across the stack

## Runtime Libraries
- **TanStack React Query**: Server state management and caching
- **React Hook Form**: Form handling with validation
- **Wouter**: Lightweight client-side routing
- **date-fns**: Date manipulation and formatting utilities