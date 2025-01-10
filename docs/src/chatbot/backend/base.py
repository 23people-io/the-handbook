from pathlib import Path

from dotenv import load_dotenv

load_dotenv()
DEFAULT_SETTINGS_PATH = Path(__file__).parents[1] / "settings.yaml"
