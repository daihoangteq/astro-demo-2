import React, { useEffect, useState } from "react";
import type { IMUAPI } from "../../types";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
interface Props {
  data: IMUAPI[];
}
const GalleryComponent: React.FC<Props> = ({ data }) => {
  const [hydrate, setHydrate] = useState(false);
  useEffect(() => {
    setHydrate(true);
  }, []);
  if (!hydrate) {
    return (
      <>
        {data.map((item) => {
          return <img key={item.name} src={item.avatar} alt={item.name} />;
        })}
      </>
    );
  }
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
      <Masonry>
        {data.map((item) => {
          return <img key={item.name} src={item.avatar} alt={item.name} />;
        })}
      </Masonry>
    </ResponsiveMasonry>
  );
};

export default GalleryComponent;
