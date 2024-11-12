import background from '../../app/images/file.png' 
import kenji from '../../app/images/kenji.png' 
import Image from "next/image";
export default function Header() {
  return (
    <div>
      <main>
        <div className="flex items-center justify-center h-screen relative">
            <Image
              className="top-5 rotate-0 relative"
              src={background}
              alt="profile"
              width={800}
              height={90}
            />
            <Image
              className="img-k absolute"
              src={kenji}
              alt="profile"
              width={300}
              height={90}
            />
        </div>
      </main>
    </div>
  );
}
