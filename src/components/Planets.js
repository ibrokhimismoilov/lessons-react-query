import React from "react";
import { useQuery } from "react-query";

const useGetPlanet = (planetUrl) => {
  return useQuery(
    ["planet", planetUrl],
    async () => {
      const res = await fetch(planetUrl);
      const data = await res.json();
      return data;
    },
    {
      enabled: !!planetUrl,
      initialData: {
        /* boshlang’ich qiymat */
      },
    }
  );
};

const Planets = ({ planetUrl }) => {
  const { data, isLoading } = useGetPlanet(planetUrl);

  if (isLoading) {
    return "loading...";
  }

  return <div>Planet: {data?.name}</div>;
};

export default Planets;
