import PocketBase, { Record } from 'pocketbase'
export const PocketBaseServer = "http://127.0.0.1:8090";
export const FrontendServer = "http://localhost:5173";
export const client = new PocketBase(PocketBaseServer);

export const getFileDownloadPath = (record: Record) => {
  return `${PocketBaseServer}/api/files/${record.collectionId}/${record.id}/${record.file}`;
};