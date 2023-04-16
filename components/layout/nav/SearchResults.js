import Link from "next/link";
import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHashtag, faArrowTurnDown } from "@fortawesome/free-solid-svg-icons";

import {
  ContainerResults,
  SectionResult,
  SectionTitle,
  UlStyled,
  LiStyled,
  AStyled,
  ItemContainer,
  StyledModal,
  IconItem,
  IconAction,
  TextContainer,
} from "./style";

const SearchResults = ({ results }) => {
  return (
    <StyledModal>
      <ContainerResults>
        {results.articles.length > 0 && (
          <SectionResult>
            <SectionTitle>Productos</SectionTitle>
            <UlStyled>
              {results.articles.map((i, k) => (
                <LiStyled key={k}>
                  <Link href={`/marcas/producto/${i.id}`}>
                    <AStyled>
                      <ItemContainer>
                        {i.images && i.images.length > 0 && (
                          <IconItem
                            src={i.images.find((img) => img.default).image}
                          />
                        )}
                        <TextContainer>
                          {i.name}
                          {i.model && <span>{i.model}</span>}
                        </TextContainer>
                      </ItemContainer>
                    </AStyled>
                  </Link>
                </LiStyled>
              ))}
            </UlStyled>
          </SectionResult>
        )}
        {results.categories.length > 0 && (
          <SectionResult>
            <SectionTitle>Categorías</SectionTitle>
            <UlStyled>
              {results.categories.map((i, k) => (
                <LiStyled key={k}>
                  <Link href={`/marcas?category=${i.name}`}>
                    <AStyled>
                      <ItemContainer>
                        {i.images && i.images.length > 0 && (
                          <IconItem
                            src={i.images.find((img) => img.default).image}
                          />
                        )}
                        <TextContainer>
                          <span>{i.name}</span>
                        </TextContainer>
                      </ItemContainer>
                    </AStyled>
                  </Link>
                </LiStyled>
              ))}
            </UlStyled>
          </SectionResult>
        )}
        {results.brands.length > 0 && (
          <SectionResult>
            <SectionTitle>Marcas</SectionTitle>
            <UlStyled>
              {results.brands.map((i, k) => (
                <LiStyled key={k}>
                  <Link href={`/marcas?brand=${i.name}`}>
                    <AStyled>
                      <ItemContainer>
                        {i.images && i.images.length > 0 && (
                          <IconItem
                            src={i.images.find((img) => img.default).image}
                          />
                        )}
                        <TextContainer>
                          <span>{i.name}</span>
                        </TextContainer>
                      </ItemContainer>
                    </AStyled>
                  </Link>
                </LiStyled>
              ))}
            </UlStyled>
          </SectionResult>
        )}
        {results.projects.length > 0 && (
          <SectionResult>
            <SectionTitle>Proyectos</SectionTitle>
            <UlStyled>
              {results.projects.map((i, k) => (
                <LiStyled key={k}>
                  <Link href={`/proyectos/${i.name}`}>
                    <AStyled>
                      <ItemContainer>
                        {i.images && i.images.length > 0 && (
                          <IconItem
                            src={i.images.find((img) => img.default).image}
                          />
                        )}
                        <TextContainer>
                          <span>{i.name}</span>
                        </TextContainer>
                      </ItemContainer>
                    </AStyled>
                  </Link>
                </LiStyled>
              ))}
            </UlStyled>
          </SectionResult>
        )}
      </ContainerResults>
    </StyledModal>
  );
};

export default SearchResults;
