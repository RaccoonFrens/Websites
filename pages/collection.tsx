import { useState, useEffect } from "react";
import type { NextPage } from "next";
import Loader from "../components/loader";
import CollectionHero from "../components/collection/collectionhero";

const Collection: NextPage = () => {
  // Home state
  const [isLoading, setIsLoading] = useState(false);

  // Loading screen timeout
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1800);
  }, []);

  return isLoading ? (
    // LOADING SCREEN
    <Loader />
  ) : (
    <>
      {/* NAVBAR AND HERO */}
      <section className="main-container">
        {/* Collection */}
        <CollectionHero />
      </section>
    </>
  );
};

export default Collection;
