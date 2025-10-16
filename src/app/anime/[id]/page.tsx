import { getAnime } from "@/api/getAnime";
import { query } from "@/query/media";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import type { Media } from "@/types/types";
interface PageProps {
  params: any;
}

interface GetAnime {
  Media: Media;
}
export default async function Page({ params }: PageProps) {
  const { id } = await params;

  const variables = { mediaId: parseInt(id) };

  const anime = (await getAnime(query(), variables)) as GetAnime | null;
  if (!anime) return;
  const media: Media = anime.Media;
  return (
    <Section>
      <Container>
        <div className="break-words whitespace-pre-wrap">
          {JSON.stringify(anime?.Media)}
        </div>
      </Container>
    </Section>
  );
}
