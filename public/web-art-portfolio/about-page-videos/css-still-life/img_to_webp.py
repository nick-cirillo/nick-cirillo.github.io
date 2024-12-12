import os
import subprocess

def convert_to_webp(directory):
    """
    Converts all PNG and JPEG images in the given directory to WEBP format using ffmpeg.

    Parameters:
        directory (str): Path to the directory containing the images.
    """
    # Supported input formats
    image_extensions = (".png", ".jpg", ".jpeg")

    # Iterate through the files in the directory
    for root, _, files in os.walk(directory):
        for file in files:
            if file.lower().endswith(image_extensions):
                input_path = os.path.join(root, file)
                output_path = os.path.splitext(input_path)[0] + ".webp"

                # Run ffmpeg command to convert the file to WEBP format
                try:
                    subprocess.run([
                        "ffmpeg", "-i", input_path, "-c:v", "libwebp", "-lossless", "1", output_path
                    ], check=True)

                    print(f"Converted: {input_path} -> {output_path}")

                except subprocess.CalledProcessError as e:
                    print(f"Error converting {input_path}: {e}")

if __name__ == "__main__":
    directory = input("Enter the path to the directory containing images: ").strip()

    if os.path.isdir(directory):
        convert_to_webp(directory)
    else:
        print("Invalid directory path. Please try again.")
