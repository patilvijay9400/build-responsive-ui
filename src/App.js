import { useState } from "react";
import "./App.css";
import BannerSlider from "./components/BannerSlider";
import Header from "./components/Header";
import Modal from "./components/Modal";
import Tab from "./components/Tab";

function App() {
  const images = [
    "image1.jpg",
    "image2.jpg",
    "image3.jpg",
    // Add more image URLs here
  ].map((image) => process.env.PUBLIC_URL + image);

  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const openModal = (content) => {
    setModalOpen(true);
    setModalContent(content);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalContent("");
  };

  const [activeTab, setActiveTab] = useState("Form");

  const tabContent = {
    Form: <div>Form Content</div>,
    Text: <div>Text Content</div>,
    Images: <div>Images Content</div>,
    Video: <div>Video Content</div>,
  };

  return (
    <>
      <Header />
      <BannerSlider images={images} />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/SqcY0GlETPk"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <div className="col">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/SqcY0GlETPk"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>

      <button onClick={() => openModal("Tab 1 Content")}>Open Tab 1</button>
      <button onClick={() => openModal("Tab 2 Content")}>Open Tab 2</button>

      <Modal isOpen={modalOpen} onClose={closeModal}>
        {modalContent}
      </Modal>

      <div className="tab-nav">
        <Tab
          label="Form"
          isActive={activeTab === "Form"}
          onClick={() => setActiveTab("Form")}
        />
        <Tab
          label="Text"
          isActive={activeTab === "Text"}
          onClick={() => setActiveTab("Text")}
        />
        <Tab
          label="Images"
          isActive={activeTab === "Images"}
          onClick={() => setActiveTab("Images")}
        />
        <Tab
          label="Video"
          isActive={activeTab === "Video"}
          onClick={() => setActiveTab("Video")}
        />
      </div>

      <div className="tab-content">{tabContent[activeTab]}</div>
    </>
  );
}

export default App;
