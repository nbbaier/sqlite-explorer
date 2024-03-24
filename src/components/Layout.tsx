import type { FC } from "hono/jsx";
import { css, cx, keyframes, Style } from "hono/css";
import { headerClass } from "../style";

declare module "hono" {
  interface ContextRenderer {
    (
      content: string | Promise<string>,
      props: { title: string; style: string }
    ): Response;
  }
}

export const Layout: FC = ({ children, title, style }) => {
  return (
    <html>
      <head>
        <title>{title}</title>
        <link rel="stylesheet" href="https://unpkg.com/missing.css@1.1.1" />
        <script src="https://unpkg.com/htmx.org@1.9.9/dist/htmx.min.js"></script>
        <Style>{style}</Style>
      </head>
      <body>
        <main>
          <h1 class={headerClass}>Hello!</h1>
          {children}
        </main>
      </body>
    </html>
  );
};
