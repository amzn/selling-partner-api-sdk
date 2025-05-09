# coding: utf-8

"""
    The Selling Partner API for FBA inbound operations.

    The Selling Partner API for Fulfillment By Amazon (FBA) Inbound. The FBA Inbound API enables building inbound workflows to create, manage, and send shipments into Amazon's fulfillment network. The API has interoperability with the Send-to-Amazon user interface.

    The version of the OpenAPI document: 2024-03-20
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


import pprint
import re  # noqa: F401

import six

from spapi.configuration import Configuration


class CreateInboundPlanRequest(object):
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
        'destination_marketplaces': 'List[str]',
        'items': 'List[ItemInput]',
        'name': 'str',
        'source_address': 'AddressInput',
    }

    attribute_map = {
        'destination_marketplaces': 'destinationMarketplaces',
        'items': 'items',
        'name': 'name',
        'source_address': 'sourceAddress',
    }

    def __init__(self, destination_marketplaces=None, items=None, name=None, source_address=None, _configuration=None):  # noqa: E501
        """CreateInboundPlanRequest - a model defined in Swagger"""  # noqa: E501
        if _configuration is None:
            _configuration = Configuration()
        self._configuration = _configuration

        self._destination_marketplaces = None
        self._items = None
        self._name = None
        self._source_address = None
        self.discriminator = None

        self.destination_marketplaces = destination_marketplaces
        self.items = items
        if name is not None:
            self.name = name
        self.source_address = source_address

    @property
    def destination_marketplaces(self):
        """Gets the destination_marketplaces of this CreateInboundPlanRequest.  # noqa: E501

        Marketplaces where the items need to be shipped to. Currently only one marketplace can be selected in this request.  # noqa: E501

        :return: The destination_marketplaces of this CreateInboundPlanRequest.  # noqa: E501
        :rtype: List[str]
        """
        return self._destination_marketplaces

    @destination_marketplaces.setter
    def destination_marketplaces(self, destination_marketplaces):
        """Sets the destination_marketplaces of this CreateInboundPlanRequest.

        Marketplaces where the items need to be shipped to. Currently only one marketplace can be selected in this request.  # noqa: E501

        :param destination_marketplaces: The destination_marketplaces of this CreateInboundPlanRequest.  # noqa: E501
        :type: List[str]
        """
        if self._configuration.client_side_validation and destination_marketplaces is None:
            raise ValueError("Invalid value for `destination_marketplaces`, must not be `None`")  # noqa: E501
        if (self._configuration.client_side_validation and
                destination_marketplaces is not None and len(destination_marketplaces) > 1):
            raise ValueError("Invalid value for `destination_marketplaces`, number of items must be less than or equal to `1`")  # noqa: E501
        if (self._configuration.client_side_validation and
                destination_marketplaces is not None and len(destination_marketplaces) < 1):
            raise ValueError("Invalid value for `destination_marketplaces`, number of items must be greater than or equal to `1`")  # noqa: E501

        self._destination_marketplaces = destination_marketplaces

    @property
    def items(self):
        """Gets the items of this CreateInboundPlanRequest.  # noqa: E501

        Items included in this plan.  # noqa: E501

        :return: The items of this CreateInboundPlanRequest.  # noqa: E501
        :rtype: List[ItemInput]
        """
        return self._items

    @items.setter
    def items(self, items):
        """Sets the items of this CreateInboundPlanRequest.

        Items included in this plan.  # noqa: E501

        :param items: The items of this CreateInboundPlanRequest.  # noqa: E501
        :type: List[ItemInput]
        """
        if self._configuration.client_side_validation and items is None:
            raise ValueError("Invalid value for `items`, must not be `None`")  # noqa: E501
        if (self._configuration.client_side_validation and
                items is not None and len(items) > 2000):
            raise ValueError("Invalid value for `items`, number of items must be less than or equal to `2000`")  # noqa: E501
        if (self._configuration.client_side_validation and
                items is not None and len(items) < 1):
            raise ValueError("Invalid value for `items`, number of items must be greater than or equal to `1`")  # noqa: E501

        self._items = items

    @property
    def name(self):
        """Gets the name of this CreateInboundPlanRequest.  # noqa: E501

        Name for the Inbound Plan. If one isn't provided, a default name will be provided.  # noqa: E501

        :return: The name of this CreateInboundPlanRequest.  # noqa: E501
        :rtype: str
        """
        return self._name

    @name.setter
    def name(self, name):
        """Sets the name of this CreateInboundPlanRequest.

        Name for the Inbound Plan. If one isn't provided, a default name will be provided.  # noqa: E501

        :param name: The name of this CreateInboundPlanRequest.  # noqa: E501
        :type: str
        """
        if (self._configuration.client_side_validation and
                name is not None and len(name) > 40):
            raise ValueError("Invalid value for `name`, length must be less than or equal to `40`")  # noqa: E501
        if (self._configuration.client_side_validation and
                name is not None and len(name) < 1):
            raise ValueError("Invalid value for `name`, length must be greater than or equal to `1`")  # noqa: E501

        self._name = name

    @property
    def source_address(self):
        """Gets the source_address of this CreateInboundPlanRequest.  # noqa: E501


        :return: The source_address of this CreateInboundPlanRequest.  # noqa: E501
        :rtype: AddressInput
        """
        return self._source_address

    @source_address.setter
    def source_address(self, source_address):
        """Sets the source_address of this CreateInboundPlanRequest.


        :param source_address: The source_address of this CreateInboundPlanRequest.  # noqa: E501
        :type: AddressInput
        """
        if self._configuration.client_side_validation and source_address is None:
            raise ValueError("Invalid value for `source_address`, must not be `None`")  # noqa: E501

        self._source_address = source_address

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
        if issubclass(CreateInboundPlanRequest, dict):
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
        if not isinstance(other, CreateInboundPlanRequest):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, CreateInboundPlanRequest):
            return True

        return self.to_dict() != other.to_dict()
