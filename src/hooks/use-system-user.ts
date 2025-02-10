import { systemUserAtom } from "@/components/atoms/system-info-atom";
import { useAtom } from "jotai";
import { useEffect } from "react";
import { SystemUserType } from "shared/types";

export const useSystemUser = () => {
  const [systemUser, setSystemUser] = useAtom<SystemUserType | undefined>(
    systemUserAtom
  );

  useEffect(() => {
    window.xploreAPI.getUserInfo().then((res) => {
      setSystemUser(res);
    });
  }, []);

  return { systemUser };
};
