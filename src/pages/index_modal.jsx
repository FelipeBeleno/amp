import React, { useState } from "react";
import { Modal } from "../components/modal";
import { PageOne } from "./page_one";
import { PageTwo } from "./page_two";
import { PageThree } from "./page_three";

export const IndexModal = () => {
  const [pageRender, setPageRender] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [userInfo, setUserInfo] = useState({});
  const closeModal = () => setIsModalOpen(false);

  function ChildrenRender(page) {
    switch (page) {
      case 1:
        return (
          <PageOne setPageRender={setPageRender} setUserInfo={setUserInfo} />
        );

      case 2:
        return (
          <PageTwo setPageRender={setPageRender} setUserInfo={setUserInfo} />
        );

      case 3:
        return <PageThree userInfo={userInfo} />;

      default:
        break;
    }
  }

  return (
    <div className="App">
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        direction={pageRender === 1 ? "horizontal" : "vertical"}
      >
        {ChildrenRender(pageRender)}
      </Modal>
    </div>
  );
};
