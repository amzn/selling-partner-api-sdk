# coding: utf-8

"""
    Selling Partner APIs for Fulfillment Outbound

    The Selling Partner API for Fulfillment Outbound lets you create applications that help a seller fulfill Multi-Channel Fulfillment orders using their inventory in Amazon's fulfillment network. You can get information on both potential and existing fulfillment orders.

    The version of the OpenAPI document: 2020-07-01
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


import pprint
import re  # noqa: F401

import six

from spapi.configuration import Configuration


class DeliveryInformation(object):
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
        'delivery_document_list': 'List[DeliveryDocument]',
        'drop_off_location': 'DropOffLocation',
    }

    attribute_map = {
        'delivery_document_list': 'deliveryDocumentList',
        'drop_off_location': 'dropOffLocation',
    }

    def __init__(self, delivery_document_list=None, drop_off_location=None, _configuration=None):  # noqa: E501
        """DeliveryInformation - a model defined in Swagger"""  # noqa: E501
        if _configuration is None:
            _configuration = Configuration()
        self._configuration = _configuration

        self._delivery_document_list = None
        self._drop_off_location = None
        self.discriminator = None

        if delivery_document_list is not None:
            self.delivery_document_list = delivery_document_list
        if drop_off_location is not None:
            self.drop_off_location = drop_off_location

    @property
    def delivery_document_list(self):
        """Gets the delivery_document_list of this DeliveryInformation.  # noqa: E501

        A list of delivery documents for a package.  # noqa: E501

        :return: The delivery_document_list of this DeliveryInformation.  # noqa: E501
        :rtype: List[DeliveryDocument]
        """
        return self._delivery_document_list

    @delivery_document_list.setter
    def delivery_document_list(self, delivery_document_list):
        """Sets the delivery_document_list of this DeliveryInformation.

        A list of delivery documents for a package.  # noqa: E501

        :param delivery_document_list: The delivery_document_list of this DeliveryInformation.  # noqa: E501
        :type: List[DeliveryDocument]
        """

        self._delivery_document_list = delivery_document_list

    @property
    def drop_off_location(self):
        """Gets the drop_off_location of this DeliveryInformation.  # noqa: E501


        :return: The drop_off_location of this DeliveryInformation.  # noqa: E501
        :rtype: DropOffLocation
        """
        return self._drop_off_location

    @drop_off_location.setter
    def drop_off_location(self, drop_off_location):
        """Sets the drop_off_location of this DeliveryInformation.


        :param drop_off_location: The drop_off_location of this DeliveryInformation.  # noqa: E501
        :type: DropOffLocation
        """

        self._drop_off_location = drop_off_location

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
        if issubclass(DeliveryInformation, dict):
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
        if not isinstance(other, DeliveryInformation):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, DeliveryInformation):
            return True

        return self.to_dict() != other.to_dict()
