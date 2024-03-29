import React, { useState, useEffect } from "react";
import { Page, ImageViewer, Box, Text } from "zmp-ui";
import { fetchImages } from "../../apis/imageDataApi";
import LoadingPage from "../../components/utils/loadingPage";

export default function ItemPage() {
  const [visible, setVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedImages = await fetchImages();
      setImages(fetchedImages);
      setIsLoading(true);
    };

    fetchData();
  }, []);

  return (
    <div>
      {isLoading ? (
        <>
          {" "}
          <Text.Title size="small">ImageViewer</Text.Title>
          <Box mt={6}>
            <Box>
              <Text.Title size="small">Khi nào bạn cần?</Text.Title>
            </Box>
            <Box mt={2}>
              <Text size="xSmall" className="input-desc">
                Khi cần xem và tương tác với hình ảnh trên kích thước lớn hơn
              </Text>
            </Box>
            <Box mt={6}>
              <Text.Title size="small">Example</Text.Title>
            </Box>
            <Box mt={2}>
              <Box flex flexDirection="row" style={{ flexWrap: "wrap" }}>
                {images.map((img, index) => (
                  <Box
                    mr={1}
                    key={img.key}
                    style={{
                      flex: "0 0 23%",
                      width: "68px",
                      height: "69px",
                      borderRadius: "8px",
                      overflow: "hidden",
                      margin: "3px",
                    }}
                  >
                    <img
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                      role="presentation"
                      onClick={() => {
                        setActiveIndex(index);
                        setVisible(true);
                      }}
                      src={img.src}
                      alt={img.alt}
                    />
                  </Box>
                ))}
              </Box>
              <ImageViewer
                onClose={() => setVisible(false)}
                activeIndex={activeIndex}
                images={images}
                visible={visible}
              />
            </Box>
          </Box>
        </>
      ) : (
        <LoadingPage />
      )}
    </div>
  );
}
