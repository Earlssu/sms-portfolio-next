import TypingText from "@/components/TypingText";
import Button from "@/components/Button";

export default function Home() {
  return (
    <main className="mx-auto border-2 border-white w-full max-w-screen-xl mt-8 px-12 pt-6 min-h-[95dvh] flex flex-col">
      <div className={"w-full flex flex-col flex-1 min-h-0 justify-between"}>
        <div className={"border-2 border-gray-500 w-full p-4 min-h-40"}>
          <TypingText
            text={
              "안녕하세요! \n 저는 프론트엔드 개발자 심민섭입니다. \n 저는 힘들 때 벽을 오릅니다. 저는 개발을 참 좋아합니다. 아래 버튼을 통해 궁금하신 부분을 확인해보세요."
            }
            speed={50}
          />
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
