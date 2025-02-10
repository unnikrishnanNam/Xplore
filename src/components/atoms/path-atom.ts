import { atom } from "jotai";
import { FileItemType } from "shared/types";
export const pathAtom = atom<string[]>(["/"]);
export const filesAtom = atom<FileItemType[]>([]);
