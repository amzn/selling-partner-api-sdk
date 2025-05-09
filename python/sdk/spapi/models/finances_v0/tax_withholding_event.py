# coding: utf-8

"""
    Selling Partner API for Finances

    The Selling Partner API for Finances helps you obtain financial information relevant to a seller's business. You can obtain financial events for a given order, financial event group, or date range without having to wait until a statement period closes. You can also obtain financial event groups for a given date range.

    The version of the OpenAPI document: v0
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


import pprint
import re  # noqa: F401

import six

from spapi.configuration import Configuration


class TaxWithholdingEvent(object):
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
        'posted_date': 'datetime',
        'base_amount': 'Currency',
        'withheld_amount': 'Currency',
        'tax_withholding_period': 'TaxWithholdingPeriod',
    }

    attribute_map = {
        'posted_date': 'PostedDate',
        'base_amount': 'BaseAmount',
        'withheld_amount': 'WithheldAmount',
        'tax_withholding_period': 'TaxWithholdingPeriod',
    }

    def __init__(self, posted_date=None, base_amount=None, withheld_amount=None, tax_withholding_period=None, _configuration=None):  # noqa: E501
        """TaxWithholdingEvent - a model defined in Swagger"""  # noqa: E501
        if _configuration is None:
            _configuration = Configuration()
        self._configuration = _configuration

        self._posted_date = None
        self._base_amount = None
        self._withheld_amount = None
        self._tax_withholding_period = None
        self.discriminator = None

        if posted_date is not None:
            self.posted_date = posted_date
        if base_amount is not None:
            self.base_amount = base_amount
        if withheld_amount is not None:
            self.withheld_amount = withheld_amount
        if tax_withholding_period is not None:
            self.tax_withholding_period = tax_withholding_period

    @property
    def posted_date(self):
        """Gets the posted_date of this TaxWithholdingEvent.  # noqa: E501

        Fields with a schema type of date are in ISO 8601 date time format (for example GroupBeginDate).  # noqa: E501

        :return: The posted_date of this TaxWithholdingEvent.  # noqa: E501
        :rtype: datetime
        """
        return self._posted_date

    @posted_date.setter
    def posted_date(self, posted_date):
        """Sets the posted_date of this TaxWithholdingEvent.

        Fields with a schema type of date are in ISO 8601 date time format (for example GroupBeginDate).  # noqa: E501

        :param posted_date: The posted_date of this TaxWithholdingEvent.  # noqa: E501
        :type: datetime
        """

        self._posted_date = posted_date

    @property
    def base_amount(self):
        """Gets the base_amount of this TaxWithholdingEvent.  # noqa: E501


        :return: The base_amount of this TaxWithholdingEvent.  # noqa: E501
        :rtype: Currency
        """
        return self._base_amount

    @base_amount.setter
    def base_amount(self, base_amount):
        """Sets the base_amount of this TaxWithholdingEvent.


        :param base_amount: The base_amount of this TaxWithholdingEvent.  # noqa: E501
        :type: Currency
        """

        self._base_amount = base_amount

    @property
    def withheld_amount(self):
        """Gets the withheld_amount of this TaxWithholdingEvent.  # noqa: E501


        :return: The withheld_amount of this TaxWithholdingEvent.  # noqa: E501
        :rtype: Currency
        """
        return self._withheld_amount

    @withheld_amount.setter
    def withheld_amount(self, withheld_amount):
        """Sets the withheld_amount of this TaxWithholdingEvent.


        :param withheld_amount: The withheld_amount of this TaxWithholdingEvent.  # noqa: E501
        :type: Currency
        """

        self._withheld_amount = withheld_amount

    @property
    def tax_withholding_period(self):
        """Gets the tax_withholding_period of this TaxWithholdingEvent.  # noqa: E501


        :return: The tax_withholding_period of this TaxWithholdingEvent.  # noqa: E501
        :rtype: TaxWithholdingPeriod
        """
        return self._tax_withholding_period

    @tax_withholding_period.setter
    def tax_withholding_period(self, tax_withholding_period):
        """Sets the tax_withholding_period of this TaxWithholdingEvent.


        :param tax_withholding_period: The tax_withholding_period of this TaxWithholdingEvent.  # noqa: E501
        :type: TaxWithholdingPeriod
        """

        self._tax_withholding_period = tax_withholding_period

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
        if issubclass(TaxWithholdingEvent, dict):
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
        if not isinstance(other, TaxWithholdingEvent):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, TaxWithholdingEvent):
            return True

        return self.to_dict() != other.to_dict()
