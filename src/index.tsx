import { Hono } from "hono";
import { jsxRenderer } from "hono/jsx-renderer";
import { Layout } from "./components/Layout";
export const app = new Hono();

app.get(
  "*",
  jsxRenderer(
    ({ children, title }) => {
      return <Layout children={children} title={title} />;
    },
    { docType: true }
  )
);

app.get("/", async (c) => {
  return c.render(<div>Hello world</div>, { title: "Hello world", style: "" });
});

Bun.serve({ fetch: app.fetch });
console.log("Server started at http://localhost:3000");
