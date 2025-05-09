# coding: utf-8

"""
    Selling Partner API for Fulfillment Inbound

    The Selling Partner API for Fulfillment Inbound lets you create applications that create and update inbound shipments of inventory to Amazon's fulfillment network.

    The version of the OpenAPI document: v0
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


import pprint
import re  # noqa: F401

import six

from spapi.configuration import Configuration


class AmazonPrepFeesDetails(object):
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
        'prep_instruction': 'PrepInstruction',
        'fee_per_unit': 'Amount',
    }

    attribute_map = {
        'prep_instruction': 'PrepInstruction',
        'fee_per_unit': 'FeePerUnit',
    }

    def __init__(self, prep_instruction=None, fee_per_unit=None, _configuration=None):  # noqa: E501
        """AmazonPrepFeesDetails - a model defined in Swagger"""  # noqa: E501
        if _configuration is None:
            _configuration = Configuration()
        self._configuration = _configuration

        self._prep_instruction = None
        self._fee_per_unit = None
        self.discriminator = None

        if prep_instruction is not None:
            self.prep_instruction = prep_instruction
        if fee_per_unit is not None:
            self.fee_per_unit = fee_per_unit

    @property
    def prep_instruction(self):
        """Gets the prep_instruction of this AmazonPrepFeesDetails.  # noqa: E501


        :return: The prep_instruction of this AmazonPrepFeesDetails.  # noqa: E501
        :rtype: PrepInstruction
        """
        return self._prep_instruction

    @prep_instruction.setter
    def prep_instruction(self, prep_instruction):
        """Sets the prep_instruction of this AmazonPrepFeesDetails.


        :param prep_instruction: The prep_instruction of this AmazonPrepFeesDetails.  # noqa: E501
        :type: PrepInstruction
        """

        self._prep_instruction = prep_instruction

    @property
    def fee_per_unit(self):
        """Gets the fee_per_unit of this AmazonPrepFeesDetails.  # noqa: E501


        :return: The fee_per_unit of this AmazonPrepFeesDetails.  # noqa: E501
        :rtype: Amount
        """
        return self._fee_per_unit

    @fee_per_unit.setter
    def fee_per_unit(self, fee_per_unit):
        """Sets the fee_per_unit of this AmazonPrepFeesDetails.


        :param fee_per_unit: The fee_per_unit of this AmazonPrepFeesDetails.  # noqa: E501
        :type: Amount
        """

        self._fee_per_unit = fee_per_unit

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
        if issubclass(AmazonPrepFeesDetails, dict):
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
        if not isinstance(other, AmazonPrepFeesDetails):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, AmazonPrepFeesDetails):
            return True

        return self.to_dict() != other.to_dict()
