import os

def main():
    package_name = "spapi"

    content = f'''
## import api client and configuration
from {package_name}.configuration import Configuration
from {package_name}.api_client import ApiClient
from {package_name}.client import SPAPIClient
from {package_name}.rest import ApiException

## import Auth
from {package_name}.auth.credentials import SPAPIConfig
    
## import APIs
    '''

    # Path to the generated SDK
    sdk_path = f'./sdk/{package_name}/api'

    # Create empty init files (modules) for auth/, models/, and api/
    init_folders = [
        f'./sdk/{package_name}/auth',
        f'./sdk/{package_name}/models',
        f'./sdk/{package_name}/api'
    ]

    # Create empty __init__.py files
    for folder in init_folders:
        os.makedirs(folder, exist_ok=True)
        init_file = os.path.join(folder, '__init__.py')
        with open(init_file, 'w') as f:
            pass  # Creates an empty file

    # Create main package __init__.py file
    # Get all API directories
    api_dirs = sorted([d for d in os.listdir(sdk_path) if os.path.isdir(os.path.join(sdk_path, d))])

    # For each API directory, generate the import statements
    for api_dir in api_dirs:
        api_files = sorted([f for f in os.listdir(os.path.join(sdk_path, api_dir)) if f.endswith('_api.py')])
        for api_file in api_files:
            class_name = get_api_class_name(api_file)
            content += f"\nfrom {package_name}.api.{api_dir}.{api_file[:-3]} import {class_name}"

    # Write the final __init__.py
    with open(f'./sdk/{package_name}/__init__.py', 'w') as f:
        f.write(content)

def get_api_class_name(file_name):
    """
    Extract class name from the API file name
    Example: 'sellers_api.py' -> 'SellersApi'
             'catalog_items_api.py' -> 'CatalogItemsApi'
    """
    # Remove '_api.py' suffix
    base_name = file_name[:-7]

    # Convert to PascalCase and append 'Api'
    words = base_name.split('_')
    class_name = ''.join(word.capitalize() for word in words) + 'Api'

    return class_name

if __name__ == '__main__':
    main()
