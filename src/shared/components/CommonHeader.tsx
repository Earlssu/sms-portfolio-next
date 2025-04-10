import LanguageToggle from "@/shared/components/LanguageToggle";

const CommonHeader = () => {
  return (
    <div className={"w-full flex flex-end"}>
      <LanguageToggle />
    </div>
  );
};

export default CommonHeader;
