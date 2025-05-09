# coding: utf-8

"""
    The Selling Partner API for Amazon Seller Wallet Open Banking API

    The Selling Partner API for Seller Wallet (Seller Wallet API) provides financial information that is relevant to a seller's Seller Wallet account. You can obtain financial events, balances, and transfer schedules for Seller Wallet accounts. You can also schedule and initiate transactions.

    The version of the OpenAPI document: 2024-03-01
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


import pprint
import re  # noqa: F401

import six

from spapi.configuration import Configuration


class TransferScheduleFailures(object):
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
        'transfer_schedule_failure_date': 'datetime',
        'transfer_schedule_failure_reason': 'str',
    }

    attribute_map = {
        'transfer_schedule_failure_date': 'transferScheduleFailureDate',
        'transfer_schedule_failure_reason': 'transferScheduleFailureReason',
    }

    def __init__(self, transfer_schedule_failure_date=None, transfer_schedule_failure_reason=None, _configuration=None):  # noqa: E501
        """TransferScheduleFailures - a model defined in Swagger"""  # noqa: E501
        if _configuration is None:
            _configuration = Configuration()
        self._configuration = _configuration

        self._transfer_schedule_failure_date = None
        self._transfer_schedule_failure_reason = None
        self.discriminator = None

        self.transfer_schedule_failure_date = transfer_schedule_failure_date
        self.transfer_schedule_failure_reason = transfer_schedule_failure_reason

    @property
    def transfer_schedule_failure_date(self):
        """Gets the transfer_schedule_failure_date of this TransferScheduleFailures.  # noqa: E501

        The transfer schedule failure date.  # noqa: E501

        :return: The transfer_schedule_failure_date of this TransferScheduleFailures.  # noqa: E501
        :rtype: datetime
        """
        return self._transfer_schedule_failure_date

    @transfer_schedule_failure_date.setter
    def transfer_schedule_failure_date(self, transfer_schedule_failure_date):
        """Sets the transfer_schedule_failure_date of this TransferScheduleFailures.

        The transfer schedule failure date.  # noqa: E501

        :param transfer_schedule_failure_date: The transfer_schedule_failure_date of this TransferScheduleFailures.  # noqa: E501
        :type: datetime
        """
        if self._configuration.client_side_validation and transfer_schedule_failure_date is None:
            raise ValueError("Invalid value for `transfer_schedule_failure_date`, must not be `None`")  # noqa: E501

        self._transfer_schedule_failure_date = transfer_schedule_failure_date

    @property
    def transfer_schedule_failure_reason(self):
        """Gets the transfer_schedule_failure_reason of this TransferScheduleFailures.  # noqa: E501

        The reason listed for the failure of the transfer schedule.  # noqa: E501

        :return: The transfer_schedule_failure_reason of this TransferScheduleFailures.  # noqa: E501
        :rtype: str
        """
        return self._transfer_schedule_failure_reason

    @transfer_schedule_failure_reason.setter
    def transfer_schedule_failure_reason(self, transfer_schedule_failure_reason):
        """Sets the transfer_schedule_failure_reason of this TransferScheduleFailures.

        The reason listed for the failure of the transfer schedule.  # noqa: E501

        :param transfer_schedule_failure_reason: The transfer_schedule_failure_reason of this TransferScheduleFailures.  # noqa: E501
        :type: str
        """
        if self._configuration.client_side_validation and transfer_schedule_failure_reason is None:
            raise ValueError("Invalid value for `transfer_schedule_failure_reason`, must not be `None`")  # noqa: E501

        self._transfer_schedule_failure_reason = transfer_schedule_failure_reason

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
        if issubclass(TransferScheduleFailures, dict):
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
        if not isinstance(other, TransferScheduleFailures):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, TransferScheduleFailures):
            return True

        return self.to_dict() != other.to_dict()
