import TextReveal from "@/components/ui/text-reveal";
export default function ExpertiesDescription({text = ''}) {
  return (
    <div className="z-10 flex min-h-full items-center justify-center rounded-lg bg-black">
      <TextReveal
        text={text}
      />
    </div>
  );
}
