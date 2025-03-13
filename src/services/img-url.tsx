const getCroppedImageUrl = (url?: string) => {
  if (!url) {
    return "https://via.placeholder.com/600x400"; // Default placeholder image
  }

  const target = "media/";
  const index = url.indexOf(target);

  if (index === -1) {
    return url; // Return the original URL if "media/" is not found
  }

  return (
    url.slice(0, index + target.length) +
    "crop/600/400" +
    url.slice(index + target.length)
  );
};

export default getCroppedImageUrl;
