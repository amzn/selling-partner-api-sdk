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


class DateRange(object):
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
        'earliest': 'datetime',
        'latest': 'datetime',
    }

    attribute_map = {
        'earliest': 'earliest',
        'latest': 'latest',
    }

    def __init__(self, earliest=None, latest=None, _configuration=None):  # noqa: E501
        """DateRange - a model defined in Swagger"""  # noqa: E501
        if _configuration is None:
            _configuration = Configuration()
        self._configuration = _configuration

        self._earliest = None
        self._latest = None
        self.discriminator = None

        self.earliest = earliest
        self.latest = latest

    @property
    def earliest(self):
        """Gets the earliest of this DateRange.  # noqa: E501

        Date timestamp  # noqa: E501

        :return: The earliest of this DateRange.  # noqa: E501
        :rtype: datetime
        """
        return self._earliest

    @earliest.setter
    def earliest(self, earliest):
        """Sets the earliest of this DateRange.

        Date timestamp  # noqa: E501

        :param earliest: The earliest of this DateRange.  # noqa: E501
        :type: datetime
        """
        if self._configuration.client_side_validation and earliest is None:
            raise ValueError("Invalid value for `earliest`, must not be `None`")  # noqa: E501

        self._earliest = earliest

    @property
    def latest(self):
        """Gets the latest of this DateRange.  # noqa: E501

        Date timestamp  # noqa: E501

        :return: The latest of this DateRange.  # noqa: E501
        :rtype: datetime
        """
        return self._latest

    @latest.setter
    def latest(self, latest):
        """Sets the latest of this DateRange.

        Date timestamp  # noqa: E501

        :param latest: The latest of this DateRange.  # noqa: E501
        :type: datetime
        """
        if self._configuration.client_side_validation and latest is None:
            raise ValueError("Invalid value for `latest`, must not be `None`")  # noqa: E501

        self._latest = latest

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
        if issubclass(DateRange, dict):
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
        if not isinstance(other, DateRange):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, DateRange):
            return True

        return self.to_dict() != other.to_dict()
