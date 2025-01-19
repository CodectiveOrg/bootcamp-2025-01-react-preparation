import { useContext } from "react";

import clsx from "clsx";

import FluentEmojiCryingFace from "../../icons/FluentEmojiCryingFace.tsx";
import FluentEmojiSmilingFaceWithHeartEyes from "../../icons/FluentEmojiSmilingFaceWithHeartEyes.tsx";
import MingcuteEdit2Line from "../../icons/MingcuteEdit2Line.tsx";
import MingcuteDelete2Line from "../../icons/MingcuteDelete2Line.tsx";

import { FiltersContext } from "../../providers/FiltersProvider.tsx";
import { ModalContext } from "../../providers/ModalProvider.tsx";

import { Dream } from "../../types/dream.ts";

import styles from "./DreamsList.module.css";

const formatter = new Intl.DateTimeFormat("en-CA", {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
});

function DreamsList() {
  const { filteredDreams } = useContext(FiltersContext);
  const { openModal } = useContext(ModalContext);

  const editButtonClickHandler = (dream: Dream): void => {
    openModal(dream);
  };

  return (
    <ul className={styles.items}>
      {filteredDreams.map((dream) => (
        <li key={dream.id}>
          <div className={clsx(styles.vibe, styles[dream.vibe])}>
            {dream.vibe === "good" ? (
              <FluentEmojiSmilingFaceWithHeartEyes />
            ) : (
              <FluentEmojiCryingFace />
            )}
          </div>
          <div className={styles.title}>{dream.title}</div>
          <div className={styles.date}>{formatter.format(dream.date)}</div>
          <div className={styles.actions}>
            <button
              className={styles.edit}
              onClick={() => editButtonClickHandler(dream)}
            >
              <MingcuteEdit2Line />
            </button>
            <button className={styles.remove}>
              <MingcuteDelete2Line />
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default DreamsList;
