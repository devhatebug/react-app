import { createRootRoute, createRouter, Outlet } from "@tanstack/react-router";
import { exRouter } from "./example/example.router";

export const rootRoute = createRootRoute({
  component: () => (
    <>
      <Outlet />
    </>
  ),
  // notFoundComponent: NotFound,
});

export const routeTree = rootRoute.addChildren([exRouter]);

export const router = createRouter({
  routeTree,
  // defaultNotFoundComponent: NotFound,
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
