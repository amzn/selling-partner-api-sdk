<?php
/**
 * RateItemTypeTest
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
use SpApi\Model\shipping\v2\RateItemType;

/**
 * RateItemTypeTest Class Doc Comment
 *
 * @category    Class
 * @description Type of the rateItem.
 * @package     SpApi
 */
class RateItemTypeTest extends TestCase
{

    private RateItemType $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new RateItemType();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "RateItemType"
     */
    public function testRateItemType()
    {
        $this->assertInstanceOf(RateItemType::class, $this->model);
    }
}
