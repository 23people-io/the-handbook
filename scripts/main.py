import subprocess
import sys
from pathlib import Path

scripts_dir = Path(__file__).parent.parent / "scripts"

def start():
    """Run the project."""

    script = scripts_dir / "start.sh"
    _run_command(f"bash {script}", "Failed to run the project")


def commit():
    """Commit changes to the repository using conventional commits."""

    # Run bump version script
    print("\033[35mStarting conventional commit...\033[0m")

    # First add all changes
    _run_command("git add .", "Failed to stage changes")

    # Then run the interactive cz commit with TTY access
    _run_command_interactive("uv run cz commit", "Failed to create a conventional commit")

    print("\033[35m✔ Completed successfully.\033[0m")


def lint_markdown():
    """Check markdown files for formatting issues using pymarkdownlnt."""
    print("\033[35mChecking markdown files...\033[0m")

    # Run pymarkdown scan on docs directory
    # pymarkdownlnt automatically reads .markdownlint.yaml configuration
    _run_command("uv run pymarkdown --config .markdownlint.yaml scan docs/", "Markdown linting failed")

    print("\033[35m✔ All markdown files are properly formatted.\033[0m")


def _run_command(command: str, error_message: str) -> None:
    """Execute a shell command and handle potential errors."""
    try:
        subprocess.run(command, shell=True, check=True)
    except subprocess.CalledProcessError as e:
        print(f"\033[31mError: {error_message}\033[0m")
        print(f"Command failed with exit code {e.returncode}")
        sys.exit(1)


def _run_command_interactive(command: str, error_message: str) -> None:
    """Execute an interactive shell command with TTY access."""
    try:
        # Pass through stdin, stdout, and stderr to allow interactive prompts
        subprocess.run(command, shell=True, check=True, 
                      stdin=sys.stdin, stdout=sys.stdout, stderr=sys.stderr)
    except subprocess.CalledProcessError as e:
        print(f"\033[31mError: {error_message}\033[0m")
        print(f"Command failed with exit code {e.returncode}")
        sys.exit(1)
