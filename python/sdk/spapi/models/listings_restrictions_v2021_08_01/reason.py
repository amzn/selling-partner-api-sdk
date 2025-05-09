# coding: utf-8

"""
    Selling Partner API for Listings Restrictions

    The Selling Partner API for Listings Restrictions provides programmatic access to restrictions on Amazon catalog listings.  For more information, see the [Listings Restrictions API Use Case Guide](doc:listings-restrictions-api-v2021-08-01-use-case-guide).

    The version of the OpenAPI document: 2021-08-01
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


import pprint
import re  # noqa: F401

import six

from spapi.configuration import Configuration


class Reason(object):
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
        'message': 'str',
        'reason_code': 'str',
        'links': 'List[Link]',
    }

    attribute_map = {
        'message': 'message',
        'reason_code': 'reasonCode',
        'links': 'links',
    }

    def __init__(self, message=None, reason_code=None, links=None, _configuration=None):  # noqa: E501
        """Reason - a model defined in Swagger"""  # noqa: E501
        if _configuration is None:
            _configuration = Configuration()
        self._configuration = _configuration

        self._message = None
        self._reason_code = None
        self._links = None
        self.discriminator = None

        self.message = message
        if reason_code is not None:
            self.reason_code = reason_code
        if links is not None:
            self.links = links

    @property
    def message(self):
        """Gets the message of this Reason.  # noqa: E501

        A message describing the reason for the restriction.  # noqa: E501

        :return: The message of this Reason.  # noqa: E501
        :rtype: str
        """
        return self._message

    @message.setter
    def message(self, message):
        """Sets the message of this Reason.

        A message describing the reason for the restriction.  # noqa: E501

        :param message: The message of this Reason.  # noqa: E501
        :type: str
        """
        if self._configuration.client_side_validation and message is None:
            raise ValueError("Invalid value for `message`, must not be `None`")  # noqa: E501

        self._message = message

    @property
    def reason_code(self):
        """Gets the reason_code of this Reason.  # noqa: E501

        A code indicating why the listing is restricted.  # noqa: E501

        :return: The reason_code of this Reason.  # noqa: E501
        :rtype: str
        """
        return self._reason_code

    @reason_code.setter
    def reason_code(self, reason_code):
        """Sets the reason_code of this Reason.

        A code indicating why the listing is restricted.  # noqa: E501

        :param reason_code: The reason_code of this Reason.  # noqa: E501
        :type: str
        """
        allowed_values = ["APPROVAL_REQUIRED", "ASIN_NOT_FOUND", "NOT_ELIGIBLE"]  # noqa: E501
        if (self._configuration.client_side_validation and
                reason_code not in allowed_values):
            raise ValueError(
                "Invalid value for `reason_code` ({0}), must be one of {1}"  # noqa: E501
                .format(reason_code, allowed_values)
            )

        self._reason_code = reason_code

    @property
    def links(self):
        """Gets the links of this Reason.  # noqa: E501

        A list of path forward links that may allow Selling Partners to remove the restriction.  # noqa: E501

        :return: The links of this Reason.  # noqa: E501
        :rtype: List[Link]
        """
        return self._links

    @links.setter
    def links(self, links):
        """Sets the links of this Reason.

        A list of path forward links that may allow Selling Partners to remove the restriction.  # noqa: E501

        :param links: The links of this Reason.  # noqa: E501
        :type: List[Link]
        """

        self._links = links

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
        if issubclass(Reason, dict):
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
        if not isinstance(other, Reason):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, Reason):
            return True

        return self.to_dict() != other.to_dict()
