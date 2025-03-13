import noImage from "../assets/logo.webp";

const getCroppedImageUrl = (url?: string): string => {
  if (!url) {
    return noImage; // ✅ Return the fallback image
  }

  const target = "media/";
  const index = url.indexOf(target);

  if (index === -1) {
    return url; // ✅ If "media/" isn't found, return original URL
  }

  return (
    url.slice(0, index + target.length) +
    "crop/600/400" +
    url.slice(index + target.length)
  );
};

export default getCroppedImageUrl;
