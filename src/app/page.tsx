import TypingText from "@/components/TypingText";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 ">
      <TypingText
        text={
          "안녕, 너무너무 이쁜 다희! 이거 아주 잘 돼 ㅎㅎ 신기하지? 만들다 좀 헷갈렸어 ㅠㅠ"
        }
        speed={50}
      />
    </main>
  );
}
