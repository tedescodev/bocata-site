import React, { useState } from "react";

import { MainContainer, Container, Input } from "./style";

const InputSearch = ({
  className,
  setShowSearchHandle,
  cleanUpResults,
  setResults,
  nonBorder,
}) => {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    const { value } = e.target;
    setSearch(value);
    if (e.key === "Enter") searchResults(value);
  };

  const handleOnBlur = () => {
    setShowSearchHandle();
  };

  const searchResults = async (value) => {
    await fetch(`https://bocata.tedesco.es/v1/api/report/search/${value}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then(async (response) => {
        if (response.ok) {
          return await response.json();
        }
      })
      .then((responseJson) => {
        if (
          responseJson.articles.length > 0 ||
          responseJson.categories.length > 0 ||
          responseJson.brands.length > 0 ||
          responseJson.projects.length > 0
        ) {
          setResults(responseJson);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <MainContainer className={className} nonBorder={nonBorder}>
      <Container nonBorder={nonBorder}>
        <Input
          type="text"
          placeholder="Buscar.."
          value={search}
          onChange={handleSearch}
          onKeyDown={handleSearch}
          // onFocus={() => setShowSearchHandle()}
          onBlur={handleOnBlur}
        />
      </Container>
    </MainContainer>
  );
};

export default InputSearch;
