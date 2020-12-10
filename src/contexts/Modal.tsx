import React, {
  createContext,
  useState,
  useMemo,
  useCallback,
  useContext,
} from "react";
import * as modals from "../components/Modals";

export type ModalProps = {
  close: () => void;
};

type Modal = {
  name: keyof typeof modals;
  props: {
    [key in string]: any;
  };
};

type ModalContextValues = {
  open: <T extends Modal["name"]>(
    name: T,
    props: Omit<
      React.ComponentProps<typeof modals[T]>,
      keyof ModalProps | "children"
    >
  ) => void;
};

const ModalContext = createContext<ModalContextValues | null>(null);

export const ModalContextProvider: React.FC = ({ children }) => {
  const [openedModal, setOpenedModal] = useState<Modal | null>(null);

  const contextValues = useMemo(() => {
    const open: ModalContextValues["open"] = (name, props) => {
      setOpenedModal({ name, props });
    };

    return { open };
  }, []);

  const close = useCallback(() => {
    setOpenedModal(null);
  }, []);

  return (
    <ModalContext.Provider value={contextValues}>
      {children}
      {openedModal && <ModalRenderer close={close} modal={openedModal} />}
    </ModalContext.Provider>
  );
};

const ModalRenderer: React.FC<ModalProps & { modal: Modal }> = ({
  close,
  modal,
}) => {
  const Modal = modals[modal.name];
  return <Modal close={close} {...(modal.props as any)} />;
};

export const useModal = () => {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error("context must be provided");
  }

  return context;
};
