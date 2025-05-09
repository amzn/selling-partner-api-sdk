# coding: utf-8

"""
    Selling Partner API for Services

    With the Services API, you can build applications that help service providers get and modify their service orders and manage their resources.

    The version of the OpenAPI document: v1
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


import pprint
import re  # noqa: F401

import six

from spapi.configuration import Configuration


class Seller(object):
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
        'seller_id': 'str',
    }

    attribute_map = {
        'seller_id': 'sellerId',
    }

    def __init__(self, seller_id=None, _configuration=None):  # noqa: E501
        """Seller - a model defined in Swagger"""  # noqa: E501
        if _configuration is None:
            _configuration = Configuration()
        self._configuration = _configuration

        self._seller_id = None
        self.discriminator = None

        if seller_id is not None:
            self.seller_id = seller_id

    @property
    def seller_id(self):
        """Gets the seller_id of this Seller.  # noqa: E501

        The identifier of the seller of the service job.  # noqa: E501

        :return: The seller_id of this Seller.  # noqa: E501
        :rtype: str
        """
        return self._seller_id

    @seller_id.setter
    def seller_id(self, seller_id):
        """Sets the seller_id of this Seller.

        The identifier of the seller of the service job.  # noqa: E501

        :param seller_id: The seller_id of this Seller.  # noqa: E501
        :type: str
        """
        if (self._configuration.client_side_validation and
                seller_id is not None and not re.search(r'^[A-Z0-9]*$', seller_id)):  # noqa: E501
            raise ValueError(r"Invalid value for `seller_id`, must be a follow pattern or equal to `/^[A-Z0-9]*$/`")  # noqa: E501

        self._seller_id = seller_id

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
        if issubclass(Seller, dict):
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
        if not isinstance(other, Seller):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, Seller):
            return True

        return self.to_dict() != other.to_dict()
