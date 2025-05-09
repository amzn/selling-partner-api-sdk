# coding: utf-8

"""
    The Selling Partner API for Automotive.

    The Selling Partner API for Automotive provides programmatic access to information needed by selling partners to provide compatibility information about their listed products.

    The version of the OpenAPI document: 2024-11-01
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


import pprint
import re  # noqa: F401

import six

from spapi.configuration import Configuration


class EngineOutput(object):
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
        'value': 'float',
        'unit': 'EngineOutputUnit',
    }

    attribute_map = {
        'value': 'value',
        'unit': 'unit',
    }

    def __init__(self, value=None, unit=None, _configuration=None):  # noqa: E501
        """EngineOutput - a model defined in Swagger"""  # noqa: E501
        if _configuration is None:
            _configuration = Configuration()
        self._configuration = _configuration

        self._value = None
        self._unit = None
        self.discriminator = None

        self.value = value
        self.unit = unit

    @property
    def value(self):
        """Gets the value of this EngineOutput.  # noqa: E501

        Engine power value in specified unit.  # noqa: E501

        :return: The value of this EngineOutput.  # noqa: E501
        :rtype: float
        """
        return self._value

    @value.setter
    def value(self, value):
        """Sets the value of this EngineOutput.

        Engine power value in specified unit.  # noqa: E501

        :param value: The value of this EngineOutput.  # noqa: E501
        :type: float
        """
        if self._configuration.client_side_validation and value is None:
            raise ValueError("Invalid value for `value`, must not be `None`")  # noqa: E501

        self._value = value

    @property
    def unit(self):
        """Gets the unit of this EngineOutput.  # noqa: E501


        :return: The unit of this EngineOutput.  # noqa: E501
        :rtype: EngineOutputUnit
        """
        return self._unit

    @unit.setter
    def unit(self, unit):
        """Sets the unit of this EngineOutput.


        :param unit: The unit of this EngineOutput.  # noqa: E501
        :type: EngineOutputUnit
        """
        if self._configuration.client_side_validation and unit is None:
            raise ValueError("Invalid value for `unit`, must not be `None`")  # noqa: E501

        self._unit = unit

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
        if issubclass(EngineOutput, dict):
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
        if not isinstance(other, EngineOutput):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, EngineOutput):
            return True

        return self.to_dict() != other.to_dict()
