import React from "react";
import Layout from "../components/Layout";

const comic = () => {
  return (
    <div>
      <Layout>
        <div>
          <div className="comic">
            <div className="comic-image"></div>
            <div className="comic-text"></div>
            <div className="comic-logo"></div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default comic;
