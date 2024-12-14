from typing import List, cast

import streamlit as st
from loguru import logger

from chatbot.backend._core.chatbot_backend.base import BaseChatbotBackend
from chatbot.backend._core.chatbot_backend.models import (
    ChatMessageModel,
    MessageContentModel,
)
from chatbot.backend.handbook_backend import build_backend
from chatbot.components.logo import build_logo
from chatbot.components.sidebar import build_sidebar
from chatbot.components.texts import get_text

st.set_page_config(
    page_title=get_text("page.title"),
    layout="centered",
    initial_sidebar_state="auto",
    menu_items=None,
)


@st.cache_resource()
def get_chatbot_backend() -> BaseChatbotBackend:
    return build_backend()


def build_page():
    """Build the page."""
    logger.info("Building main page...")
    build_logo()
    build_sidebar()
    st.title(get_text("chatbot.header"))
    st.caption(get_text("chatbot.caption"))


def get_chat_history(messages) -> List[ChatMessageModel]:
    chat_history = []
    for msg in messages:
        role = msg["role"]
        content_text = msg["content"]
        content_type = "text"
        content = MessageContentModel(type=content_type, text=content_text)
        chat_message = ChatMessageModel(role=role, content=content)
        chat_history.append(chat_message)
    return chat_history


def init_chatbot():
    if "messages" not in st.session_state:
        messages = []
        st.session_state["messages"] = messages

    if "chatbot_backend" not in st.session_state:
        chatbot_backend = get_chatbot_backend()
        st.session_state["chatbot_backend"] = chatbot_backend

    for msg in st.session_state["messages"]:
        if msg["role"] == "system":
            continue
        st.chat_message(msg["role"]).write(msg["content"])


def run_chatbot():
    """Run the chatbot."""

    if user_message := st.chat_input(get_text("chatbot.input_placeholder")):
        st.chat_message("user").write(user_message)
        chatbot_backend = cast(BaseChatbotBackend, st.session_state["chatbot_backend"])
        messages_history = get_chat_history(st.session_state["messages"])
        with st.spinner(get_text("chatbot.state_thinking")):
            try:
                response = chatbot_backend.chat(
                    message=user_message, messages_history=messages_history
                )
                response_message = response.get("response_message")
                st.session_state["messages"].append(
                    {"role": "user", "content": user_message}
                )
                st.session_state["messages"].append(
                    {"role": "assistant", "content": response_message}
                )
                st.chat_message("assistant").write(response_message)
                logger.info(response.get("sources"))

            except ValueError as e:
                logger.exception(e)
                if e.args[0] not in "Reached max iterations.":
                    raise Exception(f"Failed to chat: {e}") from e
                st.error("Reached max iterations.")
            except Exception as e:
                logger.exception(e)
                raise Exception(f"Failed to chat: {e}") from e


def main():
    try:
        build_page()
        init_chatbot()
        run_chatbot()
    except Exception as e:
        logger.exception(e)
        st.exception(e)
        st.stop()
    logger.debug("Main has finished.")


if __name__ == "__main__":
    main()
