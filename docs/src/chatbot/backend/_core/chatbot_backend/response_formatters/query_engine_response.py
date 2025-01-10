from chatbot.backend._core.chatbot_backend.base import BACKEND_RESPONSE_TYPE
from llama_index.core.base.response.schema import Response


class QueryEngineResponseFormatter:
    """
    This class is responsible for formatting the response from a query engine.
    """

    def format(self, raw_response: Response) -> BACKEND_RESPONSE_TYPE:
        sources = raw_response.get_formatted_sources()
        response_message = f"{raw_response.response}"

        return {
            "response_message": response_message,
            "sources": sources,
        }
