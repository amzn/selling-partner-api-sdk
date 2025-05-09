# coding: utf-8

"""
    Selling Partner API for Retail Procurement Shipments

    The Selling Partner API for Retail Procurement Shipments provides programmatic access to retail shipping data for vendors.

    The version of the OpenAPI document: v1
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


import pprint
import re  # noqa: F401

import six

from spapi.configuration import Configuration


class TransportShipmentMeasurements(object):
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
        'total_carton_count': 'int',
        'total_pallet_stackable': 'int',
        'total_pallet_non_stackable': 'int',
        'shipment_weight': 'Weight',
        'shipment_volume': 'Volume',
    }

    attribute_map = {
        'total_carton_count': 'totalCartonCount',
        'total_pallet_stackable': 'totalPalletStackable',
        'total_pallet_non_stackable': 'totalPalletNonStackable',
        'shipment_weight': 'shipmentWeight',
        'shipment_volume': 'shipmentVolume',
    }

    def __init__(self, total_carton_count=None, total_pallet_stackable=None, total_pallet_non_stackable=None, shipment_weight=None, shipment_volume=None, _configuration=None):  # noqa: E501
        """TransportShipmentMeasurements - a model defined in Swagger"""  # noqa: E501
        if _configuration is None:
            _configuration = Configuration()
        self._configuration = _configuration

        self._total_carton_count = None
        self._total_pallet_stackable = None
        self._total_pallet_non_stackable = None
        self._shipment_weight = None
        self._shipment_volume = None
        self.discriminator = None

        if total_carton_count is not None:
            self.total_carton_count = total_carton_count
        if total_pallet_stackable is not None:
            self.total_pallet_stackable = total_pallet_stackable
        if total_pallet_non_stackable is not None:
            self.total_pallet_non_stackable = total_pallet_non_stackable
        if shipment_weight is not None:
            self.shipment_weight = shipment_weight
        if shipment_volume is not None:
            self.shipment_volume = shipment_volume

    @property
    def total_carton_count(self):
        """Gets the total_carton_count of this TransportShipmentMeasurements.  # noqa: E501

        Total number of cartons present in the shipment. Provide the cartonCount only for non-palletized shipments.  # noqa: E501

        :return: The total_carton_count of this TransportShipmentMeasurements.  # noqa: E501
        :rtype: int
        """
        return self._total_carton_count

    @total_carton_count.setter
    def total_carton_count(self, total_carton_count):
        """Sets the total_carton_count of this TransportShipmentMeasurements.

        Total number of cartons present in the shipment. Provide the cartonCount only for non-palletized shipments.  # noqa: E501

        :param total_carton_count: The total_carton_count of this TransportShipmentMeasurements.  # noqa: E501
        :type: int
        """

        self._total_carton_count = total_carton_count

    @property
    def total_pallet_stackable(self):
        """Gets the total_pallet_stackable of this TransportShipmentMeasurements.  # noqa: E501

        Total number of Stackable Pallets present in the shipment.  # noqa: E501

        :return: The total_pallet_stackable of this TransportShipmentMeasurements.  # noqa: E501
        :rtype: int
        """
        return self._total_pallet_stackable

    @total_pallet_stackable.setter
    def total_pallet_stackable(self, total_pallet_stackable):
        """Sets the total_pallet_stackable of this TransportShipmentMeasurements.

        Total number of Stackable Pallets present in the shipment.  # noqa: E501

        :param total_pallet_stackable: The total_pallet_stackable of this TransportShipmentMeasurements.  # noqa: E501
        :type: int
        """

        self._total_pallet_stackable = total_pallet_stackable

    @property
    def total_pallet_non_stackable(self):
        """Gets the total_pallet_non_stackable of this TransportShipmentMeasurements.  # noqa: E501

        Total number of Non Stackable Pallets present in the shipment.  # noqa: E501

        :return: The total_pallet_non_stackable of this TransportShipmentMeasurements.  # noqa: E501
        :rtype: int
        """
        return self._total_pallet_non_stackable

    @total_pallet_non_stackable.setter
    def total_pallet_non_stackable(self, total_pallet_non_stackable):
        """Sets the total_pallet_non_stackable of this TransportShipmentMeasurements.

        Total number of Non Stackable Pallets present in the shipment.  # noqa: E501

        :param total_pallet_non_stackable: The total_pallet_non_stackable of this TransportShipmentMeasurements.  # noqa: E501
        :type: int
        """

        self._total_pallet_non_stackable = total_pallet_non_stackable

    @property
    def shipment_weight(self):
        """Gets the shipment_weight of this TransportShipmentMeasurements.  # noqa: E501


        :return: The shipment_weight of this TransportShipmentMeasurements.  # noqa: E501
        :rtype: Weight
        """
        return self._shipment_weight

    @shipment_weight.setter
    def shipment_weight(self, shipment_weight):
        """Sets the shipment_weight of this TransportShipmentMeasurements.


        :param shipment_weight: The shipment_weight of this TransportShipmentMeasurements.  # noqa: E501
        :type: Weight
        """

        self._shipment_weight = shipment_weight

    @property
    def shipment_volume(self):
        """Gets the shipment_volume of this TransportShipmentMeasurements.  # noqa: E501


        :return: The shipment_volume of this TransportShipmentMeasurements.  # noqa: E501
        :rtype: Volume
        """
        return self._shipment_volume

    @shipment_volume.setter
    def shipment_volume(self, shipment_volume):
        """Sets the shipment_volume of this TransportShipmentMeasurements.


        :param shipment_volume: The shipment_volume of this TransportShipmentMeasurements.  # noqa: E501
        :type: Volume
        """

        self._shipment_volume = shipment_volume

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
        if issubclass(TransportShipmentMeasurements, dict):
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
        if not isinstance(other, TransportShipmentMeasurements):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, TransportShipmentMeasurements):
            return True

        return self.to_dict() != other.to_dict()
