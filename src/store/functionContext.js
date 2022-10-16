import { createContext, useState, useContext, useEffect } from "react";
import { client } from "../client";
import { toast } from "react-toastify";

const FunctionContext = createContext();

export const FunctionContextProvider = ({ children }) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [about, setAbout] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [work, setWork] = useState([]);
  const [singleData, setSingleData] = useState(null);
  const [dataFetching, setDataFetcing] = useState(false);
  const [skills, setSkills] = useState(null);
  const [experience, setExperience] = useState(null);
  const [message, setMessage] = useState("");
  const [yourName, setYourName] = useState("");
  const [yourEmail, setYourEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    //Fetching About Data
    const query = `*[_type == 'abouts']`;
    client.fetch(query).then((data) => {
      setAbout(data);
      setIsLoading(false);
    });

    // Fetching Work Data
    const workQuery = `*[_type == 'works']`;
    client.fetch(workQuery).then((data) => {
      setWork(data);
      setIsLoading(false);
    });

    // Fetching Skills Data
    const skillQuery = `*[_type == 'skills']`;
    client.fetch(skillQuery).then((data) => {
      setSkills(data);
      setIsLoading(false);
    });

    //Fetching Experiences Data
    const experienceQuery = `*[_type == 'experiences']`;
    client.fetch(experienceQuery).then((data) => {
      setExperience(data);
      setIsLoading(false);
    });
  }, []);

  //Fetching single Data
  const getProjectId = async (id) => {
    setDataFetcing(true);
    const queryOne = `*[_type == 'works' && _id == '${id}']`;

    await client.fetch(queryOne).then((data) => {
      setSingleData(data);
      setDataFetcing(false);
    });
  };

  //Submmiting Messae
  const submitForm = (e) => {
    e.preventDefault();
    setIsSubmitted(false);

    setDataFetcing(true);
    if ((!yourEmail && !yourName, !message)) {
      toast.error("It seems fields are empty..");
      setDataFetcing(false);
    }

    if ((yourEmail, yourName, message)) {
      const doc = {
        _type: "contact",
        name: yourName,
        email: yourEmail,
        message: message,
      };

      client
        .create(doc)
        .then((data) => {
          setDataFetcing(false);
          setIsSubmitted(true);
        })
        .catch((err) => {
          toast.error("Soemthing went wrong, Try again!");
        });
    }

    setYourEmail("");
    setMessage("");
    setYourName("");
  };
  return (
    <FunctionContext.Provider
      value={{
        showMobileMenu,
        setShowMobileMenu,
        about,
        setAbout,
        isLoading,
        work,
        setWork,
        getProjectId,
        singleData,
        dataFetching,
        experience,
        skills,
        message,
        setMessage,
        yourEmail,
        setYourEmail,
        yourName,
        setYourName,
        submitForm,
        isSubmitted,
      }}
    >
      {children}
    </FunctionContext.Provider>
  );
};

export const useFunctionContext = () => useContext(FunctionContext);
