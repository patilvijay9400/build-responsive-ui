import { useState } from "react";
import "./App.css";
import BannerSlider from "./components/BannerSlider";
import Header from "./components/Header";
import Modal from "./components/Modal";
import Tab from "./components/Tab";
import Footer from "./components/Footer";
import { BannerData } from "./data/BannerData";
import { TabContent } from "./data/TabContent";

function App() {
  // const images = [
  //   "image1.jpg",
  //   "image2.jpg",
  //   "image3.jpg",
  //   // Add more image URLs here
  // ].map((image) => process.env.PUBLIC_URL + image);

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

  return (
    <>
      <Header />
      <BannerSlider data={BannerData} />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col d-flex justify-content-center">
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
          <div className="col mt-3 mt-xl-0 d-flex justify-content-center">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/P43DW3HUUH8"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <div className="modal-view-container">
          <div className="d-flex w-100 p-4 my-3 primary-bg p-md-5 justify-content-around">
            <button
              onClick={() => openModal("Tab 1 Content")}
              className="btn btn-outline-light btn-lg"
            >
              Open Tab 1
            </button>
            <button
              onClick={() => openModal("Tab 2 Content")}
              className="btn btn-outline-light btn-lg"
            >
              Open Tab 2
            </button>
          </div>
          <Modal isOpen={modalOpen} onClose={closeModal}>
            {modalContent}
          </Modal>
        </div>
        <div className="tab-container border rounded-3 p-1 my-2 p-md-4 my-md-4">
          <div className="tab-nav d-flex gap-md-3 gap-1 border-bottom pb-3">
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

          <div className="tab-content pt-4">{TabContent[activeTab]}</div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
