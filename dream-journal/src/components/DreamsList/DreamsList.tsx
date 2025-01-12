import MingcuteEdit2Line from "../../icons/MingcuteEdit2Line.tsx";
import MingcuteDelete2Line from "../../icons/MingcuteDelete2Line.tsx";

import { Dream } from "../../types/dream.ts";

import styles from "./DreamsList.module.css";

type Props = {
  dreams: Dream[];
};

function DreamsList({ dreams }: Props) {
  return (
    <ul className={styles.items}>
      {dreams.map((dream) => (
        <li key={dream.id}>
          <label>
            <input type="checkbox" />
            <div className={styles.title}>{dream.title}</div>
          </label>
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
