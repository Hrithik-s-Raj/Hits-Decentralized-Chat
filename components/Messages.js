import { useRef } from "react";
import { useMoralis, useMoralisQuery } from "react-moralis";
import Message from "./Message";
import SendMessage from "./SendMessage";

function Messages() {
  const MINS_DURATION = 15;
  const { user } = useMoralis();
  const endofMessagesRef = useRef(null);
  const { data, loading, error } = useMoralisQuery(
    "Messages",
    (query) =>
      query
        .ascending("createdAt")
        .greaterThan(
          "createdAt",
          new Date(Date.now() - 1000 * 60 * MINS_DURATION)
        ),
    [],
    {
      live: true,
    }
  );

  console.log(data);
  return (
    <div className="pb-56">
      <div className="space-y-10">
        {data.map((message) => (
          <Message key={message.id} message={message} />
        ))}
      </div>
      <div className="flex justify-center">
        {" "}
        <SendMessage endofMessagesRef={endofMessagesRef} />
      </div>
      <div ref={endofMessagesRef} className="text-center text-gray-400 mt-5">
        <p>You're up to date {user.getUsername()}</p>
      </div>
    </div>
  );
}

export default Messages;
