import MingcuteAddLine from "../../icons/MingcuteAddLine.tsx";

import Button from "../Button/Button.tsx";
import Input from "../Input/Input.tsx";

import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <Button className={styles.button} shape="circle" sameWidthHeight>
        <MingcuteAddLine />
      </Button>
      <dialog>
        <div className={styles.content}>
          <div className={styles.title}>New Note</div>
          <Input placeholder="Input your note..." />
          <div className={styles.actions}>
            <Button variant="outlined" size="small">
              Cancel
            </Button>
            <Button size="small">Apply</Button>
          </div>
        </div>
      </dialog>
    </footer>
  );
}

export default Footer;
