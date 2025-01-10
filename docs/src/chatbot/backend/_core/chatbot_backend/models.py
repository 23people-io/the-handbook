from pydantic import BaseModel


class MessageContentModel(BaseModel):
    text: str
    type: str


class ChatMessageModel(BaseModel):
    role: str
    content: MessageContentModel
