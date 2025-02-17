<?php
/**
 * ShippingSpeedCategoryTest
 *
 * PHP version 8.3
 *
 * @category Class
 * @package  SpApi
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

namespace SpApi\Test\Model;

use PHPUnit\Framework\TestCase;
use SpApi\Model\fulfillment\outbound\v2020_07_01\ShippingSpeedCategory;

/**
 * ShippingSpeedCategoryTest Class Doc Comment
 *
 * @category    Class
 * @description The shipping method used for the fulfillment order. When this value is &#x60;ScheduledDelivery&#x60;, choose &#x60;Ship&#x60; for the &#x60;fulfillmentAction&#x60;. &#x60;Hold&#x60; is not a valid &#x60;fulfillmentAction&#x60; value when the &#x60;shippingSpeedCategory&#x60; value is &#x60;ScheduledDelivery&#x60;. Note: Shipping method service level agreements vary by marketplace. Sellers should refer to the [Seller Central](https://developer-docs.amazon.com/sp-api/docs/seller-central-urls) website in their marketplace for shipping method service level agreements and fulfillment fees.
 * @package     SpApi
 */
class ShippingSpeedCategoryTest extends TestCase
{

    private ShippingSpeedCategory $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ShippingSpeedCategory();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ShippingSpeedCategory"
     */
    public function testShippingSpeedCategory()
    {
        $this->assertInstanceOf(ShippingSpeedCategory::class, $this->model);
    }
}
