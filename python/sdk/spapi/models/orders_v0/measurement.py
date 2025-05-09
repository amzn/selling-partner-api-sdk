# coding: utf-8

"""
    Selling Partner API for Orders

    Use the Orders Selling Partner API to programmatically retrieve order information. With this API, you can develop fast, flexible, and custom applications to manage order synchronization, perform order research, and create demand-based decision support tools.   _Note:_ For the JP, AU, and SG marketplaces, the Orders API supports orders from 2016 onward. For all other marketplaces, the Orders API supports orders for the last two years (orders older than this don't show up in the response).

    The version of the OpenAPI document: v0
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


import pprint
import re  # noqa: F401

import six

from spapi.configuration import Configuration


class Measurement(object):
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
        'unit': 'str',
        'value': 'float',
    }

    attribute_map = {
        'unit': 'Unit',
        'value': 'Value',
    }

    def __init__(self, unit=None, value=None, _configuration=None):  # noqa: E501
        """Measurement - a model defined in Swagger"""  # noqa: E501
        if _configuration is None:
            _configuration = Configuration()
        self._configuration = _configuration

        self._unit = None
        self._value = None
        self.discriminator = None

        self.unit = unit
        self.value = value

    @property
    def unit(self):
        """Gets the unit of this Measurement.  # noqa: E501

        The unit of measure.  # noqa: E501

        :return: The unit of this Measurement.  # noqa: E501
        :rtype: str
        """
        return self._unit

    @unit.setter
    def unit(self, unit):
        """Sets the unit of this Measurement.

        The unit of measure.  # noqa: E501

        :param unit: The unit of this Measurement.  # noqa: E501
        :type: str
        """
        if self._configuration.client_side_validation and unit is None:
            raise ValueError("Invalid value for `unit`, must not be `None`")  # noqa: E501
        allowed_values = ["OUNCES", "POUNDS", "KILOGRAMS", "GRAMS", "MILLIGRAMS", "INCHES", "FEET", "METERS", "CENTIMETERS", "MILLIMETERS", "SQUARE_METERS", "SQUARE_CENTIMETERS", "SQUARE_FEET", "SQUARE_INCHES", "GALLONS", "PINTS", "QUARTS", "FLUID_OUNCES", "LITERS", "CUBIC_METERS", "CUBIC_FEET", "CUBIC_INCHES", "CUBIC_CENTIMETERS", "COUNT"]  # noqa: E501
        if (self._configuration.client_side_validation and
                unit not in allowed_values):
            raise ValueError(
                "Invalid value for `unit` ({0}), must be one of {1}"  # noqa: E501
                .format(unit, allowed_values)
            )

        self._unit = unit

    @property
    def value(self):
        """Gets the value of this Measurement.  # noqa: E501

        The measurement value.  # noqa: E501

        :return: The value of this Measurement.  # noqa: E501
        :rtype: float
        """
        return self._value

    @value.setter
    def value(self, value):
        """Sets the value of this Measurement.

        The measurement value.  # noqa: E501

        :param value: The value of this Measurement.  # noqa: E501
        :type: float
        """
        if self._configuration.client_side_validation and value is None:
            raise ValueError("Invalid value for `value`, must not be `None`")  # noqa: E501

        self._value = value

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
        if issubclass(Measurement, dict):
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
        if not isinstance(other, Measurement):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, Measurement):
            return True

        return self.to_dict() != other.to_dict()
