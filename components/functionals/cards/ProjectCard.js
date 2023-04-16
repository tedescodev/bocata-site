import { useRouter } from "next/router";

import React, { useState, useEffect } from "react";

// import BASE_CONNECTION_STRING from "../../config"
import { ProjectCardStyled, Foot } from "./style";

const ProjectCard = ({ project }) => {
  const { name } = project;
  const [defaultImage, setDefaultImage] = useState(null);
  const router = useRouter();

  useEffect(() => {
    getByName();
  }, [project]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getByName = async () => {
    await fetch(
      `https://super-gym-cms.tejo.uy/v1/api/project/getByName/${name}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    )
      .then(async (response) => {
        if (response.ok) {
          return await response.json();
        }
      })
      .then((responseJson) => {
        if (responseJson.images) {
          const image = responseJson.images.find((img) => img.default === true);
          setDefaultImage(image);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      {defaultImage && defaultImage.image ? (
        <ProjectCardStyled
          image={defaultImage.image.trim()}
          onClick={() => router.push(`/proyectos/${name}`)}
        >
          <Foot>{name}</Foot>
        </ProjectCardStyled>
      ): <ProjectCardStyled
          onClick={() => router.push(`/proyectos/${name}`)}
        >
          <Foot>{name}</Foot>
        </ProjectCardStyled>}
    </>
  );
};

export default ProjectCard;
