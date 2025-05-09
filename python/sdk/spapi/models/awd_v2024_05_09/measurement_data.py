# coding: utf-8

"""
    The Selling Partner API for Amazon Warehousing and Distribution

    The Selling Partner API for Amazon Warehousing and Distribution (AWD) provides programmatic access to information about AWD shipments and inventory.

    The version of the OpenAPI document: 2024-05-09
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


import pprint
import re  # noqa: F401

import six

from spapi.configuration import Configuration


class MeasurementData(object):
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
        'dimensions': 'PackageDimensions',
        'volume': 'PackageVolume',
        'weight': 'PackageWeight',
    }

    attribute_map = {
        'dimensions': 'dimensions',
        'volume': 'volume',
        'weight': 'weight',
    }

    def __init__(self, dimensions=None, volume=None, weight=None, _configuration=None):  # noqa: E501
        """MeasurementData - a model defined in Swagger"""  # noqa: E501
        if _configuration is None:
            _configuration = Configuration()
        self._configuration = _configuration

        self._dimensions = None
        self._volume = None
        self._weight = None
        self.discriminator = None

        if dimensions is not None:
            self.dimensions = dimensions
        if volume is not None:
            self.volume = volume
        self.weight = weight

    @property
    def dimensions(self):
        """Gets the dimensions of this MeasurementData.  # noqa: E501


        :return: The dimensions of this MeasurementData.  # noqa: E501
        :rtype: PackageDimensions
        """
        return self._dimensions

    @dimensions.setter
    def dimensions(self, dimensions):
        """Sets the dimensions of this MeasurementData.


        :param dimensions: The dimensions of this MeasurementData.  # noqa: E501
        :type: PackageDimensions
        """

        self._dimensions = dimensions

    @property
    def volume(self):
        """Gets the volume of this MeasurementData.  # noqa: E501


        :return: The volume of this MeasurementData.  # noqa: E501
        :rtype: PackageVolume
        """
        return self._volume

    @volume.setter
    def volume(self, volume):
        """Sets the volume of this MeasurementData.


        :param volume: The volume of this MeasurementData.  # noqa: E501
        :type: PackageVolume
        """

        self._volume = volume

    @property
    def weight(self):
        """Gets the weight of this MeasurementData.  # noqa: E501


        :return: The weight of this MeasurementData.  # noqa: E501
        :rtype: PackageWeight
        """
        return self._weight

    @weight.setter
    def weight(self, weight):
        """Sets the weight of this MeasurementData.


        :param weight: The weight of this MeasurementData.  # noqa: E501
        :type: PackageWeight
        """
        if self._configuration.client_side_validation and weight is None:
            raise ValueError("Invalid value for `weight`, must not be `None`")  # noqa: E501

        self._weight = weight

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
        if issubclass(MeasurementData, dict):
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
        if not isinstance(other, MeasurementData):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, MeasurementData):
            return True

        return self.to_dict() != other.to_dict()
