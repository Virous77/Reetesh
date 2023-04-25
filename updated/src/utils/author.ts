import authorImg from "../assets/image.jpg";

export const author = {
  name: "Reetesh Kumar",
  image: authorImg,
  about: "Full Stack Developer",
};

export const formattedDate = (date: Date) => {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  }).format(date);
};
