import background from '../../app/images/gg.png' 
import kenji from '../../app/images/kenji.png' 
import Image from "next/image";
export default function Header() {
  return (
    <div>
      <main>
        <div className="flex items-center justify-center h-screen">
            <Image
              className="top-5 rotate-12 relative"
              src={background}
              alt="profile"
              width={600}
              height={90}
            />
            <Image
              className="absolute  rounded-full -rotate-6"
              src={kenji}
              alt="profile"
              width={250}
              height={90}
            />
        </div>
      </main>
    </div>
  );
}
