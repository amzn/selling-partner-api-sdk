<?php
/**
 * RateItemTypeTest
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
use OpenAPI\Client\Model\shipping\RateItemType;

/**
 * RateItemTypeTest Class Doc Comment
 *
 * @category    Class
 * @description Type of the rateItem.
 * @package     OpenAPI\Client
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
