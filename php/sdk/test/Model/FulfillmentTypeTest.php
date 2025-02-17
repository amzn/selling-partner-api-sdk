<?php
/**
 * FulfillmentTypeTest
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
use SpApi\Model\pricing\v2022_05_01\FulfillmentType;

/**
 * FulfillmentTypeTest Class Doc Comment
 *
 * @category    Class
 * @description Indicates whether the item is fulfilled by Amazon or by the seller (merchant).
 * @package     SpApi
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
