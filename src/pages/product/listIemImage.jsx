import React, { useState, useEffect } from "react";
import { ImageViewer, Box, Text, Input } from "zmp-ui";
import { fetchImages } from "../../apis/imageDataApi";
import LoadingPage from "../../components/utils/loadingPage";

export default function ItemPage() {
  const [visible, setVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [images, setImages] = useState([]);
  const [imagesSearch, setImagesSearch] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSearch, setIsSearch] = useState("");
  function handleSearch() {
    if (isSearch == "") {
      console.log("nhả");
      setImages(imagesSearch); // Atur ulang status gambar ke gambar asli
    } else {
      console.log("9");
      let filteredImages = images.filter((image) =>
        image.key.includes(isSearch)
      );
      setImages(filteredImages);
      // Perbarui status gambar yang difilter
    }
    console.log("isSearch", isSearch);
  }
  useEffect(() => {
    handleSearch();
  }, [isSearch]);
  useEffect(() => {
    const fetchData = async () => {
      const fetchedImages = await fetchImages();
      setImages(fetchedImages);
      setImagesSearch(fetchedImages);
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
          <Input.Search
            label="Cari berdasarkan judul"
            helperText="Masukkan judul gambar untuk mencari"
            loading={false}
            onChange={(e) => {
              // Filter gambar berdasarkan judul
              setIsSearch(e.target.value);
            }}
          />
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
                      marginBottom: "70px",
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
                    <Text style={{ position: "absolute" }}>{img.key}</Text>
                  </Box>
                ))}
              </Box>
              <ImageViewer
                onClose={() => setVisible(false)}
                activeIndex={activeIndex}
                images={images}
                visible={visible}
              ></ImageViewer>
            </Box>
          </Box>
        </>
      ) : (
        <LoadingPage />
      )}
    </div>
  );
}
