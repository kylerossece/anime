import Image from "next/image";
import Link from "next/link";
import type { PageItem } from "@/types/types";
interface SliderLinkProps {
  item: PageItem;
}
const CardLink = ({ item }: SliderLinkProps) => {
  return (
    <Link href={`/anime/${item.id}`}>
      <div className="w-[250px] fade-animation">
        <div className="relative h-[325px] shadow-lg rounded-md">
          <Image
            src={item.coverImage.extraLarge}
            alt={item.title.userPreferred || ""}
            fill
            className="object-cover rounded-md"
            sizes="(max-width: 768px) 100vw, 
              (max-width: 1200px) 33vw, 
              250px"
          />
        </div>
        <p className="pt-2 ml-0.5 font-medium line-clamp-2 text-sm dark:text-gray-300 transition-colors duration-300 ease-in-out">
          {item.title.english || item.title.userPreferred || ""}
        </p>
      </div>
    </Link>
  );
};

export { CardLink };
