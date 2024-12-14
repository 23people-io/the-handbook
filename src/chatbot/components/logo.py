import streamlit as st


def build_logo():
    LOGO_URL_LARGE = "https://23people.io/img/logo-white.svg"
    LOGO_URL_SMALL = LOGO_URL_LARGE
    st.logo(LOGO_URL_LARGE, link="https://23people.io", icon_image=LOGO_URL_SMALL)

__all__ = ["build_logo"]