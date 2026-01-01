import qrcode

# Google Maps link for Megara Carthage
url = "https://kamar-rosy.vercel.app"

# Create the QR code
qr = qrcode.QRCode(
    version=1,
    error_correction=qrcode.constants.ERROR_CORRECT_L,
    box_size=10,
    border=4,
)

qr.add_data(url)
qr.make(fit=True)

# Generate and save the image
img = qr.make_image(fill_color="black", back_color="white")
img.save("Meue.png")

print("✅ QR code generated successfully: Meue.png")