# coding: utf-8

"""
    Selling Partner APIs for Fulfillment Outbound

    The Selling Partner API for Fulfillment Outbound lets you create applications that help a seller fulfill Multi-Channel Fulfillment orders using their inventory in Amazon's fulfillment network. You can get information on both potential and existing fulfillment orders.

    The version of the OpenAPI document: 2020-07-01
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


import pprint
import re  # noqa: F401

import six

from spapi.configuration import Configuration


class DeliveryPreferences(object):
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
        'delivery_instructions': 'str',
        'drop_off_location': 'DropOffLocation',
    }

    attribute_map = {
        'delivery_instructions': 'deliveryInstructions',
        'drop_off_location': 'dropOffLocation',
    }

    def __init__(self, delivery_instructions=None, drop_off_location=None, _configuration=None):  # noqa: E501
        """DeliveryPreferences - a model defined in Swagger"""  # noqa: E501
        if _configuration is None:
            _configuration = Configuration()
        self._configuration = _configuration

        self._delivery_instructions = None
        self._drop_off_location = None
        self.discriminator = None

        if delivery_instructions is not None:
            self.delivery_instructions = delivery_instructions
        if drop_off_location is not None:
            self.drop_off_location = drop_off_location

    @property
    def delivery_instructions(self):
        """Gets the delivery_instructions of this DeliveryPreferences.  # noqa: E501

        Additional delivery instructions. For example, this could be instructions on how to enter a building, nearby landmark or navigation instructions, 'Beware of dogs', etc.  # noqa: E501

        :return: The delivery_instructions of this DeliveryPreferences.  # noqa: E501
        :rtype: str
        """
        return self._delivery_instructions

    @delivery_instructions.setter
    def delivery_instructions(self, delivery_instructions):
        """Sets the delivery_instructions of this DeliveryPreferences.

        Additional delivery instructions. For example, this could be instructions on how to enter a building, nearby landmark or navigation instructions, 'Beware of dogs', etc.  # noqa: E501

        :param delivery_instructions: The delivery_instructions of this DeliveryPreferences.  # noqa: E501
        :type: str
        """
        if (self._configuration.client_side_validation and
                delivery_instructions is not None and len(delivery_instructions) > 250):
            raise ValueError("Invalid value for `delivery_instructions`, length must be less than or equal to `250`")  # noqa: E501

        self._delivery_instructions = delivery_instructions

    @property
    def drop_off_location(self):
        """Gets the drop_off_location of this DeliveryPreferences.  # noqa: E501


        :return: The drop_off_location of this DeliveryPreferences.  # noqa: E501
        :rtype: DropOffLocation
        """
        return self._drop_off_location

    @drop_off_location.setter
    def drop_off_location(self, drop_off_location):
        """Sets the drop_off_location of this DeliveryPreferences.


        :param drop_off_location: The drop_off_location of this DeliveryPreferences.  # noqa: E501
        :type: DropOffLocation
        """

        self._drop_off_location = drop_off_location

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
        if issubclass(DeliveryPreferences, dict):
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
        if not isinstance(other, DeliveryPreferences):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, DeliveryPreferences):
            return True

        return self.to_dict() != other.to_dict()
