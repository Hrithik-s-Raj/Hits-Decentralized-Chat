import { useState } from "react";
import { useMoralis } from "react-moralis";

function SendMessage({ endofMessagesRef }) {
  const { user, Moralis } = useMoralis();

  console.log(endofMessagesRef);

  const [message, setMessage] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();

    if (!message) return;

    const Messages = Moralis.Object.extend("Messages");
    const messages = new Messages();

    messages
      .save({
        message: message,
        username: user.getUsername(),
        ethAddress: user.get("ethAddress"),
      })
      .then(
        (message) => {},
        (error) => {
          console.log(error.message);
        }
      );
    endofMessagesRef.current.scrollIntoView({ behavior: "smooth" });
    setMessage("");
  };
  return (
    <form className="flex w-11/12 fixed bottom-10 bg-black opacity-80 px-6 py-4 max-w-lg shadow-xl rounded-full border-4 border-blue-400 ">
      <input
        type="text "
        placeholder={`Enter a Message ${user.getUsername()}`}
        className=" flex-grow outline-none bg-transparent text-white placeholder-gray-500 pr-5"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button
        onClick={sendMessage}
        type="submit"
        className="font-bold text-pink-500"
      >
        Send
      </button>
    </form>
  );
}

export default SendMessage;
