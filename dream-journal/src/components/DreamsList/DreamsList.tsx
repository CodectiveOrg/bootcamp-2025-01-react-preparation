import MingcuteEdit2Line from "../../icons/MingcuteEdit2Line.tsx";
import MingcuteDelete2Line from "../../icons/MingcuteDelete2Line.tsx";

import { Dream } from "../../types/dream.ts";

import styles from "./DreamsList.module.css";

const formatter = new Intl.DateTimeFormat("en-CA", {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
});

type Props = {
  dreams: Dream[];
};

function DreamsList({ dreams }: Props) {
  return (
    <ul className={styles.items}>
      {dreams.map((dream) => (
        <li key={dream.id}>
          <div className={styles.date}>[{formatter.format(dream.date)}]</div>
          <div className={styles.title}>{dream.title}</div>
          <div className={styles.actions}>
            <button className={styles.edit}>
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
