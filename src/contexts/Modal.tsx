import React, { createContext, useState, useCallback, useContext } from "react";
import {
  TransitionGroup,
  Transition,
  TransitionStatus,
} from "react-transition-group";

import * as modals from "../modals";

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
const TransitionStatusContext = createContext<TransitionStatus | null>(null);

export const ModalContextProvider: React.FC = ({ children }) => {
  const [openedModal, setOpenedModal] = useState<Modal | null>(null);

  const open: ModalContextValues["open"] = useCallback((name, props) => {
    setOpenedModal({ name, props });
  }, []);

  const close = useCallback(() => {
    setOpenedModal(null);
  }, []);

  return (
    <ModalContext.Provider value={{ open }}>
      {children}
      <TransitionGroup>
        <Transition timeout={300} key={openedModal?.name}>
          {(status) => (
            <TransitionStatusContext.Provider value={status}>
              {openedModal && (
                <ModalRenderer close={close} modal={openedModal} />
              )}
            </TransitionStatusContext.Provider>
          )}
        </Transition>
      </TransitionGroup>
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

export const useTransitionStatus = () => {
  const context = useContext(TransitionStatusContext);

  if (!context) {
    throw new Error("context must be provided");
  }

  return context;
};
