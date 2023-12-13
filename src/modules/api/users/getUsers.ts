import { useQuery } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";

export const useGetUser = () => {
  return useQuery<AxiosResponse<User[]>>({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axios.get(
        "https://mocki.io/v1/3361b3fd-79ad-45c2-aba4-3ee66cc9230c"
      );
      return res;
    },
  });
};
