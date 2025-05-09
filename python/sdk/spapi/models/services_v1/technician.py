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


class Technician(object):
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
        'technician_id': 'str',
        'name': 'str',
    }

    attribute_map = {
        'technician_id': 'technicianId',
        'name': 'name',
    }

    def __init__(self, technician_id=None, name=None, _configuration=None):  # noqa: E501
        """Technician - a model defined in Swagger"""  # noqa: E501
        if _configuration is None:
            _configuration = Configuration()
        self._configuration = _configuration

        self._technician_id = None
        self._name = None
        self.discriminator = None

        if technician_id is not None:
            self.technician_id = technician_id
        if name is not None:
            self.name = name

    @property
    def technician_id(self):
        """Gets the technician_id of this Technician.  # noqa: E501

        The technician identifier.  # noqa: E501

        :return: The technician_id of this Technician.  # noqa: E501
        :rtype: str
        """
        return self._technician_id

    @technician_id.setter
    def technician_id(self, technician_id):
        """Sets the technician_id of this Technician.

        The technician identifier.  # noqa: E501

        :param technician_id: The technician_id of this Technician.  # noqa: E501
        :type: str
        """
        if (self._configuration.client_side_validation and
                technician_id is not None and len(technician_id) > 50):
            raise ValueError("Invalid value for `technician_id`, length must be less than or equal to `50`")  # noqa: E501
        if (self._configuration.client_side_validation and
                technician_id is not None and len(technician_id) < 1):
            raise ValueError("Invalid value for `technician_id`, length must be greater than or equal to `1`")  # noqa: E501

        self._technician_id = technician_id

    @property
    def name(self):
        """Gets the name of this Technician.  # noqa: E501

        The name of the technician.  # noqa: E501

        :return: The name of this Technician.  # noqa: E501
        :rtype: str
        """
        return self._name

    @name.setter
    def name(self, name):
        """Sets the name of this Technician.

        The name of the technician.  # noqa: E501

        :param name: The name of this Technician.  # noqa: E501
        :type: str
        """

        self._name = name

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
        if issubclass(Technician, dict):
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
        if not isinstance(other, Technician):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, Technician):
            return True

        return self.to_dict() != other.to_dict()
