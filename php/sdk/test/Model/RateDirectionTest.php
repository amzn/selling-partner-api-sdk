<?php
/**
 * RateDirectionTest
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
use SpApi\Model\sellerWallet\v2024_03_01\RateDirection;

/**
 * RateDirectionTest Class Doc Comment
 *
 * @category    Class
 * @description Whether the customer is buying or selling the source currency.
 * @package     SpApi
 */
class RateDirectionTest extends TestCase
{

    private RateDirection $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new RateDirection();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "RateDirection"
     */
    public function testRateDirection()
    {
        $this->assertInstanceOf(RateDirection::class, $this->model);
    }
}
