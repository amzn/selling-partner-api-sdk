<?php
/**
 * PrepTypeTest
 *
 * PHP version 7.4
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

namespace OpenAPI\Client\Test\Model;

use PHPUnit\Framework\TestCase;
use OpenAPI\Client\Model\fulfillmentinbound\PrepType;

/**
 * PrepTypeTest Class Doc Comment
 *
 * @category    Class
 * @description Preparation instructions for shipping an item to Amazon&#39;s fulfillment network. For more information about preparing items for shipment to Amazon&#39;s fulfillment network, refer to [Seller Central Help for your marketplace](https://developer-docs.amazon.com/sp-api/docs/seller-central-urls).
 * @package     OpenAPI\Client
 */
class PrepTypeTest extends TestCase
{

    private PrepType $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new PrepType();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "PrepType"
     */
    public function testPrepType()
    {
        $this->assertInstanceOf(PrepType::class, $this->model);
    }
}
