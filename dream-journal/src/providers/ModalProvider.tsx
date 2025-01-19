import {
  createContext,
  PropsWithChildren,
  useContext,
  useRef,
  useState,
} from "react";

import CreateEditForm from "../components/CreateEditForm/CreateEditForm.tsx";

import { Dream } from "../types/dream.ts";

import styles from "./ModalProvider.module.css";
import { DreamsContext } from "./DreamsProvider.tsx";

type ModalContextValue = {
  openModal: (editingDream?: Dream) => void;
  closeModal: () => void;
};

export const ModalContext = createContext<ModalContextValue>({
  openModal: () => {},
  closeModal: () => {},
});

type Props = PropsWithChildren;

function ModalProvider({ children }: Props) {
  const { createDream, editDream } = useContext(DreamsContext);

  const [editingDream, setEditingDream] = useState<Dream>();

  const dialogRef = useRef<HTMLDialogElement>(null);

  const openModal = (editingDream?: Dream): void => {
    setEditingDream(editingDream);
    dialogRef.current?.showModal();
  };

  const closeModal = (): void => {
    setEditingDream(undefined);
    dialogRef.current?.close();
  };

  const submitHandler = (dream: Dream): void => {
    if (editingDream) {
      editDream(dream);
    } else {
      createDream(dream);
    }

    setEditingDream(undefined);
    dialogRef.current?.close();
  };

  const cancelHandler = (): void => {
    setEditingDream(undefined);
    dialogRef.current?.close();
  };

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      <dialog ref={dialogRef} className={styles.dialog}>
        <CreateEditForm
          editingDream={editingDream}
          onSubmit={submitHandler}
          onCancel={cancelHandler}
        />
      </dialog>
    </ModalContext.Provider>
  );
}

export default ModalProvider;
