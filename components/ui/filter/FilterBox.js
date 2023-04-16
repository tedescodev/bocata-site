import { useState, useEffect } from "react";
import { isMobile } from "react-device-detect";

import styled, { css } from "styled-components";
import styles from "../../../styles/Home.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSliders } from "@fortawesome/free-solid-svg-icons";

import { Label } from "../commonStyles";

const FilterBox = ({
  marcas,
  categorias,
  currentBrand,
  categoryFilter,
  handleBrand,
  handleCategory,
}) => {
  const [showFilters, setShowFilters] = useState(false);
  return (
    <Container>
      <Box
        showFilters={showFilters}
        className={`${styles.filterBox} ${
          !showFilters && styles.hiddenFilters
        }`}
      >
        <a onClick={() => setShowFilters(!showFilters)}>
          <h5>
            {" "}
            <FontAwesomeIcon
              icon={faSliders}
              style={{ fontSize: 15, color: "black", paddingRight: 10 }}
            />
            <label className="uppercase">Filtrar</label>
          </h5>
        </a>
        <ContainerItems className={styles.containerFilters}>
          <ColumnItems>
            <h6 className="uppercase">Marcas</h6>
            {marcas &&
              marcas.map((_brand) => (
                <>
                  <Label
                    bold={_brand.name === currentBrand && "bold"}
                    onClick={() => handleBrand(_brand.name)}
                  >
                    {_brand.name}
                  </Label>
                </>
              ))}
          </ColumnItems>
          <ColumnItems>
            <h6 className="uppercase">Equipos</h6>
            {categorias &&
              categorias.map((_category) => (
                <>
                  <Label
                    bold={_category.name === categoryFilter && "bold"}
                    className="filter-categories"
                    onClick={() => handleCategory(_category.name)}
                  >
                    {_category.name}
                  </Label>
                </>
              ))}
          </ColumnItems>
        </ContainerItems>
      </Box>
    </Container>
  );
};

const Container = styled.div`
  width: 300px;
  min-width: 300px;
  @media (max-width: 1010px) {
    width: 100%;
  }
`;

const Box = styled.div`
  width: 100%;
  max-width: 300px;
  background-color: #d1d1d1;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 25px;
  h5 {
    border-width: 0 0 1px 0;
    border-style: solid;
    border-color: #000000;
  }
  h6 {
    margin: 0;
  }
  @media (max-width: 1010px) {
    max-width: 100%;
    ${(props) =>
      !props.showFilters &&
      css`
        max-width: 30%;
        padding: 10px 15px 10px 10px;
        margin-left: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        h5 {
          border-style: hidden !important;
          margin-top: 0;
          transition: all 0.2s ease-out;
        }
      `}
  }
`;

const ContainerItems = styled.div`
  @media (max-width: 1010px) {
    display: flex;
  }
`;

const ColumnItems = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px 0;
  @media (max-width: 1010px) {
    width: 100%;
  }
`;

export default FilterBox;
