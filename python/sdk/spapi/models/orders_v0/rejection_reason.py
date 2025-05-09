# coding: utf-8

"""
    Selling Partner API for Orders

    Use the Orders Selling Partner API to programmatically retrieve order information. With this API, you can develop fast, flexible, and custom applications to manage order synchronization, perform order research, and create demand-based decision support tools.   _Note:_ For the JP, AU, and SG marketplaces, the Orders API supports orders from 2016 onward. For all other marketplaces, the Orders API supports orders for the last two years (orders older than this don't show up in the response).

    The version of the OpenAPI document: v0
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


import pprint
import re  # noqa: F401

import six

from spapi.configuration import Configuration


class RejectionReason(object):
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
        'rejection_reason_id': 'str',
        'rejection_reason_description': 'str',
    }

    attribute_map = {
        'rejection_reason_id': 'RejectionReasonId',
        'rejection_reason_description': 'RejectionReasonDescription',
    }

    def __init__(self, rejection_reason_id=None, rejection_reason_description=None, _configuration=None):  # noqa: E501
        """RejectionReason - a model defined in Swagger"""  # noqa: E501
        if _configuration is None:
            _configuration = Configuration()
        self._configuration = _configuration

        self._rejection_reason_id = None
        self._rejection_reason_description = None
        self.discriminator = None

        self.rejection_reason_id = rejection_reason_id
        self.rejection_reason_description = rejection_reason_description

    @property
    def rejection_reason_id(self):
        """Gets the rejection_reason_id of this RejectionReason.  # noqa: E501

        The unique identifier for the rejection reason.  # noqa: E501

        :return: The rejection_reason_id of this RejectionReason.  # noqa: E501
        :rtype: str
        """
        return self._rejection_reason_id

    @rejection_reason_id.setter
    def rejection_reason_id(self, rejection_reason_id):
        """Sets the rejection_reason_id of this RejectionReason.

        The unique identifier for the rejection reason.  # noqa: E501

        :param rejection_reason_id: The rejection_reason_id of this RejectionReason.  # noqa: E501
        :type: str
        """
        if self._configuration.client_side_validation and rejection_reason_id is None:
            raise ValueError("Invalid value for `rejection_reason_id`, must not be `None`")  # noqa: E501

        self._rejection_reason_id = rejection_reason_id

    @property
    def rejection_reason_description(self):
        """Gets the rejection_reason_description of this RejectionReason.  # noqa: E501

        The description of this rejection reason.  # noqa: E501

        :return: The rejection_reason_description of this RejectionReason.  # noqa: E501
        :rtype: str
        """
        return self._rejection_reason_description

    @rejection_reason_description.setter
    def rejection_reason_description(self, rejection_reason_description):
        """Sets the rejection_reason_description of this RejectionReason.

        The description of this rejection reason.  # noqa: E501

        :param rejection_reason_description: The rejection_reason_description of this RejectionReason.  # noqa: E501
        :type: str
        """
        if self._configuration.client_side_validation and rejection_reason_description is None:
            raise ValueError("Invalid value for `rejection_reason_description`, must not be `None`")  # noqa: E501

        self._rejection_reason_description = rejection_reason_description

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
        if issubclass(RejectionReason, dict):
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
        if not isinstance(other, RejectionReason):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, RejectionReason):
            return True

        return self.to_dict() != other.to_dict()
