# Overview

This is a full-stack web application built with React and Express.js, featuring a modern component-based frontend using shadcn/ui and a PostgreSQL database with Drizzle ORM. The application is a Japanese website for "一般社団法人日本シェフ・イン・レジデンス応援協会" (Japan Chef-in-Residence Empowerment Association) with sections for missions, awards, and news. The project uses TypeScript throughout and follows a clean monorepo structure with shared types and schemas.

## Recent Updates (September 2025)
- ✅ **Mobile Navigation Consistency**: Resolved hamburger menu fixes across all pages (legal and about)
- ✅ **Deployment Architecture**: Fixed complex static deployment issues between development and published versions
- ✅ **Build Process**: Cleaned up duplicate public directories and stale bundles to ensure fresh deployments

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

# Deployment & File Structure

## Static Deployment Configuration
- **Deployment Type**: Static deployment configured in `.replit` file
- **Public Directory**: `publicDir = "dist"` - files are served from the `dist/` directory
- **Build Command**: `build = ["npm", "run", "build"]` - runs Vite build process
- **Build Target**: `deploymentTarget = "static"` - optimized for static content delivery

## File Structure & Asset Management
- **Development Assets**: Place static files in `client/public/` for development
- **Production Assets**: Build process copies `client/public/` contents to `dist/`
- **Served Files**: Only files in `dist/` are served in production (not `client/public/`)
- **Static Pages**: For static HTML pages that bypass React routing, place in `dist/[route]/index.html`

## Important Notes for Future Development
1. **Never create duplicate public directories** - Only use `client/public/` for source assets
2. **Static page modifications** - Edit files in `dist/` directly for immediate deployment changes, or rebuild from `client/public/`
3. **Image assets** - Copy images to both `client/public/figmaAssets/` and `dist/figmaAssets/` for consistency
4. **Route conflicts** - Static HTML files in `dist/[route]/` take precedence over React routes
5. **Deployment verification** - Always check `.replit` configuration for correct `publicDir` setting

## Troubleshooting Deployment Issues
- If changes don't appear after republishing, verify files exist in `dist/` directory
- Check for static HTML files that might override React routing
- Ensure image paths reference correct locations (`/figmaAssets/` for production)
- Run `npm run build` to regenerate `dist/` from source files