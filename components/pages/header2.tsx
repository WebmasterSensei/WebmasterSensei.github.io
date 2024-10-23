import BoxReveal from "@/components/ui/box-reveal";
import SparklesText from "@/components/ui/sparkles-text";
import { RainbowButton } from "@/components/ui/rainbow-button";
export default function Header2() {
  return (
    <div>
      <BoxReveal boxColor={"#E4E0E1"} duration={0.5}>
        <SparklesText className="text-4xl" text="Konichiwa, Kent Jey desu" />
      </BoxReveal>

      <BoxReveal boxColor={"#E4E0E1"} duration={0.5}>
        <h2 className="mt-[1.5rem] text-[1rem]">
          I am{" "}
          <span className="text-[#5046e6]">
            A Full Stock Software Engineer!
          </span>
        </h2>
      </BoxReveal>

      <BoxReveal boxColor={"#E4E0E1"} duration={0.7}>
        <div className="mt-10">
          <p>
          &quot;As a full stack engineer, you&quot;re the architect of innovation,
            weaving together both front-end elegance and back-end power. Your
            versatility, from handling complex Laravel workflows to integrating
            seamless Vue interfaces, makes you a master craftsman, turning
            challenges into opportunities&quot;
          </p>
       
        </div>
      </BoxReveal>

      <RainbowButton className="mt-10">View On GitHub</RainbowButton>
    </div>
  );
}
