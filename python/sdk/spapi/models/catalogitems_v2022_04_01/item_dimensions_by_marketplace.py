# coding: utf-8

"""
    Selling Partner API for Catalog Items

    Use the Selling Partner API for Catalog Items to retrieve information about items in the Amazon catalog.  For more information, refer to the [Catalog Items API Use Case Guide](https://developer-docs.amazon.com/sp-api/docs/:catalog-items-api-v2022-04-01-use-case-guide).

    The version of the OpenAPI document: 2022-04-01
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


import pprint
import re  # noqa: F401

import six

from spapi.configuration import Configuration


class ItemDimensionsByMarketplace(object):
    """NOTE: This class is auto generated by the swagger code generator program.

    Do not edit the class manually.
    """

    """
    Attributes:
      swagger_types (dict): The key is attribute name
                            and the value is attribute type.
      attribute_map (dict): The key is attribute name
                            and the value is json key in definition.
    """
    swagger_types = {
        'marketplace_id': 'str',
        'item': 'Dimensions',
        'package': 'Dimensions',
    }

    attribute_map = {
        'marketplace_id': 'marketplaceId',
        'item': 'item',
        'package': 'package',
    }

    def __init__(self, marketplace_id=None, item=None, package=None, _configuration=None):  # noqa: E501
        """ItemDimensionsByMarketplace - a model defined in Swagger"""  # noqa: E501
        if _configuration is None:
            _configuration = Configuration()
        self._configuration = _configuration

        self._marketplace_id = None
        self._item = None
        self._package = None
        self.discriminator = None

        self.marketplace_id = marketplace_id
        if item is not None:
            self.item = item
        if package is not None:
            self.package = package

    @property
    def marketplace_id(self):
        """Gets the marketplace_id of this ItemDimensionsByMarketplace.  # noqa: E501

        Amazon marketplace identifier. To find the ID for your marketplace, refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids).  # noqa: E501

        :return: The marketplace_id of this ItemDimensionsByMarketplace.  # noqa: E501
        :rtype: str
        """
        return self._marketplace_id

    @marketplace_id.setter
    def marketplace_id(self, marketplace_id):
        """Sets the marketplace_id of this ItemDimensionsByMarketplace.

        Amazon marketplace identifier. To find the ID for your marketplace, refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids).  # noqa: E501

        :param marketplace_id: The marketplace_id of this ItemDimensionsByMarketplace.  # noqa: E501
        :type: str
        """
        if self._configuration.client_side_validation and marketplace_id is None:
            raise ValueError("Invalid value for `marketplace_id`, must not be `None`")  # noqa: E501

        self._marketplace_id = marketplace_id

    @property
    def item(self):
        """Gets the item of this ItemDimensionsByMarketplace.  # noqa: E501


        :return: The item of this ItemDimensionsByMarketplace.  # noqa: E501
        :rtype: Dimensions
        """
        return self._item

    @item.setter
    def item(self, item):
        """Sets the item of this ItemDimensionsByMarketplace.


        :param item: The item of this ItemDimensionsByMarketplace.  # noqa: E501
        :type: Dimensions
        """

        self._item = item

    @property
    def package(self):
        """Gets the package of this ItemDimensionsByMarketplace.  # noqa: E501


        :return: The package of this ItemDimensionsByMarketplace.  # noqa: E501
        :rtype: Dimensions
        """
        return self._package

    @package.setter
    def package(self, package):
        """Sets the package of this ItemDimensionsByMarketplace.


        :param package: The package of this ItemDimensionsByMarketplace.  # noqa: E501
        :type: Dimensions
        """

        self._package = package

    def to_dict(self):
        """Returns the model properties as a dict"""
        result = {}

        for attr, _ in six.iteritems(self.swagger_types):
            value = getattr(self, attr)
            if isinstance(value, list):
                result[attr] = list(map(
                    lambda x: x.to_dict() if hasattr(x, "to_dict") else x,
                    value
                ))
            elif hasattr(value, "to_dict"):
                result[attr] = value.to_dict()
            elif isinstance(value, dict):
                result[attr] = dict(map(
                    lambda item: (item[0], item[1].to_dict())
                    if hasattr(item[1], "to_dict") else item,
                    value.items()
                ))
            else:
                result[attr] = value
        if issubclass(ItemDimensionsByMarketplace, dict):
            for key, value in self.items():
                result[key] = value

        return result

    def to_str(self):
        """Returns the string representation of the model"""
        return pprint.pformat(self.to_dict())

    def __repr__(self):
        """For `print` and `pprint`"""
        return self.to_str()

    def __eq__(self, other):
        """Returns true if both objects are equal"""
        if not isinstance(other, ItemDimensionsByMarketplace):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, ItemDimensionsByMarketplace):
            return True

        return self.to_dict() != other.to_dict()
