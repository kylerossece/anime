import { CharacterList } from "@/components/sections/characterList"
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import {getAnime} from '@/api/getAnime';
import { query } from '@/query/characters';
import type { CharacterDetails, CharactersResponse } from "@/types/types";
export default async function Page(){
    const data = await (getAnime(query({page:1, perPage: 10}))) as CharactersResponse | null;
    if(!data) return;
    const charactersData:CharacterDetails[] = data?.Page?.characters || [];
    const lastPage = data?.Page?.pageInfo.lastPage;
    return (
        <Section>
            <Container>
                {/* {JSON.stringify(charactersData)} */}
             <CharacterList charactersData={charactersData} lastPage={lastPage}></CharacterList>
             </Container>
        </Section>
    )
}

