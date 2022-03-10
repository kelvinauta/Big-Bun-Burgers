import React, { useEffect, useState, useRef } from "react";
import picrewData from "../data/picrew.json";
/*@jsx jsx */
import { jsx, Text, Button } from "theme-ui";
import Layout from "../components/Layout";
import Title from "../components/Title";
import Footer from "../components/Footer";
import Rrss from "../components/Rrss";
import { saveAs } from "file-saver";
import DomToImage from "dom-to-image";
import { exportComponentAsPNG } from "react-component-export-image";
import domtoimage from "dom-to-image-more";

const Yourcustombunny = () => {
  const features = picrewData[0].features;
  const [select, setSelect] = useState(0);
  const [selectVersion, setSelectVersion] = useState(0);
  const [assets, setAssets] = useState(Array(features.length));

  useEffect(() => {
    let defaultAssets = [];

    features.forEach((feature, i) => {
      let random = Math.floor(Math.random() * feature.assets.length);
      defaultAssets.push(feature.assets[random].assetUrl);
    });
    setAssets(defaultAssets);
  }, []);

  return (
    <Layout>
      <div
        sx={{
          variant: "div.flex",
        }}
      >
        <Title>your Custom Bunnys</Title>
        <div
          sx={{
            variant: "div.flex",
            flexDirection: "row",
            flexWrap: "wrap",
          }}
        >
          {features.map((feature, i) => {
            return (
              <Features
                key={i}
                index={i}
                feature={feature}
                select={select}
                setSelect={setSelect}
              />
            );
          })}
          <div
            sx={{
              width: "80%",
              display: "flex",

              flexWrap: "wrap",
              justifyContent: "space-around",
              alignItems: "between",
            }}
          >
            <Canva assets={assets} />

            <LoadAssets
              assets={features[select].assets}
              setAsset={(asset) => {
                console.log(asset);
                let newAssets = [...assets];
                newAssets[select] = asset;
                setAssets(newAssets);
              }}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

const Features = ({ feature, select, setSelect, index }) => {
  return (
    <div>
      <Button
        onClick={() => {
          setSelect(index);
        }}
        sx={{
          mr: "2",
          mb: "2",

          fontSize: "0.8em",
        }}
        variant={select == index ? "primary" : "outlined"}
      >
        {feature.title}
      </Button>
    </div>
  );
};
const LoadAssets = ({ assets, setAsset }) => {
  return (
    <div
      sx={{
        display: "flex",
        flexWrap: "wrap",
        maxWidth: "300px",
        mt: "3",
      }}
    >
      {assets.map(({ assetUrl }, i) => {
        return (
          <div
            sx={{
              variant: "buttons.outlined",
              borderRadius: 2,
              mr: 2,
              mb: 2,
              border: "1px solid #f68e5c",
              width: 100,
              height: 100,
            }}
            onClick={() => {
              setAsset(assetUrl);
            }}
          >
            <img
              key={i}
              src={assetUrl}
              sx={{
                width: "100%",
                height: "100%",
              }}
            />
          </div>
        );
      })}
    </div>
  );
};

const Canva = ({ assets }) => {
  const canvaAssets = useRef(null);
  const saveImage = () => {
    domtoimage
      .toBlob(canvaAssets.current)
      .then((blob) => {
        saveAs(blob, "conejo.png");
      })
      .catch((err) => {
        console.log("error");
      });
    // DomToImage.toJpeg(canvaAssets.current)
    //   .then((blob) => {
    //     saveAs(blob, `bbb.png`);
    //   })
    //   .catch((e) => {
    //     console.error("Hubo un error al guardar la Image");
    //     console.error(e);
    //   });
  };
  return (
    <div>
      <div
        ref={canvaAssets}
        sx={{
          variant: "div.flex",
          width: 300,
          height: 300,
          borderRadius: 2,
          boxShadow: "0px 0px 0px #f68e5c",
          position: "relative",
        }}
      >
        {assets.map((asset, i) => {
          return (
            <div
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                width: "100%",
                height: "100%",
              }}
            >
              <img
                sx={{
                  width: "100%",
                  height: "100%",
                }}
                src={asset}
              />
            </div>
          );
        })}
      </div>
      {/* <div>
        <Button onClick={() => saveImage()}>Save Image</Button>
      </div> */}
    </div>
  );
};

const Asset = ({ asset, select, setSelect, index }) => {
  return (
    <div>
      <img
        sx={{
          width: 300,
          height: 300,
          borderRadius: 2,
        }}
        src={asset}
        alt=""
      />
    </div>
  );
};

export default Yourcustombunny;
