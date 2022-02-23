// ** @jsx jsx *
import { Link } from "gatsby";
import * as React from "react";
import { jsx, Text, Button } from "theme-ui";
import Footer from "../components/Footer";
import Layout from "../components/Layout";
import Menu from "../components/Menu";
const DisabledIndexPage = () => {
  return (
    <main>
      <Layout>
        <div
          sx={{
            variant: "div.flex",
            minHeight: "100vh",
            justifyContent: "space-between",
          }}
        >
          <div>
            <Menu />

            <div className="main" sx={{ variant: "div.flex", width: "" }}>
              <Link
                to="/comic"
                sx={{
                  variant: "div.flex",
                  textDecoration: "none",
                  marginTop: "6rem",
                  marginBottom: "2rem",
                }}
              >
                {/* <img src="/images/logo.png" alt="Big Band Burger" /> */}
                <img
                  sx={{ variant: "img.noSelect", width: 150 }}
                  src="/img/house.png"
                  alt=""
                />
                <Button>
                  <div className="buttonMain">
                    <div>READ WEB COMIC</div>
                  </div>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Layout>
    </main>
  );
};

export default DisabledIndexPage;
