import sys


def _init_logger():
    from loguru import logger

    # Remove default handler
    try:
        logger.remove(0)
    except Exception:
        pass

    # Add a file handler
    def _filter(record):
        return "llama_events" in record["extra"]

    logger.add(
        ".logs/llama.log",
        colorize=False,
        format="{time:YYYY-MM-DD HH:mm:ss} {level} {message}",
        filter=_filter,
        rotation="1 day",
        retention="1 day",
    )

    # Add a new handler
    logger.add(
        sys.stderr,
        colorize=True,
        format="<m>{time:YYYY-MM-DD HH:mm:ss}</m> <level>{level}</level> {message} ({file.name}:{line})",
    )

    return logger


logger = _init_logger()
