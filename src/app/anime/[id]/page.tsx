import { getAnime } from "@/api/getAnime";
import { query } from "@/query/media";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import type { Media } from "@/types/types";
import Image from "next/image";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Paragraph, Header } from "@/components/ui/typography";
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

  const item: Media = anime.Media;
  return (
    <>
      {/* <div className="relative w-full h-screen">
        <Image
          src={item.bannerImage}
          alt={item.title.english}
          fill
          className="object-cover"
        ></Image>
      </div> */}
      <Section>
        <Container className="">
          <Header className="font-medium text-2xl">{item.title.english}</Header>
          <Image
            src={item.coverImage.extraLarge}
            alt={item.title.english}
            width={200}
            height={100}
            className="rounded"
          ></Image>
          <Separator />

          <Paragraph
            className="text-sm"
            dangerouslySetInnerHTML={{ __html: item.description }}
          ></Paragraph>

          <div className="break-words whitespace-pre-wrap">
            {JSON.stringify(anime?.Media)}
          </div>
        </Container>
      </Section>
    </>
  );
}
