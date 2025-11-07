import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { Skeleton } from "../ui/skeleton";
import Link from "next/link";
import Image from "next/image";
import type { PageItem } from "@/types/types";
const SearchPage = () => {
  const { data, isSearching } = useSelector((state: RootState) => state.search);
  return (
    <>
      {isSearching ? (
        <div className="!w-auto grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] justify-items-center gap-4 pt-5">
          {Array.from({ length: 10 }, (_, index) => (
            <div key={index} className="w-[250px]">
              <div className="relative h-[325px] rounded-md">
                <Skeleton className="h-full w-full " />
              </div>
              <Skeleton className="mt-3 h-3 w-[90%] rounded-md" />
            </div>
          ))}
        </div>
      ) : (
        <div className="!w-auto grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] justify-items-center gap-4 pt-5">
          {!isSearching && data.length > 0 ? (
            data.map((item: PageItem, index: number) => (
              <div key={index}>
                <Link href={`/anime/${item.id}`}>
                  <div className="w-[250px]">
                    <div className="relative h-[325px] shadow-lg rounded-md">
                      <Image
                        src={item.coverImage.extraLarge}
                        alt={item.title.userPreferred || ""}
                        fill
                        sizes="(max-width: 768px) 100vw, 
                                                          (max-width: 1200px) 33vw, 
                                                          250px"
                        className="object-cover rounded-md"
                        priority
                      />
                    </div>
                    <p className="pt-2 ml-0.5 font-medium line-clamp-2 text-sm">
                      {item.title.english || item.title.userPreferred || ""}
                    </p>
                  </div>
                </Link>
              </div>
            ))
          ) : (
            <p className="text-center w-full pt-12 text-gray-600">
              No results found.
            </p>
          )}
        </div>
      )}
    </>
  );
};

export { SearchPage };
