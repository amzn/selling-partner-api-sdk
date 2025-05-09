# coding: utf-8

"""
    The Selling Partner API for FBA inbound operations.

    The Selling Partner API for Fulfillment By Amazon (FBA) Inbound. The FBA Inbound API enables building inbound workflows to create, manage, and send shipments into Amazon's fulfillment network. The API has interoperability with the Send-to-Amazon user interface.

    The version of the OpenAPI document: 2024-03-20
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


import pprint
import re  # noqa: F401

import six

from spapi.configuration import Configuration


class BoxInput(object):
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
        'content_information_source': 'BoxContentInformationSource',
        'dimensions': 'Dimensions',
        'items': 'List[ItemInput]',
        'quantity': 'int',
        'weight': 'Weight',
    }

    attribute_map = {
        'content_information_source': 'contentInformationSource',
        'dimensions': 'dimensions',
        'items': 'items',
        'quantity': 'quantity',
        'weight': 'weight',
    }

    def __init__(self, content_information_source=None, dimensions=None, items=None, quantity=None, weight=None, _configuration=None):  # noqa: E501
        """BoxInput - a model defined in Swagger"""  # noqa: E501
        if _configuration is None:
            _configuration = Configuration()
        self._configuration = _configuration

        self._content_information_source = None
        self._dimensions = None
        self._items = None
        self._quantity = None
        self._weight = None
        self.discriminator = None

        self.content_information_source = content_information_source
        self.dimensions = dimensions
        if items is not None:
            self.items = items
        self.quantity = quantity
        self.weight = weight

    @property
    def content_information_source(self):
        """Gets the content_information_source of this BoxInput.  # noqa: E501


        :return: The content_information_source of this BoxInput.  # noqa: E501
        :rtype: BoxContentInformationSource
        """
        return self._content_information_source

    @content_information_source.setter
    def content_information_source(self, content_information_source):
        """Sets the content_information_source of this BoxInput.


        :param content_information_source: The content_information_source of this BoxInput.  # noqa: E501
        :type: BoxContentInformationSource
        """
        if self._configuration.client_side_validation and content_information_source is None:
            raise ValueError("Invalid value for `content_information_source`, must not be `None`")  # noqa: E501

        self._content_information_source = content_information_source

    @property
    def dimensions(self):
        """Gets the dimensions of this BoxInput.  # noqa: E501


        :return: The dimensions of this BoxInput.  # noqa: E501
        :rtype: Dimensions
        """
        return self._dimensions

    @dimensions.setter
    def dimensions(self, dimensions):
        """Sets the dimensions of this BoxInput.


        :param dimensions: The dimensions of this BoxInput.  # noqa: E501
        :type: Dimensions
        """
        if self._configuration.client_side_validation and dimensions is None:
            raise ValueError("Invalid value for `dimensions`, must not be `None`")  # noqa: E501

        self._dimensions = dimensions

    @property
    def items(self):
        """Gets the items of this BoxInput.  # noqa: E501

        The items and their quantity in the box. This must be empty if the box `contentInformationSource` is `BARCODE_2D` or `MANUAL_PROCESS`.  # noqa: E501

        :return: The items of this BoxInput.  # noqa: E501
        :rtype: List[ItemInput]
        """
        return self._items

    @items.setter
    def items(self, items):
        """Sets the items of this BoxInput.

        The items and their quantity in the box. This must be empty if the box `contentInformationSource` is `BARCODE_2D` or `MANUAL_PROCESS`.  # noqa: E501

        :param items: The items of this BoxInput.  # noqa: E501
        :type: List[ItemInput]
        """

        self._items = items

    @property
    def quantity(self):
        """Gets the quantity of this BoxInput.  # noqa: E501

        The number of containers where all other properties like weight or dimensions are identical.  # noqa: E501

        :return: The quantity of this BoxInput.  # noqa: E501
        :rtype: int
        """
        return self._quantity

    @quantity.setter
    def quantity(self, quantity):
        """Sets the quantity of this BoxInput.

        The number of containers where all other properties like weight or dimensions are identical.  # noqa: E501

        :param quantity: The quantity of this BoxInput.  # noqa: E501
        :type: int
        """
        if self._configuration.client_side_validation and quantity is None:
            raise ValueError("Invalid value for `quantity`, must not be `None`")  # noqa: E501
        if (self._configuration.client_side_validation and
                quantity is not None and quantity > 10000):  # noqa: E501
            raise ValueError("Invalid value for `quantity`, must be a value less than or equal to `10000`")  # noqa: E501
        if (self._configuration.client_side_validation and
                quantity is not None and quantity < 1):  # noqa: E501
            raise ValueError("Invalid value for `quantity`, must be a value greater than or equal to `1`")  # noqa: E501

        self._quantity = quantity

    @property
    def weight(self):
        """Gets the weight of this BoxInput.  # noqa: E501


        :return: The weight of this BoxInput.  # noqa: E501
        :rtype: Weight
        """
        return self._weight

    @weight.setter
    def weight(self, weight):
        """Sets the weight of this BoxInput.


        :param weight: The weight of this BoxInput.  # noqa: E501
        :type: Weight
        """
        if self._configuration.client_side_validation and weight is None:
            raise ValueError("Invalid value for `weight`, must not be `None`")  # noqa: E501

        self._weight = weight

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
        if issubclass(BoxInput, dict):
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
        if not isinstance(other, BoxInput):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, BoxInput):
            return True

        return self.to_dict() != other.to_dict()
