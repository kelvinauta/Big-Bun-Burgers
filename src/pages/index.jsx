import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Card from "../components/Card";

/*@jsx jsx */
import { jsx, Text } from "theme-ui";
import Layout from "../components/Layout";
import Title from "../components/Title";
import Footer from "../components/Footer";
import Rrss from "../components/rrss";

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query QueryCharacters {
      allSanityCharacter {
        nodes {
          name
          photoFace {
            asset {
              url
            }
          }
          show
        }
      }
    }
  `);
  console.log(data);
  return (
    <Layout>
      <div
        sx={{
          variant: "div.flex",
          flexDirection: "initial",
          padding: 4,
          justifyContent: "center",
          alignItems: "center",
          "@media screen and (max-width: 1100px)": {
            flexDirection: "column",
          },
        }}
      >
        <div
          sx={{
            variant: "div.flex",
            alignItems: "flex-start",
            width: "30vw",
            "@media screen and (max-width: 1100px)": {
              width: "fit-content",
            },
          }}
        >
          <Title>Big Bun Burgers</Title>
          <Text
            sx={{
              fontSize: ["1.2rem", "1.5rem"],
              padding: "8px",
              //   border: "4px solid",
              //   boxShadow: `inset ${3}px ${0}px 0px #f68e5c,
              //   inset ${3 * 2}px ${0}px 0px #ec3a4b,
              //   inset ${3 * 3}px ${0}px 0px #f68e5c`,

              //   borderColor: "text",
              //   borderRight: "none",
              //   borderTop: "none",
              //   borderBottom: "none",

              maxWidth: 600,
            }}
          >
            A comic about the misadventures of the Big Bun crew and their
            attempts at keeping the business afloat!
          </Text>
          <Rrss />
        </div>
        <div
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            width: "60vw",
            "@media screen and (max-width: 1100px)": {
              width: "100%",
            },
          }}
        >
          {data.allSanityCharacter.nodes.map((character) => (
            <Card
              key={character.name}
              text={character.name}
              imageUrl={character.photoFace.asset.url}
              show={character.show}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;
