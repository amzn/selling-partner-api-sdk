# coding: utf-8

"""
    The Selling Partner API for Finances

    The Selling Partner API for Finances helps you obtain financial information relevant to a seller's business. You can obtain financial events for a given order or date range without having to wait until a statement period closes.

    The version of the OpenAPI document: 2024-06-19
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


import pprint
import re  # noqa: F401

import six

from spapi.configuration import Configuration


class MarketplaceDetails(object):
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
        'marketplace_name': 'str',
    }

    attribute_map = {
        'marketplace_id': 'marketplaceId',
        'marketplace_name': 'marketplaceName',
    }

    def __init__(self, marketplace_id=None, marketplace_name=None, _configuration=None):  # noqa: E501
        """MarketplaceDetails - a model defined in Swagger"""  # noqa: E501
        if _configuration is None:
            _configuration = Configuration()
        self._configuration = _configuration

        self._marketplace_id = None
        self._marketplace_name = None
        self.discriminator = None

        if marketplace_id is not None:
            self.marketplace_id = marketplace_id
        if marketplace_name is not None:
            self.marketplace_name = marketplace_name

    @property
    def marketplace_id(self):
        """Gets the marketplace_id of this MarketplaceDetails.  # noqa: E501

        The identifier of the marketplace where the transaction occurred. The marketplace ID is the globally unique identifier of a marketplace. To find the ID for your marketplace, refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids).  # noqa: E501

        :return: The marketplace_id of this MarketplaceDetails.  # noqa: E501
        :rtype: str
        """
        return self._marketplace_id

    @marketplace_id.setter
    def marketplace_id(self, marketplace_id):
        """Sets the marketplace_id of this MarketplaceDetails.

        The identifier of the marketplace where the transaction occurred. The marketplace ID is the globally unique identifier of a marketplace. To find the ID for your marketplace, refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids).  # noqa: E501

        :param marketplace_id: The marketplace_id of this MarketplaceDetails.  # noqa: E501
        :type: str
        """

        self._marketplace_id = marketplace_id

    @property
    def marketplace_name(self):
        """Gets the marketplace_name of this MarketplaceDetails.  # noqa: E501

        The name of the marketplace where the transaction occurred.   Example: 'Amazon.com','Amazon.in'  # noqa: E501

        :return: The marketplace_name of this MarketplaceDetails.  # noqa: E501
        :rtype: str
        """
        return self._marketplace_name

    @marketplace_name.setter
    def marketplace_name(self, marketplace_name):
        """Sets the marketplace_name of this MarketplaceDetails.

        The name of the marketplace where the transaction occurred.   Example: 'Amazon.com','Amazon.in'  # noqa: E501

        :param marketplace_name: The marketplace_name of this MarketplaceDetails.  # noqa: E501
        :type: str
        """

        self._marketplace_name = marketplace_name

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
        if issubclass(MarketplaceDetails, dict):
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
        if not isinstance(other, MarketplaceDetails):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, MarketplaceDetails):
            return True

        return self.to_dict() != other.to_dict()
