export interface FileItemType {
  name: string;
  isDirectory: boolean;
  size: number | null;
  lastModified: Date | null;
}

export interface SystemUserType {
  username: string;
  uid: number;
  gid: number;
  shell: string;
  homedir: string;
}
