import React from "react";
import Image from "next/image";
import chatbotimage from "../assets/img/chatbot.89a1c370da5ade14356f.jpg";

const Chatbot = () => {
  return (
    <div className="chatbot-wrapp">
      <div className="chat-img">
        <a href="https://six6s6.com/af/GNp0dr3s/blackhat">
          <Image
            className="rounded-full"
            width={60}
            height={60}
            src={chatbotimage}
            alt="chatbot"
          ></Image>
        </a>
      </div>
    </div>
  );
};

export default Chatbot;
