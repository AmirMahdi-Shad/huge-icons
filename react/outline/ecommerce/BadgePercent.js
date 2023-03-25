import * as React from "react";

function BadgePercent({ size, title, titleId, ...props }, svgRef) {
  return /*#__PURE__*/ React.createElement(
    "svg",
    Object.assign(
      {
        width: size || "1rem",
        height: size || "1rem",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.5",
        "aria-hidden": "true",
        ref: svgRef,
        "aria-labelledby": titleId,
      },
      props
    ),
    title
      ? /*#__PURE__*/ React.createElement(
          "title",
          {
            id: titleId,
          },
          title
        )
      : null,
    /*#__PURE__*/ React.createElement("path", {
      d: "M10 9C10 9.55228 9.55228 10 9 10C8.44772 10 8 9.55228 8 9C8 8.44772 8.44772 8 9 8C9.55228 8 10 8.44772 10 9Z",
      fill: "currentColor",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d: "M16 15C16 15.5523 15.5523 16 15 16C14.4477 16 14 15.5523 14 15C14 14.4477 14.4477 14 15 14C15.5523 14 16 14.4477 16 15Z",
      fill: "currentColor",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d: "M10.0542 2.65818C11.1754 1.70264 12.8246 1.70264 13.9459 2.65818L14.6285 3.2399C15.109 3.64938 15.7064 3.89683 16.3357 3.94705L17.2297 4.0184C18.6982 4.13559 19.8644 5.30172 19.9815 6.77025L20.0529 7.66427C20.1031 8.29357 20.3506 8.89098 20.76 9.37148L21.3418 10.0541C22.2973 11.1754 22.2973 12.8245 21.3418 13.9458L20.76 14.6284C20.3506 15.1089 20.1031 15.7063 20.0529 16.3356L19.9815 17.2296C19.8644 18.6982 18.6982 19.8643 17.2297 19.9815L16.3357 20.0528C15.7064 20.103 15.109 20.3505 14.6285 20.76L13.9459 21.3417C12.8246 22.2972 11.1754 22.2972 10.0542 21.3417L9.37154 20.76C8.89105 20.3505 8.29363 20.103 7.66433 20.0528L6.77031 19.9815C5.30178 19.8643 4.13565 18.6982 4.01846 17.2296L3.94711 16.3356C3.8969 15.7063 3.64944 15.1089 3.23997 14.6284L2.65824 13.9458C1.7027 12.8245 1.7027 11.1754 2.65825 10.0541L3.23997 9.37148C3.64944 8.89098 3.8969 8.29357 3.94711 7.66427L4.01846 6.77025C4.13565 5.30172 5.30178 4.13559 6.77031 4.0184L7.66433 3.94705C8.29363 3.89683 8.89104 3.64938 9.37154 3.2399L10.0542 2.65818Z",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d: "M9 15L15 9",
      strokeLinecap: "round",
    })
  );
}
export default React.forwardRef(BadgePercent);