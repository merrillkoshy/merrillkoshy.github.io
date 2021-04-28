import React from "react";

import styles from "../styles/section.module.css";

const section = ({ flexDirection, content }) => {
  return (
    <div className={styles.section} style={{ flexDirection: flexDirection }}>
      {flexDirection && (
        <div className={styles.left_container}>
          <div className={styles.block}></div>
        </div>
      )}

      <div className={styles.right_container}>
        <div className={styles.container}>
          <p className={styles.para}>
            {content
              ? content
              : `Lorem ipsum dolor sit amet consectetur adipisicing elit. In
            laudantium esse fugiat illum tempore sapiente soluta labore voluptas
            iusto deleniti ab suscipit dolores quisquam corrupti facilis, id
            temporibus mollitia repellat omnis tempora commodi eveniet.
            Incidunt, perspiciatis, adipisci laboriosam dolores quos dolor
            voluptate odio magnam aperiam, alias asperiores pariatur! Nisi,
            libero!`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default section;
