import CodeBlockWrapper from "@/components/mdb/components/docs/CodeBlockWrapper";

export default function DocsHome() {
  return (
    <div className=" max-w-3xl">
      <h1>Welcome to the Component Library</h1>
      <p>
        This is the documentation hub for all components inside
        <code className="text-white bg-white/10 px-1 py-0.5 rounded mx-1">
          shadyt-ui/mdb
        </code>
        .
      </p>
      <ul>
        <li>🧩 Explore cards, inputs, animations, and layout blocks</li>
        <li>📦 Each component page includes usage, props, and design intent</li>
        <li>
          💡 More themes and packages coming soon (e.g. <code>/glass</code>,{" "}
          <code>/dev</code>)
        </li>
      </ul>
      <p>Use the sidebar on the left to browse available components.</p>
      <CodeBlockWrapper className="mt-8">
        {`import { Button } from "@shadyt-ui/mdb";
        <Button variant="primary">Click me!</Button>`}
      </CodeBlockWrapper>
      <p className="mt-4">
        This is a simple example of how to use the component library. You can
        find more examples in the documentation.
      </p>
    </div>
  );
}
