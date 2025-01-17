<?php
/**
 * FulfillmentTypeTest
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
use OpenAPI\Client\Model\pricing\v2022-05-01\FulfillmentType;

/**
 * FulfillmentTypeTest Class Doc Comment
 *
 * @category    Class
 * @description Indicates whether the item is fulfilled by Amazon or by the seller (merchant).
 * @package     OpenAPI\Client
 */
class FulfillmentTypeTest extends TestCase
{

    private FulfillmentType $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new FulfillmentType();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "FulfillmentType"
     */
    public function testFulfillmentType()
    {
        $this->assertInstanceOf(FulfillmentType::class, $this->model);
    }
}
