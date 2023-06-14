import { Links, LiveReload, Outlet } from "@remix-run/react";
import stylesheet from "./styles/app.css";
import { LinksFunction } from "@remix-run/node";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1"
        />
        <title>Remix: So great, it's funny!</title>
        <Links />
      </head>
      <body className="bg-gradient-to-r from-violet-500 to-fuchsia-500 font-baloo">
        <Outlet />
        <LiveReload />
      </body>
    </html>
  );
}
