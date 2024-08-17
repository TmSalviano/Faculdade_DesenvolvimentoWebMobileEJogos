import sys;
import requests;

print("Welcome to the zip code Getter! Type a Brazilian zip code to retrieve its info!")
print("     The zip code in Brazil must have:")
print("         1. Exactly 8 digits.")
print("         2. Only numbers.")
print("         3. No empty space.")

print("Insert the desired zip code: ")

format;

zipCode = input()

if len(zipCode) != 8 or not zipCode.isalnum() or " " in zipCode:
    print("invalid zip code.")
    sys.exit()

response = requests.get("https://viacep.com.br/ws/" + zipCode + format)

print(response.json())
