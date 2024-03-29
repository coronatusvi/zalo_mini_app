export const fetchImages = async () => {
  try {
    const response = await fetch(
      "https://api.slingacademy.com/v1/sample-data/photos?offset=5&limit=100"
    );
    const data = await response.json();

    const images = data.photos.map((photo) => ({
      src: photo.url,
      alt: photo.title,
      key: photo.id.toString(),
    }));

    return images;
  } catch (error) {
    console.error("Error fetching images:", error);
    return [];
  }
};
