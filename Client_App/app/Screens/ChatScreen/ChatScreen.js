import React, { useState, useRef, useEffect } from "react";
import {
  StyleSheet,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import ChatHeader from "../../Components/ChatHeader/ChatHeader";
import Footer from "../../Components/Footer/Footer";
import ParentView from "../../Components/ParentViews";
import ChatBubble from "./Component/ChatBubble";
import ChatBubbleMarkDown from "./Component/ChatBubbleMarkDown";

export const ChatScreen = () => {
  const [messageList, setMessageList] = useState([]);
  const scrollViewRef = useRef();

  useEffect(() => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollToEnd({ animated: true });
    }
  }, [messageList]);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <ParentView style={styl.parentView}>
        <ChatHeader />
        <ScrollView
          style={styl.chatContainer}
          contentContainerStyle={styl.chatContentContainer}
          ref={scrollViewRef}
        >
          {messageList.map((chat, index) => {
            if (index % 2 == 0) {
              return <ChatBubble key={index} text={chat} />;
            } else {
              return <ChatBubbleMarkDown key={index} text={chat} />;
            }
          })}
        </ScrollView>
        <Footer setMessageList={setMessageList} />
      </ParentView>
    </TouchableWithoutFeedback>
  );
};

const styl = StyleSheet.create({
  parentView: {
    flex: 1,
  },
  chatContainer: {
    flex: 1,
  },
  chatContentContainer: {
    flexGrow: 1,
    flexDirection: "column",
    marginHorizontal: 10,
    paddingVertical: 15,
    rowGap: 15,
  },
});
