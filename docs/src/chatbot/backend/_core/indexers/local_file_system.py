import os
from typing import Optional

from llama_index.core import SimpleDirectoryReader, VectorStoreIndex
from loguru import logger

DEFAULT_INPUT_DIR = os.path.join(os.getcwd(), ".data")


class LocalFileSystemIndexBuilder:
    def from_dir(self, input_dir: Optional[str] = None) -> VectorStoreIndex:
        logger.debug(f"Building Index from Directory: {input_dir}...")
        input_dir = input_dir or DEFAULT_INPUT_DIR
        if not os.path.exists(input_dir):
            raise ValueError(f"The given input_dir was not found: {input_dir}")

        try:
            data = SimpleDirectoryReader(input_dir=input_dir).load_data()
            index = VectorStoreIndex.from_documents(data)
        except Exception as e:
            raise Exception(f"Error building Index from Directory: {e}") from e

        logger.debug("Index was successfully built.")
        return index

    def from_file(self, file_path: str = "") -> VectorStoreIndex:
        logger.debug(f"Building Index from File: {file_path}...")
        if not file_path:
            raise ValueError("File path is required")

        if not os.path.exists(file_path):
            raise FileNotFoundError(f"The given file_path was not found: {file_path}")

        try:
            data = SimpleDirectoryReader(input_files=[file_path]).load_data()
            index = VectorStoreIndex.from_documents(data)
        except Exception as e:
            raise Exception(f"Error building Index from File: {e}") from e

        logger.debug("Index was successfully built.")
        return index
