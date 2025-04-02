import TypingText from "@/shared/components/TypingText";
import Button from "@/shared/components/Button";
import { TYPE_TEXT } from "@/shared/const/text";

export default function Home() {
  return (
    <main className="mx-auto border-2 border-white w-full max-w-screen-xl mt-8 px-12 pt-6 min-h-[95dvh] flex flex-col">
      <div className={"w-full flex flex-col flex-1 min-h-0 justify-between"}>
        <div className={"border-2 border-gray-500 w-full p-4 min-h-40"}>
          <TypingText text={TYPE_TEXT} speed={50} />
        </div>
        <div className={"w-full flex gap-4 py-4"}>
          <Button content={"About Me"} />
          <Button content={"Projects"} />
          <Button content={"Skills"} />
          <Button content={"Contact"} />
        </div>
      </div>
    </main>
  );
}
