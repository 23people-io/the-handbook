from typing import Any, Dict, cast

from chatbot.backend._core.chatbot_backend.base import BACKEND_RESPONSE_TYPE


class ApiResponseFormatter:
    """
    This class is responsible for formatting the response from the chatbot API.
    """

    def format(self, raw_response: Dict[str, Any]) -> BACKEND_RESPONSE_TYPE:
        content = cast(Dict[str, Any], raw_response.get("content"))
        usage = cast(Dict[str, Any], raw_response.get("usage"))
        agent = raw_response.get("agent")
        exception = raw_response.get("exception_message")
        has_errors = raw_response.get("has_errors")

        if has_errors:
            raise Exception(f"Error: {exception}")

        response_message = f"{content.get('text')}"

        return {
            "response_message": response_message,
            "agent": agent,
            "usage": usage,
        }
