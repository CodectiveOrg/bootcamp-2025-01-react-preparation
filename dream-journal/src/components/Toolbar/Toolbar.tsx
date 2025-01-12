import Button from "../Button/Button.tsx";
import ItemTypeFilter from "../ItemTypeFilter/ItemTypeFilter.tsx";
import Input from "../Input/Input.tsx";

import MingcuteSearchLine from "../../icons/MingcuteSearchLine.tsx";
import MingcuteMoonStarsLine from "../../icons/MingcuteMoonStarsLine.tsx";

import styles from "./Toolbar.module.css";

function Toolbar() {
  return (
    <div className={styles.toolbar}>
      <Input placeholder="Search note..." suffixIcon={<MingcuteSearchLine />} />
      <ItemTypeFilter />
      <Button sameWidthHeight className={styles.theme}>
        <MingcuteMoonStarsLine />
      </Button>
    </div>
  );
}

export default Toolbar;
