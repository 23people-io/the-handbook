import subprocess
import sys
from pathlib import Path

def run_command(command: str, error_message: str) -> None:
    """Execute a shell command and handle potential errors."""
    try:
        subprocess.run(command, shell=True, check=True)
    except subprocess.CalledProcessError as e:
        print(f"\033[31mError: {error_message}\033[0m")
        print(f"Command failed with exit code {e.returncode}")
        sys.exit(1)

def deploy():
    """Main deployment function that runs the versioning scripts."""
    scripts_dir = Path(__file__).parent.parent / "scripts"

    # Run date updater script
    date_script = scripts_dir / "date-updater.sh"
    run_command(
        f"bash {date_script}",
        "Failed to update dates"
    )
    
    print("\033[35mStarting Versioning...\033[0m")
    
    # Run bump version script
    bump_script = scripts_dir / "bump-package-version.sh"
    run_command(
        f"bash {bump_script}",
        "Failed to bump package version"
    )
    
    print("\033[35m✔ Completed successfully.\033[0m")

if __name__ == "__main__":
    deploy()