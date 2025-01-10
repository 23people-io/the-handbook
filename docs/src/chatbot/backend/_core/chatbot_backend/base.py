from abc import abstractmethod
from typing import Any, Dict, List

from chatbot.backend._core.chatbot_backend.models import ChatMessageModel

BACKEND_RESPONSE_TYPE = Dict[str, Any]
MESSAGE_HISTORY_TYPE = List[ChatMessageModel]


class BaseChatbotBackend:
    """
    Base class for a chatbot backend.
    A Chatbot backend is a high-level interface for having a conversation where multiple service agents can help to
    generate augmented answers through multiple back-and-forth instead of a single question & answer.
    """

    @abstractmethod
    def chat(
        self, message: str, messages_history: List[ChatMessageModel]
    ) -> BACKEND_RESPONSE_TYPE:
        """
        Chat with the chatbot API.
        """
        raise NotImplementedError("Method chat must be implemented in a subclass.")
