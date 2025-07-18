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


class RelatedIdentifier(object):
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
        'related_identifier_name': 'str',
        'related_identifier_value': 'str',
    }

    attribute_map = {
        'related_identifier_name': 'relatedIdentifierName',
        'related_identifier_value': 'relatedIdentifierValue',
    }

    def __init__(self, related_identifier_name=None, related_identifier_value=None, _configuration=None):  # noqa: E501
        """RelatedIdentifier - a model defined in Swagger"""  # noqa: E501
        if _configuration is None:
            _configuration = Configuration()
        self._configuration = _configuration

        self._related_identifier_name = None
        self._related_identifier_value = None
        self.discriminator = None

        if related_identifier_name is not None:
            self.related_identifier_name = related_identifier_name
        if related_identifier_value is not None:
            self.related_identifier_value = related_identifier_value

    @property
    def related_identifier_name(self):
        """Gets the related_identifier_name of this RelatedIdentifier.  # noqa: E501

        Enumerated set of related business identifier names.  # noqa: E501

        :return: The related_identifier_name of this RelatedIdentifier.  # noqa: E501
        :rtype: str
        """
        return self._related_identifier_name

    @related_identifier_name.setter
    def related_identifier_name(self, related_identifier_name):
        """Sets the related_identifier_name of this RelatedIdentifier.

        Enumerated set of related business identifier names.  # noqa: E501

        :param related_identifier_name: The related_identifier_name of this RelatedIdentifier.  # noqa: E501
        :type: str
        """
        allowed_values = ["ORDER_ID", "SHIPMENT_ID", "FINANCIAL_EVENT_GROUP_ID", "REFUND_ID", "INVOICE_ID", "DISBURSEMENT_ID", "TRANSFER_ID", "DEFERRED_TRANSACTION_ID", "RELEASE_TRANSACTION_ID", "SETTLEMENT_ID"]  # noqa: E501
        if (self._configuration.client_side_validation and
                related_identifier_name not in allowed_values):
            raise ValueError(
                "Invalid value for `related_identifier_name` ({0}), must be one of {1}"  # noqa: E501
                .format(related_identifier_name, allowed_values)
            )

        self._related_identifier_name = related_identifier_name

    @property
    def related_identifier_value(self):
        """Gets the related_identifier_value of this RelatedIdentifier.  # noqa: E501

        Corresponding value of RelatedIdentifierName  # noqa: E501

        :return: The related_identifier_value of this RelatedIdentifier.  # noqa: E501
        :rtype: str
        """
        return self._related_identifier_value

    @related_identifier_value.setter
    def related_identifier_value(self, related_identifier_value):
        """Sets the related_identifier_value of this RelatedIdentifier.

        Corresponding value of RelatedIdentifierName  # noqa: E501

        :param related_identifier_value: The related_identifier_value of this RelatedIdentifier.  # noqa: E501
        :type: str
        """

        self._related_identifier_value = related_identifier_value

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
        if issubclass(RelatedIdentifier, dict):
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
        if not isinstance(other, RelatedIdentifier):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, RelatedIdentifier):
            return True

        return self.to_dict() != other.to_dict()
