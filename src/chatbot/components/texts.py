import os
from pathlib import Path

import yaml

BASE_PATH = Path(__file__).parents[1]
DEFAULT_LOCALE_PATH = BASE_PATH / "locales"


class SectionTexts:
    """Base class for loading locales texts from YAML files."""

    def __init__(self, locale_path: Path = DEFAULT_LOCALE_PATH, language="es"):
        self.locale_path = locale_path
        self.language = language
        self.texts = self._load_texts()

    def _load_texts(self):
        base_path = os.path.join(self.locale_path, self.language)

        # Load texts from YAML files in the base path
        texts = {}
        for file_name in os.listdir(base_path):
            if file_name.endswith(".yml"):
                file_path = os.path.join(base_path, file_name)
                with open(file_path, "r") as file:
                    data = yaml.safe_load(file)
                    section = file_name.split(".")[0]
                    texts[section] = data
        return texts


section_texts = SectionTexts()


def get_text(key: str) -> str:
    keys = key.split(".")
    value = section_texts.texts
    for k in keys:
        value = value.get(k, None)
        if value is None:
            raise ValueError(f"Key {key} not found in texts.")
    return str(value)


__all__ = ["get_text"]
