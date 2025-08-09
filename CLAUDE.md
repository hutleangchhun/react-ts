# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start the development server with hot module replacement
- `npm run build` - Build for production (runs TypeScript compilation followed by Vite build)
- `npm run lint` - Run ESLint to check code quality and style
- `npm run preview` - Preview the production build locally

## Project Architecture

This is a React 19 + TypeScript + Vite application with the following structure:

- **Frontend Framework**: React 19 with TypeScript
- **Build Tool**: Vite 7 for fast development and optimized builds
- **Linting**: ESLint with TypeScript, React Hooks, and React Refresh plugins
- **Entry Point**: `src/main.tsx` renders the `App` component into the root element
- **Main Component**: `src/App.tsx` contains a simple counter demo application

## TypeScript Configuration

The project uses a multi-config TypeScript setup:
- `tsconfig.json` - Root configuration with project references
- `tsconfig.app.json` - Application code configuration
- `tsconfig.node.json` - Node.js/build tools configuration

## ESLint Configuration

Uses modern ESLint flat config format in `eslint.config.js` with:
- TypeScript recommended rules
- React Hooks recommended rules
- React Refresh for Vite
- Browser globals configured

## Build Process

The build process runs TypeScript compilation first (`tsc -b`) then Vite build, ensuring type safety before bundling. The `dist` directory is ignored by ESLint and should contain the production build output.