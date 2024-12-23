import streamlit as st

from chatbot.components.texts import get_text


def build_sidebar():
    with st.sidebar:
        st.title(get_text("sidebar.header"))
        st.markdown(get_text("sidebar.intro"))
        st.button(get_text("sidebar.new_chat_button"), on_click=_new_chat)


def _new_chat():
    st.session_state.messages = []


__all__ = ["build_sidebar"]
