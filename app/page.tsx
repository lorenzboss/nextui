import { Code } from "@nextui-org/code";
import { Snippet } from "@nextui-org/snippet";

import { subtitle, title } from "@/components/primitives";

export default function Home() {
  return (
    <div className="items-center flex flex-col">
      <div className="inline-block max-w-xl text-center justify-center">
        <span className={title()}>Make&nbsp;</span>
        <span className={title({ color: "violet" })}>beautiful&nbsp;</span>
        <br />
        <span className={title()}>
          websites regardless of your design experience.
        </span>
        <div className={subtitle({ class: "mt-4" })}>
          Beautiful, fast and modern React UI library.
        </div>
      </div>

      <div className="mt-8 ">
        <Snippet hideSymbol variant="bordered">
          <span>
            Get started by editing <Code color="primary">app/page.tsx</Code>
          </span>
        </Snippet>
      </div>
    </div>
  );
}
