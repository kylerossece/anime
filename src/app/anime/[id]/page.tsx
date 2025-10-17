import { getAnime } from "@/api/getAnime";
import { query } from "@/query/media";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import type { Media } from "@/types/types";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Paragraph, Header, Caption } from "@/components/ui/typography";
import { GridOne } from "@/components/ui/grid-one";
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
      <Section className="text-gray-800">
        <Container className="">
          <Card>
            <div className="flex gap-6 md:flex-nowrap flex-wrap px-6">
              <Image
                src={item.coverImage.extraLarge}
                alt={item.title.english}
                width={300}
                height={100}
                className="rounded"
              ></Image>
              <div className="flex flex-col gap-2 mt-2">
                <Header className="font-medium text-2xl text-gray-800">
                  {item.title.english}
                </Header>
                <Paragraph
                  className="text-sm"
                  dangerouslySetInnerHTML={{ __html: item.description }}
                ></Paragraph>
              </div>
            </div>
            <Separator className="mt-3  bg-slate-200" />

            <div className="flex  items-center lg:flex-nowrap flex-wrap">
              <GridOne item={item} />

              <Separator
                orientation="vertical"
                className="w-px  self-stretch !h-auto bg-slate-300 lg:block hidden  "
              />

              <div className="lg:w-4/5 w-full  text-center z-50">Item 2</div>
            </div>
            <Separator className=" bg-slate-200" />
          </Card>
        </Container>
      </Section>
    </>
  );
}
