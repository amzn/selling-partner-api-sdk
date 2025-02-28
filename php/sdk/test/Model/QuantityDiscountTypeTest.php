<?php
/**
 * QuantityDiscountTypeTest
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
use SpApi\Model\pricing\v0\QuantityDiscountType;

/**
 * QuantityDiscountTypeTest Class Doc Comment
 *
 * @category    Class
 * @description Indicates the type of quantity discount this price applies to.
 * @package     SpApi
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
