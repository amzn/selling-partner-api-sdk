# coding: utf-8

"""
    Selling Partner API for Pricing

    The Selling Partner API for Pricing helps you programmatically retrieve product pricing and offer pricing information for Amazon Marketplace products.  For more information, refer to the [Product Pricing v2022-05-01 Use Case Guide](https://developer-docs.amazon.com/sp-api/docs/product-pricing-api-v2022-05-01-use-case-guide).

    The version of the OpenAPI document: 2022-05-01
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


import pprint
import re  # noqa: F401

import six

from spapi.configuration import Configuration


class CompetitiveSummaryRequest(object):
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
        'asin': 'str',
        'marketplace_id': 'str',
        'included_data': 'List[CompetitiveSummaryIncludedData]',
        'lowest_priced_offers_inputs': 'List[LowestPricedOffersInput]',
        'method': 'HttpMethod',
        'uri': 'str',
    }

    attribute_map = {
        'asin': 'asin',
        'marketplace_id': 'marketplaceId',
        'included_data': 'includedData',
        'lowest_priced_offers_inputs': 'lowestPricedOffersInputs',
        'method': 'method',
        'uri': 'uri',
    }

    def __init__(self, asin=None, marketplace_id=None, included_data=None, lowest_priced_offers_inputs=None, method=None, uri=None, _configuration=None):  # noqa: E501
        """CompetitiveSummaryRequest - a model defined in Swagger"""  # noqa: E501
        if _configuration is None:
            _configuration = Configuration()
        self._configuration = _configuration

        self._asin = None
        self._marketplace_id = None
        self._included_data = None
        self._lowest_priced_offers_inputs = None
        self._method = None
        self._uri = None
        self.discriminator = None

        self.asin = asin
        self.marketplace_id = marketplace_id
        self.included_data = included_data
        if lowest_priced_offers_inputs is not None:
            self.lowest_priced_offers_inputs = lowest_priced_offers_inputs
        self.method = method
        self.uri = uri

    @property
    def asin(self):
        """Gets the asin of this CompetitiveSummaryRequest.  # noqa: E501

        The ASIN of the item.  # noqa: E501

        :return: The asin of this CompetitiveSummaryRequest.  # noqa: E501
        :rtype: str
        """
        return self._asin

    @asin.setter
    def asin(self, asin):
        """Sets the asin of this CompetitiveSummaryRequest.

        The ASIN of the item.  # noqa: E501

        :param asin: The asin of this CompetitiveSummaryRequest.  # noqa: E501
        :type: str
        """
        if self._configuration.client_side_validation and asin is None:
            raise ValueError("Invalid value for `asin`, must not be `None`")  # noqa: E501

        self._asin = asin

    @property
    def marketplace_id(self):
        """Gets the marketplace_id of this CompetitiveSummaryRequest.  # noqa: E501

        The marketplace ID is the globally unique identifier of a marketplace. To find the ID for your marketplace, refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids).  # noqa: E501

        :return: The marketplace_id of this CompetitiveSummaryRequest.  # noqa: E501
        :rtype: str
        """
        return self._marketplace_id

    @marketplace_id.setter
    def marketplace_id(self, marketplace_id):
        """Sets the marketplace_id of this CompetitiveSummaryRequest.

        The marketplace ID is the globally unique identifier of a marketplace. To find the ID for your marketplace, refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids).  # noqa: E501

        :param marketplace_id: The marketplace_id of this CompetitiveSummaryRequest.  # noqa: E501
        :type: str
        """
        if self._configuration.client_side_validation and marketplace_id is None:
            raise ValueError("Invalid value for `marketplace_id`, must not be `None`")  # noqa: E501

        self._marketplace_id = marketplace_id

    @property
    def included_data(self):
        """Gets the included_data of this CompetitiveSummaryRequest.  # noqa: E501

        The list of requested competitive pricing data for the product.  # noqa: E501

        :return: The included_data of this CompetitiveSummaryRequest.  # noqa: E501
        :rtype: List[CompetitiveSummaryIncludedData]
        """
        return self._included_data

    @included_data.setter
    def included_data(self, included_data):
        """Sets the included_data of this CompetitiveSummaryRequest.

        The list of requested competitive pricing data for the product.  # noqa: E501

        :param included_data: The included_data of this CompetitiveSummaryRequest.  # noqa: E501
        :type: List[CompetitiveSummaryIncludedData]
        """
        if self._configuration.client_side_validation and included_data is None:
            raise ValueError("Invalid value for `included_data`, must not be `None`")  # noqa: E501
        if (self._configuration.client_side_validation and
                included_data is not None and len(included_data) < 1):
            raise ValueError("Invalid value for `included_data`, number of items must be greater than or equal to `1`")  # noqa: E501

        self._included_data = included_data

    @property
    def lowest_priced_offers_inputs(self):
        """Gets the lowest_priced_offers_inputs of this CompetitiveSummaryRequest.  # noqa: E501

        The list of `lowestPricedOffersInput` parameters that are used to build `lowestPricedOffers` in the response. This attribute is only valid if `lowestPricedOffers` is requested in `includedData`  # noqa: E501

        :return: The lowest_priced_offers_inputs of this CompetitiveSummaryRequest.  # noqa: E501
        :rtype: List[LowestPricedOffersInput]
        """
        return self._lowest_priced_offers_inputs

    @lowest_priced_offers_inputs.setter
    def lowest_priced_offers_inputs(self, lowest_priced_offers_inputs):
        """Sets the lowest_priced_offers_inputs of this CompetitiveSummaryRequest.

        The list of `lowestPricedOffersInput` parameters that are used to build `lowestPricedOffers` in the response. This attribute is only valid if `lowestPricedOffers` is requested in `includedData`  # noqa: E501

        :param lowest_priced_offers_inputs: The lowest_priced_offers_inputs of this CompetitiveSummaryRequest.  # noqa: E501
        :type: List[LowestPricedOffersInput]
        """
        if (self._configuration.client_side_validation and
                lowest_priced_offers_inputs is not None and len(lowest_priced_offers_inputs) > 5):
            raise ValueError("Invalid value for `lowest_priced_offers_inputs`, number of items must be less than or equal to `5`")  # noqa: E501
        if (self._configuration.client_side_validation and
                lowest_priced_offers_inputs is not None and len(lowest_priced_offers_inputs) < 0):
            raise ValueError("Invalid value for `lowest_priced_offers_inputs`, number of items must be greater than or equal to `0`")  # noqa: E501

        self._lowest_priced_offers_inputs = lowest_priced_offers_inputs

    @property
    def method(self):
        """Gets the method of this CompetitiveSummaryRequest.  # noqa: E501


        :return: The method of this CompetitiveSummaryRequest.  # noqa: E501
        :rtype: HttpMethod
        """
        return self._method

    @method.setter
    def method(self, method):
        """Sets the method of this CompetitiveSummaryRequest.


        :param method: The method of this CompetitiveSummaryRequest.  # noqa: E501
        :type: HttpMethod
        """
        if self._configuration.client_side_validation and method is None:
            raise ValueError("Invalid value for `method`, must not be `None`")  # noqa: E501

        self._method = method

    @property
    def uri(self):
        """Gets the uri of this CompetitiveSummaryRequest.  # noqa: E501

        The URI associated with the individual APIs that are called as part of the batch request.  # noqa: E501

        :return: The uri of this CompetitiveSummaryRequest.  # noqa: E501
        :rtype: str
        """
        return self._uri

    @uri.setter
    def uri(self, uri):
        """Sets the uri of this CompetitiveSummaryRequest.

        The URI associated with the individual APIs that are called as part of the batch request.  # noqa: E501

        :param uri: The uri of this CompetitiveSummaryRequest.  # noqa: E501
        :type: str
        """
        if self._configuration.client_side_validation and uri is None:
            raise ValueError("Invalid value for `uri`, must not be `None`")  # noqa: E501
        if (self._configuration.client_side_validation and
                uri is not None and len(uri) > 512):
            raise ValueError("Invalid value for `uri`, length must be less than or equal to `512`")  # noqa: E501
        if (self._configuration.client_side_validation and
                uri is not None and len(uri) < 6):
            raise ValueError("Invalid value for `uri`, length must be greater than or equal to `6`")  # noqa: E501

        self._uri = uri

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
        if issubclass(CompetitiveSummaryRequest, dict):
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
        if not isinstance(other, CompetitiveSummaryRequest):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, CompetitiveSummaryRequest):
            return True

        return self.to_dict() != other.to_dict()
