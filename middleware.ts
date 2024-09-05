import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

const publicRoutes = createRouteMatcher([ "/",
  "/api/webhook",
  "/question/:id",
  "/tags",
  "/tags/:id",
  "/profile/:id",
  "/community",
  "/jobs",])

const ignoredRoutes = createRouteMatcher(['/api/webhook', '/api/chatgpt'])

export default clerkMiddleware((auth, req) => {
  // Restrict admin routes to users with specific permissions
  if (ignoredRoutes(req)) {
    auth().protect((has) => {
      return (
        has({ permission: 'org:sys_memberships:manage' }) ||
        has({ permission: 'org:sys_domains_manage' })
      )
    })
  }
  // Restrict organization routes to signed in users
  if (publicRoutes(req)) auth().protect()
})

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
}