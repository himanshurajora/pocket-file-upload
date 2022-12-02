import _ from "lodash";
import { Record } from "pocketbase";
import { useState, useRef, useEffect, FormEvent } from "react";
import { getFileDownloadPath, PocketBaseServer, client, FrontendServer } from "./utils";

export const UploadFilePage = () => {
  const [record, setRecord] = useState<Record>();
  const fileRef = useRef<HTMLInputElement>(null);
  const [allFiles, setAllFiles] = useState<Record[]>([]);

  useEffect(() => {
    client.collection("test")
      .getFullList()
      .then((records) => {
        setAllFiles(records);
      });
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const file = fileRef.current?.files?.[0];
    const formData = new FormData();
    if (file !== undefined) {
      formData.append("file", file);
      const res = await client.collection("test").create(formData);
      setRecord(res);
      console.log(res);
    } else {
      alert("Please select a file");
    }
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input ref={fileRef} type="file" />
        <input type="submit" value="Upload" />
      </form>
      <hr />
      {record && (
        <a href={`${FrontendServer}/${record.id}`}> {`${FrontendServer}/${record.id}`}</a>
      )}
      {/* <ul>
        {allFiles &&
          _.map(allFiles, (fileRecord) => {
            return (
              <li>
                <a href={getFileUrl(fileRecord)}>
                  Download The File {fileRecord.file}
                </a>
              </li>
            );
          })}
      </ul> */}
    </div>
  );
};
