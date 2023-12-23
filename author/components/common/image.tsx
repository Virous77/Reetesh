"use client";

import { Input } from "@nextui-org/react";
import React, { useState } from "react";

const ImageComp = () => {
  const [image, setImage] = useState("");
  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    const uploadImage = new FormData();

    const cloud_name = process.env.NEXT_PUBLIC_CLOUD_NAME!;
    const cloud_preset = process.env.NEXT_PUBLIC_CLOUD_PRESET!;
    const newImage = e.target.files[0];

    if (newImage) {
      uploadImage.append("file", newImage);
      uploadImage.append("cloud_name", cloud_name);
      uploadImage.append("upload_preset", cloud_preset);

      const res = await fetch(
        `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`,
        {
          method: "post",
          body: uploadImage,
        }
      );
      const imgData = await res.json();
      setImage(imgData.secure_url);
    }
  };
  return (
    <>
      <Input
        type="file"
        variant="bordered"
        onChange={(e) => handleImageUpload(e)}
      />
      <Input value={image} name="images" type="text" className=" hidden" />
    </>
  );
};

export default ImageComp;
