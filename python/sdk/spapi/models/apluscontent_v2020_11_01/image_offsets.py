# coding: utf-8

"""
    Selling Partner API for A+ Content Management

    Use the A+ Content API to build applications that help selling partners add rich marketing content to their Amazon product detail pages. Selling partners can use A+ content to share their brand and product story, which helps buyers make informed purchasing decisions. Selling partners use content modules to add images and text.

    The version of the OpenAPI document: 2020-11-01
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


import pprint
import re  # noqa: F401

import six

from spapi.configuration import Configuration


class ImageOffsets(object):
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
        'x': 'IntegerWithUnits',
        'y': 'IntegerWithUnits',
    }

    attribute_map = {
        'x': 'x',
        'y': 'y',
    }

    def __init__(self, x=None, y=None, _configuration=None):  # noqa: E501
        """ImageOffsets - a model defined in Swagger"""  # noqa: E501
        if _configuration is None:
            _configuration = Configuration()
        self._configuration = _configuration

        self._x = None
        self._y = None
        self.discriminator = None

        self.x = x
        self.y = y

    @property
    def x(self):
        """Gets the x of this ImageOffsets.  # noqa: E501


        :return: The x of this ImageOffsets.  # noqa: E501
        :rtype: IntegerWithUnits
        """
        return self._x

    @x.setter
    def x(self, x):
        """Sets the x of this ImageOffsets.


        :param x: The x of this ImageOffsets.  # noqa: E501
        :type: IntegerWithUnits
        """
        if self._configuration.client_side_validation and x is None:
            raise ValueError("Invalid value for `x`, must not be `None`")  # noqa: E501

        self._x = x

    @property
    def y(self):
        """Gets the y of this ImageOffsets.  # noqa: E501


        :return: The y of this ImageOffsets.  # noqa: E501
        :rtype: IntegerWithUnits
        """
        return self._y

    @y.setter
    def y(self, y):
        """Sets the y of this ImageOffsets.


        :param y: The y of this ImageOffsets.  # noqa: E501
        :type: IntegerWithUnits
        """
        if self._configuration.client_side_validation and y is None:
            raise ValueError("Invalid value for `y`, must not be `None`")  # noqa: E501

        self._y = y

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
        if issubclass(ImageOffsets, dict):
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
        if not isinstance(other, ImageOffsets):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, ImageOffsets):
            return True

        return self.to_dict() != other.to_dict()
