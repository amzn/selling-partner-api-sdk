import os

def main():
    package_name = "spapi"

    content = f'''__version__ = "1.0.0"

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

    # Get all API directories
    api_dirs = [d for d in os.listdir(sdk_path) if os.path.isdir(os.path.join(sdk_path, d))]

    # For each API directory, generate the import statement
    for api_dir in api_dirs:
        class_name = get_api_class_name(api_dir)
        content += f"\nfrom {package_name}.api.{api_dir}.{api_dir}_api import {class_name}"

    # Write the final __init__.py
    with open(f'./sdk/{package_name}/__init__.py', 'w') as f:
        f.write(content)

def get_api_class_name(dir_name):
    """
    Convert directory name to OpenAPI Generator class name convention
    Example: 'sellers_v1' -> 'SellersApi'
            'catalog_items_v2022_04_01' -> 'CatalogItemsApi'
    """
    # Remove version suffix (e.g., '_v1', '_v2022_04_01')
    base_name = dir_name.split('_v')[0]

    # Convert to PascalCase and append 'Api'
    words = base_name.split('_')
    class_name = ''.join(word.capitalize() for word in words) + 'Api'

    return class_name

if __name__ == '__main__':
    main()
