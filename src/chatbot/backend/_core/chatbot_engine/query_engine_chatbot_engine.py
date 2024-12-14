from typing import List

from chatbot.backend._core.chatbot_backend.base import BACKEND_RESPONSE_TYPE
from chatbot.backend._core.chatbot_backend.models import ChatMessageModel
from chatbot.backend._core.chatbot_backend.response_formatters import (
    QueryEngineResponseFormatter,
)
from llama_index.core import VectorStoreIndex


class QueryEngineChatEngine:
    def __init__(
        self, index: VectorStoreIndex, response_formatter: QueryEngineResponseFormatter
    ):
        self.index = index
        self.response_formatter = response_formatter

    def chat(
        self,
        message: str,
        messages_history: List[ChatMessageModel],
    ) -> BACKEND_RESPONSE_TYPE:
        query_engine = self.index.as_query_engine()
        raw_response = query_engine.query(message)
        response = self.response_formatter.format(raw_response)
        return response
