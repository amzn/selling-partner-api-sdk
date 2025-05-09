# coding: utf-8

"""
    Selling Partner API for Catalog Items

    Use the Selling Partner API for Catalog Items to retrieve information about items in the Amazon catalog.  For more information, refer to the [Catalog Items API Use Case Guide](https://developer-docs.amazon.com/sp-api/docs/:catalog-items-api-v2022-04-01-use-case-guide).

    The version of the OpenAPI document: 2022-04-01
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


import pprint
import re  # noqa: F401

import six

from spapi.configuration import Configuration


class ItemBrowseClassification(object):
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
        'display_name': 'str',
        'classification_id': 'str',
        'parent': 'ItemBrowseClassification',
    }

    attribute_map = {
        'display_name': 'displayName',
        'classification_id': 'classificationId',
        'parent': 'parent',
    }

    def __init__(self, display_name=None, classification_id=None, parent=None, _configuration=None):  # noqa: E501
        """ItemBrowseClassification - a model defined in Swagger"""  # noqa: E501
        if _configuration is None:
            _configuration = Configuration()
        self._configuration = _configuration

        self._display_name = None
        self._classification_id = None
        self._parent = None
        self.discriminator = None

        self.display_name = display_name
        self.classification_id = classification_id
        if parent is not None:
            self.parent = parent

    @property
    def display_name(self):
        """Gets the display_name of this ItemBrowseClassification.  # noqa: E501

        Display name for the classification.  # noqa: E501

        :return: The display_name of this ItemBrowseClassification.  # noqa: E501
        :rtype: str
        """
        return self._display_name

    @display_name.setter
    def display_name(self, display_name):
        """Sets the display_name of this ItemBrowseClassification.

        Display name for the classification.  # noqa: E501

        :param display_name: The display_name of this ItemBrowseClassification.  # noqa: E501
        :type: str
        """
        if self._configuration.client_side_validation and display_name is None:
            raise ValueError("Invalid value for `display_name`, must not be `None`")  # noqa: E501

        self._display_name = display_name

    @property
    def classification_id(self):
        """Gets the classification_id of this ItemBrowseClassification.  # noqa: E501

        Identifier of the classification.  # noqa: E501

        :return: The classification_id of this ItemBrowseClassification.  # noqa: E501
        :rtype: str
        """
        return self._classification_id

    @classification_id.setter
    def classification_id(self, classification_id):
        """Sets the classification_id of this ItemBrowseClassification.

        Identifier of the classification.  # noqa: E501

        :param classification_id: The classification_id of this ItemBrowseClassification.  # noqa: E501
        :type: str
        """
        if self._configuration.client_side_validation and classification_id is None:
            raise ValueError("Invalid value for `classification_id`, must not be `None`")  # noqa: E501

        self._classification_id = classification_id

    @property
    def parent(self):
        """Gets the parent of this ItemBrowseClassification.  # noqa: E501


        :return: The parent of this ItemBrowseClassification.  # noqa: E501
        :rtype: ItemBrowseClassification
        """
        return self._parent

    @parent.setter
    def parent(self, parent):
        """Sets the parent of this ItemBrowseClassification.


        :param parent: The parent of this ItemBrowseClassification.  # noqa: E501
        :type: ItemBrowseClassification
        """

        self._parent = parent

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
        if issubclass(ItemBrowseClassification, dict):
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
        if not isinstance(other, ItemBrowseClassification):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, ItemBrowseClassification):
            return True

        return self.to_dict() != other.to_dict()
