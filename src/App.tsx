import {
  FormEvent,
  FormEventHandler,
  useEffect,
  useRef,
  useState,
} from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import PocketBase, { Record } from "pocketbase";
import * as _ from "lodash";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UploadFilePage } from "./pages/update-file-page";
import { DownloadFilePage } from "./pages/download-file-page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UploadFilePage />}></Route>
        <Route path="/:id" element={<DownloadFilePage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
