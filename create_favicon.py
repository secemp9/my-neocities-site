from PIL import Image
import requests
from io import BytesIO

# URL of the image you want to convert
image_url = "https://avatars.githubusercontent.com/u/71677764?v=4"

# Fetch the image from the URL
response = requests.get(image_url)
if response.status_code == 200:
    # Open the image using PIL
    image = Image.open(BytesIO(response.content))

    # Convert the image to a square (if necessary) and resize it to 32x32
    image = image.resize((32, 32), Image.ANTIALIAS)

    # Save the image as a .ico file
    image.save("favicon.ico", format='ICO')
    print("Favicon created successfully!")
else:
    print("Failed to retrieve the image.")
