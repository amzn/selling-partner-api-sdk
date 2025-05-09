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


class StandardThreeImageTextModule(object):
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
        'headline': 'TextComponent',
        'block1': 'StandardImageTextBlock',
        'block2': 'StandardImageTextBlock',
        'block3': 'StandardImageTextBlock',
    }

    attribute_map = {
        'headline': 'headline',
        'block1': 'block1',
        'block2': 'block2',
        'block3': 'block3',
    }

    def __init__(self, headline=None, block1=None, block2=None, block3=None, _configuration=None):  # noqa: E501
        """StandardThreeImageTextModule - a model defined in Swagger"""  # noqa: E501
        if _configuration is None:
            _configuration = Configuration()
        self._configuration = _configuration

        self._headline = None
        self._block1 = None
        self._block2 = None
        self._block3 = None
        self.discriminator = None

        if headline is not None:
            self.headline = headline
        if block1 is not None:
            self.block1 = block1
        if block2 is not None:
            self.block2 = block2
        if block3 is not None:
            self.block3 = block3

    @property
    def headline(self):
        """Gets the headline of this StandardThreeImageTextModule.  # noqa: E501


        :return: The headline of this StandardThreeImageTextModule.  # noqa: E501
        :rtype: TextComponent
        """
        return self._headline

    @headline.setter
    def headline(self, headline):
        """Sets the headline of this StandardThreeImageTextModule.


        :param headline: The headline of this StandardThreeImageTextModule.  # noqa: E501
        :type: TextComponent
        """

        self._headline = headline

    @property
    def block1(self):
        """Gets the block1 of this StandardThreeImageTextModule.  # noqa: E501


        :return: The block1 of this StandardThreeImageTextModule.  # noqa: E501
        :rtype: StandardImageTextBlock
        """
        return self._block1

    @block1.setter
    def block1(self, block1):
        """Sets the block1 of this StandardThreeImageTextModule.


        :param block1: The block1 of this StandardThreeImageTextModule.  # noqa: E501
        :type: StandardImageTextBlock
        """

        self._block1 = block1

    @property
    def block2(self):
        """Gets the block2 of this StandardThreeImageTextModule.  # noqa: E501


        :return: The block2 of this StandardThreeImageTextModule.  # noqa: E501
        :rtype: StandardImageTextBlock
        """
        return self._block2

    @block2.setter
    def block2(self, block2):
        """Sets the block2 of this StandardThreeImageTextModule.


        :param block2: The block2 of this StandardThreeImageTextModule.  # noqa: E501
        :type: StandardImageTextBlock
        """

        self._block2 = block2

    @property
    def block3(self):
        """Gets the block3 of this StandardThreeImageTextModule.  # noqa: E501


        :return: The block3 of this StandardThreeImageTextModule.  # noqa: E501
        :rtype: StandardImageTextBlock
        """
        return self._block3

    @block3.setter
    def block3(self, block3):
        """Sets the block3 of this StandardThreeImageTextModule.


        :param block3: The block3 of this StandardThreeImageTextModule.  # noqa: E501
        :type: StandardImageTextBlock
        """

        self._block3 = block3

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
        if issubclass(StandardThreeImageTextModule, dict):
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
        if not isinstance(other, StandardThreeImageTextModule):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, StandardThreeImageTextModule):
            return True

        return self.to_dict() != other.to_dict()
