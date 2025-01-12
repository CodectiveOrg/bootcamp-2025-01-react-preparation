import MingcuteEdit2Line from "../../icons/MingcuteEdit2Line.tsx";
import MingcuteDelete2Line from "../../icons/MingcuteDelete2Line.tsx";

import styles from "./ItemsList.module.css";

const items = ["Note #1", "Note #2", "Note #3"];

function ItemsList() {
  return (
    <ul className={styles.items}>
      {items.map((item) => (
        <li key={item}>
          <label>
            <input type="checkbox" />
            <div className={styles.title}>{item}</div>
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

export default ItemsList;
