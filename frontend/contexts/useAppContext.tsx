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
  MutableRefObject,
} from "react";

export type TState = {
  authModal: string | undefined;
  activeSection: string | undefined;
  active: string | undefined;
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
    activeSection: undefined,
    active: undefined,
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

  const commonObserverCallback = (
    ref: MutableRefObject<HTMLDivElement | null>,
    name: string,
    observer: IntersectionObserver
  ) => {
    if (ref.current) {
      observer.observe(ref.current);
      ref.current.setAttribute("data-section", name);
    }
  };

  useEffect(() => {
    if (hash) {
      executeScroll(hash);
    }
  }, [hash]);

  useEffect(() => {
    if (window.innerWidth > 768) {
      const observerCallback = (entries: any) => {
        entries.forEach((entry: any) => {
          const triggerElement = entry.target;
          const triggerElementName =
            triggerElement.getAttribute("data-section");
          if (entry.isIntersecting) {
            setState((prev) => ({
              ...prev,
              activeSection: prev.active ? prev.active : triggerElementName,
            }));
          }
        });
      };

      const observer = new IntersectionObserver(observerCallback, {
        threshold: 1,
      });

      commonObserverCallback(aboutScroll, "about", observer);
      commonObserverCallback(projectScroll, "projects", observer);
      commonObserverCallback(experienceScroll, "experience", observer);
      commonObserverCallback(contactScroll, "contact", observer);

      return () => {
        observer.disconnect();
      };
    }
  }, [aboutScroll, projectScroll, contactScroll, experienceScroll]);

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
