import IconCloud from "@/components/ui/icon-cloud";


export default function Experties() {
  

  const slugs = [
    "typescript",
    "javascript",
    "react",
    "html5",
    "css3",
    "laravel",
    "vuedotjs",
    "redux",
    "tailwindcss",
    "antdesign",
    "php",
    "apache",
    "photoshop",
    "redis",
    "mariadb",
    "mysql",
    "next",
    "firebase",
    "nginx",
    "docker",
    "git",
    "github",
  ];
  return (
    <div className="flex z-10 size-full max-w-lg items-center justify-center overflow-hidden rounded-lg pb-20 pt-8 ">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
  
}
