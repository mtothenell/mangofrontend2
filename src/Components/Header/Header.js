import React, { useState, useEffect } from "react";
import TopNav from "./TopNav/TopNav";

function Header(props) {
  const [activeBullet, setActiveBullet] = useState(0);
  const [imageGallery, setImageGallery] = useState([]);
  const defaultObject = { title: "", description: "", image: "" };

  const id = "1vaLjOuDB7iE9yv4lA3wGqPjV6vA8z6WcetuTerUiGR4";
  const jsonDataUrl = `https://sheets.googleapis.com/v4/spreadsheets/${id}/values/Sheet1?alt=json&key=AIzaSyBxGxWMipV5iwKgX3IXdBRvL3bUw9Vch7A`;
  const formatImageGalleryData = (arr) => {
    return {
      title: arr[1],
      description: arr[2],
      image: arr[3]
    };
  };

  useEffect(() => {
    let makeAPICall = async () => {
      const data = await fetch(jsonDataUrl);
      const imageGalleryItems = await data.json();
      console.log("Header - useEffect - imageGalleryItems", imageGalleryItems);
      const imageGalleryArr = imageGalleryItems.values
        .slice(1)
        .map((d) => formatImageGalleryData(d));
      setImageGallery(imageGalleryArr);
    };
    makeAPICall();
  }, []);

  useEffect(() => {}, [activeBullet]);

  const style = {
    backgroundImage: imageGallery.length
      ? `url(${imageGallery[activeBullet].image}`
      : `url(${defaultObject.image})`
  };

  return (
    <div className="container">
      <header style={style}>
        <div className="gradient_container_top"></div>
        <div className="gradient_container_bottom"></div>
        <TopNav {...props} />
      </header>
    </div>
  );
}

export default Header;
