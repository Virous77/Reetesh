"use client";

import React, { useEffect, useRef, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { Button, Input } from "@nextui-org/react";

export default function EditorComp() {
  const [mounted, setMounted] = useState(false);
  const [content, setContent] = useState({
    desc: "",
  });

  const editorRef = useRef<any>(null);
  const log = () => {
    if (editorRef.current) {
      setContent((prev) => ({ ...prev, desc: editorRef.current.getContent() }));
    }
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <>
      <Editor
        apiKey={process.env.NEXT_PUBLIC_EDITOR_KEY!}
        onInit={(evt, editor) => (editorRef.current = editor)}
        init={{
          height: 300,
          menubar: false,
          plugins: [
            "advlist",
            "autolink",
            "lists",
            "link",
            "image",
            "charmap",
            "preview",
            "anchor",
            "searchreplace",
            "visualblocks",
            "code",
            "fullscreen",
            "insertdatetime",
            "media",
            "table",
            "code",
            "help",
            "wordcount",
          ],
          toolbar:
            "undo redo | blocks | " +
            "bold italic forecolor | alignleft aligncenter " +
            "alignright alignjustify | bullist numlist outdent indent | " +
            "removeformat | help",
          content_style:
            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
        }}
      />
      <div className=" flex items-center gap-3">
        <Button
          color="success"
          variant="faded"
          className="rounded w-full"
          onClick={log}
        >
          Log Editor Content
        </Button>
        <Button
          onClick={() => setContent((prev) => ({ ...prev, desc: "" }))}
          type="button"
          color="danger"
          variant="shadow"
          className=" rounded w-full"
        >
          Hide Content
        </Button>
      </div>

      {content.desc && <Input value={content.desc} name="desc" type="text" />}
    </>
  );
}
