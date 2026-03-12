import { GptMessage, MyMessage } from "../../components";

export const OrthographyPage = () => {
  return (
    <div className="chat-container">
      <div className="chat-messages">
        <div className="grid grid-cols-12 gap-y-2">
          {/* Bienvenida */}
          <GptMessage text="Hola, puedes escribir tu texto" />

          <MyMessage text="Hola mundo" />
        </div>
      </div>
    </div>
  );
};
