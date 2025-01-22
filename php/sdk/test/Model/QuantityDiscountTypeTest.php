<?php
/**
 * QuantityDiscountTypeTest
 *
 * PHP version 8.3
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

namespace OpenAPI\Client\Test\Model;

use PHPUnit\Framework\TestCase;
use OpenAPI\Client\Model\pricing\v0\QuantityDiscountType;

/**
 * QuantityDiscountTypeTest Class Doc Comment
 *
 * @category    Class
 * @description QuantityDiscountType
 * @package     OpenAPI\Client
 */
class QuantityDiscountTypeTest extends TestCase
{

    private QuantityDiscountType $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new QuantityDiscountType();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "QuantityDiscountType"
     */
    public function testQuantityDiscountType()
    {
        $this->assertInstanceOf(QuantityDiscountType::class, $this->model);
    }
}
