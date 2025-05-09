# coding: utf-8

"""
    Selling Partner API for Easy Ship

    Use the Selling Partner API for Easy Ship to build applications for sellers to manage and ship Amazon Easy Ship orders. With this API, you can get available time slots, schedule and reschedule Easy Ship orders, and print shipping labels, invoices, and warranties. To review the differences in Easy Ship operations by marketplace, refer to [Marketplace support](https://developer-docs.amazon.com/sp-api/docs/easyship-api-v2022-03-23-use-case-guide#marketplace-support).

    The version of the OpenAPI document: 2022-03-23
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


import pprint
import re  # noqa: F401

import six

from spapi.configuration import Configuration


class Item(object):
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
        'order_item_id': 'str',
        'order_item_serial_numbers': 'List[str]',
    }

    attribute_map = {
        'order_item_id': 'orderItemId',
        'order_item_serial_numbers': 'orderItemSerialNumbers',
    }

    def __init__(self, order_item_id=None, order_item_serial_numbers=None, _configuration=None):  # noqa: E501
        """Item - a model defined in Swagger"""  # noqa: E501
        if _configuration is None:
            _configuration = Configuration()
        self._configuration = _configuration

        self._order_item_id = None
        self._order_item_serial_numbers = None
        self.discriminator = None

        if order_item_id is not None:
            self.order_item_id = order_item_id
        if order_item_serial_numbers is not None:
            self.order_item_serial_numbers = order_item_serial_numbers

    @property
    def order_item_id(self):
        """Gets the order_item_id of this Item.  # noqa: E501

        The Amazon-defined order item identifier.  # noqa: E501

        :return: The order_item_id of this Item.  # noqa: E501
        :rtype: str
        """
        return self._order_item_id

    @order_item_id.setter
    def order_item_id(self, order_item_id):
        """Sets the order_item_id of this Item.

        The Amazon-defined order item identifier.  # noqa: E501

        :param order_item_id: The order_item_id of this Item.  # noqa: E501
        :type: str
        """
        if (self._configuration.client_side_validation and
                order_item_id is not None and len(order_item_id) > 255):
            raise ValueError("Invalid value for `order_item_id`, length must be less than or equal to `255`")  # noqa: E501

        self._order_item_id = order_item_id

    @property
    def order_item_serial_numbers(self):
        """Gets the order_item_serial_numbers of this Item.  # noqa: E501

        A list of serial numbers for the items associated with the `OrderItemId` value.  # noqa: E501

        :return: The order_item_serial_numbers of this Item.  # noqa: E501
        :rtype: List[str]
        """
        return self._order_item_serial_numbers

    @order_item_serial_numbers.setter
    def order_item_serial_numbers(self, order_item_serial_numbers):
        """Sets the order_item_serial_numbers of this Item.

        A list of serial numbers for the items associated with the `OrderItemId` value.  # noqa: E501

        :param order_item_serial_numbers: The order_item_serial_numbers of this Item.  # noqa: E501
        :type: List[str]
        """
        if (self._configuration.client_side_validation and
                order_item_serial_numbers is not None and len(order_item_serial_numbers) > 100):
            raise ValueError("Invalid value for `order_item_serial_numbers`, number of items must be less than or equal to `100`")  # noqa: E501

        self._order_item_serial_numbers = order_item_serial_numbers

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
        if issubclass(Item, dict):
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
        if not isinstance(other, Item):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, Item):
            return True

        return self.to_dict() != other.to_dict()
