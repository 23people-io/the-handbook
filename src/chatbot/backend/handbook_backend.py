from pathlib import Path
from typing import List

from loguru import logger

from chatbot.backend._core.chatbot_backend.base import (
    BACKEND_RESPONSE_TYPE,
    BaseChatbotBackend,
)
from chatbot.backend._core.chatbot_backend.models import ChatMessageModel
from chatbot.backend._core.chatbot_backend.response_formatters import (
    QueryEngineResponseFormatter,
)
from chatbot.backend._core.chatbot_engine import QueryEngineChatEngine
from chatbot.backend._core.indexers.local_file_system import LocalFileSystemIndexBuilder

HANDBOOK_DOCS_DIR = Path(__file__).parents[2] / "docs"


class HandbookChatbotBackend(BaseChatbotBackend):
    def __init__(self, verbose: bool = False):
        self.verbose = verbose
        response_formatter = QueryEngineResponseFormatter()
        vector_store_index = LocalFileSystemIndexBuilder().from_dir(
            input_dir=str(HANDBOOK_DOCS_DIR)
        )
        self.chat_engine = QueryEngineChatEngine(
            index=vector_store_index, response_formatter=response_formatter
        )

    def chat(
        self, message: str, messages_history: List[ChatMessageModel]
    ) -> BACKEND_RESPONSE_TYPE:
        try:
            response = self.chat_engine.chat(message, messages_history=messages_history)
            return response
        except Exception as e:
            logger.exception(e)
            raise Exception(f"Failed to chat: {e}") from e


def build_backend(verbose: bool = False) -> HandbookChatbotBackend:
    return HandbookChatbotBackend(verbose=verbose)
