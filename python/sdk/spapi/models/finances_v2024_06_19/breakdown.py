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


class Breakdown(object):
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
        'breakdown_type': 'str',
        'breakdown_amount': 'Currency',
        'breakdowns': 'List[Breakdown]',
    }

    attribute_map = {
        'breakdown_type': 'breakdownType',
        'breakdown_amount': 'breakdownAmount',
        'breakdowns': 'breakdowns',
    }

    def __init__(self, breakdown_type=None, breakdown_amount=None, breakdowns=None, _configuration=None):  # noqa: E501
        """Breakdown - a model defined in Swagger"""  # noqa: E501
        if _configuration is None:
            _configuration = Configuration()
        self._configuration = _configuration

        self._breakdown_type = None
        self._breakdown_amount = None
        self._breakdowns = None
        self.discriminator = None

        if breakdown_type is not None:
            self.breakdown_type = breakdown_type
        if breakdown_amount is not None:
            self.breakdown_amount = breakdown_amount
        if breakdowns is not None:
            self.breakdowns = breakdowns

    @property
    def breakdown_type(self):
        """Gets the breakdown_type of this Breakdown.  # noqa: E501

        The type of charge.  # noqa: E501

        :return: The breakdown_type of this Breakdown.  # noqa: E501
        :rtype: str
        """
        return self._breakdown_type

    @breakdown_type.setter
    def breakdown_type(self, breakdown_type):
        """Sets the breakdown_type of this Breakdown.

        The type of charge.  # noqa: E501

        :param breakdown_type: The breakdown_type of this Breakdown.  # noqa: E501
        :type: str
        """

        self._breakdown_type = breakdown_type

    @property
    def breakdown_amount(self):
        """Gets the breakdown_amount of this Breakdown.  # noqa: E501


        :return: The breakdown_amount of this Breakdown.  # noqa: E501
        :rtype: Currency
        """
        return self._breakdown_amount

    @breakdown_amount.setter
    def breakdown_amount(self, breakdown_amount):
        """Sets the breakdown_amount of this Breakdown.


        :param breakdown_amount: The breakdown_amount of this Breakdown.  # noqa: E501
        :type: Currency
        """

        self._breakdown_amount = breakdown_amount

    @property
    def breakdowns(self):
        """Gets the breakdowns of this Breakdown.  # noqa: E501

        A list of breakdowns that detail how the total amount is calculated for the transaction.  # noqa: E501

        :return: The breakdowns of this Breakdown.  # noqa: E501
        :rtype: List[Breakdown]
        """
        return self._breakdowns

    @breakdowns.setter
    def breakdowns(self, breakdowns):
        """Sets the breakdowns of this Breakdown.

        A list of breakdowns that detail how the total amount is calculated for the transaction.  # noqa: E501

        :param breakdowns: The breakdowns of this Breakdown.  # noqa: E501
        :type: List[Breakdown]
        """

        self._breakdowns = breakdowns

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
        if issubclass(Breakdown, dict):
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
        if not isinstance(other, Breakdown):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, Breakdown):
            return True

        return self.to_dict() != other.to_dict()
