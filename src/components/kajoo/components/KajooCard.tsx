/* eslint-disable */
// @ts-nocheck
import React from "react";

import PropTypes from "prop-types";

import { Container, Text, RichText, Image } from "../component-library";
import styles from "./KajooCard.module.css";

const KajooCard = (props) => {
  return (
    <Container
      className={` ${styles["kajoo-card"]} ${styles[props.rootClassName]} ${
        props.params?.styles
      } `}
    >
      <Container
        className={` ${styles["row-container"]} ${"container-default"} `}
      >
        <Container className={styles["container"]}>
          <Text text={props.data.Heading} tag="h1" />
          <RichText value={props.data.Description} />
        </Container>
        <Image src={props.data.Image.src} className={"image-default"} />
      </Container>
    </Container>
  );
};

KajooCard.defaultProps = {
  rendering: {},
  rootClassName: "",
  data: {
    Heading: "Lorem Ipsum",
    Description: "<p>Lorem Ipsum</p>",
    Link: {
      href: "#",
      text: "Link",
    },
    Image: {
      src: "https://app.kajoo.ai/icons/default-imag.svg",
      alt: "",
    },
  },
};

KajooCard.propTypes = {
  rendering: PropTypes.object,
  rootClassName: PropTypes.string,
  data: PropTypes.object,
};

export default KajooCard;
