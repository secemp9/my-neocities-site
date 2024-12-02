from PIL import Image
# Path to the local image file
image_path = "avatar.png"

# Open the image using PIL
image = Image.open(image_path)

# Convert the image to a square (if necessary) and resize it to 32x32
image = image.resize((32, 32), Image.LANCZOS)

# Save the image as a .ico file
image.save("favicon.ico", format='ICO')
print("Favicon created successfully!")
