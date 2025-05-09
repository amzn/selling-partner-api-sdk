# coding: utf-8

"""
    Selling Partner API for Services

    With the Services API, you can build applications that help service providers get and modify their service orders and manage their resources.

    The version of the OpenAPI document: v1
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


import pprint
import re  # noqa: F401

import six

from spapi.configuration import Configuration


class RangeSlotCapacity(object):
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
        'resource_id': 'str',
        'capacities': 'List[RangeCapacity]',
        'next_page_token': 'str',
    }

    attribute_map = {
        'resource_id': 'resourceId',
        'capacities': 'capacities',
        'next_page_token': 'nextPageToken',
    }

    def __init__(self, resource_id=None, capacities=None, next_page_token=None, _configuration=None):  # noqa: E501
        """RangeSlotCapacity - a model defined in Swagger"""  # noqa: E501
        if _configuration is None:
            _configuration = Configuration()
        self._configuration = _configuration

        self._resource_id = None
        self._capacities = None
        self._next_page_token = None
        self.discriminator = None

        if resource_id is not None:
            self.resource_id = resource_id
        if capacities is not None:
            self.capacities = capacities
        if next_page_token is not None:
            self.next_page_token = next_page_token

    @property
    def resource_id(self):
        """Gets the resource_id of this RangeSlotCapacity.  # noqa: E501

        Resource Identifier.  # noqa: E501

        :return: The resource_id of this RangeSlotCapacity.  # noqa: E501
        :rtype: str
        """
        return self._resource_id

    @resource_id.setter
    def resource_id(self, resource_id):
        """Sets the resource_id of this RangeSlotCapacity.

        Resource Identifier.  # noqa: E501

        :param resource_id: The resource_id of this RangeSlotCapacity.  # noqa: E501
        :type: str
        """

        self._resource_id = resource_id

    @property
    def capacities(self):
        """Gets the capacities of this RangeSlotCapacity.  # noqa: E501

        Array of range capacities where each entry is for a specific capacity type.  # noqa: E501

        :return: The capacities of this RangeSlotCapacity.  # noqa: E501
        :rtype: List[RangeCapacity]
        """
        return self._capacities

    @capacities.setter
    def capacities(self, capacities):
        """Sets the capacities of this RangeSlotCapacity.

        Array of range capacities where each entry is for a specific capacity type.  # noqa: E501

        :param capacities: The capacities of this RangeSlotCapacity.  # noqa: E501
        :type: List[RangeCapacity]
        """

        self._capacities = capacities

    @property
    def next_page_token(self):
        """Gets the next_page_token of this RangeSlotCapacity.  # noqa: E501

        Next page token, if there are more pages.  # noqa: E501

        :return: The next_page_token of this RangeSlotCapacity.  # noqa: E501
        :rtype: str
        """
        return self._next_page_token

    @next_page_token.setter
    def next_page_token(self, next_page_token):
        """Sets the next_page_token of this RangeSlotCapacity.

        Next page token, if there are more pages.  # noqa: E501

        :param next_page_token: The next_page_token of this RangeSlotCapacity.  # noqa: E501
        :type: str
        """

        self._next_page_token = next_page_token

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
        if issubclass(RangeSlotCapacity, dict):
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
        if not isinstance(other, RangeSlotCapacity):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, RangeSlotCapacity):
            return True

        return self.to_dict() != other.to_dict()
