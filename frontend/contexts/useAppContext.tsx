"use client";

import useHash from "@/hooks/use-hash";
import {
  createContext,
  useState,
  useContext,
  SetStateAction,
  Dispatch,
  useRef,
  LegacyRef,
  useEffect,
} from "react";

export type TState = {
  authModal: "string" | undefined;
};

type ContextType = {
  state: TState;
  setState: Dispatch<SetStateAction<TState>>;
  executeScroll: (name: string) => void;
  aboutScroll: LegacyRef<HTMLDivElement> | undefined;
  projectScroll: LegacyRef<HTMLDivElement> | undefined;
  contactScroll: LegacyRef<HTMLDivElement> | undefined;
  experienceScroll: LegacyRef<HTMLDivElement> | undefined;
};

const initialValue = {
  state: {} as TState,
  setState: () => {},
  executeScroll: () => {},
  aboutScroll: {} as LegacyRef<HTMLDivElement> | undefined,
  projectScroll: {} as LegacyRef<HTMLDivElement> | undefined,
  contactScroll: {} as LegacyRef<HTMLDivElement> | undefined,
  experienceScroll: {} as LegacyRef<HTMLDivElement> | undefined,
};

const AppContext = createContext<ContextType>(initialValue);

export const AppContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, setState] = useState<TState>({
    authModal: undefined,
  });

  const hash = useHash();

  const aboutScroll = useRef<HTMLDivElement | null>(null);
  const projectScroll = useRef<HTMLDivElement | null>(null);
  const contactScroll = useRef<HTMLDivElement | null>(null);
  const experienceScroll = useRef<HTMLDivElement | null>(null);

  const executeScroll = (name: string) => {
    if (name === "about") {
      if (aboutScroll.current) {
        aboutScroll.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    } else if (name === "projects") {
      if (projectScroll.current) {
        projectScroll.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    } else if (name === "contact") {
      if (contactScroll.current) {
        contactScroll.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    } else {
      if (experienceScroll.current) {
        experienceScroll.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  };

  useEffect(() => {
    if (hash) {
      executeScroll(hash);
    } else {
      executeScroll("about");
    }
  }, [hash]);

  return (
    <AppContext.Provider
      value={{
        setState,
        state,
        executeScroll,
        aboutScroll,
        projectScroll,
        contactScroll,
        experienceScroll,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);

export default AppContext;
