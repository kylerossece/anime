import type { Media } from "@/types/types";
import { Paragraph, Header, Caption } from "@/components/ui/typography";
import { capitalize, formatDateWithDay } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
interface GridOneProps {
  item: Media;
}
const GridOne = ({ item }: GridOneProps) => {
  return (
    <div className="lg:w-1/5 w-full flex flex-col gap-3   px-7 py-5 text-sm text-gray-700">
      <div>
        <Caption className="font-semibold ">Season</Caption>
        <Paragraph className=" ">{capitalize(item.season)}</Paragraph>
      </div>
      <div>
        <Caption className="font-semibold  ">Favourites</Caption>
        <Paragraph className="">{item.favourites.toLocaleString()}</Paragraph>
      </div>
      <div>
        <Caption className="font-semibold  ">Source</Caption>
        <Paragraph className="">{capitalize(item.source)}</Paragraph>
      </div>
      <div>
        <Caption className="font-semibold  ">Score</Caption>
        <Paragraph className="text-gray-700">{item.averageScore}</Paragraph>
      </div>
      <div>
        <Caption className="font-semibold  ">Status</Caption>
        <Paragraph className="">{capitalize(item.status)}</Paragraph>
      </div>
      {item.episodes && (
        <div>
          <Caption className="font-semibold  ">Episodes</Caption>
          <Paragraph className="">{item.episodes}</Paragraph>
        </div>
      )}
      {item.startDate.month && item.startDate.day && (
        <div>
          <Caption className="font-semibold">Release Date</Caption>
          <Paragraph className="">
            {formatDateWithDay(
              `${item.startDate.day}/${item.startDate.month}/${item.startDate.year}`
            )}
          </Paragraph>
        </div>
      )}
      {item.endDate.month && item.endDate.day && (
        <div>
          <Caption className="font-semibold  ">Finished Date</Caption>
          <Paragraph className="">
            {formatDateWithDay(
              `${item.endDate.day}/${item.endDate.month}/${item.endDate.year}`
            )}
          </Paragraph>
        </div>
      )}
      <div>
        <Caption className="font-semibold  ">Popularity</Caption>
        <Paragraph className="">{item.popularity?.toLocaleString()}</Paragraph>
      </div>
      <div className="flex flex-col gap-2">
        <Caption className="font-semibold  ">Genres</Caption>
        <Paragraph className="text-gray-700 flex flex-wrap gap-1.5">
          {item.genres.map((genre, index) => (
            <Badge key={index} variant="secondary" className="text-gray-700">
              {genre}
            </Badge>
          ))}
        </Paragraph>
      </div>
      <div className="flex flex-col flex-wrap gap-2">
        <Caption className="font-semibold  ">Tags</Caption>
        <Paragraph className="text-gray-700 flex flex-wrap gap-1.5">
          {item.tags.map((tag) => (
            <Badge key={tag.id} variant="secondary" className="text-gray-700">
              {tag.name}
            </Badge>
          ))}
        </Paragraph>
      </div>
    </div>
  );
};
export { GridOne };
