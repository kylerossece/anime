import type { PageItem } from "@/types/types";
import { HoverCardContent } from "@/components/ui/hover-card";
import { capitalize, convertToDays } from "@/lib/utils";
import { Caption } from "@/components/ui/typography";
import { Badge } from "@/components/ui/badge";

interface HoverCardItemsProps {
  item: PageItem;
}
const HoverCardItems = ({ item }: HoverCardItemsProps) => {
  return (
    <HoverCardContent side="right" align="start" alignOffset={0} sideOffset={5}>
      <div className="flex flex-col">
        {item.nextAiringEpisode ? (
          <Caption>{`Ep. ${item.nextAiringEpisode.episode} airing in 
        ${convertToDays(item.nextAiringEpisode.timeUntilAiring)}    ${
            convertToDays(item.nextAiringEpisode.timeUntilAiring) == 1
              ? "day"
              : "days"
          }`}</Caption>
        ) : (
          <Caption>{`${capitalize(item.season)} ${item.seasonYear}`}</Caption>
        )}
        <Caption>
          {item.studios?.edges
            .filter((studio) => studio.isMain)
            .map((studio) => studio.node.name)
            .join(",")}
        </Caption>
        <Caption>
          {item.format} {item.episodes && `• ${item.episodes}`}
        </Caption>
        <div className="flex gap-1 pt-2 flex-wrap">
          {item.genres &&
            item.genres.length > 0 &&
            item.genres.map((genre, index) => (
              <Badge key={index}>{genre}</Badge>
            ))}
        </div>
      </div>
    </HoverCardContent>
  );
};

export { HoverCardItems };
