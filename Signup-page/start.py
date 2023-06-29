import streamlit as st
import streamlit.components.v1 as components

signupComponent = components.declare_component(
    "App",
    url="http://localhost:3001",
)

def signup(title, key=None):
    return signupComponent(title=title, key=key)

logged_in_data = signup("")

st.write(logged_in_data)
